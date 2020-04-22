import styled from "styled-components"

export const SocialLinksWrapper = styled.nav`
  margin: 2rem auto;
  width: 100%;
  background: yellowgreen;
`

export const SocialLinksList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  list-style: none;
`

export const SocialLinksItem = styled.li`
  cursor: pointer;
`

export const SocialLinksLink = styled.a`
  color: #fff;
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: #ff5480;
  }
`

export const IconWrapper = styled.div`
  fill: #bbb;
  width: 20px;
  height: 20px;
`
