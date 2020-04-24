import styled from "styled-components"

export const BackgroundImage = styled.header`
  ${({ image }) =>
    image &&
    `background-image: linear-gradient(to top left,rgba(27, 0, 66, 0.9), rgba(27, 0, 66, 0.8)), url(${image});`}
  background-size: cover;
  background-position: top;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  color: #fff;
`

export const Title = styled.h1`
  font-size: 4rem;
  width: 70%;
  margin-bottom: 5rem;
`
export const Info = styled.p`
  font-size: 2rem;
  margin-bottom: 1rem;
`

export const Description = styled.p`
  font-size: 1.875rem;
  width: 70%;
  letter-spacing: 1px;
`
