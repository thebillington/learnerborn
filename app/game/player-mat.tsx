import CardSlot from "./card-slot";
import CardZone from "./card-zone";

interface IPlayerMat {
  player: 1 | 2;
}

export default function PlayerMat( props: IPlayerMat) {
  return (
    <div className={`flex flex-col gap-16 ${props.player === 2 ? "rotate-180" : ''}`}>
      <div className="flex gap-4">
        <div id="play-area" className="flex flex-col gap-2">
          <CardZone cardSlots={10} />
          <CardZone cardSlots={10} />
        </div>
        <div id="side-area" className="flex flex-col gap-2">
          <Deck />
          <Discard />
        </div>
      </div>
      <div id="hand" className="flex justify-center">
        <CardZone cardSlots={7} />
      </div>
    </div>
    );
}

function Deck() {
  return <CardSlot />;
}

function Discard() {
  return <CardSlot />;
}
