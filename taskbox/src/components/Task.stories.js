import React from 'react';

import Task from './Task';

export default {
    component: Task, // 컴포넌트
    title: 'Task', // 브라우저의 사이드바에 표시되는 이름
};

const Template = args => <Task {...args} />;

// Task 컴포넌트를 함수로 복사한뒤 거기에 props를 넘겨준다

// export하면 다른 스토리에서 이걸 재사용할 수 있음
export const Default = Template.bind({});
Default.args = {
    task: {
        id: '1',
        title: 'Test Task',
        state: 'TASK_INBOX',
        updatedAt: new Date(2018, 0, 1, 9, 0),
    },
};

export const Pinned = Template.bind({});
Pinned.args = {
    task: {
        ...Default.args.task,
        state: 'TASK_PINNED',
    },
};

export const Archived = Template.bind({});
Archived.args = {
    task: {
        ...Default.args.task,
        state: 'TASK_ARCHIVED',
    },
};