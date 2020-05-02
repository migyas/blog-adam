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
  font-size: 3.6rem;
  font-weight: 600;
  letter-spacing: -0.225px;
  line-height: 4.6rem;
  padding-right: 40rem;
`
export const Info = styled.p`
  font-size: 1.6rem;
  line-height: 4.6rem;
  text-transform: uppercase;
  display: flex;
  align-items: center;
`

export const Description = styled.p`
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: 3.2rem;
  letter-spacing: 1px;
  padding-right: 35rem;
  margin-top: 3rem;
`
