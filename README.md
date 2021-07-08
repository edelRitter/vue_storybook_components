# vue_storybook_components

## Description

Storybook consisting of vue/vite components of UI features such as taskbar, floating navigation, modals, etc.

### Naming convention
----
- file name conventions are as follows 'ui-component-___________'

Explanation :
```css

```
"ui-" start for component specific areas<br />
"after the -, name of the type of component. EX: taskbar<br />
"then include the statename or purpose of the element. EX: color, bg, etc.

in HTML
```html
<div class="ui-navlogo-content">
  <p class="ui-navlogo-list"><a href="#" v-on:click="toggler" v-bind:class="{ 'ui-navlogo-active' : isActive }"><span class="mini_txt">01 </span>/ about</a></p>
  <p class="ui-navlogo-list"><a href="#" v-on:click="toggler" v-bind:class="{ 'ui-navlogo-active' : isActive }"><span class="mini_txt">02 </span>/ works</a></p>
  <p class="ui-navlogo-list"><a href="#" v-on:click="toggler" v-bind:class="{ 'ui-navlogo-active' : isActive }"><span class="mini_txt">03 </span>/ contact</a></p>
</div>
```

## Installation

Use the package manager yarn for installation and development.

1) install via yarn
```bash
yarn
```

2) development via yarn storybook
```bash
yarn storybook
```

or development via local
```bash
yarn run dev
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
