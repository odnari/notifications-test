const dateFormatter = new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'full',
    timeStyle: 'short'
});

function FormattedDate({ date, className }) {
    if (!(date instanceof Date)) {
        date = new Date(date);
    }

    return (
        <time dateTime={date.toISOString()} className={className}>
            {dateFormatter.format(date)}
        </time>
    );
}

export default FormattedDate;