import Image from "next/image";

export default function CardSlot() {
  return (
    <div className="w-auto h-[8%] relative">
      <Image
        src="/card-back.png"
        alt="Card"
        layout="fill"
        objectFit="contain"
      />
    </div>
  );
}