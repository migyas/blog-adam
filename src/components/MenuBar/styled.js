import styled from "styled-components"
import media from "styled-media-query"

export const MenuBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  justify-content: center;
  background-image: linear-gradient(
    rgba(75, 0, 130, 0.4),
    transparent 80%,
    transparent 100%
  );
  z-index: 9999;

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

export const MenuBarGroup = styled.div`
  ${media.lessThan("400px")`
    &:first-of-type {
      display: none;
    }
  `}
`
