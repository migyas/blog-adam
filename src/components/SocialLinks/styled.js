import styled from "styled-components"

export const SocialLinksWrapper = styled.nav`
  margin: 2rem auto;
  width: 100%;
`

export const SocialLinksList = styled.ul`
  align-items: center;
  display: flex;
  list-style: none;
`

export const SocialLinksItem = styled.li`
  &:last-of-type {
    margin-left: .8rem;
  }
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
  fill: #fff;
  width: 3rem;
  height: 3rem;
`
