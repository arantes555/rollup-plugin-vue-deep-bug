import vue from 'rollup-plugin-vue'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonJs from 'rollup-plugin-commonjs'

export default {
  input: 'src/test.vue',
  plugins: [
    vue({
      sourceRoot: 'src/'
    }),
    nodeResolve(),
    commonJs({
      include: 'node_modules/**'
    })
  ],
  output: [
    { file: 'lib/test.js', format: 'cjs' }
  ]
}
