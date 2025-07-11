export interface listing {
  id: string;
  title: string;
  description: string;
  make: string;
  model: string;
  year: number;
  pricePerDay: number;
  location: string;
  imageUrl: string;
  status: string;
}

export interface FetchSuccess {
  data: { listings: listing[] };
  error: null;
}

export interface FetchError {
  data: null;
  error: unknown;
}

export type FetchListResult = FetchSuccess | FetchError;


export type FilterValueType = {
  status: string; // or status?: string if it's optional
};

export type ThemeContextType = {
  currentIndex: number;
  setCurrentIndex:  React.Dispatch<React.SetStateAction<number>>;
  showModal:boolean,
  setShowModal:(value:boolean)=>void
  editList: listing | null 
  setEditList:React.Dispatch<React.SetStateAction<listing| null>>;
  paginationData:listing[][],
  filterValue:FilterValueType,
 setFilterValue: React.Dispatch<React.SetStateAction<FilterValueType>>;
};