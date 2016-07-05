# hsts-hacky

Forces Chrome/Chromium to use HTTP Strict Transport Security on all HTTPS connections, for all subdomains of the specific hostname you're trying to connect to.
Also forces https on all urls, blocks http(but can allow it if you set a var).
Can force disable HSTS, or can ignore hosts in hardcoded lists.
Auto-ignores hosts that cause redir-loops eg. imdb.com and thus if http isn't allowed(which is the default) it will block the site, else it will load it on http; instead of entering redir-loop trying to https it!

Default max-age is 6 months. Change this in [background.js](background.js) in seconds

```javascript
var max_age = "15570000";
```

## Credits

- [chloe](https://keybase.io/dotchloe)

## License

The project had no license, and since I(@ActualizeInMaterial) am not the original author, I am only able to release the modifications that I did to it under UNLICENSE(and/or CC0, your pick!). The rest is, who knows?!...

Check out the original location(from where it was forked): https://github.com/redpois0n/hsts-everywhere-chrome


