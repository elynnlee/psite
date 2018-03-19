import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import { rhythm } from '../utils/typography'
import quoraIcon from '../images/svg-icons/quora.svg'
import linkedinIcon from '../images/svg-icons/linkedin.svg'
import instagramIcon from '../images/svg-icons/instagram.svg'

const ListLink = props =>
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Helmet title={siteTitle} />
        <Bio />
        <ul style={{ listStyle: `none`, float: `right` }}>
          <a href="https://www.quora.com/profile/Elynn-Lee" style={{backgroundImage:"none"}}>
            <span>
              <img
                src={quoraIcon}
                style={{
                  marginRight: rhythm(1 / 2),
                  width: rhythm(1),
                  height: rhythm (1)
                }}
              />
            </span>
          </a>
          <a href="https://www.linkedin.com/in/elynnlee" style={{backgroundImage:"none"}}>
            <span>
              <img
                src={linkedinIcon}
                style={{
                  marginRight: rhythm(1 / 2),
                  width: rhythm(1),
                  height: rhythm (1)
                }}
              />
            </span>
          </a>
          <a href="https://www.instagram.com/elynnimator" style={{backgroundImage:"none"}}>
           <span>
              <img
                src={instagramIcon}
                style={{
                  width: rhythm(1),
                  height: rhythm (1)
                }}
              />
            </span>
          </a>
        </ul>
      </div>
    )
  }
}

export default BlogIndex

