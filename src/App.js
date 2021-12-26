import React from 'react'
import InboxScreen from './components/InboxScreen';
import TaskContext from './context/TaskContext'

// initial state
const defaultTasks = [
    { id: '1', title: 'Something', state: 'TASK_INBOX' },
    { id: '2', title: 'Something more', state: 'TASK_INBOX' },
    { id: '3', title: 'Something else', state: 'TASK_INBOX' },
    { id: '4', title: 'Something again', state: 'TASK_INBOX' },
];

const App = () => (
    <TaskContext.Provider value={{tasks: defaultTasks}}>
        <InboxScreen />
    </TaskContext.Provider>
)

export default App;
