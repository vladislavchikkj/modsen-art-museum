import React, { useContext, useState } from "react";
import { ITEMS_PER_PAGE } from "../../../constants";
import ArtContext from "../../../context/ArtContext";
import Pagination from "../../ui/Pagination";
import Spinner from "../../ui/Spinner";
import TitleSection from "../../ui/TitleSection";
import { Gallery, Wrapper } from "./Topics.styles";
import TopicsCard from "./TopicsCard";

const Topics: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { artworks, loading, error } = useContext(ArtContext);

  const totalItems = artworks.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const selectedArtworks = artworks.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <Wrapper>
      <TitleSection subtitle="Topics for you" title="Our special gallery" />
      <Gallery>
        {loading ? (
          <Spinner />
        ) : error ? (
          <div>{error}</div>
        ) : (
          selectedArtworks.map((artwork) => (
            <TopicsCard key={artwork.id} artwork={artwork} />
          ))
        )}
      </Gallery>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </Wrapper>
  );
};

export default Topics;
