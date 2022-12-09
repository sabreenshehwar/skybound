import styled from 'styled-components'

export const BannerContainer = styled.div`
display:flex;
justify-content:center;
background:#242DA2;
height:400px;
padding-top:1rem;
padding-bottom:1rem;
align-items:center;
overflow:hidden;
position:relative;
border:none;
z-index:1;
border:none;
@media screen and (max-width: 480px) {
height:300px;
padding-top:1rem;
padding-bottom:1rem;
}
`

export const BannerBg = styled.div`
position:absolute;
top:0;
right:0;
bottom:0;
left:0;
overflow:hidden;
height:calc(100vh - 100px);
`
export const ImgBg = styled.img`
background-position:center center;
background-size:cover;
width:100%
height:100%
max-width:100%
-o- object-fit: cover;
object-fit: cover;
filter:brightness(50%);
`
export const BannerContent = styled.div`
padding-top:2.5rem;
padding-bottom:2.5rem;
padding-left:1rem;
padding-right:1rem;
align-items:center;
z-index:3;
flex-direction:column;
position:absolute;
display:flex;
max-width:100%;
@media screen and (max-width: 480px) {
padding-top:1.5rem;
padding-bottom:1.5rem;
}
`
export const BannerH1 = styled.h1`
color:#fff;
font-size:1.5rem;
font-family: Verdana, Geneva, Tahoma, sans-serif;
font-weight:300;
line-height:4rem;
text-align:center;
@media screen and (max-width: 480px) {
font-size:1.2rem;
line-height:3rem;
}
`;
export const BannerP = styled.p`
color:#60E1F0;
font-family: 'Nothing You Could Do', cursive;
font-weight:500;
text-align:center;
font-size:1.5rem;
line-height:20px
z-index:3;
@media screen and (max-width: 480px) {
font-size:1.2rem;
}
`