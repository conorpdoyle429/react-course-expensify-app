import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    var result = selectExpensesTotal([]);
    expect(result).toBe(0);
});

test('should add up a single expense', () => {
    var result = selectExpensesTotal([expenses[0]]);
    expect(result).toBe(195);
});

test('should add up multiple expenses', () =>{
    var result = selectExpensesTotal(expenses);
    expect(result).toBe(114195);
});