import React from 'react';
import { connect } from 'react-redux';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

export class EditExpense extends React.Component {
    onClick = () => {
        this.props.startRemoveExpense({ id: this.props.expense.id });
        this.props.history.push('/dashboard');
    }
    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/dashboard');
    }
    render() {
        return (
            <div>
            <ExpenseForm 
                expense={this.props.expense}
                onSubmit={this.onSubmit}
            />
            <button 
                onClick={this.onClick}
            >
                Remove
            </button>
        </div>
        )
    };
}

// const EditExpense = (props) => {
//     return (
//         <div>
//             <ExpenseForm 
//                 expense={props.expense}
//                 onSubmit={(expense) => {
//                     props.dispatch(editExpense(props.expense.id, expense));
//                     props.history.push('/');
//                 }}
//             />
//             <button 
//                 onClick={() => {
//                     props.dispatch(removeExpense({ id: props.expense.id }));
//                     props.history.push('/');
//                 }}
//             >
//                 Remove
//             </button>
//         </div>
//     )
// };

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
};

const mapDispatchToProps = (dispatch) => ({
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data)),
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);