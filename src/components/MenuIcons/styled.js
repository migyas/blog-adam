import styled from "styled-components"
import media from "styled-media-query"

// ICON MENU

export const LayoutNavigation = styled.div`
  display: flex;
  position: relative;
  .checkbox {
    display: none;
  }

  .button {
    display: flex;
    z-index: 2000;
    cursor: pointer;
    text-align: center;
    position: absolute;

    top: -2.5rem;
    right: 4rem;

    height: 2.5rem;
    width: 3rem;
  }

  .background {
    height: 5rem;
    width: 5rem;
    position: fixed;
    border-radius: 50%;
    background-image: linear-gradient(
      rgba(128, 174, 224, 1),
      rgba(0, 57, 117, 1)
    );
    z-index: 1000;
    opacity: 0;
    transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);
  }

  .nav {
    height: 100vh;
    z-index: 1500;
    position: fixed;
    top: 0;
    left: 0;

    transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    opacity: 0;
    width: 0;
  }

  .list {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    list-style: none;
    text-align: center;
  }

  .item {
    margin: 2rem;
  }

  .link {
    &:link,
    &:visited {
      display: inline-block;
      font-size: 3rem;
      font-weight: 300;
      padding: 1rem 2rem;
      color: #fff;
      text-decoration: none;
      text-transform: uppercase;

      background-image: linear-gradient(
        120deg,
        transparent 0%,
        transparent 50%,
        #fff 50%
      );
      background-size: 225%;
      transition: all 0.4s;

      span {
        margin-right: 1.5rem;
        display: inline-block;
      }
    }

    &:hover,
    &:active {
      background-position: 100%;
      color: purple;
      transform: translateX(1rem);
    }
  }

  .checkbox:checked ~ .background {
    opacity: 1;

    transform: scale(120);
  }

  .checkbox:checked ~ .nav {
    opacity: 1;
    width: 100%;
  }

  /* ICON */
  .icon {
    position: relative;
    top: 1rem;
    right: -0.2rem;

    &,
    &::before,
    &::after {
      width: 2.5rem;
      height: 0.2rem;
      background-color: #fff;
      display: inline-block;
    }

    &::before,
    &::after {
      content: "";
      position: absolute;
      left: 0;
      transition: all 0.2s;
    }

    &::before {
      top: -0.8rem;
    }
    &::after {
      top: 0.8rem;
    }
  }

  .button:hover .icon::before {
    top: -1rem;
  }

  .button:hover .icon::after {
    top: 1rem;
  }

  .checkbox:checked + .button .icon {
    background-color: transparent;
  }

  .checkbox:checked + .button .icon::before {
    position: absolute;
    z-index: 3000;
    top: 0;
    transform: rotate(135deg);
  }

  .checkbox:checked + .button .icon::after {
    position: absolute;
    z-index: 3000;
    top: 0;
    transform: rotate(-135deg);
  }
`
// ICON SEARCH

export const MenuIconsWrapper = styled.nav`
  margin: 2rem auto;
  width: 100%;
`

export const MenuIconsList = styled.ul`
  display: flex;
  list-style: none;
`

export const MenuIconsItem = styled.li`
  &:last-of-type {
    margin-left: 1rem;

    ${media.lessThan("large")`
      margin-left: 1.5rem;
    `}
  }
`

export const MenuIconsLink = styled.a`
  color: #fff;
  text-decoration: none;
  transition: all .5s;

  svg:hover {
    color: #ff5480;
  }
`

export const IconWrapper = styled.div`
  fill: #fff;
  width: 3rem;
  height: 3rem;
  margin: 0 2rem;

  ${media.lessThan("large")`
    width: 3.5rem;
    height: 3.5rem;
  `}
`
