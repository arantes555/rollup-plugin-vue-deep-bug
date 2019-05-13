# rollup-plugin-vue bug with `/deep/` selector in sass

Usage of `/deep/` selector is broken in `rollup-plugin-vue@5.0.0`. Trying to use it results in :

```
[!] (VuePlugin plugin) Error: Error: expected selector.
  ╷
10│ /deep/{
  │ ^
  ╵
  src/test.vue 10:1  root stylesheet
```

If you roll-back to `rollup-plugin-vue@4.7.2`, this of course compiles correctly.
