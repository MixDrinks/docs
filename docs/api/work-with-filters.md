# Як працювати з фільтрами

Запит по фільтрам має формат: `v2/filter/{filter}`

Method: `GET`

## Request

`{filter}` - це набір параметрів по якому буде відбуватись фільтрація. Формат

`{filter group 1}={filter slugs from group 1 separated by comma}/{filter group 2}={filter slugs from group 2 separated by comma}`

Example: `v2/filter/taste=miatni,solodki/goods=syrop-makadamiia,syr-salers`

```bash
curl https://api.mixdrinks.org/v2/filter/taste=miatni,solodki/goods=syrop-makadamiia,syr-salers
```

## Відповідь від сервера

- totalCount - загальна кількість коктейлів що задовільняють фільтр
- cocktails - одна сторінка коктейлів (про розмір сторінки можна взнати [тут](paggination.md))
- descriptions - SEO опис що відповідає фільтру 
- futureCounts - інформація про майбутні можливі фільтри. Структура `id групи`:`id фільтра`:`інфомація про фільтр`

В інформації про фільтр є кількість коктейлів які поверне сервіс якщо вибрати цей фільтр, також є query яке треба передати серверу
в якості параметра `{filter}` в [Request](#request) для того щоб отримати дані з враховуванням цього фільтру.