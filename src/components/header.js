import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import logo from "../images/logo.svg"

const HeaderWrapper = styled.div`
  background: #524763;
  img{
    margin-bottom: 0;
  }
`
const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: .3rem;
`

const Header = ({ siteTitle, siteDescription }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <header>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            <img
              style={{
                width: "150px",
              }}
              src={logo}
              alt="gatsby Logo"
            />
          </Link>
        </h1>
      </header>
    </HeaderContainer>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
