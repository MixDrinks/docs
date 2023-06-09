# Картинки

Base url
`https://image.mixdrinks.org`

Доступні розміри:

- 320
- 400
- 560
- origin

Доступні формати:

- webp
- jpg

## Як побудувати посилання

`/{type}/{id}/{size}/{id}.{format}`

## Cocktails

`/cocktails/{id}/{size}/{id}.{format}`
{id} - id of cocktail

Sample: `/cocktails/104/origin/104.webp`

## Goods

`/goods/{id}/{size}/{id}.{format}`
{id} - id of good

Sample: `/goods/104/origin/104.webp`

## Tools

`/goods/{id}/{size}/{id}.{format}`
{id} - id of tools

Sample: `/goods/104/origin/104.webp`

## Glasswares

`/goods/{id}/{size}/{id}.{format}`
{id} - id of glassware

Sample: `/goods/104/origin/104.webp`

## Приклад json

```json
[
  {
    "srcset": "https://image.mixdrinks.org/cocktails/348/origin/348.webp",
    "media": "screen and (min-width: 570px)",
    "type": "image/webp"
  },
  {
    "srcset": "https://image.mixdrinks.org/cocktails/348/560/348.webp",
    "media": "screen and (min-width: 410px)",
    "type": "image/webp"
  },
  {
    "srcset": "https://image.mixdrinks.org/cocktails/348/400/348.webp",
    "media": "screen and (min-width: 330px)",
    "type": "image/webp"
  },
  {
    "srcset": "https://image.mixdrinks.org/cocktails/348/320/348.webp",
    "media": "screen and (min-width: 0px)",
    "type": "image/webp"
  },
  {
    "srcset": "https://image.mixdrinks.org/cocktails/348/origin/348.jpg",
    "media": "screen and (min-width: 570px)",
    "type": "image/jpg"
  },
  {
    "srcset": "https://image.mixdrinks.org/cocktails/348/560/348.jpg",
    "media": "screen and (min-width: 410px)",
    "type": "image/jpg"
  },
  {
    "srcset": "https://image.mixdrinks.org/cocktails/348/400/348.jpg",
    "media": "screen and (min-width: 330px)",
    "type": "image/jpg"
  },
  {
    "srcset": "https://image.mixdrinks.org/cocktails/348/320/348.jpg",
    "media": "screen and (min-width: 0px)",
    "type": "image/jpg"
  }
]
```