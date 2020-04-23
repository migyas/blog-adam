import React from "react"

import Icons from "./Icons"
import links2 from "./content"

import * as S from "./styled"

const MenuIcons = () => (
  <S.MenuIconsWrapper>
    <S.MenuIconsList>
      {links2.map((link, u) => {
        const Icon = Icons[link.label]

        return (
          <S.MenuIconsItem key={u}>
            <S.MenuIconsLink
              href={link.url}
              title={link.label}
            >
              <S.IconWrapper>
                <Icon />
              </S.IconWrapper>
            </S.MenuIconsLink>
          </S.MenuIconsItem>
        )
      })}
    </S.MenuIconsList>
  </S.MenuIconsWrapper>
)

export default MenuIcons
