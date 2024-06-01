import CardSlot from "./card-slot";

interface ICardZone {
  cardSlots: number;
  player: 1 | 2;
}

const MAX_CARD_SLOTS = 10;

export default function CardZone(props: ICardZone) {
  const cardSlots = Math.min(props.cardSlots, MAX_CARD_SLOTS - 1);
  const slotsArray = Array(cardSlots).fill(null);

  return (
    <div className="flex flex-row gap-2">
      {slotsArray.map((_, index) => (
        <CardSlot player={props.player} key={index} />
      ))}
    </div>
  );
}
