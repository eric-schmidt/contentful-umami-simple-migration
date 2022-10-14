# Simple Migration Example from Drupal Umami to Contentful

## Overview

This shows a simple migration of the Article content type from the Drupal `Umami` demo (see https://dev-contentful-umami.pantheonsite.io/). This is by no means a full migration -- it simply shows how to migrate a few of the fields from the Article content type (i.e. Title, Body HTML to Rich Text, and image/media references) as a jumping off point for other migration projects.

## Instructions

1. Create a new blank space.
2. Import the demo content model via `contentful space import --space-id <YOUR SPACE ID> --environment-id <YOUR ENVIRONMENT ID> content-model.js`
3. Copy `.env.example` and rename it to `.env`.
4. Fill in the environment variables using data from your Contentful space.
5. Run `npm install` to install all dependencies.
6. From your terminal run `node index.js`, which will kick off the migration.
