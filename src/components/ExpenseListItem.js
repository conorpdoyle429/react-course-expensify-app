import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({amount, description, createdAt, id}) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p> amount of {amount} created at {createdAt}</p>
    </div>
);

export default ExpenseListItem;