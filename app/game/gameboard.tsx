import PlayerMat from "./player-mat";

export default function Gameboard() {
	return (
		<div>
			<div>
				<div className="flex justify-center items-center w-full h-full">
					<div className="flex flex-col">
						<PlayerMat />
						<PlayerMat />
					</div>
				</div>
			</div>
		</div>
	);
}
