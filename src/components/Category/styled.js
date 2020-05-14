import styled from "styled-components"
import { Link } from "gatsby"
import media from "styled-media-query"

export const CategoryWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 18.6rem;
  margin-bottom: 8.6rem;

  ${media.lessThan("small")`
    display: none;
  `}
`

export const CategoryHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.6rem;
`
export const CategoryTitle = styled.h1`
  font-size: 3.6rem;
  font-weight: bold;
  line-height: 4.6rem;
  letter-spacing: -0.225px;
  color: #111210;

  ${media.lessThan("849px")`
    font-size: 3.2rem;
  `}
`

export const CategoryAllPost = styled(Link)`
  font-size: 1.6rem;
  text-decoration: none;
  color: #9b9b9b;
  transition: color 0.5s;

  ${media.lessThan("849px")`
    font-size: 2rem;
  `}

  &:hover {
    color: #696868;
  }
`

export const CategoryGroup = styled.ul`
  list-style: none;
  display: flex;
`

export const CategoryList = styled.li`
  margin-right: 2.1rem;
  width: 19.7rem;
`

export const CategoryItem = styled(Link)`
  text-align: center;
  transition: color 0.5s;
  text-decoration: none;
  color: #111210;
  font-size: 2.4rem;
  font-weight: 600;
  transition: color 0.4s;

  ${media.lessThan("849px")`
    font-size: 2rem;
  `}

  ${media.lessThan("677px")`
    font-size: 1.8rem;
  `}

  &:hover {
    color: #ff5480;
  }
`

export const CategoryImage = styled.img`
  object-fit: cover;
  margin-bottom: 2.2rem;
  border-radius: 3px;
  min-height: 9.7rem;

  &:hover {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.0835598);
  }
`

export const CategoryButton = styled.button`
  width: 8rem;
  min-height: 10rem;
  border: none;
  cursor: pointer;
  font-size: 3.2rem;

  background: #ffffff;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.0835598);
  border-radius: 8px;
  transform: all 1s;

  &.active,
  &:hover {
    transform: scaleY(0.99);
  }
`
