import React, { useEffect, useState } from "react";
// import { dateFns } from "date-fns";
import getHours from "date-fns/getHours";
import getMinutes from "date-fns/getMinutes";
import getSeconds from "date-fns/getSeconds";
function getDate(date) {
  return {
    hours: getHours(date),
    minutes: getMinutes(date),
    seconds: getSeconds(date),
  };
}
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
const ClockPage = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setTimeout(() => {
      setDate(new Date());
    }, 1000);
  }, [date]);
  // console.log(date);
  const time = getDate(date);
  return (
    <div>
      <h1>Clock</h1>
      <h1>
        {formatTime(time.hours)}:{formatTime(time.minutes)}:
        {formatTime(time.seconds)}
      </h1>
    </div>
  );
};

export default ClockPage;
