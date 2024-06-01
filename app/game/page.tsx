import Gameboard from "./gameboard";

export default function Game() {
  return (
    <div className="flex justify-center items-center w-screen h-screen overflow-y-hidden">
      <Gameboard />
    </div>
  );
}