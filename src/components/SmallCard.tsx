import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import BookmarkButton from './BookmarkButton'

interface SmallCardProps {
  id: number
  title: string
  author: string
  status: boolean
  imageId: string
  onRemove?: (id: number) => void
}

const SmallCard: React.FC<SmallCardProps> = ({
  id,
  title,
  author,
  status,
  imageId,
  onRemove,
}) => {
  return (
    <Card to={`/detail/${id}`}>
      <ImagePlaceholder>
        {imageId ? (
          <Image
            src={`https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`}
            alt={title}
          />
        ) : (
          'No Image'
        )}
      </ImagePlaceholder>
      <Info>
        <Title>{title}</Title>
        <Author>{author}</Author>
        <Status>
          {status ? <strong>Public</strong> : <strong>Private</strong>}
        </Status>
      </Info>
      <BookmarkButton id={id} onRemove={onRemove} />
    </Card>
  )
}

export default SmallCard

const Card = styled(Link)`
  display: flex;
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  padding: 10px;
  align-items: center;
  text-decoration: none;
  color: black;
`

const ImagePlaceholder = styled.div`
  width: 60px;
  height: 60px;
  background-color: #e0e0e0;
  border-radius: 5px;
  margin-right: 10px;
`

const Info = styled.div`
  flex: 1;
  text-align: left;
`

const Title = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin: 0;
`

const Author = styled.p`
  font-size: 12px;
  color: #f39c12;
  margin: 0;
`

const Status = styled.p`
  font-size: 12px;
  color: #666;
  margin: 0;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`
