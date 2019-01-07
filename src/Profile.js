import React, { Component } from 'react';
import Title from './Title';

class Profile extends Component {
  render(){
    return (
      <section>
        <Title title="Profile" />
         <h2>Maaya Ashida</h2>
         <p>profileだよ</p>
      </section>
    );
  }
}

export default Profile;
