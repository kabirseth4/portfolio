import { useDateTime } from "../hooks/useDateTime";

export const MenuBarClock = () => {
  const { dateStr, timeStr } = useDateTime();

  return (
    <div className="flex gap-2 px-2">
      <div>{dateStr}</div>
      <div>{timeStr}</div>
    </div>
  );
};
