import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";
import { DeviceSize } from '../DeviceSize'

const Section = styled.section`
  margin: 0 auto;
  @media ${DeviceSize.sp} {
    padding: 32px 0 0;
    width: 320px;
  }
  @media ${DeviceSize.pc} {
    padding: 64px 64px 0;
    width: 1024px;
  }
`
const Title = styled.h1`
  color: rgba(0, 0, 0, 0.9);
  @media (prefers-color-scheme: dark) {
    color: rgba(255, 255, 255, 0.9);
  }
  text-align: center;
  @media ${DeviceSize.sp} {
    margin-bottom: 16px;
    font-size: 1.6rem;
  }
  @media ${DeviceSize.pc} {
    margin-bottom: 64px;
    font-size: 2.5rem;
  }
`
const GalleryImage = styled.img`
  @media ${DeviceSize.sp} {
    padding: 4px;
    border-radius: 16px;
    vertical-align: bottom;
    box-shadow: 2px 2px 3px #DDE2E6, -2px -2px 3px #ffffff;
    @media (prefers-color-scheme: dark) {
      box-shadow: 2px 2px 3px #1E2529, -2px -2px 3px #354046;
    }
  }
  @media ${DeviceSize.pc} {
    padding: 16px;
    border-radius: 24px;
    box-shadow: 8px 8px 10px #DDE2E6, -8px -8px 10px #ffffff;
    @media (prefers-color-scheme: dark) {
      box-shadow: 8px 8px 10px #1E2529, -8px -8px 10px #354046;
    }
  }
`
const GalleryLink = styled.a`
  display: inline-block;
  width: 100%;
  height: 100%;
`
const GalleryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  @media ${DeviceSize.sp} {
    justify-content: center;
  }
`
const GalleryListItem = styled.li`
  :nth-child(3n){
    margin-right: 0;
  }
  :nth-child(4){
    margin-bottom: 0;
  }
  :nth-child(5){
    margin-bottom: 0;
  }
  :nth-child(6){
    margin-bottom: 0;
  }
  @media ${DeviceSize.sp} {
    margin-right: 8px;
    margin-bottom: 8px;
  }
  @media ${DeviceSize.pc} {
    margin-right: 64px;
    margin-bottom: 64px;
  }
`

const Gallery = props => {
  if (props.galleryItems.length === 0) {
    return null;
  }
  const isDeviceSizePC = window.matchMedia(`${DeviceSize.pc}`).matches
  const imageWidth = isDeviceSizePC ? 256: 96;
  const imageHeight = isDeviceSizePC ? 256: 96;
    return (
        <Section>
            <Title>Illustration</Title>
            <GalleryList>
              {props.galleryItems.map((item, number) => (
                <GalleryListItem number={number} key={number.toString()}>
                  <GalleryLink href={item.link}>
                    <GalleryImage src={item.image} alt={item.alt} width={imageWidth} height={imageHeight}/>
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