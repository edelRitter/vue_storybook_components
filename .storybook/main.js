module.exports = {
  "stories": [
    '../src/stories/components/**/*.stories.js'
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/preset-scss",
    "./design-addon/register.js"
  ]
}