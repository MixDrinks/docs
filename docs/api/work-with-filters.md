# How the filter works

Path : `v2/filter/{filter}`
Method: `GET`

## Request

`{filter}` - the array of parameters for filtering.
The format
`{filter group 1}={filter slugs from group 1 separated by comma}/{filter group 2}={filter slugs from group 2 separated by comma}`

Example: `v2/filter/taste=miatni,solodki/goods=syrop-makadamiia,syr-salers`

```bash
curl https://api.mixdrinks.org/v2/filter/taste=miatni,solodki/goods=syrop-makadamiia,syr-salers
```

## Response

- totalCount - the total number of cocktails that satisfy the filter
- cocktails - in case with pagination returns all cocktails stisfying the filter, otherwise returns the requested page
  of
  cocktails (about pagination [here](paggination.md))
- descriptions - SEO descriptions associated with the filter
- futureCounts - information about possible future filters. The structure is
  `{group id}:{filter id}:{filter info}`-
- isActive - the flag that shows if the filter is selected now, it is calculated on the backend based on the request
  from
  the client

The response also provide the information about the filters that can be combined with the current filter and the query
for the future filter request. The backend do all works about sorting. The provide query is the query that should be
in [Request](#request).

### The format : {filter}

All filters can be divided into two groups: those that can be combined with each other and those that cannot. For
example, `goods` and `taste` can be combined, but `glassware` cannot. More details [here](meta-info.md). The service use
information to build the query for the future filter request. For filters that can be combined, the service adds new
ones to the future query strings, for filters where you can only select one of the options, the service replaces the
existing filter. Also based on the client data, the service understands which filters are currently selected and
sets `isActive` to correct value. Also for filters that are currently selected on the client side, the service has a
different algorithm for forming the query, for such filters it forms a query that excludes the selected filter, but at
the same time has all other selected filters.
