import * as TaskListStories from '../components/TaskList.stories';
import { action } from '@storybook/addon-actions';

const store = {
    getState: () => {
        return {
            tasks: TaskListStories.Default.args.tasks,
        };
    },
    subscribe: () => 0,
    dispatch: action('dispatch'),
};

export default store;