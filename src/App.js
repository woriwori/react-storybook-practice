import React from 'react'
import { Provider } from 'react-redux';
import store from './redux/redux'
import InboxScreen from './components/InboxScreen';

const App = () => (
    <Provider store={store}>
        <InboxScreen />
    </Provider>
)

export default App;
