import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const MenuWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const StyledMenuList = styled.ul`
  text-align: center;
`
const StyledMenuItem = styled.li`
  padding: 10px 0;
  font-size: 35px;
  cursor: pointer;

  &:hover {
    color: #ff431f;
  }

  a {
    color: inherit;
  }
`

const Menu = () => (
  <MenuWrapper>
    <StyledMenuList>
      <StyledMenuItem>
        <Link to="/o-firmie">O firmie</Link>
      </StyledMenuItem>
      <StyledMenuItem>
        <Link to="/realizacje">Realizacje</Link>
      </StyledMenuItem>
      <StyledMenuItem>
        <Link to="/kariera">Kariera</Link>
      </StyledMenuItem>
      <StyledMenuItem>
        <Link to="/kontakt">Kontakt</Link>
      </StyledMenuItem>
    </StyledMenuList>
  </MenuWrapper>
)

export default Menu
