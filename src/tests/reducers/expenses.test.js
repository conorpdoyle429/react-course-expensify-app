import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () =>{
    const state = expensesReducer(undefined, {type: '@@INIT'});

    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([ expenses[0], expenses[2] ]);
});

test('should not remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add expense', () => {
    const expense = {
        id: '5',
        description: 'test',
        note: 'testing',
        amount: 100,
        createdAt: 1000
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(
        [
            ...expenses, 
            expense
        ]
    );
});

test('should edit expense', () => {
    const amount = 123000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount
        }
    };

    const state = expensesReducer(expenses,action);
    expect(state[1].amount).toBe(amount);
});

test('should not edit expense if id not found', () => {
    const update = {note: 'new note'};
    const action = {
        type: 'EDIT_ACTION',
        id: '-1',
        update
    }

    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});