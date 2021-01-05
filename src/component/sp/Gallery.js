import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";

const Section = styled.section`
  margin: 0 auto;
  width: 320px;
`
const Title = styled.h1`
  font-size: 1.6rem;
  color: rgba(0,0,0,0.9);
  @media (prefers-color-scheme: dark) {
    color: rgba(255, 255, 255, 0.9);
  }
  text-align: center;
  margin-top: 32px;
  margin-bottom: 16px;
`
const GalleryImage = styled.img`
  padding: 4px;
  border-radius: 16px;
  box-shadow:  2px 2px 3px #DDE2E6, -2px -2px 3px #ffffff;
  @media (prefers-color-scheme: dark) {
    box-shadow:  2px 2px 3px #1E2529, -2px -2px 3px #354046;
  }
  vertical-align: bottom;
`
const GalleryLink = styled.a`
  display: inline-block;
  width: 100%;
  height: 100%;
`
const GalleryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`
const GalleryListItem = styled.li`
  margin-bottom: 8px;
  margin-right: 8px;
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
                    <GalleryImage src={item.image} width={96} height={96}/>
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