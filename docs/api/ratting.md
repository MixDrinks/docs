# Робота з оцінкою та кількістю переглядів

## Оцінка

Обмеження з по оцінці беруться з налаштувань додатку, документація [тут](app-settings.md), як змінити
налаштування [тут](../backend/app-setting.md)

## Отримати оцінку та кількість візитів для усіх коктейлів

URL:`v2/cocktails/ratting`, method: `GET`

**Шлях: `/v2/search/ratings` deprecated**, зараз є 302 редірект на новий шлях

### Відповідь
Відповідь містить мапу всіх коктейлів з їх рейтингом та кількістю переглядів

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

## Зміна оцінки

URL: `v2/cocktails/score`, method: `POST`

### Параметри
- id: id коктейля, передати в query `id`
- `{"value": <user ratte> }` - json з оцінкою, передати в body

Оцінка має бути в межах від minVote та maxVote (див. налаштування додатку [тут](app-settings.md))

### Відповідь
```json
{
  "cocktailId": 1285,
  "rating": 4.567,
  "visitCount": 5
}
```
