import CardSlot from "./card-slot";

interface ICardZone {
  cardSlots: number;
}

const MAX_CARD_SLOTS = 9;

export default function CardZone(props: ICardZone) {
  const cardSlots = Math.min(props.cardSlots, MAX_CARD_SLOTS);
  const slotsArray = Array(cardSlots).fill(null);

  return (
    <div className="flex flex-row-reverse gap-2">
      {slotsArray.map((_, index) => (
        <CardSlot key={index} />
      ))}
    </div>
  );
}
