import chalk from 'chalk';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import contentful from 'contentful-management';

// Init dotenv.
dotenv.config();

// Init const vars.
const sourceDomain = 'https://dev-contentful-umami.pantheonsite.io';
const contentTypes = {
  article: {
    entityType: 'node',
    bundle: 'Article',
    includedFields: ['field_media_image', 'field_media_image.field_media_image'],
  },
};

// Init Contentful client/environment.
const environment = await new contentful.createClient({
  accessToken: process.env.CONTENTFUL_CMA_TOKEN,
})
  .getSpace(process.env.CONTENTFUL_SPACE_ID)
  .then((space) => space.getEnvironment(process.env.CONTENTFUL_ENVIRONMENT_ID))
  .then((env) => {
    return env;
  });

// Helper function for retrieving Drupal entities via JSON API.
// TODO: Add batching logic.
const fetchDrupalData = async (type) => {
  let response = await fetch(
    `${sourceDomain}/jsonapi/${contentTypes[type].entityType}/${contentTypes[type].bundle}?include=${contentTypes[type].includedFields.join(
      ','
    )}&page[limit]=10`
  );
  response = await response.json();
  return response;
};

// Helper function for determining if an entry already exists within Contentful.
// Returns the entry data if found, or null if no entry found.
const getExistingEntry = async (contentType, id) => {
  const entry = await environment.getEntries({
    content_type: contentType,
    limit: 1,
    'fields.drupalUuid': id,
  });

  return entry.total > 0 ? entry.items[0] : null;
};

// Migrate the media item, including the creation of the referenced image file.
const migrateMedia = async (mediaType, { id, attributes, relationships }, included) => {
  const imageWrapper = included.find((include) => include.id === relationships?.field_media_image.data.id);
  const image = included.find((include) => include.id === imageWrapper?.relationships?.field_media_image.data.id);

  // Get existing imageWrapper if it exists and return it,
  // otherwise create and return it.
  const existingEntry = await getExistingEntry(mediaType, imageWrapper.id);
  return existingEntry
    ? {
        sys: {
          type: 'Link',
          linkType: 'Entry',
          id: existingEntry.sys.id,
        },
      }
    : await environment
        .createEntry(mediaType, {
          fields: {
            title: {
              'en-US': imageWrapper?.attributes.name,
            },
            image: {
              'en-US': await createAsset(image),
            },
            alternativeText: {
              'en-US': 'This is some alternative text.',
            },
            drupalUuid: {
              'en-US': imageWrapper.id,
            },
          },
        })
        .then((entry) => entry.publish())
        .then((entry) => {
          console.log(chalk.green(`Entry (${mediaType}) created: ${entry.sys.id}`));
          return {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: entry.sys.id,
            },
          };
        });
};

// Create a new asset.
// This assumes that imageWrappers are unique, so we don't check for uniqueness here.
const createAsset = async (image) => {
  return await environment
    .createAsset({
      fields: {
        title: {
          'en-US': image?.attributes.filename,
        },
        file: {
          'en-US': {
            contentType: image?.attributes.filemime,
            fileName: image?.attributes.filename,
            upload: `${sourceDomain}${image?.attributes.uri.url}`,
          },
        },
      },
    })
    .then((asset) => asset.processForAllLocales())
    .then((asset) => asset.publish())
    .then((asset) => {
      console.log(chalk.green(`Asset created: ${asset.sys.id}`));
      return {
        sys: {
          type: 'Link',
          linkType: 'Asset',
          id: asset.sys.id,
        },
      };
    })
    .catch(console.error);
};

(async function () {
  const { data, included } = await fetchDrupalData('article');

  data.map(async (entry) => {
    // If entry already exists (based on Drupal UUID), bail out.
    // TODO: This can be extended to instead update existing entries.
    if (await getExistingEntry('article', entry.id)) return;

    environment
      .createEntry('article', {
        fields: {
          title: {
            'en-US': entry.attributes.title,
          },
          drupalUuid: {
            'en-US': entry.id,
          },
          image: {
            'en-US': await migrateMedia('imageWrapper', entry, included),
          },
          // ^^ this returns an object, like so:
          // image: {
          //   'en-US': {
          //     sys: {
          //       type: 'Link',
          //       linkType: 'Entry',
          //       id: '71xUe5rFNWkmdB6bI9hUqX',
          //     },
          //   },
          // },
        },
      })
      .then((entry) => {
        entry.publish();
        console.log(chalk.green(`Entry (Article) created: ${entry.sys.id}`));
      })
      .catch(console.error);
  });
})();
