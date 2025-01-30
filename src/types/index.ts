export interface ImageType {
  id: string;
  webformatURL: string;
  largeImageURL: string;
  alt_description: string;
}

export interface SearchResponse {
  hits: ImageType[];
  total: number;
}
