import axios from "axios";
import { ImageType, SearchResponse } from "../types";

export const searchImages = async (term: string): Promise<ImageType[]> => {
  if (!process.env.REACT_APP_PIXABAY_API_KEY) {
    throw new Error("Missing environment variable REACT_APP_PIXABAY_API_KEY");
  }
  const pixabay_api_key = process.env.REACT_APP_PIXABAY_API_KEY;

  try {
    const response = await axios.get<SearchResponse>(
      `https://pixabay.com/api/?key=${pixabay_api_key}&q=${term}&image_type=photo&pretty=true`,
      {
        params: {
          query: term,
        },
      }
    );
    console.log(response);
    return response.data.hits;
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
};
