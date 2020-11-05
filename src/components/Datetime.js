import { useEffect, useState } from 'react';

function Datetime() {
  const [time, setTime] = useState({hour: '', minute: '', second: ''});
  const [date, setDate] = useState('');
  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  const setTimeAndDate = () => {
    setDate(new Date().toLocaleDateString("en-US", options));
    const [h, m, s] = new Date().toLocaleTimeString("en-US").split(/:| /)
    setTime({hour: h, minute: m, second: s});
  };

  useEffect(() => {
    if (!date) {
      setTimeAndDate();
    }

    const interval = setInterval(() => {
      setTimeAndDate();
    }, 1000);


    return () => clearInterval(interval);
  });

  // TODO: Update this when the time changes
  const {hour, minute, second} = time;
  return (
    <div className="datetime">
      <p>{date}</p>
      <p>{`${hour}:${minute}:${second}`}</p>
    </div>
  );
}

export default Datetime;
