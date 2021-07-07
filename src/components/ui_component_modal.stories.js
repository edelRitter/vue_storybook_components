import uiModalComponent from './ui_component_modal.vue';
import { action } from '@storybook/addon-actions';

export default {
  component: uiModalComponent,
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,

  title: 'Component/ui-ModalComponent',

  //👇 Our events will be mapped in Storybook UI
  argTypes: {
  },
};

const Template = args => ({
  components: { uiModalComponent },
  template: '<uiModalComponent v-bind="args" />',
});

export const Default = Template.bind({});

Default.args = {
  floating: {
    id: '1',
    title: 'modalComponent',
    state: 'none',
  },
};