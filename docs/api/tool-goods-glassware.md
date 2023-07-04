# Tools/ Goods/ Glassware

The endpoint returns information about the tool/good/glassware by slug.

Method: GET
URL: `/v3/{type}/{slug}`

The available types are:

- `tools`
- `goods`
- `glassware`

The slug fully matches the filter group id [More about filters here](work-with-filters.md)

## Response

- slug
- name - the name of the tool/good/glassware
- about - the description of the tool/good/glassware
- images - The images [more about images here](../backend/images.md)

### Response example

```json
{
  "id": 10,
  "slug": "sheiker",
  "name": "Шейкер",
  "about": "Свій нинішній вигляд отримав в кінці 1800-х. Стандартний об’єм: 500-700 мл."
}
```

## Cocktail which has dependency on this tool/good/glassware

In case you need to get cocktails which has dependency on this tool/good/glassware, use the API by filters.
Check more about filters [here](work-with-filters.md)

### Sample request:

```bash
curl https://api.mixdrinks.org/v2/filter/tools=sheiker
```

