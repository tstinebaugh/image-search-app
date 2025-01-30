import React from "react";
import styled from "@emotion/styled";
import { ImageType } from "../types";

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px 0;
`;

interface ImageContainerProps {
  selected: boolean;
}

const ImageContainer = styled.div<ImageContainerProps>`
  position: relative;
  aspect-ratio: 1;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${(props) =>
      props.selected ? "rgba(0, 102, 204, 0.3)" : "transparent"};
    border: ${(props) => (props.selected ? "3px solid #0066cc" : "none")};
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

interface ImageGalleryProps {
  images: ImageType[];
  selectedImages: ImageType[];
  onImageClick: (image: ImageType) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  selectedImages,
  onImageClick,
}) => {
  return (
    <Gallery>
      {images.map((image) => (
        <ImageContainer
          key={image.id}
          selected={selectedImages.includes(image)}
          onClick={() => onImageClick(image)}
        >
          <Image src={image.webformatURL} />
        </ImageContainer>
      ))}
    </Gallery>
  );
};

export default ImageGallery;
