import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Header from './header'
import Sidebar from './sidebar'
import Footer from './footer'

const LayoutWrapper = styled.div`
  overflow: none;
`

const Layout = ({ children, isHero, headerTitle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  console.log(data)

  return (
    <LayoutWrapper>
      <Sidebar isMenuOpen={isMenuOpen} onCloseClick={toggleMenu} />
      <Header
        siteTitle={data.site.siteMetadata.title}
        onMenuClick={toggleMenu}
      />
      <div style={{ marginTop: isHero ? 0 : '52px' }}>
        <main>{children}</main>
      </div>
      <Footer />
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isHero: PropTypes.bool,
}

Layout.defaultProps = {
  isHero: false,
}

export default Layout
