import React from "react"
import PropTypes from "prop-types"
import { Spring } from "react-spring/renderprops"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Archive from "./archive"

import Header from "./header"
import "./layout.css"

const MainLayout = styled.main`
  max-width: 90%;
  margin: 1rem auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 40px;
`

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
      file(relativePath: { regex: "/bg/" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <div>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Spring
      from={{height: location.pathname === '/' ? 100 : 200}}
      to={{height: location.pathname === '/' ? 200 : 100}}
      >
        {styles => (
          <div style={{overflow: 'hidden', ...styles}}>
            <Img fluid={data.file.childImageSharp.fluid}/>
          </div>
        )}
      </Spring>
      <MainLayout>
        <div>{children}</div>
        <Archive />
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </MainLayout>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
Layout.defaultProps = {
  location: {},
}

export default Layout
