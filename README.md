systemjs-only-riot plugin
===========

Right now, you need to configure config.js to get the systemjs-riot plugin
working. That is not cool. I want this to 'just work' so -- this plugin is
born.

Installing
---

For SystemJS use, locate `systemjs-only-riot.js` in the application, and
then locate it with map configuration:

```javascript
System.config({
  map: {
    tag: 'path/to/systemjs-riot-only.js'
  }
});
```

For installing with jspm, run `jspm install
github:dmnt3rr0r/systemjs-only-riot`.

Basic Use
---

```javascript
import from './mytag.tag!;
```
