import Spinner from "@components/ui/spinner/spinner";
import { Artwork } from "@type/types";
import React, {
  Suspense,
  lazy,
  memo,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useParams } from "react-router-dom";
import {
  AddToFav,
  Author,
  Content,
  Image,
  ImagePlaceholder,
  InfoItem,
  InfoList,
  Mock,
  Overview,
  SectionTitle,
  Title,
  Wrapper,
} from "./detail.styles";
const BookmarkButton = lazy(
  () => import("@components/ui/bookmarkButton/bookmarkButton")
);

const Detail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [artwork, setArtwork] = useState<Artwork | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchArtwork = async () => {
      try {
        const response = await fetch(
          `https://api.artic.edu/api/v1/artworks/${id}`
        );
        const data = await response.json();
        setArtwork(data.data);
      } catch (err) {
        setError("Failed to fetch artwork details");
      } finally {
        setLoading(false);
      }
    };
    fetchArtwork();
  }, [id]);

  const renderContent = useMemo(() => {
    if (loading) return <Spinner />;
    if (error) return <div>{error}</div>;
    if (!artwork) return <Spinner />;

    return (
      <Wrapper>
        <ImagePlaceholder>
          {artwork.image_id ? (
            <Image
              src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
              alt={artwork.title}
            />
          ) : (
            <Mock>
              <div>No Image</div>
            </Mock>
          )}
          <AddToFav>
            <Suspense fallback={<Spinner />}>
              <BookmarkButton id={artwork.id} />
            </Suspense>
          </AddToFav>
        </ImagePlaceholder>
        <Content>
          <div>
            <Title>{artwork.title}</Title>
            <Author>{artwork.artist_title}</Author>
            <Date>1535-45</Date>
          </div>
          <Overview>
            <SectionTitle>Overview</SectionTitle>
            <InfoList>
              <InfoItem>
                <strong>Artist nationality:</strong> {artwork.artist_display}
              </InfoItem>
              <InfoItem>
                <strong>Dimensions:</strong> Sheet: {artwork.dimensions}
              </InfoItem>
              <InfoItem>
                <strong>Credit Line:</strong> {artwork.credit_line}
              </InfoItem>
              <InfoItem>
                <strong>Repository:</strong> {artwork.department_title}
              </InfoItem>
              <InfoItem>
                {artwork.is_public_domain ? <b>Public</b> : <b>Private</b>}
              </InfoItem>
            </InfoList>
          </Overview>
        </Content>
      </Wrapper>
    );
  }, [loading, error, artwork]);

  return renderContent;
};

export default memo(Detail);
