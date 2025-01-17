# Open Source @ Equinor

## Usage

    $ npm i
    $ npm run dev


## Contribute

There’s a horisontal meny commented out in the html if needed at some point. The website used to be built with 11ty, but never got further than the one page, so that turned out to be a bit overkill. When 11ty released a new version with breaking changes it made more sense to remove 11ty. 

The CSS is inline, with a Stylelint config that works with that. 

Codespaces recommended to avoid potential dev environment conflicts.

### Linting




## Radix

- The master branch is deployed automatically to [the dev environment][dev]
- [Dev][dev] is promoted to [prod][] in the [Radix console][].
- **Prod:** https://opensource.app.radix.equinor.com/
- **Dev:** https://web-opensource-dev.radix.equinor.com/

[dev]: https://web-opensource-dev.radix.equinor.com/
[prod]: https://web-opensource-prod.radix.equinor.com/
[radix console]: https://console.radix.equinor.com/applications
