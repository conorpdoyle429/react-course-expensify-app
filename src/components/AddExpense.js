import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';

export class AddExpense extends React.Component {
    onSubmit = (expense) => {
        this.props.addExpense(expense);
        this.props.history.push('/');
    };   
    render() {
        return (
            <div>
                <h1>This is from my add expense component</h1>
                <ExpenseForm 
                    onSubmit={this.onSubmit}
                />
            </div>
        )
        
    }
}

// USED A CLASS HERE INSTEAD OF FUNCTION 
// don't want to have onSubmit created inline as it will cause unecessary rerendering

// const AddExpense = (props) => (
//     <div>
//         <h1>This is from my add expense component</h1>
//         <ExpenseForm 
//             onSubmit={(expense) => {
//                 console.log(expense);
//                 // props.dispatch(addExpense(expense));
//                 props.onSubmit(expense);
//                 props.history.push('/');
//             }}
//         />
//     </div>
// );


// pass this as second argument in connect
// this allows us to be able to test props.dispatch(...) with jest
const mapDispatchToProps = (dispatch) => ({
        addExpense: (expense) => dispatch(addExpense(expense))
    });

export default connect(undefined, mapDispatchToProps)(AddExpense);