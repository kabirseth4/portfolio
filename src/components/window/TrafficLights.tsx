export interface TrafficLightsProps {
  closeFunc: () => void;
}

export const TrafficLights = ({ closeFunc }: TrafficLightsProps) => {
  return (
    <div className="absolute left-3 top-3 flex gap-2">
      <button className="h-3 w-3 rounded-full bg-red-500" onClick={closeFunc} />
      <button className="h-3 w-3 rounded-full bg-yellow-500" />
      <button className="h-3 w-3 rounded-full bg-green-500" />
    </div>
  );
};
