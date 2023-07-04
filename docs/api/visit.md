# Works with the visit API

## Increment visit counter

The visit controller provide the ability to increment the visit counter for the cocktail. The controller has two
methods:

- `GET v2/cocktails/visit?id={cocktail_id}` - increment the visit counter of cocktail for anonymous user
- `GET user-api/cocktail/visit?id={cocktail_id}` - increment the visit counter of cocktail for authorized user

More about auth [here](../backend/auth.md)

### Parameters

- id: cocktail id, provide as a query `id`

### Response

```json
{
  "cocktailId": 1285,
  "rating": 4.567,
  "visitCount": 5
}
```

## Get visit counter

The information about visit counter of cocktail presents into the cocktail info. But if you need to get smaller object
with visit and score data for all cocktails you can use, you can check more [here](ratting.md)

## Get list of visited cocktail for authorized user

The visit controller provide the ability to get the list of visited cocktails for authorized user. The controller has a
method: `GET user-api/cocktail/visit/list` - get the list of visited cocktails for authorized user. The method has
a [pagination](paggination.md). The endpoint returns the list of cocktails without duplicates, in case if the user visit
the same cocktail several times, the response contains only information about the last visit.

## Plan for the future

Add the endpoint to get the list of visited cocktails for authorized user, its unblock the client to use the local cache
in case the user device go to offline mode, and sync the visited cocktails when the device go to online mode.