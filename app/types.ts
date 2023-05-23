export enum TrashColor {
    paper = '#0582ca',
    glass = '#00FF00',
    plastic = '#ffc300',
    organic = '#432818',
    other = '#000000',
}

export enum TrashType {
    paper = 'paper',
    plastic = 'plastic',
    glass = 'glass',
    organic = 'organic',
    other = 'other',
}

export enum PolishTrashType {
    paper = 'papier',
    plastic = 'plastik',
    glass = 'szkło',
    organic = 'bio',
    other = 'zmieszane',
}

export interface Item {
    id: string;
    name: string;
    dump_into: TrashType;
    barcode?: string;
    material?: string;
}