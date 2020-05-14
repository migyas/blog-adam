import React from "react"

import SocialLinks from "../SocialLinks"
import Grid from "../Grid"
import Logo from "../Logo"
import MenuIcons from "../MenuIcons"

import * as S from "./styled"

const MenuBar = () => (
  <Grid>
    <S.MenuBox>
      <S.MenuBarWrapper>
        <S.MenuBarGroup>
          <SocialLinks />
        </S.MenuBarGroup>

        <S.MenuBarGroup>
          <Logo />
        </S.MenuBarGroup>

        <S.MenuBarGroup>
          {/* <S.LayoutNavigation>
            <input type="checkbox" className="checkbox" id="navi-toogle" />
            <label htmlFor="navi-toogle" className="button">
              <span className="icon">&nbsp;</span>
            </label>
            <div className="background">&nbsp;</div>

            <nav className="nav">
              <ul className="list">
                <li className="item">
                  <a href="/" className="link" title="Home">
                    <span>&diams;</span>Home
                  </a>
                </li>
                <li className="item">
                  <a href="/posts" className="link" title="Sobre">
                    <span>&hearts;</span>Sobre Mim
                  </a>
                </li>
                <li className="item">
                  <a href="/category" className="link" title="Posts">
                    <span>&spades;</span>Posts
                  </a>
                </li>
                <li className="item">
                  <a href="/category" className="link" title="Categorias">
                    <span>&clubs;</span>Categorias
                  </a>
                </li>
              </ul>
            </nav>
          </S.LayoutNavigation> */}
          <MenuIcons />
        </S.MenuBarGroup>
      </S.MenuBarWrapper>
    </S.MenuBox>
  </Grid>
)

export default MenuBar
