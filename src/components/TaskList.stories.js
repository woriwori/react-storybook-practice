import React from 'react';

import {TaskList} from './TaskList';
import {defaultTasks} from '../mock/tasks'
import TaskContext from "../context/TaskContext";

export default {
    component: TaskList,
    title: 'TaskList',
};

const Template = args => <TaskContext.Provider {...args}><TaskList /></TaskContext.Provider>;

export const Default = Template.bind({});
Default.args = {
    value: {
        tasks: defaultTasks
    }
};

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
    value: {
        tasks: [
            ...defaultTasks,
            { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' }
        ]
    }
};

export const Loading = Template.bind({});
Loading.args = {
    tasks: [],
    loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
    // Shaping the stories through args composition.
    // Inherited data coming from the Loading story.
    ...Loading.args,
    loading: false,
};