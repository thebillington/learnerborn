import PlayerMat from "./player-mat";

export default function Game() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col px-2 gap-6">
        <PlayerMat />
        <PlayerMat />
      </div>
    </div>
  );
}