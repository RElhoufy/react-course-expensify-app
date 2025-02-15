import React from 'react';
import moment from 'moment';    // for a thirdparty date library, a standard when dealing with dates
import { SingleDatePicker } from 'react-dates'; //react datepicker
import 'react-dates/lib/css/_datepicker.css';   //react datepicker stylesheet

const now = moment();
console.log(now.format('MMM Do YYYY'));

class ExpenseForm extends React.Component {
    constructor(props) {    //defining a constructor because we need access to the props being passed in
        super(props);

        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: undefined
        };
    }
    
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    };

    onAmountChange = (e) => {
        const amount = e.target.value;
        
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }

    };

    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    };

    onFocusChange = ({ focused }) => {  //look at documentation for information about props being used
        this.setState(() => ({ calendarFocused: focused }));
    };

    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: 'Invalid description or amount please submit again' }));
        } else {
            this.setState(() => ({ error: undefined }));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    };

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input type="text" placeholder="Description" autoFocus value={this.state.description} onChange={this.onDescriptionChange}/>
                    <input type="text" placeholder="Amount" value={this.state.amount} onChange={this.onAmountChange} />
                    <SingleDatePicker date={this.state.createdAt} onDateChange={this.onDateChange} focused={this.state.calendarFocused} onFocusChange={this.onFocusChange} numberOfMonths={1} isOutsideRange={(day) => false } />
                    <textarea placeholder="Add a note for your expense (optional)" value={this.state.note} onChange={this.onNoteChange}></textarea>
                    <button>Add Expense</button> 
                </form>
            </div>
        )
    }
}


//we're keeping track of changes to the local state. Once the user submits then the state will get sent to store
export default ExpenseForm;