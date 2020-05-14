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
            <S.MenuIconsLink href={link.url} title={link.label}>
              <S.IconWrapper>
                <Icon />
                <S.LayoutNavigation>
                  <input
                    type="checkbox"
                    className="checkbox"
                    id="navi-toogle"
                  />
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
                </S.LayoutNavigation>
              </S.IconWrapper>
            </S.MenuIconsLink>
          </S.MenuIconsItem>
        )
      })}
    </S.MenuIconsList>
  </S.MenuIconsWrapper>
)

export default MenuIcons
