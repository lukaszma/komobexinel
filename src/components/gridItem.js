import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

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

    &:hover {
      transform: scale(1.1);
    }
  }
`

const StyledBackground = styled(BackgroundImage)`
  &:after,
  &:before,
  & {
    background-attachment: ${props => (props.isFixed ? 'fixed' : 'scroll')};
  }
`

const GridItem = ({
  label,
  imageData,
  isFixed,
  columnsClass,
  ...rest
}) => (
  <StyledGridItem className={`column ${columnsClass}`}>
    <StyledBackground
      style={{ height: '100%' }}
      Tag="section"
      fluid={imageData}
      backgroundColor={`#040e18`}
      isFixed={isFixed}
      {...rest}
    >
      {label ? <div className="label">{label}</div> : null}
    </StyledBackground>
  </StyledGridItem>
)

GridItem.propTypes = {
  label: PropTypes.string,
  imageData: PropTypes.object.isRequired,
  isFixed: PropTypes.bool,
}

GridItem.defaultProps = {
  label: '',
  isFixed: false,
}

export default GridItem
