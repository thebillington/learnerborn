import CardSlot from "./card-slot";
import CardZone from "./card-zone";

export default function PlayerMat() {
  return (
    <div className="flex">
      <div id="side-area" className="flex flex-col">
        <Deck />
        <Discard />
      </div>
      <div id="play-area" className="flex flex-col">
        <CardZone cardSlots={8} />
        <CardZone cardSlots={9} />
      </div>

    </div>);
}

function Deck() {
  return <CardSlot />;
}

function Discard() {
  return <CardSlot />;
}
