import { useState, useEffect } from "react";

export const useDateTime = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const dateStr = dateTime
    .toLocaleDateString("en-UK", {
      weekday: "short",
      day: "numeric",
      month: "short",
    })
    .replace(",", "");

  const timeStr = dateTime.toLocaleTimeString("en-UK", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return { dateTime, dateStr, timeStr };
};
