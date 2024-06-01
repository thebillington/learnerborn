'use client'
import Image from "next/image";
import { useState } from "react";
import type { ICardSlot } from '../../types/card-slot'
import React from "react";


export default function CardSlot(props: ICardSlot) {
  const [showFullImage, setShowFullImage] = useState(false);
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });

  const onMouseEnter = (e: React.MouseEvent<HTMLImageElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top;
    setHoverPosition({ x, y });
    setShowFullImage(true);
  };

  const onMouseLeave = () => {
    setShowFullImage(false);
  }

  const rotated = props.player === 2;

  const flipStyle = rotated ? { transform: 'rotate(180deg)' } : {};
  const fullImagePosition = rotated ? { right: hoverPosition.x - 336, bottom: hoverPosition.y - 160 } : { left: hoverPosition.x - 112, top: hoverPosition.y - 160 };

  if (showFullImage) {
    return (
      <div>
        {(showFullImage) &&
          <Image
            src="/card-back.png"
            onMouseLeave={onMouseLeave}
            alt="Card"
            width="224"
            height="320"
            style={{ position: "absolute", ...flipStyle, ...fullImagePosition }}
          />
        }
        <Image
          src="/card-back.png"
          alt="Card"
          width="112"
          height="160"
        />
      </div>
    )
  }

  return (
    <div>
      <Image
        onMouseEnter={onMouseEnter}
        src="/card-back.png"
        alt="Card"
        width="112"
        height="160"
      />
    </div>

  );
}
