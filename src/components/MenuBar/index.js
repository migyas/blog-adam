import React from "react"

import SocialLinks from "../SocialLinks"
import Logo from "../Logo"
import MenuIcons from "../MenuIcons"

import * as S from "./styled"

const MenuBar = () => (
  <S.MenuBarWrapper>
    <S.MenuBarGroup>
      <SocialLinks />
    </S.MenuBarGroup>

    <S.MenuBarGroup>
      <Logo />
    </S.MenuBarGroup>

    <S.MenuBarGroup>
      <MenuIcons />
    </S.MenuBarGroup>
  </S.MenuBarWrapper>
)

export default MenuBar
