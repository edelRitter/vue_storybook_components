<template>
  <div :class="classes">
    <label class="ui-taskbar-checkbox">
      <input type="checkbox" :checked="isChecked" disabled name="checked" />
      <span class="ui-taskbar-checkbox-custom" @click="archiveTask" />
    </label>
    <div class="ui-taskbar-title">
      <input type="text" :value="task.title" readonly placeholder="Input title" />
    </div>
    <div class="ui-taskbar-actions">
      <a v-if="!isChecked" @click="pinTask">
        <span class="icon-star" />
      </a>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue';

export default {
  name: 'uiTaskBar',
  props: {
    task: {
      type: Object,
      required: true,
      default: () => ({ id: '', state: '', title: '' }),
      validator: task => ['id', 'state', 'title'].every(key => key in task),
    },
  },
  emits: ['archive-task', 'pin-task'],

  setup(props, { emit }) {
    props = reactive(props);
      return {
      classes: computed(() => ({
        'ui-taskbar-list-item TASK_INBOX': props.task.state === 'TASK_INBOX',
        'ui-taskbar-list-item TASK_PINNED': props.task.state === 'TASK_PINNED',
        'ui-taskbar-list-item TASK_ARCHIVED': props.task.state === 'TASK_ARCHIVED',
      })),
      /**
        * Computed property for checking the state of the task
      */
      isChecked: computed(() => props.task.state === 'TASK_ARCHIVED'),
      /**
        * Event handler for archiving tasks
      */
      archiveTask() {
        emit('archive-task', props.task.id);
      },
      /**
        * Event handler for pinning tasks
      */
      pinTask() {
        emit('pin-task', props.task.id);
      },
    };
  },
};
</script>

<style scoped>
.list-heading {
	letter-spacing: 0.3em;
	text-indent: 0.3em;
	text-transform: uppercase;
	font-family: 'Nunito Sans', "Helvetica Neue", Helvetica, Arial, sans-serif;
	font-weight: 800;
	font-size: 11px;
	padding-left: 15px;
	line-height: 40px;
	background: #f8f8f8;
	color: #aaaaaa;
}

.list-heading .icon-sync {
	opacity: 1;
	animation: spin 2s infinite linear;
	display: inline-block;
	margin-right: 4px;
}

.ui-taskbar-list-item {
  display: flex;
	flex-wrap: wrap;
  align-items: center;
	font-size: 14px;
	line-height: 20px;
	width: 100%;
	background: #f1f1f1;
	transition: all ease-out 150ms;
}

.ui-taskbar-list-item .ui-taskbar-title {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	flex: 1;
}

.ui-taskbar-list-item input[type="text"] {
  width: 100%;
  border: none;
  appearance: none;
  outline: none;
	background: transparent;
}

.ui-taskbar-list-item input[type="text"]:focus {
	cursor: text;
}

.ui-taskbar-list-item .ui-taskbar-actions {
	transition: all 200ms ease-in;
	padding-right: 20px;
}

.ui-taskbar-list-item .ui-taskbar-actions a {
	display: inline-block;
	vertical-align: top;
	text-align: center;
	color: #eee;
}

.ui-taskbar-list-item .ui-taskbar-actions a:hover {
	color: #2cc5d2;
}

.ui-taskbar-list-item .ui-taskbar-actions a:active {
	color: #555;
}

.ui-taskbar-list-item .ui-taskbar-actions [class^="icon-"] {
	font-size: 16px;
	line-height: 24px;
	line-height: 3rem;
	text-align: center;
}

.ui-taskbar-list-item.TASK_PINNED .icon-star {
	color: #2cc5d2;
}

.ui-taskbar-list-item.TASK_ARCHIVED input[type="text"] {
	color: #aaaaaa;
}

