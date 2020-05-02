import styled from "styled-components"
import { Link } from "gatsby"

export const CategoryLink = styled(Link)`
  color: #111210;
  transition: color .5s;

  &:hover {
    color: #FF5480;
  }
`

export const CategoyWrapper = styled.section`
  margin-top: 18.6rem;
  display: flex;
  justify-content: space-between;
`

export const CategoryTitle = styled.h1`
  font-size: 3.6rem;
  font-weight: bold;
  line-height: 4.6rem;
  letter-spacing: -0.225px;
  color: #111210;
`

export const CategoryShowAll = styled.a`
  font-size: 1.6rem;
  line-height: 4.6rem;
  align-items: center;
  text-decoration: none;
  color: #9b9b9b;
`
export const CategoryList = styled.nav`
  display: flex;
  justify-content: column;
`

export const CategoryItem = styled.a`
  color: #111210;
`
