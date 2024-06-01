import type { ICardSlot } from '../../types/card-slot';
import CardSlot from './card-slot';
import CardZone from "./card-zone";

interface IPlayerMat {
  player: 1 | 2;
}

export default function PlayerMat(props: IPlayerMat) {
  return (
    <div className={`flex flex-col gap-16 ${props.player === 2 ? "rotate-180" : ''}`}>
      <div className="flex gap-4">
        <div id="play-area" className="flex flex-col gap-2">
          <CardZone player={props.player} cardSlots={10} />
          <CardZone player={props.player} cardSlots={10} />
        </div>
        <div id="side-area" className="flex flex-col gap-2">
          <Deck player={props.player} />
          <Discard player={props.player} />
        </div>
      </div>
      <div id="hand" className="flex justify-center">
        <CardZone player={props.player} cardSlots={7} />
      </div>
    </div>
  );
}

function Deck(props: ICardSlot) {
  return <CardSlot player={props.player} />;
}

function Discard(props: ICardSlot) {
  return <CardSlot player={props.player} />;
}
