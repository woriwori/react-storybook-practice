import React from 'react';

import {TaskList} from './TaskList';
import {defaultTasks} from '../mock/tasks'
import TaskContext from "../context/TaskContext";

export default {
    component: TaskList,
    title: 'TaskList',
};

const Template = args => <TaskContext.Provider value={args.value}><TaskList {...args.params}/></TaskContext.Provider>;

export const Default = Template.bind({});
Default.args = {
    value: {
        tasks: defaultTasks
    },
    params: {}
};

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
    value: {
        tasks: [
            ...defaultTasks,
            { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' }
        ]
    },
    params: {}
};

export const Loading = Template.bind({});
Loading.args = {
    value: {
        tasks: []
    },
    params: {
        loading: true
    }
};

export const Empty = Template.bind({});
Empty.args = {
    value: {
        tasks: []
    },
    params: {
        loading: false
    }
};