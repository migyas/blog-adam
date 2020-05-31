import styled from "styled-components"
import media from "styled-media-query"

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: yellowgreen;
  background: #ffffff;
  color: #9b9b9b;
  height: 10rem;

  ${media.lessThan("530px")`
    justify-content: space-between;
  `}

  span {
    font-size: 1.4rem;
    font-weight: normal;

    ${media.lessThan("530px")`
      display: none;
    `}
  }
`
