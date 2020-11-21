import React from 'react';
import styled from 'styled-components';

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
  border-radius: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
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


const Gallery = () => {
    return (
        <Section>
            <Title>Illustration</Title>
            <GalleryList>
                <GalleryListItem>
                  <GalleryLink href={"https://www.instagram.com/p/CHncP4DDBHk/?utm_source=ig_web_copy_link"}>
                    <GalleryImage src={"./img/omochiguma_01.png"}  width={256} height={256}/>
                  </GalleryLink>
                </GalleryListItem>
                <GalleryListItem>
                  <GalleryLink href={"https://www.instagram.com/p/CHncP4DDBHk/?utm_source=ig_web_copy_link"}>
                    <GalleryImage src={"./img/omochiguma_01.png"}  width={256} height={256}/>
                  </GalleryLink>
                </GalleryListItem>
                <GalleryListItem>
                  <GalleryLink href={"https://www.instagram.com/p/CHncP4DDBHk/?utm_source=ig_web_copy_link"}>
                    <GalleryImage src={"./img/omochiguma_01.png"}  width={256} height={256}/>
                  </GalleryLink>
                </GalleryListItem>
                <GalleryListItem>
                  <GalleryLink href={"https://www.instagram.com/p/CHncP4DDBHk/?utm_source=ig_web_copy_link"}>
                    <GalleryImage src={"./img/omochiguma_01.png"}  width={256} height={256}/>
                  </GalleryLink>
                </GalleryListItem>
                <GalleryListItem>
                  <GalleryLink href={"https://www.instagram.com/p/CHncP4DDBHk/?utm_source=ig_web_copy_link"}>
                    <GalleryImage src={"./img/omochiguma_01.png"}  width={256} height={256}/>
                  </GalleryLink>
                </GalleryListItem>
                <GalleryListItem>
                  <GalleryLink href={"https://www.instagram.com/p/CHncP4DDBHk/?utm_source=ig_web_copy_link"}>
                    <GalleryImage src={"./img/omochiguma_01.png"}  width={256} height={256}/>
                  </GalleryLink>
                </GalleryListItem>
            </GalleryList>
        </Section>
    )
}
export default Gallery