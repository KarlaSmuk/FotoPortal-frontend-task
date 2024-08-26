export type PhotoDetailsPageData = {
    gallery: string;
    author: string;
    agency: string;
    name: string;
    url: string;
    description: string;
    sizes: SizesData[];
    keywords: string[];
    notes: string[];
};

export interface SizesData {
    size: string;
    type: string;
    width: string;
    height: string;
    price: string;
}
