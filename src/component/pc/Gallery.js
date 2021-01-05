import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";

const Section = styled.section`
  padding: 64px 64px 0;
  margin: 0 auto;
  width: 1024px;
`
const Title = styled.h1`
  font-size: 2.5rem;
  color: rgba(0,0,0,0.9);
  text-align: center;
  margin-bottom: 64px;
`
const GalleryImage = styled.img`
  padding: 16px;
  border-radius: 24px;
  background: #c2e8ff;
  box-shadow:  8px 8px 8px #afd1e6, -8px -8px 8px #d5ffff;
`
const GalleryLink = styled.a`
`
const GalleryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`
const GalleryListItem = styled.li`
  margin-bottom: 64px;
  margin-right: 64px;
  :nth-child(3n){
    margin-right: 0;
  }
`

const Gallery = props => {
  if (props.galleryItems.length === 0) {
    return null;
  }
    return (
        <Section>
            <Title>Illustration</Title>
            <GalleryList>
              {props.galleryItems.map((item, number) => (
                <GalleryListItem number={number} key={number.toString()}>
                  <GalleryLink href={item.link}>
                    <GalleryImage src={item.image} width={256} height={256}/>
                  </GalleryLink>
                </GalleryListItem>
              ))}
            </GalleryList>
        </Section>
    )
}

Gallery.propTypes = {
  galleryItems: PropTypes.arrayOf(PropTypes.object)
};

export default Gallery