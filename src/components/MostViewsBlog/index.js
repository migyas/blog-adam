import React from "react"
import Grid from "../Grid"

import * as S from "./styled"

import views1 from "../../images/views1.png"
import views2 from "../../images/views2.png"
import views3 from "../../images/views3.png"

const MostViewsBlog = ({ title, description, category }) => (
  <Grid>
    <S.ViewsBlogWrapper>
      <S.ViewsBlogHeader>
        <h1>Mais vistos no blog</h1>
      </S.ViewsBlogHeader>

      <S.ViewsBlogGroup>
        <S.ViewsBlogItem to="/">
          <S.ViewsBlogDetail>
            <p>
              BY &nbsp;&nbsp;<strong>ADAM DIAS</strong>{" "}
              &nbsp;&nbsp;IN&nbsp;&nbsp;
              <strong>{category}</strong>
            </p>
            <h2>{title}</h2>
            <p>{description}</p>
          </S.ViewsBlogDetail>
          <S.ViewsBlogImg src={views1} alt="views post" title="views post1" />
        </S.ViewsBlogItem>

        <S.ViewsBlogItem to="/">
          <S.ViewsBlogDetail>
            <p>
              BY &nbsp;&nbsp;<strong>ADAM DIAS</strong>{" "}
              &nbsp;&nbsp;IN&nbsp;&nbsp;
              <strong>{category}</strong>
            </p>
            <h2>{title}</h2>
            <p>{description}</p>
          </S.ViewsBlogDetail>
          <S.ViewsBlogImg src={views2} alt="views post" title="views post2" />
        </S.ViewsBlogItem>

        <S.ViewsBlogItem to="/">
          <S.ViewsBlogDetail>
            <p>
              BY &nbsp;&nbsp;<strong>ADAM DIAS</strong>{" "}
              &nbsp;&nbsp;IN&nbsp;&nbsp;
              <strong>{category}</strong>
            </p>
            <h2>{title}</h2>
            <p>{description}</p>
          </S.ViewsBlogDetail>
          <S.ViewsBlogImg src={views3} alt="views post" title="views post3" />
        </S.ViewsBlogItem>
      </S.ViewsBlogGroup>
    </S.ViewsBlogWrapper>
  </Grid>
)

export default MostViewsBlog
