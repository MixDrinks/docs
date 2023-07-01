# MixDrinks version principles

All repositories of MixDrinks use semver. The approach to versioning is the same for backend, Mobile (android + ios)
The Patch part of the version is changed automatically every time any of the libraries is updated, also the patch
version creates for each pull request that is merged into the main branch of the project.

## Version code

Version code generated for android and ios apps for google play and app store respectively. For backend it is generated
in runtime based on version name and is part of response `GET https://api.mixdrinks.org/version`.

### The rule for generating version code

Version code is generated from version name.
Formula: remove dots, and remove all after minus sign,
and convert it to integer with multiplication for each digit.
Patch version must be less than 1000.
Minor version must be less than 100.
**Math formula: major + minor * 1000 + patch**

The version part after dash `-` sign is removed, it is only for pull request versions.
The version code does not depend on the version part after dash `-` sign.

`1.2.34-1` has the same version code as  `1.2.34`

### Examples

| Version name | Version code | Comment                         |
|--------------|--------------|---------------------------------|
| 1.0.0        | 100_000      |                                 |
| 0.0.1        | 1            |                                 |
| 1.2.34       | 102_034      | 100_000 + 2_000 + 34            |
| 1.2.34-1     | 102_034      | 100_000 + 2_000 + 34, `-1` cuts |


