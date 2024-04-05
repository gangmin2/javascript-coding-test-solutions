let date = new Date();

let yyyy = date.getFullYear();
let mm = formatDate(date.getMonth() + 1);
let dd = formatDate(date.getDate());

console.log(`${yyyy}-${mm}-${dd}`);

function formatDate(date) {
    return (date < 10) ? '0' + date : date;
}