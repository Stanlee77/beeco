import { PolishTrashType, TrashColor, TrashType } from "@/app/types";

interface ItemCardProps {
    name: string
    dumpInto: TrashType | TrashColor
}

const ItemCard = ({ dumpInto, name }: ItemCardProps) => {
    // @ts-ignore
    const cardColor: TrashColor = TrashColor[dumpInto];
    // @ts-ignore
    const dumpIntoName: PolishTrashType = PolishTrashType[dumpInto];
    const isFontLight = (cardColor === TrashColor.other) || (cardColor === TrashColor.organic);

    return (
        <div className={`flex flex-col justify-center items-center rounded-lg p-4 my-4`} style={{ backgroundColor: cardColor, color: isFontLight ? 'white' : 'black' }}>
            <h1 className="text-2xl font-bold">{name}</h1>
            <p className="text-lg">{dumpIntoName}</p>
        </div>
    )
};

export default ItemCard;
