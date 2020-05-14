import styled from "styled-components"
import media from "styled-media-query"

export const LayoutNavigation = styled.div`
  display: flex;
  .checkbox {
    display: none;
  }

  .button {
    /* position: fixed; */
    display: flex;
    top: 6.7rem;
    right: 32.4rem;
    z-index: 2000;
    cursor: pointer;
    text-align: center;

    height: 3rem;
    width: 3rem;
  }

  .background {
    height: 3rem;
    width: 3rem;
    position: fixed;
    top: 7.5rem;
    right: 34rem;

    border-radius: 50%;
    background-image: radial-gradient(rgba(0, 111, 111, 1), black);
    z-index: 1000;

    opacity: 0;
    /* transform: scale(120); */
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
    top: -1.7rem;
    right: 4rem;

    &,
    &::before,
    &::after {
      width: 2rem;
      height: .45rem;
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
    top: 0;
    transform: rotate(135deg);
  }

  .checkbox:checked + .button .icon::after {
    top: 0;
    transform: rotate(-135deg);
  }
`

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
  transition: color 0.5s;

  /* &:hover {
    color: #ff5480;
  } */
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
