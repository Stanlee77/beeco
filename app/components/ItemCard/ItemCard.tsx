import { PolishTrashType, TrashColor, TrashType } from "@/app/types";
import { checkIsContentLight } from "@/app/uitls";

interface ItemCardProps {
  name: string;
  dumpInto: TrashType;
}

const ItemCard = ({ dumpInto, name }: ItemCardProps) => {
  // @ts-ignore
  const cardColor: TrashColor = TrashColor[dumpInto];
  const dumpIntoName = PolishTrashType[dumpInto];
  const isContentLight = checkIsContentLight(cardColor);

  return (
    <div
      className={`flex flex-col justify-center items-center rounded-lg p-4 my-4`}
      style={{
        backgroundColor: cardColor,
        color: isContentLight ? "white" : "black",
      }}
    >
      <h1 className="text-2xl font-bold">{name}</h1>
      <p className="text-lg">{dumpIntoName}</p>
    </div>
  );
};

export default ItemCard;
