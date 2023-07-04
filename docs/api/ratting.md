# Ratting flows

## Score

The score has a restriction, which is taken from the application settings, documentation [here](app-settings.md), how to
change settings [here](../backend/app-setting.md)

## Get score and count of visits for all cocktails

URL:`v2/cocktails/ratting`, method: `GET`

**Path: `/v2/search/ratings` deprecated**, the path has 302 redirect at the moment

### Response

The response has a map of all cocktails with their rating and count of visits

```json
{
  "1285": {
    "cocktailId": 1285,
    "rating": 4.567,
    "visitCount": 5
  },
  "1119": {
    "cocktailId": 1119,
    "rating": null,
    "visitCount": 9
  }
}
```

## Add new score

URL: `v2/cocktails/score`, method: `POST`

### Parameters

- id: the cocktails id, put it as query `id`
- `{"value": <user ratte> }` - the json with score value, put it as a body

The score should be in the range from minVote to maxVote (see application settings [here](app-settings.md))

### Response example

```json
{
  "cocktailId": 1285,
  "rating": 4.567,
  "visitCount": 5
}
```
