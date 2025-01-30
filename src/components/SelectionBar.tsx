import React from "react";
import styled from "@emotion/styled";
import JSZip from "jszip";
import { ImageType } from "../types";

const Bar = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #0066cc;
  color: white;
  padding: 15px 25px;
  border-radius: 25px;
  display: flex;
  gap: 20px;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

const Button = styled.button`
  background-color: white;
  color: #0066cc;
  border: none;
  padding: 8px 15px;
  border-radius: 15px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

interface SelectionBarProps {
  selectedCount: number;
  onClear: () => void;
  selectedImages: ImageType[];
}

const SelectionBar: React.FC<SelectionBarProps> = ({
  selectedCount,
  onClear,
  selectedImages,
}) => {
  const downloadImages = async (): Promise<void> => {
    const zip = new JSZip();
    const imagesToDownload = selectedImages.slice(0, 5);

    try {
      for (let i = 0; i < imagesToDownload.length; i++) {
        const response = await fetch(imagesToDownload[i].largeImageURL);
        const blob = await response.blob();
        zip.file(`image-${i + 1}.jpg`, blob);
      }

      const content = await zip.generateAsync({ type: "blob" });
      const url = window.URL.createObjectURL(content);
      const link = document.createElement("a");
      link.href = url;
      link.download = "selected-images.zip";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading images:", error);
    }
  };

  return (
    <Bar>
      <span>
        {selectedCount} {selectedCount === 1 ? `image` : `images`} selected
      </span>
      <Button onClick={onClear}>Clear</Button>
      <Button onClick={downloadImages}>Download Selected</Button>
    </Bar>
  );
};

export default SelectionBar;
