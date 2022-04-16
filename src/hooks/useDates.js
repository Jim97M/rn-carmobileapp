export default (startDate, endDate) => {
    const getFormattedDate = date => {
        const year = date.getFullYear();
        const month = (1 + date.getMonth()).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return month + '/' + day + '/' + year;
    }

    const pickDate = startDate ? getFormattedDate(startDate) : null;
    const returnDate = endDate ? getFormattedDate(endDate) : null;

    return [startDate, endDate];
}

