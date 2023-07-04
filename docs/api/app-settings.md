# App settings

Manage app settings values [here](../backend/app-setting.md)

## Get app settings

URL: `/v2/settings`
method: `GET`

Return the following settings:

- minVote, maxVote - use for rating feature
- pageSize - The page site, using for pagination, We strong recommended to use number which can be div by 2,3,4,6
  such as 12, 24, 48, etc. The default value is 24. The value which div by 2,3,4,6 good for pagination, because the web
  page change the number of column without half fill the last row.

```json
{
  "minVote": 1,
  "maxVote": 5,
  "pageSize": 24
}
```