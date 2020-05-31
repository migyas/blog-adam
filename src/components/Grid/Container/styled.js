import styled from "styled-components"
import media from "styled-media-query"

export const Container = styled.div`
  width: 100%;

  ${media.lessThan("large")`
    padding: 0 3rem;

  `}
`
