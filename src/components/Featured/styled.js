import styled from "styled-components"
import { Link } from "gatsby"

export const FeaturedWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const FeaturedHeader = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 2.6rem;
`

export const FeaturedTitle = styled.h1`
  font-size: 3.6rem;
  font-weight: bold;
  line-height: 4.6rem;
  letter-spacing: -0.225px;
  color: #111210;
`

export const FeaturedAllPost = styled(Link)`
  font-size: 1.6rem;
  line-height: 4.6rem;
  text-decoration: none;
  color: #9b9b9b;
  transition: color 0.5s;

  &:hover {
    color: #696868;
  }
`

export const FeaturedBackground = styled.div`
  ${({ image }) =>
    image &&
    `background-image: linear-gradient(to top left,rgba(27, 0, 66, 0.9), rgba(27, 0, 66, 0.8)), url(${image});`}
  background-size: cover;
  background-position: top;
  width: 58rem;
  height: 35.8rem;
  border-radius: 8px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.0835598);
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 4rem;
`
export const FeaturedInfo = styled.p`
  font-size: 1.6rem;
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: -0.01rem;
  line-height: 2.6rem;
  align-items: space-between;
  margin-bottom: 1rem;
  padding-left: 0.8rem;
`

export const FeaturedTitlePost = styled.h2`
  font-size: 2.8rem;
  font-weight: 600;
  line-height: 4.6rem;
  letter-spacing: -0.175px;
  padding-right: 2.5rem;
`

export const FeaturedDescription = styled.p`
  font-size: 1.6rem;
  font-weight: normal;
  line-height: 3.2rem;
  margin: 2.5rem 0;
`
//

export const FeaturedPosts = styled.div`
  display: flex;
`

export const FeaturedPost = styled(Link)`
  text-decoration: none;
  transition: all .2s;

  &:hover {
    transform: scale(0.990);
  }
`

export const FeaturedList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  list-style: none;
`

export const FeaturedItem = styled(Link)`
  background: #ffffff;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.0835598);
  border-radius: 8px;
  padding: 2rem;
  margin: 0 0 1.7rem 1.5rem;
  text-decoration: none;

  width: 28rem;
  height: 16.9rem;
  transition: all .2s;

  &:hover {
    transform: scale(0.95);
  }

  .title {
    font-size: 1.6rem;
    line-height: 4.6rem;
    letter-spacing: -0.1px;
    color: #9b9b9b;
    font-weight: normal;
  }

  .description {
    font-weight: 600;
    font-size: 1.8rem;
    line-height: 3rem;
    letter-spacing: -0.1125px;

    color: #111210;
  }
`
