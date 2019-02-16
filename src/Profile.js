import React from 'react';
import { SectionTitle } from './component/atom/Title.js';
import Description from './component/mls/Description.js';
import { Links , Lists } from './Links.js';

function Profile(props) {
  const style = {
    margin: "40px 0"
  };
  return (
    <section style={style}>
      <SectionTitle>Profile</SectionTitle>
      <Description title="Maaya Ashida" text="某IT企業のゆるふわデザイナー" />
      <Links />
      <Lists />
    </section>
  );
}

export default Profile;
