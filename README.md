### Run

```bash
npm run sass
```

```bash
npm run bazel
```

### Current `include_paths` option outputs:

SASS:

```javascript
[ 'styles/shared/_colors.scss',
  'styles/shared/_fonts.scss' ]
```

BAZEL

```javascript
["-I=<source file styles/shared/_colors.scss>", "-I=<source file styles/shared/_fonts.scss>"]
```
