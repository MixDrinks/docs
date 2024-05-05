# Blog

## Design

[Figma](https://www.figma.com/file/gnVvtQA9gVaXzAvSCjm2gd/MixDrinks?type=design&node-id=719-309&mode=design&t=L2xKOEnjkRYI6aqd-0)

## API

### List of articles

Method: GET
URL: `/blog/articles`

#### Response

The list of article titles

- id - uqiue article id
- image - main artcile image
- title - article title

##### Response example
```json
{
    "articles": [
        {
            "id": 10,
            "imageUrl": "https://images.mixdrinks.org/cocktails/1334/origin/1334.webp" 
            "title": "П'ятдесяті в Склянці: 10 Культових Коктейлів, Які Підкорили Америку"
        },
        {
            "id": 22,
            "imageUrl": "https://images.mixdrinks.org/cocktails/1334/origin/1334.webp" 
            "title": "Коктейлі"
        }
    ]
}
```


### Article details

Method: GET
URL: `blog/article?id=<articleId>`

articleId - the id from the previus endpoint

#### Response

The article body with all detalis. The responce build as constructor which open opartunity to extend and modify article from backend in future. Each part of the artcile has unique id.

##### Text `text`
```json
{
    "type": "text",
    "style": "H<N>",
    "text": "Звідки почати, коли ми говоримо про коктейлі 60-х років в Америці? Цей період був часом інновацій та експериментів у світі коктейльної культури. Ось десять найпопулярніших напоїв того часу, які додавали колориту американським барам та вечіркам."
}
```

List of text style
- `H1` - 32/SemiBold
- `H2` - 24/SemiBold
- `H3` - 20/SemiBold
- `regular_text` - 20/Regular

##### Image `image`
```json
{
    "type": "image",
    "imageUrl": "https://images.mixdrinks.org/cocktails/1334/origin/1334.webp"
}
```

##### Cocktail card `cocktail_card`
```json
{
    "type": "cocktail_card",
    "cocktail": {
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
}
```


##### Response example
```json
{
    "title": "П'ятдесяті в Склянці: 10 Культових Коктейлів, Які Підкорили Америку",
    "body": [
        {
            "type": "image",
            "imageUrl": "https://images.mixdrinks.org/cocktails/1334/origin/1334.webp"
        },
        {
            "type": "text",
            "style": "regular_text",
            "text": "Звідки почати, коли ми говоримо про коктейлі 60-х років в Америці? Цей період був часом інновацій та експериментів у світі коктейльної культури. Ось десять найпопулярніших напоїв того часу, які додавали колориту американським барам та вечіркам."
        },
        {
            "type": "text",
            "style": "H2",
            "text": "Мартіні"
        },
        {
            "type": "cocktail_card",
            "cocktail": {
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
        },
        {
            "type": "text",
            "style": "regular_text",
            "text": "Цей культовий коктейль, що складається з джину та вермуту, став символом елегантності та стилю. Він був найбільш популярним серед літературних та голлівудських еліт, які часто замовляли його в ексклюзивних барах Манхеттена та Голлівуду."
        }
    ]
}
```

