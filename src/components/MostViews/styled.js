import styled from "styled-components"
import { Link } from "gatsby"
import media from "styled-media-query"

export const MostViewsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 7.8rem;
`

export const MostViewsGroup = styled.div`
  display: flex;

  ${media.lessThan("medium")`
    flex-direction: column;
  `}
`

export const MostViewsHeader = styled.header`
  margin-bottom: 2.6rem;

  h1 {
    font-size: 3.6rem;
    line-height: 4.6rem;
    letter-spacing: -0.225px;

    color: #111210;
  }
`

export const MostViewsItem = styled(Link)`
  text-decoration: none;
  font-weight: normal;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.02);
  }

  &:first-of-type {
    margin-right: 2.3rem;
  }

  p {
    color: #9b9b9b;
    font-size: 1.6rem;
    padding: 1.5rem 0;
    letter-spacing: -0.1px;
    line-height: 3.2rem;

    strong {
      color: #111210;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  h2 {
    font-weight: 600;
    font-size: 2.8rem;
    line-height: 4rem;
    padding-right: 1rem;

    letter-spacing: -0.175px;

    color: #111210;
  }

  ${media.lessThan("medium")`

    &:not(:last-of-type){
    padding: 1rem 0;
    margin-bottom: 7rem;

    border-bottom: 1px solid rgba(0,0,0, .2);
    }

  `}
`