.ui-taskbar-list-item:hover {
	background-image: linear-gradient(to bottom, #e5f9f7 0%, #f0fffd 100%);
}

.ui-taskbar-list-item:hover .ui-taskbar-checkbox {
	cursor: pointer;
}

.ui-taskbar-list-item+.ui-taskbar-list-item {
	border-top: 1px solid #f0f9fb;
}

.ui-taskbar-list-item.checked input[type="text"] {
	color: #ccc;
	text-decoration: line-through;
}

.ui-taskbar-list-item.checked .delete-item {
	display: inline-block;
}

.loading-item {
	height: 3rem;
	width: 100%;
	background: #ffffff;
	display: flex;
	align-items: center;
	line-height: 1rem;
	padding-left: 16px;
}

.loading-item .glow-ui-taskbar-checkbox, .loading-item .glow-text span {
	animation: glow 1.5s ease-in-out infinite;
	background: #eee;
	color: transparent;
	cursor: progress;
	display: inline-block;
}

.loading-item .glow-ui-taskbar-checkbox {
	margin-right: 16px;
	width: 12px;
	height: 12px;
}

.loading-item+.loading-item {
	border-top: 1px solid #f0f9fb;
}

.ui-taskbar-list-items {
	position: relative;
	background: #ffffff;
	min-height: 288px;
}

.ui-taskbar-list-items .select-placeholder {
	border: none;
	width: 48px;
}

.wrapper-message {
	position: absolute;
	top: 45%;
	right: 0;
	bottom: auto;
	left: 0;
	width: auto;
	height: auto;
	transform: translate3d(0, -50%, 0);
	text-align: center;
}

.wrapper-message [class^="icon-"], .wrapper-message [class*=" icon-"] {
	font-size: 48px;
	line-height: 56px;
	color: #2cc5d2;
	display: block;
}

.wrapper-message .ui-taskbar-title-message {
	font-size: 16px;
	line-height: 24px;
	font-family: 'Nunito Sans', "Helvetica Neue", Helvetica, Arial, sans-serif;
	font-weight: 800;
	color: #555;
}

.wrapper-message .subui-taskbar-title-message {
	font-size: 14px;
	line-height: 20px;
	color: #666;
}

.lists-show {
	min-height: 100vh;
	background: #ffffff;
}

.lists-show nav {
	background: #d3edf4;
	padding: 1.5rem 1.25rem;
	text-align: center;
}

@media screen and (min-width: 40em) {
	.lists-show nav {
		text-align: left;
	}
}

.lists-show nav .ui-taskbar-title-page {
	font-size: 20px;
	line-height: 24px;
	line-height: 2rem;
	cursor: pointer;
	white-space: nowrap;
}

.lists-show nav .ui-taskbar-title-page .ui-taskbar-title-wrapper {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	font-family: 'Nunito Sans', "Helvetica Neue", Helvetica, Arial, sans-serif;
	font-weight: 800;
	color: #1c3f53;
	display: inline-block;
	vertical-align: top;
	max-width: 100%;
}

.ui-taskbar-checkbox {
	display: inline-block;
	height: 3rem;
	position: relative;
	vertical-align: middle;
	width: 44px;
}

.ui-taskbar-checkbox input[type="checkbox"] {
	font-size: 1em;
	visibility: hidden;
}

.ui-taskbar-checkbox input[type="checkbox"]+span:before {
	position: absolute;
	top: 50%;
	right: auto;
	bottom: auto;
	left: 50%;
	width: 0.85em;
	height: 0.85em;
	transform: translate3d(-50%, -50%, 0);
	background: transparent;
	box-shadow: #2cc5d2 0 0 0 1px inset;
	content: '';
	display: block;
}

.ui-taskbar-checkbox input[type="checkbox"]:checked+span:before {
	font-size: 16px;
	line-height: 24px;
	box-shadow: none;
	color: #2cc5d2;
	margin-top: -1px;
	font-family: 'percolate';
	speak: none;
	font-style: normal;
	font-weight: normal;
	font-variant: normal;
	text-transform: none;
	line-height: 1;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	content: "\e65e";
}
</style>