import { TrashColors } from "@/app/utils";

interface ItemCardProps {
    item: {
        name: string
        dumpInto: string
    }
    color: string
}

const ItemCard = ({ item, color }: ItemCardProps) => {
    const isFontLight = (color === TrashColors.black) || (color === TrashColors.brown);

    return (
        <div className={`flex flex-col justify-center items-center rounded-lg p-4 my-4`} style={{ backgroundColor: color, color: isFontLight ? 'white' : 'black' }}>
            <h1 className="text-2xl font-bold">{item.name}</h1>
            <p className="text-lg">{item.dumpInto}</p>
        </div>
    )
};

export default ItemCard;
