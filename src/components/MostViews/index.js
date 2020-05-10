import React from "react"
import Grid from "../Grid"

import * as S from "./styled"

const MostViews = ({ image, category }) => (
  <Grid>
    <S.MostViewsWrapper>
      <S.MostViewsHeader>
        <h1>Mais vistos do mês</h1>
      </S.MostViewsHeader>

      <S.MostViewsGroup>
        <S.MostViewsItem to="/">
          <img src={image} alt="posts most views" title="Most Views Post" />
          <p>
            BY &nbsp;&nbsp;<strong>ADAM DIAS</strong> &nbsp;&nbsp;IN&nbsp;&nbsp;
            <strong>{category}</strong>
          </p>
          <h2>Website Downtime: Applicable Tips on How to Prevent It</h2>
          <p>
            User research is the reality check every project needs. Here’s our
            guide to why you should be doing it — and how to get started.
          </p>
        </S.MostViewsItem>

        <S.MostViewsItem href="/">
          <img src={image} alt="posts most views" title="Most Views Post" />
          <p>
            BY &nbsp;&nbsp;<strong>ADAM DIAS</strong> &nbsp;&nbsp;IN&nbsp;&nbsp;
            <strong>{category}</strong>
          </p>
          <h2>How to Fix Error 404 Not Found on Your WordPress Site</h2>
          <p>
            User research is the reality check every project needs. Here’s our
            guide to why you should be doing it — and how to get started.
          </p>
        </S.MostViewsItem>
      </S.MostViewsGroup>
    </S.MostViewsWrapper>
  </Grid>
)

export default MostViews
