import React from 'react';
import { SectionTitle } from './component/atom/Title.js';
import Description from './component/mls/Description.js';
import Links from './Links.js';

function Profile(props) {
  return (
    <section>
      <SectionTitle>Profile</SectionTitle>
      <Description title="Maaya Ashida" text="某IT企業のゆるふわデザイナー" />
      <Links />
    </section>
  );
}

export default Profile;
