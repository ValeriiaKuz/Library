export type bookForShelfType = {
  bookId: string;
  bookInfo: bookType;
};

export type bookType = {
  title: string;
  authors: string[];
  publisher?: string;
  publishedDate?: string;
  description: string;
  industryIdentifiers?: [
    {
      type: string;
      identifier: string;
    },
    {
      type: string;
      identifier: string;
    },
  ];
  readingModes?: {
    text: boolean;
    image: boolean;
  };
  pageCount: number;
  printedPageCount?: number;
  printType?: string;
  categories: [string];
  maturityRating?: string;
  allowAnonLogging?: boolean;
  contentVersion?: string;
  panelizationSummary?: {
    containsEpubBubbles: boolean;
    containsImageBubbles: boolean;
  };
  imageLinks: {
    smallThumbnail: string;
    thumbnail: string;
    small?: string;
    medium?: string;
    large?: string;
    extraLarge?: string;
  };
  language?: string;
  previewLink?: string;
  infoLink?: string;
  canonicalVolumeLink?: string;
};

export enum Shelf {
  "Классическая русская литература" = 1001,
  "Мировая классика" = 1002,
  "Лауреаты пулитцеровской премии" = 1003,
}
