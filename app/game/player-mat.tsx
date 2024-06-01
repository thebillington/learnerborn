import CardSlot from "./card-slot";
import CardZone from "./card-zone";

export default function PlayerMat() {
  return (
    <div className="flex gap-4">
      <div id="play-area" className="flex flex-col gap-2">
        <CardZone cardSlots={10} />
        <CardZone cardSlots={10} />
      </div>
      <div id="side-area" className="flex flex-col gap-2">
        <Deck />
        <Discard />
      </div>
    </div>);
}

function Deck() {
  return <CardSlot />;
}

function Discard() {
  return <CardSlot />;
}
