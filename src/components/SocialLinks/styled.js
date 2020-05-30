import styled from "styled-components"
import media from "styled-media-query"

export const SocialLinksWrapper = styled.nav`
  margin: 0 auto;
  width: auto;

  ${media.lessThan("530px")`
    margin: 0; 
  `}
`

export const SocialLinksList = styled.ul`
  align-items: center;
  display: flex;
  list-style: none;
`

export const SocialLinksItem = styled.li`
  &:last-of-type {
    margin-left: 0.8rem;

    ${media.lessThan("large")`
      margin-left: 1.5rem;
    `}
  }
`

export const SocialLinksLink = styled.a`
  ${({ color }) => (color ? `color: ${color};` : "color: #fff;")};
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

  ${media.lessThan("large")`
    width: 3.5rem;
    height: 3.5rem;
  `}
`
