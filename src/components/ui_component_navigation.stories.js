import uiFloatingNav from './ui_component_navigation.vue';
import { action } from '@storybook/addon-actions';

export default {
  component: uiFloatingNav,
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,

  title: 'Component/ui-FloatingNav__SP',

  //👇 Our events will be mapped in Storybook UI
  argTypes: {
  },
};

const Template = args => ({
  components: { uiFloatingNav },
  template: '<uiFloatingNav v-bind="args" />',
});

export const Default = Template.bind({});

Default.args = {
  floating: {
    id: '1',
    title: 'floating_navigation',
    state: 'floating_visible',
  },
};