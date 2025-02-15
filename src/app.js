import React from 'react'; //WE NEED THIS //importing npm modules. Have to install first
import ReactDOM from 'react-dom';   //WE NEED THIS
import { Provider } from 'react-redux'; //defining store to provide to all our components
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';   //for cross browser styling compatibility
import './styles/styles.scss';

const store = configureStore();

//connecting react-redux to our react app
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));
