export function formatDate(inputDate) {
  let newDate = inputDate;
  newDate = new Date(newDate);
  newDate = newDate.toLocaleDateString('en-GB');

  return newDate;
}


export default {
  formatDate
};