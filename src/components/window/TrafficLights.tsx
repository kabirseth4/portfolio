export interface TrafficLightsProps {
  classname?: string;
  closeFunc: () => void;
}

export const TrafficLights = ({ classname, closeFunc }: TrafficLightsProps) => {
  return (
    <div className={`flex gap-2 ${classname ? classname : ""}`}>
      <button className="h-3 w-3 rounded-full bg-red-500" onClick={closeFunc} />
      <button className="h-3 w-3 rounded-full bg-yellow-500" />
      <button className="h-3 w-3 rounded-full bg-green-500" />
    </div>
  );
};
