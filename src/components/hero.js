import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

const StyledBackground = styled(BackgroundImage)`
  &:after,
  &:before,
  & {
    background-attachment: fixed;
    min-height: 100vh;
  }

  .title {
    color: #fff;
    text-transform: uppercase;
  }

  .red-title {
    color: #ff431f;
  }
`

const Hero = ({ imageData }) => (
  <StyledBackground
    className="hero is-fullheight"
    Tag="hero"
    fluid={imageData}
    backgroundColor={`#040e18`}
  >
    <div className="hero-body">
      <div className="container">
        <div className="title">
          <div className="is-size-1">
            <span>komobex </span>
            <span className="red-title">inel</span>
          </div>
          <div className="is-size-2 title">
            <span>rzetelny</span>
            <br></br>
            <span>wiarygodny</span>
            <br></br>
            <span className="red-title">partner</span>
          </div>
        </div>
      </div>
    </div>
  </StyledBackground>
) 

export default Hero
