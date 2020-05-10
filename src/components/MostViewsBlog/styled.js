import styled from "styled-components"
import { Link } from "gatsby"

export const ViewsBlogWrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const ViewsBlogHeader = styled.header`
  margin-top: 7.8rem;
  margin-bottom: 2.8rem;

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
  justify-content: space-around;

  margin-bottom: 18.4rem;
`
export const ViewsBlogItem = styled(Link)`
  text-decoration: none;
  background: #ffffff;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.0835598);
  border-radius: 8px;
  display: flex;
  justify-content: space-around;

  margin-bottom: 2.8rem;
`
export const ViewsBlogDetail = styled.div`
  display: flex;
  flex-direction: column;
  width: 58.5rem;
  margin-bottom: 2.8rem;

  p {
    color: #9b9b9b;
    font-size: 1.6rem;
    margin-left: 5rem;
    padding-right: 5rem;

    letter-spacing: -0.1px;
    line-height: 3.2rem;

    &:first-of-type {
      margin-top: 4.2rem;
      margin-bottom: 1rem;
    }

    &:last-of-type {
      margin-bottom: 4.8rem;
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
    line-height: 4rem;
    margin-left: 5rem;
    width: 47.4rem;
    margin-bottom: 1.9rem;

    letter-spacing: -0.175px;

    color: #111210;
  }

  img {
    width: 58.5rem;
    height: 35.8rem;
  }
`
