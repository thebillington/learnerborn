import PlayerMat from "./player-mat";

export default function Gameboard() {
	return (
		<div>
			<div>
				<h1 className="flex justify-center text-red-300 font-bold text-4xl">
					Shit has been pushed, without card backs. Just gone to wipe the smeg
					off me jap in the shower
				</h1>
				<div className="flex justify-center items-center h-screen">
					<div className="flex flex-col px-2 gap-6">
						<PlayerMat />
						<PlayerMat />
					</div>
				</div>
			</div>
		</div>
	);
}
