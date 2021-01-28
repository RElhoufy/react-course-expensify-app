import React from 'react'; //WE NEED THIS //importing npm modules. Have to install first
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

const AddExpensePage = (props) => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm onSubmit={(expense) => {
            props.dispatch(addExpense(expense));
            props.history.push('/'); //redirecting pages
        }} />
    </div>
);

export default connect()(AddExpensePage);