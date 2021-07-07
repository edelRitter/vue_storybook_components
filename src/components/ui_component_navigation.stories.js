import uiFloatingNav from './ui_component_navigation.vue';
import { action } from '@storybook/addon-actions';

export default {
  component: uiFloatingNav,
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,

  title: 'Component/uiFloatingNav-SP',

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
  components: { uiFloatingNav },
  setup() {
    return { args, ...actionsData };
  },
  template: '<uiFloatingNav v-bind="args" />',
});

export const Default = Template.bind({});

Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2018, 0, 1, 9, 0),
  },
};