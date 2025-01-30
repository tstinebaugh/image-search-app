import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import ImageGallery from "./ImageGallery";
import SelectionBar from "./SelectionBar";
import { searchImages } from "../services/imageApi";
import { ImageType } from "../types";

const SearchContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const SearchForm = styled.form`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const SearchButton = styled.button`
  padding: 10px 20px;
  background-color: #0066cc;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0052a3;
  }
`;

const SearchPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [images, setImages] = useState<ImageType[]>([]);
  const [selectedImages, setSelectedImages] = useState<ImageType[]>([]);
  const { term } = useParams<{ term: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (term) {
      setSearchTerm(term);
      handleSearch(term);
    }
  }, [term]);

  const handleSearch = async (searchTerm: string): Promise<void> => {
    try {
      const results = await searchImages(searchTerm);
      setImages(results);
      setSelectedImages([]);
    } catch (error) {
      console.error("Error searching images:", error);
    }
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
  };

  const toggleImageSelection = (image: ImageType): void => {
    setSelectedImages((prev) =>
      prev.includes(image)
        ? prev.filter((img) => img !== image)
        : [...prev, image]
    );
  };

  const clearSelection = (): void => {
    setSelectedImages([]);
  };

  return (
    <SearchContainer>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter search term..."
        />
        <SearchButton type="submit">Search</SearchButton>
      </SearchForm>

      <ImageGallery
        images={images}
        selectedImages={selectedImages}
        onImageClick={toggleImageSelection}
      />

      {selectedImages.length > 0 && (
        <SelectionBar
          selectedCount={selectedImages.length}
          onClear={clearSelection}
          selectedImages={selectedImages}
        />
      )}
    </SearchContainer>
  );
};

export default SearchPage;
