import CardSlot from "./card-slot";
import CardZone from "./card-zone";

export default function PlayerMat() {
    return (
    <div className="flex p-2 border-4">
      <div id="side-area" className="flex flex-col gap-4">
        <Deck/>
        <Discard />
      </div>
      <div id="play-area" className="flex flex-col gap-4 pl-4">
        <CardZone cardSlots={8}/>
        <CardZone cardSlots={9}/>
      </div>
  
    </div>);
}

function Deck() {
    return <CardSlot/>;
  }
  
  function Discard() {
    return <CardSlot/>;
  }
  