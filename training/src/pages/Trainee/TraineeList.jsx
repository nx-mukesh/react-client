import moment from 'moment';

const getDateFormatted = (date) =>{
  moment(date).format('MMMM Do YYYY, h:mm:ss a');
}
console.log(getDateFormatted())