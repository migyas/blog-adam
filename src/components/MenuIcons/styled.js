import styled from "styled-components"

export const MenuIconsWrapper = styled.nav`
  margin: 2rem auto;
  width: 100%;
`

export const MenuIconsList = styled.ul`
  align-items: center;
  display: flex;
  list-style: none;
`

export const MenuIconsItem = styled.li`
  &:last-of-type {
    margin-left: 1rem;
  }
`

export const MenuIconsLink = styled.a`
  color: #fff;
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: #ff5480;
  }
`

export const IconWrapper = styled.div`
  fill: #fff;
  width: 22px;
  height: 22px;
`