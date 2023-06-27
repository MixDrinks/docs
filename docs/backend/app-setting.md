# Налаштування додатку

Всі налатшування можна знайти в файтіл [application.conf](https://github.com/MixDrinks/backend/blob/main/src/main/resources/application.conf).
Частина з них просто записані в ньому, частина береться з environment variable.

- database - все що треба щоб підключитися до дази даних
- connector - налашування host та port для сервісу
- settings - //TODO
- app.version - весрія сервіс, береться при зробці DockerImage
- auth - Налаштування авторизації, token для supper admin та slat що буде викристаний для хешування паролів в адмінів в базі даних
- 