# API

Base url:
`https://api.mixdrinks.org/`

The all API endpoints has a 1-hour cache. Excuse the endpoint which returns just a ratting
information. (`v2/cocktail/ratting`).

## Filter meta information

GET `v2/filters` - returns the list of filter group with filters.

* id - the id of the filter group (unique)
* name - the name of the filter group
* queryName - the name of the query parameter for the filter group
* items - the list of filters in the filter group

## App settings

GET: `v2/settings` - returns the app settings.

Response

```json
{
  "minVote": 0,
  "maxVote": 5,
  "pageSize": 24
}
```

## Cocktail filter

GET: `v2/search/cocktails` - Returns the cocktails list by filter.

Queries

| Name                                | Require | Type       | Default        | Description                                                                                                     |
|:------------------------------------|:--------|:-----------|:---------------|:----------------------------------------------------------------------------------------------------------------|
| Any queryName from filter mate info | No      | Array<Int> | null           | The filter will returns only the cocktails which has all of dependencies, the filter group can be combine       |
| page                                | No      | Int        | null           | Return the subset of cocktails, offset and limit calculate on be site. The page size return int setting request |
| sort                                | No      | Int        | `most-popular` | The sort type. Available the following  sort types: `most-popular` and `biggest-rate`                           |

Example
`/cocktails/filter?tags=60&goods=11,12` - Return all cocktails with tag id 60 and good id 11 and 12

## Full cocktail info

GET: `v2/cocktails/full` - return the cocktail with all information id, name, list of ingredients, tools, receipt and
tags. The response has a cache of 1 hour. The information about the ratting and visit count can be outdated. Use
the [Ratting](#cocktail-ratting-information) endpoint to get the latest information.

Queries

| Name | Require | Type   | Description     |
|------|---------|--------|-----------------|
| id   | Yes     | String | The cocktail id |

## Item

### Full

The ingredients and goods has the same object format. The app provide a one API for ingredients and goods.

GET: `v2/items/full` - Provide full information of ingredient or good.

Queries

| Name | Require | Type   | Description     |
|------|---------|--------|-----------------|
| id   | Yes     | String | The cocktail id |

### Lists

#### Tools

GET: `v2/tools/all` - Provide list of tools.

#### Goods

GET `v2/goods/all` - Provide list of goods.

## Cocktail score

POST: `v2/cocktails/score`

Queries

| Name | Require | Type   | Description     |
|------|---------|--------|-----------------|
| id   | Yes     | String | The cocktail id |

Body:
`{"value":Int}`

The value must be between minVote (include) and maxVote (include) from App Setting response [AppSetting](#app-settings).

## Cocktail visit

POST: `v2/cocktails/visit`

Queries

| Name | Require | Type   | Description     |
|------|---------|--------|-----------------|
| id   | Yes     | String | The cocktail id |

## Cocktail ratting information

GET: `v2/cocktail/ratting` - The endpoint just returns the ratting information of the cocktail. The response has the
same as the [Full cocktail info](#full-cocktail-info) endpoint. But the response haven't any cache.

## Item visit

POST: `v2/cocktails/visit`

Queries

| Name | Require | Type   | Description     |
|------|---------|--------|-----------------|
| id   | Yes     | String | The cocktail id |

---

Note:
The endpoints just notify the server. We cannot use the exists GET endpoints for count visits, because the get response
has
caches.
