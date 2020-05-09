import React from "react"
import Grid from "../Grid"

import * as S from "./styled"

const Featured = ({ image, title, description, category }) => (
  <Grid>
    <S.FeaturedWrapper>
      <S.FeaturedHeader>
        <S.FeaturedTitle>Em destaque</S.FeaturedTitle>
        <S.FeaturedAllPost href="/">Ver todos os artigos</S.FeaturedAllPost>
      </S.FeaturedHeader>

      <S.FeaturedPosts>
        <S.FeaturedPost to="/">
          <S.FeaturedBackground image={image}>
            <S.FeaturedInfo>
              BY &nbsp;&nbsp;&nbsp;ADAM DIAS
              &nbsp;&nbsp;&nbsp;IN&nbsp;&nbsp;&nbsp; {category}
            </S.FeaturedInfo>
            <S.FeaturedTitlePost>{title}</S.FeaturedTitlePost>
            <S.FeaturedDescription>{description}</S.FeaturedDescription>
          </S.FeaturedBackground>
        </S.FeaturedPost>

        <S.FeaturedList>
          <S.FeaturedItem to="/">
            <p className="title">FREELANCING</p>
            <p className="description">10 WordPress Lead Generation Plugins</p>
          </S.FeaturedItem>

          <S.FeaturedItem>
            <p className="title">FREELANCING</p>
            <p className="description">RIP HHVM – We’ve Had a Good Run</p>
          </S.FeaturedItem>
          <S.FeaturedItem>
            <p className="title">DESIGN PROCESS</p>
            <p className="description">How to Add a Stripe Donate Button</p>
          </S.FeaturedItem>
          <S.FeaturedItem>
            <p className="title">INSPIRATION</p>
            <p className="description">How to Set up Sucuri Firewall (WAF)</p>
          </S.FeaturedItem>
        </S.FeaturedList>
      </S.FeaturedPosts>
    </S.FeaturedWrapper>
  </Grid>

  // <Grid>
  //   <S.FeaturedWrapper>
  //     <S.FeaturedHeader>
  //       <S.FeaturedName>Destaque</S.FeaturedName>
  //       <S.FeaturedAllPost href="/">Ver todas os artigos</S.FeaturedAllPost>
  //     </S.FeaturedHeader>

  //     <S.FeaturedNav>
  //       <S.FeaturedUl>
  //         <S.FeaturedItem to="/">
  //           <S.FeaturedBackground image={image}>
  //             <S.FeaturedGrid>
  //               <S.FeaturedInfo>BY Adam Dias IN {category}</S.FeaturedInfo>
  //               <S.FeaturedTitle>{title}</S.FeaturedTitle>
  //               <S.FeaturedDescription>{description}</S.FeaturedDescription>
  //             </S.FeaturedGrid>
  //           </S.FeaturedBackground>
  //         </S.FeaturedItem>

  //         <S.FeaturedDiv>
  //           <S.FeaturedList>
  //             <S.FeaturedItem to="/">
  //               <S.FeaturedP>

  //               </S.FeaturedP>
  //             </S.FeaturedItem>
  //           </S.FeaturedList>
  //           <S.FeaturedList>
  //             <S.FeaturedItem to="/">
  //               <S.FeaturedP>
  //                 <p className="title">FREELANCING</p>
  //                 <p className="description">RIP HHVM – We’ve Had a Good Run</p>
  //               </S.FeaturedP>
  //             </S.FeaturedItem>
  //           </S.FeaturedList>
  //           <S.FeaturedList>
  //             <S.FeaturedItem to="/">
  //               <S.FeaturedP>
  //                 <p className="title">DESIGN PROCESS</p>
  //                 <p className="description">
  //                   How to Add a Stripe Donate Button
  //                 </p>
  //               </S.FeaturedP>
  //             </S.FeaturedItem>
  //           </S.FeaturedList>
  //           <S.FeaturedList>
  //             <S.FeaturedItem to="/">
  //               <S.FeaturedP>
  //                 <p className="title">INSPIRATION</p>
  //                 <p className="description">
  //                   How to Set up Sucuri Firewall (WAF)
  //                 </p>
  //               </S.FeaturedP>
  //             </S.FeaturedItem>
  //           </S.FeaturedList>
  //         </S.FeaturedDiv>
  //       </S.FeaturedUl>
  //     </S.FeaturedNav>
  //   </S.FeaturedWrapper>
  // </Grid>
)

export default Featured
