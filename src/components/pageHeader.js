import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import { useStaticQuery, graphql } from 'gatsby'

const StyledGridItem = styled.div`
  height: 300px;
  cursor: pointer;
  padding: 0;

  .label {
    text-align: center;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 42px;
    color: #fff;
    text-shadow: 1px 1px #060606;
    transition: transform 0.2s ease-in-out;
  }
`

const StyledBackground = styled(BackgroundImage)`
  &:after,
  &:before,
  & {
    background-attachment: ${props => (props.isFixed ? 'fixed' : 'scroll')};
  }
`

const PageHeader = ({ label, imageData, isFixed, columnsClass, ...rest }) => {
  const image = useStaticQuery(graphql`
    query {
      file(name: { eq: "DSC_0176" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <StyledGridItem className={`column ${columnsClass}`}>
      <StyledBackground
        style={{ height: '100%' }}
        Tag="section"
        fluid={image.file.childImageSharp.fluid}
        backgroundColor={`#040e18`}
        isFixed={isFixed}
        {...rest}
      >
        {label ? <div className="label">{label}</div> : null}
      </StyledBackground>
    </StyledGridItem>
  )
}

PageHeader.propTypes = {
  label: PropTypes.string,
  isFixed: PropTypes.bool,
}

PageHeader.defaultProps = {
  label: '',
  isFixed: false,
}

export default PageHeader
