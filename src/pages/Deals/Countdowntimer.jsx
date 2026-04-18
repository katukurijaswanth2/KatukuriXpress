import { useState, useEffect } from "react";

function CountdownTimer({ hrs = 17, min = 36, sec = 42 }) {
  const [time, setTime] = useState({ hrs, min, sec });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { hrs, min, sec } = prev;
        sec--;
        if (sec < 0) { sec = 59; min--; }
        if (min < 0) { min = 59; hrs--; }
        if (hrs < 0) { hrs = 0; min = 0; sec = 0; }
        return { hrs, min, sec };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n) => String(n).padStart(2, "0");

  return (
    <div className="deal-countdown">
      <div className="countdown-unit">
        <span>{pad(time.hrs)}</span>
        <span>HRS</span>
      </div>
      <div className="countdown-unit">
        <span>{pad(time.min)}</span>
        <span>MIN</span>
      </div>
      <div className="countdown-unit">
        <span>{pad(time.sec)}</span>
        <span>SEC</span>
      </div>
    </div>
  );
}

export default CountdownTimer;