import styled from "styled-components"
import { Link } from "gatsby"
import media from "styled-media-query"

export const ViewsBlogWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 18.4rem;
`

export const ViewsBlogHeader = styled.header`
  margin-bottom: 2.6rem;

  h1 {
    font-size: 3.6rem;
    line-height: 4.6rem;
    letter-spacing: -0.225px;

    color: #111210;
  }
`

export const ViewsBlogGroup = styled.div`
  display: flex;
  flex-direction: column;
`
export const ViewsBlogItem = styled(Link)`
  text-decoration: none;
  background: #ffffff;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.0835598);
  border-radius: 8px;
  display: flex;
  flex: 1 1;

  margin-bottom: 2.8rem;
`

export const ViewsBlogImg = styled.img`
  width: 50%;

  ${media.lessThan("865px")`
    width: 35%;
  `}

  ${media.lessThan("medium")`
    display: none;
  `}
`

export const ViewsBlogDetail = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.8rem;
  padding-right: 2rem;
  margin-left: 5rem;

  flex: 1 1 60%;

  p {
    color: #9b9b9b;
    font-size: 1.6rem;
    padding-right: 5rem;

    letter-spacing: -0.1px;
    line-height: 3.2rem;

    &:first-of-type {
      padding-left: 1rem;
      margin-top: 4.2rem;
      margin-bottom: 2rem;
    }

    &:last-of-type {
      /* margin-bottom: 4.8rem; */
    }

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
    line-height: 4.6rem;
    margin-bottom: 1.9rem;
    letter-spacing: -0.175px;
    padding-right: 4rem;

    color: #111210;
  }

  ${media.lessThan("980px")`
    padding: 0!important;
  `}

  ${media.lessThan("865px")`
    padding: 0 1rem!important;
  `}

  ${media.lessThan("865px")`
    padding: 0 !important;
    margin-left: 2rem;
  `}
`
