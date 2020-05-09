import styled from "styled-components"
import { Link } from "gatsby"

export const CategoryWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 18.6rem;
  margin-bottom: 7.8rem;
`

export const CategoryHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 2.6rem;
`
export const CategoryTitle = styled.h1`
  font-size: 3.6rem;
  font-weight: bold;
  line-height: 4.6rem;
  letter-spacing: -0.225px;
  color: #111210;
`

export const CategoryAllPost = styled(Link)`
  font-size: 1.6rem;
  line-height: 4.6rem;
  align-items: center;
  text-decoration: none;
  color: #9b9b9b;
  transition: color 0.5s;

  &:hover {
    color: #696868;
  }
`

export const CategoryGroup = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`

export const CategoryList = styled.li`
  margin-right: 2.1rem;
`

export const CategoryItem = styled(Link)`
  text-align: center;
  transition: color 0.5s;
  text-decoration: none;
  color: #111210;
  font-size: 2.4rem;
  font-weight: 600;
  transition: color 0.4s;

  &:hover {
    color: #ff5480;
  }
`

export const CategoryImage = styled.img`
  object-fit: cover;
  width: 19.7rem;
  height: 22.5rem;

  margin-bottom: 2.2rem;
  border-radius: 3px;
  padding: 0;

  &:hover {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.0835598);
  }
`

export const CategoryButton = styled.button`
  width: 8rem;
  height: 22.5rem;
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
