{
  "contentTypes": [
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "f1qwv0olowsb"
          }
        },
        "id": "article",
        "type": "ContentType",
        "createdAt": "2022-10-03T15:37:34.195Z",
        "updatedAt": "2022-10-14T19:20:42.094Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 7,
        "publishedAt": "2022-10-14T19:20:42.094Z",
        "firstPublishedAt": "2022-10-03T15:37:34.603Z",
        "createdBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0P01aRH5LafHI66y5GM1WV"
          }
        },
        "updatedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0P01aRH5LafHI66y5GM1WV"
          }
        },
        "publishedCounter": 4,
        "version": 8,
        "publishedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0P01aRH5LafHI66y5GM1WV"
          }
        }
      },
      "displayField": "title",
      "name": "Article",
      "description": "",
      "fields": [
        {
          "id": "title",
          "name": "Title",
          "type": "Symbol",
          "localized": false,
          "required": true,
          "validations": [
          ],
          "disabled": false,
          "omitted": false
        },
        {
          "id": "body",
          "name": "Body",
          "type": "RichText",
          "localized": false,
          "required": false,
          "validations": [
            {
              "enabledMarks": [
                "bold",
                "italic",
                "underline",
                "code"
              ],
              "message": "Only bold, italic, underline, and code marks are allowed"
            },
            {
              "enabledNodeTypes": [
                "heading-3",
                "heading-4",
                "heading-5",
                "heading-6",
                "ordered-list",
                "unordered-list",
                "hr",
                "blockquote",
                "embedded-entry-block",
                "embedded-asset-block",
                "table",
                "hyperlink",
                "entry-hyperlink",
                "asset-hyperlink",
                "embedded-entry-inline"
              ],
              "message": "Only heading 3, heading 4, heading 5, heading 6, ordered list, unordered list, horizontal rule, quote, block entry, asset, table, link to Url, link to entry, link to asset, and inline entry nodes are allowed"
            },
            {
              "nodes": {
              }
            }
          ],
          "disabled": false,
          "omitted": false
        },
        {
          "id": "image",
          "name": "Image",
          "type": "Link",
          "localized": false,
          "required": false,
          "validations": [
            {
              "linkContentType": [
                "imageWrapper"
              ]
            }
          ],
          "disabled": false,
          "omitted": false,
          "linkType": "Entry"
        },
        {
          "id": "drupalUuid",
          "name": "Drupal UUID",
          "type": "Symbol",
          "localized": false,
          "required": true,
          "validations": [
            {
              "unique": true
            }
          ],
          "disabled": false,
          "omitted": false
        }
      ]
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "f1qwv0olowsb"
          }
        },
        "id": "imageWrapper",
        "type": "ContentType",
        "createdAt": "2022-10-03T15:38:36.802Z",
        "updatedAt": "2022-10-03T16:01:38.200Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "publishedVersion": 3,
        "publishedAt": "2022-10-03T16:01:38.200Z",
        "firstPublishedAt": "2022-10-03T15:38:37.082Z",
        "createdBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0P01aRH5LafHI66y5GM1WV"
          }
        },
        "updatedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0P01aRH5LafHI66y5GM1WV"
          }
        },
        "publishedCounter": 2,
        "version": 4,
        "publishedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0P01aRH5LafHI66y5GM1WV"
          }
        }
      },
      "displayField": "title",
      "name": "Image Wrapper",
      "description": "",
      "fields": [
        {
          "id": "title",
          "name": "Title",
          "type": "Symbol",
          "localized": false,
          "required": true,
          "validations": [
          ],
          "disabled": false,
          "omitted": false
        },
        {
          "id": "image",
          "name": "Image",
          "type": "Link",
          "localized": false,
          "required": true,
          "validations": [
            {
              "linkMimetypeGroup": [
                "image"
              ]
            }
          ],
          "disabled": false,
          "omitted": false,
          "linkType": "Asset"
        },
        {
          "id": "alternativeText",
          "name": "Alternative Text",
          "type": "Symbol",
          "localized": false,
          "required": true,
          "validations": [
            {
              "size": {
                "max": 250
              }
            }
          ],
          "disabled": false,
          "omitted": false
        },
        {
          "id": "drupalUuid",
          "name": "Drupal UUID",
          "type": "Symbol",
          "localized": false,
          "required": true,
          "validations": [
            {
              "unique": true
            }
          ],
          "disabled": false,
          "omitted": false
        }
      ]
    }
  ],
  "tags": [
  ],
  "editorInterfaces": [
    {
      "sys": {
        "id": "default",
        "type": "EditorInterface",
        "space": {
          "sys": {
            "id": "f1qwv0olowsb",
            "type": "Link",
            "linkType": "Space"
          }
        },
        "version": 8,
        "createdAt": "2022-10-03T15:37:34.697Z",
        "createdBy": {
          "sys": {
            "id": "0P01aRH5LafHI66y5GM1WV",
            "type": "Link",
            "linkType": "User"
          }
        },
        "updatedAt": "2022-10-14T19:20:43.124Z",
        "updatedBy": {
          "sys": {
            "id": "0P01aRH5LafHI66y5GM1WV",
            "type": "Link",
            "linkType": "User"
          }
        },
        "contentType": {
          "sys": {
            "id": "article",
            "type": "Link",
            "linkType": "ContentType"
          }
        },
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        }
      },
      "controls": [
        {
          "fieldId": "title",
          "widgetId": "singleLine",
          "widgetNamespace": "builtin"
        },
        {
          "fieldId": "body",
          "widgetId": "richTextEditor",
          "widgetNamespace": "builtin"
        },
        {
          "fieldId": "image",
          "widgetId": "entryCardEditor",
          "widgetNamespace": "builtin"
        },
        {
          "fieldId": "drupalUuid",
          "widgetId": "singleLine",
          "widgetNamespace": "builtin"
        }
      ]
    },
    {
      "sys": {
        "id": "default",
        "type": "EditorInterface",
        "space": {
          "sys": {
            "id": "f1qwv0olowsb",
            "type": "Link",
            "linkType": "Space"
          }
        },
        "version": 4,
        "createdAt": "2022-10-03T15:38:37.150Z",
        "createdBy": {
          "sys": {
            "id": "0P01aRH5LafHI66y5GM1WV",
            "type": "Link",
            "linkType": "User"
          }
        },
        "updatedAt": "2022-10-03T16:01:39.268Z",
        "updatedBy": {
          "sys": {
            "id": "0P01aRH5LafHI66y5GM1WV",
            "type": "Link",
            "linkType": "User"
          }
        },
        "contentType": {
          "sys": {
            "id": "imageWrapper",
            "type": "Link",
            "linkType": "ContentType"
          }
        },
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        }
      },
      "controls": [
        {
          "fieldId": "title",
          "widgetId": "singleLine",
          "widgetNamespace": "builtin"
        },
        {
          "fieldId": "image",
          "widgetId": "assetLinkEditor",
          "widgetNamespace": "builtin"
        },
        {
          "fieldId": "alternativeText",
          "widgetId": "singleLine",
          "widgetNamespace": "builtin"
        },
        {
          "fieldId": "drupalUuid",
          "widgetId": "singleLine",
          "widgetNamespace": "builtin"
        }
      ]
    }
  ],
  "entries": [
  ],
  "assets": [
  ],
  "locales": [
    {
      "name": "English (United States)",
      "code": "en-US",
      "fallbackCode": null,
      "default": true,
      "contentManagementApi": true,
      "contentDeliveryApi": true,
      "optional": false,
      "sys": {
        "type": "Locale",
        "id": "0sjiETbtUkmLZ1usJSVH0o",
        "version": 1,
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "f1qwv0olowsb"
          }
        },
        "environment": {
          "sys": {
            "type": "Link",
            "linkType": "Environment",
            "id": "test",
            "uuid": "aa4f716c-d22f-414b-8dce-d7e22a402b56"
          }
        },
        "createdBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0P01aRH5LafHI66y5GM1WV"
          }
        },
        "createdAt": "2022-10-14T16:44:21Z",
        "updatedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0P01aRH5LafHI66y5GM1WV"
          }
        },
        "updatedAt": "2022-10-14T16:44:21Z"
      }
    }
  ],
  "webhooks": [
  ],
  "roles": [
    {
      "name": "Editor",
      "description": "Allows editing, publishing and archiving of content",
      "policies": [
        {
          "effect": "allow",
          "actions": "all",
          "constraint": {
            "and": [
              {
                "equals": [
                  {
                    "doc": "sys.type"
                  },
                  "Entry"
                ]
              }
            ]
          }
        },
        {
          "effect": "allow",
          "actions": "all",
          "constraint": {
            "and": [
              {
                "equals": [
                  {
                    "doc": "sys.type"
                  },
                  "Asset"
                ]
              }
            ]
          }
        }
      ],
      "permissions": {
        "ContentModel": [
          "read"
        ],
        "Settings": [
        ],
        "ContentDelivery": [
        ],
        "Environments": [
        ],
        "EnvironmentAliases": [
        ],
        "Tags": [
        ]
      },
      "sys": {
        "type": "Role",
        "id": "0srjd6XAwoOkm1FCgv9fVa",
        "version": 0,
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "f1qwv0olowsb"
          }
        },
        "createdBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0P01aRH5LafHI66y5GM1WV"
          }
        },
        "createdAt": "2022-10-03T15:36:23Z",
        "updatedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0P01aRH5LafHI66y5GM1WV"
          }
        },
        "updatedAt": "2022-10-03T15:36:23Z"
      }
    },
    {
      "name": "Freelancer",
      "description": "Allows only editing of content they created themselves",
      "policies": [
        {
          "effect": "allow",
          "actions": [
            "create"
          ],
          "constraint": {
            "and": [
              {
                "equals": [
                  {
                    "doc": "sys.type"
                  },
                  "Entry"
                ]
              }
            ]
          }
        },
        {
          "effect": "allow",
          "actions": [
            "create"
          ],
          "constraint": {
            "and": [
              {
                "equals": [
                  {
                    "doc": "sys.type"
                  },
                  "Asset"
                ]
              }
            ]
          }
        },
        {
          "effect": "allow",
          "actions": [
            "read"
          ],
          "constraint": {
            "and": [
              {
                "equals": [
                  {
                    "doc": "sys.type"
                  },
                  "Entry"
                ]
              },
              {
                "equals": [
                  {
                    "doc": "sys.createdBy.sys.id"
                  },
                  "User.current()"
                ]
              }
            ]
          }
        },
        {
          "effect": "allow",
          "actions": [
            "update"
          ],
          "constraint": {
            "and": [
              {
                "equals": [
                  {
                    "doc": "sys.type"
                  },
                  "Entry"
                ]
              },
              {
                "equals": [
                  {
                    "doc": "sys.createdBy.sys.id"
                  },
                  "User.current()"
                ]
              },
              {
                "paths": [
                  {
                    "doc": "fields.%.%"
                  }
                ]
              }
            ]
          }
        },
        {
          "effect": "allow",
          "actions": [
            "delete"
          ],
          "constraint": {
            "and": [
              {
                "equals": [
                  {
                    "doc": "sys.type"
                  },
                  "Entry"
                ]
              },
              {
                "equals": [
                  {
                    "doc": "sys.createdBy.sys.id"
                  },
                  "User.current()"
                ]
              }
            ]
          }
        },
        {
          "effect": "allow",
          "actions": [
            "read"
          ],
          "constraint": {
            "and": [
              {
                "equals": [
                  {
                    "doc": "sys.type"
                  },
                  "Asset"
                ]
              },
              {
                "equals": [
                  {
                    "doc": "sys.createdBy.sys.id"
                  },
                  "User.current()"
                ]
              }
            ]
          }
        },
        {
          "effect": "allow",
          "actions": [
            "update"
          ],
          "constraint": {
            "and": [
              {
                "equals": [
                  {
                    "doc": "sys.type"
                  },
                  "Asset"
                ]
              },
              {
                "equals": [
                  {
                    "doc": "sys.createdBy.sys.id"
                  },
                  "User.current()"
                ]
              },
              {
                "paths": [
                  {
                    "doc": "fields.%.%"
                  }
                ]
              }
            ]
          }
        },
        {
          "effect": "allow",
          "actions": [
            "delete"
          ],
          "constraint": {
            "and": [
              {
                "equals": [
                  {
                    "doc": "sys.type"
                  },
                  "Asset"
                ]
              },
              {
                "equals": [
                  {
                    "doc": "sys.createdBy.sys.id"
                  },
                  "User.current()"
                ]
              }
            ]
          }
        }
      ],
      "permissions": {
        "ContentModel": [
          "read"
        ],
        "Settings": [
        ],
        "ContentDelivery": [
        ],
        "Environments": [
        ],
        "EnvironmentAliases": [
        ],
        "Tags": [
        ]
      },
      "sys": {
        "type": "Role",
        "id": "0srLvGcQpkF8tjX7K5Lh4E",
        "version": 0,
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "f1qwv0olowsb"
          }
        },
        "createdBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0P01aRH5LafHI66y5GM1WV"
          }
        },
        "createdAt": "2022-10-03T15:36:23Z",
        "updatedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0P01aRH5LafHI66y5GM1WV"
          }
        },
        "updatedAt": "2022-10-03T15:36:23Z"
      }
    },
    {
      "name": "Translator",
      "description": "Allows editing of localized fields in the specified language",
      "policies": [
        {
          "effect": "allow",
          "actions": [
            "read"
          ],
          "constraint": {
            "and": [
              {
                "equals": [
                  {
                    "doc": "sys.type"
                  },
                  "Entry"
                ]
              }
            ]
          }
        },
        {
          "effect": "allow",
          "actions": [
            "read"
          ],
          "constraint": {
            "and": [
              {
                "equals": [
                  {
                    "doc": "sys.type"
                  },
                  "Asset"
                ]
              }
            ]
          }
        },
        {
          "effect": "allow",
          "actions": [
            "update"
          ],
          "constraint": {
            "and": [
              {
                "equals": [
                  {
                    "doc": "sys.type"
                  },
                  "Entry"
                ]
              },
              {
                "paths": [
                  {
                    "doc": "fields.%.%"
                  }
                ]
              }
            ]
          }
        },
        {
          "effect": "allow",
          "actions": [
            "update"
          ],
          "constraint": {
            "and": [
              {
                "equals": [
                  {
                    "doc": "sys.type"
                  },
                  "Asset"
                ]
              },
              {
                "paths": [
                  {
                    "doc": "fields.%.%"
                  }
                ]
              }
            ]
          }
        }
      ],
      "permissions": {
        "ContentModel": [
          "read"
        ],
        "Settings": [
        ],
        "ContentDelivery": [
        ],
        "Environments": [
        ],
        "EnvironmentAliases": [
        ],
        "Tags": [
        ]
      },
      "sys": {
        "type": "Role",
        "id": "0ssgs5afpNWef4YLjnYcri",
        "version": 0,
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "f1qwv0olowsb"
          }
        },
        "createdBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0P01aRH5LafHI66y5GM1WV"
          }
        },
        "createdAt": "2022-10-03T15:36:23Z",
        "updatedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0P01aRH5LafHI66y5GM1WV"
          }
        },
        "updatedAt": "2022-10-03T15:36:23Z"
      }
    },
    {
      "name": "Author",
      "description": "Allows editing of content",
      "policies": [
        {
          "effect": "allow",
          "actions": [
            "create"
          ],
          "constraint": {
            "and": [
              {
                "equals": [
                  {
                    "doc": "sys.type"
                  },
                  "Entry"
                ]
              }
            ]
          }
        },
        {
          "effect": "allow",
          "actions": [
            "read"
          ],
          "constraint": {
            "and": [
              {
                "equals": [
                  {
                    "doc": "sys.type"
                  },
                  "Entry"
                ]
              }
            ]
          }
        },
        {
          "effect": "allow",
          "actions": [
            "update"
          ],
          "constraint": {
            "and": [
              {
                "equals": [
                  {
                    "doc": "sys.type"
                  },
                  "Entry"
                ]
              }
            ]
          }
        },
        {
          "effect": "allow",
          "actions": [
            "create"
          ],
          "constraint": {
            "and": [
              {
                "equals": [
                  {
                    "doc": "sys.type"
                  },
                  "Asset"
                ]
              }
            ]
          }
        },
        {
          "effect": "allow",
          "actions": [
            "read"
          ],
          "constraint": {
            "and": [
              {
                "equals": [
                  {
                    "doc": "sys.type"
                  },
                  "Asset"
                ]
              }
            ]
          }
        },
        {
          "effect": "allow",
          "actions": [
            "update"
          ],
          "constraint": {
            "and": [
              {
                "equals": [
                  {
                    "doc": "sys.type"
                  },
                  "Asset"
                ]
              }
            ]
          }
        }
      ],
      "permissions": {
        "ContentModel": [
          "read"
        ],
        "Settings": [
        ],
        "ContentDelivery": [
        ],
        "Environments": [
        ],
        "EnvironmentAliases": [
        ],
        "Tags": [
        ]
      },
      "sys": {
        "type": "Role",
        "id": "0sqKKpfx7r7sIvU5LCrazO",
        "version": 0,
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "f1qwv0olowsb"
          }
        },
        "createdBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0P01aRH5LafHI66y5GM1WV"
          }
        },
        "createdAt": "2022-10-03T15:36:23Z",
        "updatedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0P01aRH5LafHI66y5GM1WV"
          }
        },
        "updatedAt": "2022-10-03T15:36:23Z"
      }
    }
  ]
}