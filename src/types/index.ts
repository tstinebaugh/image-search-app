export interface ImageType {
  id: string;
  webformatURL: string;
  largeImageURL: string;
}

export interface SearchResponse {
  hits: ImageType[];
  total: number;
}
