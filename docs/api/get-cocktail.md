# Get info about the cocktail

Method: GET
URL: `/v2/cocktail/{slug}`

## Response

- receipt - The receipt of the cocktails present as an array of steps;
- goods - array of goods
- tools - array of tools
- tags - array of tags, the element has name and filter_query - the link to for filter page associate with the
  tag [more about how filters works here](work-with-filters.md)

### Response example

More about images format [here](../backend/images.md)

```json
{
  "id": 348,
  "slug": "marharyta-bez-tsukru",
  "name": "Маргарита без цукру",
  "visitCount": 31,
  "rating": null,
  "ratingCount": 0,
  "receipt": [
    "Зроби на бокалі солону облямівку",
    "Налий у шейкер лаймовий сік 15 мл, лікер тріпл сек 30 мл та срібну текілу 50 мл"
  ],
  "images": [],
  "goods": [
    {
      "id": 539,
      "name": "Лайм",
      "images": [],
      "amount": 10,
      "unit": "г",
      "url": "goods/laim",
      "slug": "laim"
    },
    {
      "id": 130,
      "name": "Лаймовий сік",
      "images": [],
      "amount": 15,
      "unit": "мл",
      "url": "goods/laimovyi-sik",
      "slug": "laimovyi-sik"
    }
  ],
  "tools": [
    {
      "id": 548,
      "name": "Келих Маргарита",
      "images": [],
      "url": "glassware/kelykh-marharyta",
      "slug": "kelykh-marharyta"
    },
    {
      "id": 85,
      "name": "Джигер",
      "images": [],
      "url": "tools/dzhyher",
      "slug": "dzhyher"
    }
  ],
  "tags": [
    {
      "id": 548,
      "name": "в Келих Маргарита",
      "filter_query": "glassware=kelykh-marharyta",
      "slug": "na-tekili"
    },
    {
      "id": 32,
      "name": "на текілі",
      "filter_query": "tags=na-tekili",
      "slug": "na-tekili"
    }
  ]
}
```