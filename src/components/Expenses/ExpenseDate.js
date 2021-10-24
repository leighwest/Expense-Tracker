import './ExpenseDate.css'

const ExpenseDate = props => {

    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense_date__month">{month}</div>
            <div className="expense_date__year">{day}</div>
            <div className="expense_date__year">{year}</div>
        </div>

    );
}

export default ExpenseDate;