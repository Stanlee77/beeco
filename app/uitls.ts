import { TrashColor } from "./types";

export const checkIsContentLight = (color: TrashColor) => color === TrashColor.other ||
    color === TrashColor.organic ||
    color === TrashColor.paper;
