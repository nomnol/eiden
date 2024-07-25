// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here

  {
    files: ['**/*.ts', '**/*.js', '**/*.vue'],
    rules: {
      semi: ["error", "always"],
     'no-console': 'off' // allow console.log in TypeScript files
    }
  }
)
