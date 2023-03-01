import s from './Data.module.scss' 

const Data = ({date}) => {

    let data = date;
    let year = data.getFullYear();
    let month = data.getMonth();
    let day = data.getDate();
    let hour = data.getHours();
    let minutes = data.getMinutes();
    let seconds = data.getSeconds();

    switch (month) {
  case 0: month="января"; break;
  case 1: month="февраля"; break;
  case 2: month="марта"; break;
  case 3: month="апреля"; break;
  case 4: month="мае"; break;
  case 5: month="июня"; break;
  case 6: month="июля"; break;
  case 7: month="августа"; break;
  case 8: month="сентября"; break;
  case 9: month="октября"; break;
  case 10: month="ноября"; break;
  case 11: month="декабря"; break;
  default: month='месяц'; break;
}

    return <span className={s.Data}>последние изменения {day} {month} {year} в {hour}:{minutes}:{seconds}</span>    
}

export default Data;