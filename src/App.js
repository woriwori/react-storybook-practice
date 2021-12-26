import React from 'react'
import InboxScreen from './components/InboxScreen';
import TaskContext from './context/TaskContext'
import {defaultTasks} from './mock/tasks'


const App = () => (
    <TaskContext.Provider value={{tasks: defaultTasks}}>
        <InboxScreen />
    </TaskContext.Provider>
)

export default App;
