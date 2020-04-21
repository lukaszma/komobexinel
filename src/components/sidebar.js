import React from 'react'
import styled from 'styled-components'
import Menu from './menu'

const StyledSidebar = styled.div`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #000;
  position: fixed;
  z-index: 20;
`

const CloseButton = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;

  &:hover {
    &::after,
    &::before {
      background-color: #ff431f;
    }
  }

  &::after,
  &::before {
    content: ' ';
    width: 38px;
    height: 3px;
    background-color: #4a4a4a;
    position: absolute;
    top: 14px;
    right: -4px;
  }

  &::after {
    transform: rotate(45deg);
  }

  &::before {
    transform: rotate(-45deg);
  }
`

export const Sidebar = ({ isMenuOpen, onCloseClick }) =>
  isMenuOpen ? (
    <StyledSidebar>
      <CloseButton onClick={onCloseClick} />
      <Menu />
    </StyledSidebar>
  ) : null

export default Sidebar
