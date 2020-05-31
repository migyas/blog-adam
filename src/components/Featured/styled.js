import styled from "styled-components"
import media from "styled-media-query"
import { Link } from "gatsby"

export const FeaturedWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 7rem;

  ${media.lessThan("525px")`
    margin-top: 5rem;
    margin-bottom: 3.5rem;
  `}
`
// HEADER - EM DESTAQUE

export const FeaturedHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.6rem;
`

export const FeaturedTitle = styled.h1`
  font-size: 3.6rem;
  font-weight: bold;
  line-height: 4.6rem;
  letter-spacing: -0.225px;
  color: #111210;

  ${media.lessThan("525px")`
    font-size: 2.5rem;
  `}
`

export const FeaturedAllPost = styled(Link)`
  font-size: 1.6rem;
  text-decoration: none;
  color: #9b9b9b;
  transition: color 0.5s;

  &:hover {
    color: #696868;
  }
`
// ITEMS EM DESTAQUE

export const FeaturedPosts = styled.div`
  display: flex;
  justify-content: space-between;

  ${media.lessThan("medium")`
    flex-direction: column;
    justify-content: flex-start;
  `}
`

// ITEM DESTAQUE COM IMAGEM

export const FeaturedBackground = styled(Link)`
  ${({ image }) =>
    image &&
    `background-image: linear-gradient(to top left,rgba(27, 0, 66, 0.9), rgba(27, 0, 66, 0.8)), url(${image});`}
  background-size: cover;
  background-position: bottom right;
  padding: 4rem;
  min-height: 35.8rem;
  border-radius: 8px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.0835598);
  color: #fff;
  text-decoration: none;
  transition: all 0.2s;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 0 1 573px;

  &:hover {
    transform: scale(0.95);
  }

  ${media.lessThan("medium")`
    margin-left: 0;
    flex: 1 1 100%;
    padding: 2rem;
  `}

  ${media.lessThan("small")`
    padding: 3rem;
  `}
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
  margin-bottom: 2.5rem;
`
// ITEMS SEM IMAGENS

export const FeaturedList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 50%;
  list-style: none;
  align-content: space-between;

  ${media.lessThan("medium")`
    margin-top: 2.1rem;
    justify-content: flex-start;
  `}
`

export const FeaturedItem = styled(Link)`
  background: #ffffff;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.0835598);
  border-radius: 8px;
  padding: 3.2rem 2rem;
  margin-left: 2.1rem;
  text-decoration: none;
  transition: all 0.2s;

  flex: 1 1 40%;

  &:not(:last-of-type) {
    margin-bottom: 0;
  }
  &:hover {
    transform: scale(0.95);
  }

  ${media.lessThan("995px")`
    flex: 1 1 50%;

    &:not(:last-of-type) {
    margin-bottom: 2.1rem !important;
    }
  `}
  ${media.lessThan("medium")`
    margin-left: 0;
    flex: 1 1 100%;
  `}

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
