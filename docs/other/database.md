# База даних

## Інформація про базу

База даних: PostgresSQL
Використовується digital ocean managed database. Кластер з однією нодою.

## Відтворити локально прод базу даних

Скачати прод базу
```bash
pg_dump -h <data_base_host> -p <data_base_post> -U <data_base_user> -Fc <data_base_name> > mixdrinks_dump.pgsql
```

Запустити PostgresSQL сервер локально, наприклад використовуючи docker, можете використовувати інші способи.
```bash
docker pull postgres
```

Перенести дані з dump в локальну базу даних
```bash
pg_restore -d 'postgresql://postgres:postgres@localhost:5432/postgres' --jobs 4 mixdrinks_dump.pgsql
```

## Структура бази даних

### Коктейлі

```mermaid
erDiagram
    alcohol_volumes {
        integer id PK
        text name 
        text slug 
    }

    cocktails_to_alcohol_volume {
        integer alcohol_volume_id FK
        integer cocktail_id FK
    }

    cocktails_to_items {
        integer cocktail_id 
        integer good_id 
        integer amount 
        text unit 
        integer relation 
    }

    cocktails_to_tags {
        integer tag_id 
        integer cocktail_id 
    }

    cocktails_to_tastes {
        integer cocktail_id FK
        integer taste_id FK
    }

    cocktails_to_tools {
        integer cocktail_id FK
        integer tool_id FK
    }

    glassware {
        integer id PK
        text name 
        text about 
        text slug 
    }

    cocktails_to_glassware {
        integer cocktail_id FK
        integer glassware_id FK
    }

    goods {
        text name 
        text about 
        integer id PK
        integer visit_count 
        text slug 
    }

    tags {
        integer id PK
        text name 
        integer type 
        text slug 
    }

    tastes {
        integer id PK
        text name 
        text slug 
    }

    tools {
        integer id PK
        text name 
        text about 
        integer visit_count 
        text slug 
    }

    cocktails {
        integer id PK
        text name
        ARRAY recipe
        integer visit_count
        integer rating_count
        integer rating_value
        text slug
    }

    cocktails_to_alcohol_volume }o--|| alcohol_volumes : "alcohol_volume_id"
    cocktails_to_alcohol_volume }o--|| cocktails : "cocktail_id"
    cocktails_to_tools }o--|| cocktails : "cocktail_id"
    cocktails_to_tools }o--|| tools : "tool_id"
    cocktails_to_glassware }o--|| cocktails : "cocktail_id"
    cocktails_to_glassware }o--|| glassware : "glassware_id"
    cocktails_to_tastes }o--|| tastes : "taste_id"
    cocktails_to_tastes }o--|| cocktails : "cocktail_id"
```