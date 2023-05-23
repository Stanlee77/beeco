import Image from "next/image";
import recycleIcon from "@/public/icons/recycle.svg";
import { PolishTrashType, TrashColor, TrashType } from "@/app/types";
import { FC } from "react";
import { checkIsContentLight } from "@/app/uitls";

interface TrashBinProps {
  dumpInto: TrashType;
  handleChoice: (choice: TrashType) => void;
}

const TrashBin: FC<TrashBinProps> = ({ dumpInto, handleChoice }) => {
  const name = PolishTrashType[dumpInto];
  const color = TrashColor[dumpInto];
  const isContentLight = checkIsContentLight(color);

  return (
    <button
      className="flex flex-col justify-center items-center text-xl"
      onClick={() => handleChoice(dumpInto)}
    >
      <div
        className="w-[115px] h-[15px] rounded-md mb-1"
        style={{ backgroundColor: color }}
      />
      <div
        className="flex w-[110px] h-[80px] rounded-b-3xl rounded-t-md flex-col justify-center items-center mb-1"
        style={{
          backgroundColor: color,
          color: isContentLight ? "white" : "black",
        }}
      >
        <h3>{name}</h3>
        <Image
          src={recycleIcon}
          alt="recycle icon"
          style={{
            filter: isContentLight
              ? "invert(79%) sepia(63%) saturate(0%) hue-rotate(212deg) brightness(109%) contrast(109%)"
              : "none",
          }}
        />
      </div>
    </button>
  );
};

export default TrashBin;
