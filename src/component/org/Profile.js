import React from 'react';
import { SectionTitle } from '../atom/Title.js';
import Description from '../mls/Description.js';
import { Skill , Sns } from '../mls/List.js';

function Profile(props) {
  const style = {
    margin: "40px 0"
  };
  return (
    <section style={style}>
      <SectionTitle>Profile</SectionTitle>
      <Description title="Maaya Ashida" text="某IT企業のゆるふわデザイナー" />
      <Skill />
      <Sns />
    </section>
  );
}

export default Profile;
