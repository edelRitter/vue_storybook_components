import uiLogoNav from './ui_component_navigation_logo.vue';
import { action } from '@storybook/addon-actions';

export default {
  component: uiLogoNav,
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,

  title: 'Component/uiLogoNav',

  //👇 Our events will be mapped in Storybook UI
  argTypes: {
    onPinTask: {},
    onArchiveTask: {},
  },
};

export const actionsData = {
  onPinTask: action('pin-task'),
  onArchiveTask: action('archive-task'),
};

const Template = args => ({
  components: { uiLogoNav },
  setup() {
    return { args, ...actionsData };
  },
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