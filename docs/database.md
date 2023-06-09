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