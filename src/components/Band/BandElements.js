import styled from 'styled-components';


export const BandContainer = styled.div`
background:#0e1111;
padding-top:1rem;
padding-bottom:1rem;
@media screen and (max-width:768px){
padding:100px 0;
}
`
    ;

export const BandWrapper = styled.div`
display:grid;
z-index:1;
height:100%;
width:100%;
max-width:1100px;
margin-right:auto;
margin-left:auto;
justify-content:center;
padding:0 24px;
`;

export const BandRow = styled.div`
display:grid;
grid-auto-columns:minmax(auto,1fr);
align-items:center;
grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};


@media screen and (max-width:768px){
    grid-template-areas:${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
}
`
    ;
export const Column1 = styled.div`
align-items:flex-start;
margin-bottom:15px;
padding:0 20px;
grid-area:col1;
    `
    ;


export const Column2 = styled.div`
align-items:flex-end;
margin-bottom:15px;
padding:0 20px;
grid-area:col2;
`
    ;


export const ImgWrap = styled.div`
height:100%;
max-width:100%;
text-align:center;
align-items:center;
justify-content:center;
`
    ;

export const ImgMate = styled.img`
align-items:center;
height:15rem;
max-width:100%;
margin: 0 0 10px 0;
display:flex;
flex-direction:column;
justify-content:flex-start;
margin:auto;
opacity:40%;

&:hover{
    transform:scale(1.03);
    transition:all 0.2s ease-in-out;
    cursor:pointer;
    opacity:100%;
}
@media screen and (max-width: 480px) {
height:10rem;
max-width:100%;
}
`
    ;

export const MateP = styled.p`
text-align:center;
font-size:2rem;
line-height:2rem;
color:#C952CF;
font-weight:bold 700;
z-index:99;
padding-top:1rem;
text-transform:uppercase;
font-family: 'Nothing You Could Do', cursive;
`;
export const InstrumentP = styled.p`
text-align:center;
justify-content:center;
font-size:1.2rem;
line-height:2rem;
color:#60E1F0;
font-weight:400;
z-index:99;
text-transform:lowercase;
font-family: Verdana, Geneva, Tahoma, sans-serif;
`;
export const BandH6 = styled.h6`
font-family: 'Work Sans', sans-serif;
text-transform:uppercase;
padding-top:1rem;
padding-bottom:1rem;
padding-left:1rem;
padding-right:1rem;
justify-content:center;
text-align:left;
align-items:center;
color:#fff;
`;

