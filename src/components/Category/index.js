import React from "react"
import Grid from "../Grid"
import imgs1 from "../../../static/assets/img/card1.png"
import imgs2 from "../../../static/assets/img/card2.png"

import * as S from "./styled"

const Category = () => (
  <Grid>
    <S.CategoryWrapper>
      <S.CategoryHeader>
        <S.CategoryTitle>Categorias</S.CategoryTitle>
        <S.CategoryAllPost href="/">Ver todas as categorias</S.CategoryAllPost>
      </S.CategoryHeader>

      <S.CategoryGroup>
        <S.CategoryList>
          <S.CategoryItem to="/">
            <S.CategoryImage src={imgs1} alt="category card" />
            <p>UI Design</p>
          </S.CategoryItem>
        </S.CategoryList>
        <S.CategoryList>
          <S.CategoryItem to="/">
            <S.CategoryImage src={imgs2} alt="category card" />
            <p>UX Design</p>
          </S.CategoryItem>
        </S.CategoryList>
        <S.CategoryList>
          <S.CategoryItem to="/">
            <S.CategoryImage src={imgs2} alt="category card" />
            <p>SEO</p>
          </S.CategoryItem>
        </S.CategoryList>
        <S.CategoryList>
          <S.CategoryItem to="/">
            <S.CategoryImage src={imgs2} alt="category card" />
            <p>Popular</p>
          </S.CategoryItem>
        </S.CategoryList>
        <S.CategoryList>
          <S.CategoryItem to="/">
            <S.CategoryImage src={imgs2} alt="category card" />
            <p>Essentials</p>
          </S.CategoryItem>
        </S.CategoryList>
        <S.CategoryButton> > </S.CategoryButton>
      </S.CategoryGroup>
    </S.CategoryWrapper>
  </Grid>
)

export default Category
