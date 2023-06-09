# Отримати інформацію про коктейль

Method: GET
URL: `/v2/cocktail/{slug}`

## Відповідь від сервера

- receipt - рецепт коктейля, масив кроків, кожний елемент один крок в приготуванні
- goods - масив інгредієнтів, кожний елемент містить інформацію про інгредієнт, та url
- tools - масив посуду, кожний елемент містить інформацію про посуд, та url
- tags - масив тегів, кожний елемент має назву, та filter_query - посилання на сторінку з фільтром по тегу, формат такий
  як в запиті на filter, детальніше [тут](work-with-filters.md)

Ось приклад json від сервера, масини json видалені для компактності, про те як працювати з
картинками [тут](../backend/images.md)

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
      "url": "goods/539",
      "slug": "laim"
    },
    {
      "id": 130,
      "name": "Лаймовий сік",
      "images": [],
      "amount": 15,
      "unit": "мл",
      "url": "goods/130",
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