import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.png'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Elynn Lee`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(6),
            height: rhythm(6),
          }}
        />
        <p>
          I'm a product manager at Quora! I graduated from The University of Texas
          at Austin in 2015 with an MS and BS in Computer Science. Learn more about
          me and what I love to do by reading my&nbsp;
          <a href="https://www.quora.com/profile/Elynn-Lee">
            Quora answers.
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
