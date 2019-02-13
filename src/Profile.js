import React from 'react';
import { SectionTitle } from './component/atom/Title.js';
import Description from './component/mls/Description.js';
import Work from './component/org/Work.js';
import { Links , Lists } from './Links.js';

function Profile(props) {
  return (
    <section>
      <SectionTitle>Profile</SectionTitle>
      <Description title="Maaya Ashida" text="某IT企業のゆるふわデザイナー" />
      <Links />
      <Lists />
      <Work />
    </section>
  );
}

export default Profile;
