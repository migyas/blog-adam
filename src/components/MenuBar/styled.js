import styled from "styled-components"
import media from "styled-media-query"

export const MenuBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  justify-content: center;

  ${media.lessThan("large")`
    padding: 0 3rem;
  `}
`

export const MenuBarWrapper = styled.div`
  background: transparent;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  max-width: 117.1rem;
  width: 100%;
  height: 15rem;
`

export const MenuBarGroup = styled.div``
