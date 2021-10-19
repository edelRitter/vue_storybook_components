import uiLogoNav from './ui_component_navigation_logo.vue';
import { action } from '@storybook/addon-actions';

export default {
  component: uiLogoNav,
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,

  title: 'Component/ui-LogoNav',

  //👇 Our events will be mapped in Storybook UI
  argTypes: {
  },
};

const Template = args => ({
  components: { uiLogoNav },
  template: '<uiLogoNav v-bind="args" />',
});

export const Default = Template.bind({});

Default.args = {
  logo: {
    id: '1',
    title: 'logo_state',
    state: 'logo_color',
  },
};