import PlayerMat from "./player-mat";

export default function Gameboard() {
	return (
		<div className="flex flex-col gap-6">
			<PlayerMat player={2} />
			<PlayerMat player={1} />
		</div>
	);
}
