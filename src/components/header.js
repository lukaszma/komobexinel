import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  z-index: 10;
  top: 0;

  .navbar {
    .navbar-brand {
      background-color: #fff;

      .navbar-burger {
        @media screen and (min-width: 1300px) {
          display: none;
        }
      }
    }
  }
`

const StyledHeaderItem = styled(Link)`
  padding: 0 30px;

  &:hover,
  &.active {
    background-color: transparent !important;
    color: #ff431f !important;
  }
`

const StyledNavbarMenu = styled.div`
  justify-content: center;
`

const HamburgerBtn = styled.button`
  background: transparent;
  border: none;
`

const Header = ({ onMenuClick }) => (
  <StyledHeader>
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <img
            src="http://www.komobexinel.pl/media/images/layout/logo.jpg"
            width="200"
            height="28"
            alt="logo"
          />
        </Link>

        <HamburgerBtn
          className="navbar-item navbar-burger burger"
          aria-label="menu"
          onClick={onMenuClick}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </HamburgerBtn>
      </div>

      <StyledNavbarMenu id="navbarBasicExample" className="navbar-menu">
        <StyledHeaderItem
          to="/o-firmie"
          className="navbar-item"
          activeClassName="active"
        >
          O firmie
        </StyledHeaderItem>
        <StyledHeaderItem
          to="/realizacje"
          className="navbar-item"
          activeClassName="active"
        >
          Realizacje
        </StyledHeaderItem>
        <StyledHeaderItem
          to="/kariera"
          className="navbar-item"
          activeClassName="active"
        >
          Kariera
        </StyledHeaderItem>
        <StyledHeaderItem
          to="/kontakt"
          className="navbar-item"
          activeClassName="active"
        >
          Kontakt
        </StyledHeaderItem>
      </StyledNavbarMenu>
    </nav>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  onMenuClick: PropTypes.func,
}

Header.defaultProps = {
  siteTitle: ``,
  onMenuClick: null,
}

export default Header
