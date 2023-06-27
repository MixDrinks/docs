# Робота з версіями

Всі репозиторії MixDrinks використовуються semver. Підхід до версіонування одинаковий для backend, Mobile (android +
ios)
Patch частина версії міняється кожний раз автоматично як оновлюється будь яка з бібліотек, також patch версія
створюється на
кожний pull request що замержиний в main гілки проекту.

## Version code

Version code генерується для android та ios додатків для google play та app store відповідно. Для backend він
генерується
в runtime на основі version name і є частиною response `GET https://api.mixdrinks.org/version`.

### Правила формування version code

Version code is generated from version name.
Formula: remove dots, and remove all after minus sign,
and convert it to integer with multiplication for each digit.
Patch version must be less than 1000.
Minor version must be less than 100.
**Math formula: major + minor * 1000 + patch**

Частина після - відрізається, вона є тільки в версіях що збираються з pull request.
Тобто версія що була згенерована для pull request
`1.2.34-1` буде мати такий же version code як і версія `1.2.34`

### Приклади

| Version name | Version code | Comment                                 |
|--------------|--------------|-----------------------------------------|
| 1.0.0        | 100_000      |                                         |
| 0.0.1        | 1            |                                         |
| 1.2.34       | 102_034      | 100_000 + 2_000 + 34                    |
| 1.2.34-1     | 102_034      | 100_000 + 2_000 + 34, `-1` відрізається |


