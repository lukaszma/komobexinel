import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Mailto from 'react-protected-mailto'

const StyledLink = styled(Link)`
  display: block;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`

const Logo = styled(Link)`
  display: block;
  margin-top: 15px;

  img {
    margin: 0 auto;
  }
`
const Footer = () => (
  <footer className="footer" style={{ marginTop: '40px' }}>
    <div className="content has-text-centered">
      <div className="columns">
        <div className="column">
          Komobex Inel Sp. z o.o.
          <Logo to="/">
            <img
              src="http://www.komobexinel.pl/media/images/layout/logo.jpg"
              width="200"
              height="28"
              alt="logo"
            />
          </Logo>
        </div>
        <div className="column">
          <StyledLink to="/o-firmie">O firmie</StyledLink>
          <StyledLink to="/realizacje">Realizacje</StyledLink>
          <StyledLink to="/kariera">Kariera</StyledLink>
          <StyledLink to="/kontakt">Kontakt</StyledLink>
        </div>
        <div className="column">
          <p>Dekabrystów 41 42-200 Częstochowa</p>
          <p>
            <Mailto tel="034 322 65 11" />
          </p>
          <p>
            <Mailto email="komobexinel@post.pl" />
          </p>
        </div>
      </div>
    </div>
    <div style={{ float: 'right' }}>
      ©Softo {new Date().getFullYear()} All rigths reserved
    </div>
  </footer>
)

export default Footer
