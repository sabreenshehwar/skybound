import styled from 'styled-components'

export const DataContainer = styled.div`
margin:0 auto;
padding-top:3rem;
padding-bottom:3rem;
color:#f9f9f9;
background:${({ lightBg }) => (lightBg ? '#f9f9f9' : '#0e1111')};
@media screen and (max-width:768px){
align-items:center;
margin:auto;
}
`
    ;
export const DataWrapper = styled.div`
display:grid;
z-index:1;
height:100%;
overflow:hidden;
width:100%;
max-width:1100px;
margin-right:auto;
margin-left:auto;
padding:0 30px;
padding-bottom:30px;
justify-content:center;
`
    ;
export const DataRow = styled.div`
display:grid;
grid-auto-columns:minmax(auto, 1fr);
align-items:center;
grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};


@media screen and (max-width:768px){
    grid-template-areas:${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
}
`
    ;

export const Column1 = styled.div`
margin-bottom:15px;
padding-right:1.5rem;
padding:0 20px;
grid-area:col1;
`
    ;
export const Column2 = styled.div`
margin-bottom:15px;
padding:0 20px;
grid-area:col2;
`
    ;

export const TextWrapper = styled.div`
max-width:540px;
padding-bottom: 60px;
`
    ;

export const TopLine = styled.p`
font-size:20px;
line-height:16px;
font-weight:bold 700;
padding-top:1rem;
letter-spacing:1.4px;
text-transform:uppercase;
margin-bottom:16px;
font-family: 'Nothing You Could Do', cursive;
color:${({ topText }) => (topText ? '#012999' : '#C952CF')};

@media screen and (max-width:768px){
margin:auto;
align-items:center;
text-align:left;
}
`
    ;

export const Heading = styled.h1`
margin-top:20px;
font-size:36px;
line-height:1.1;
font-weight:500;
font-style:italic;
letter-spacing:3px;
font-family: 'Saira', sans-serif;
color:${({ lightText }) => (lightText ? '#fff' : '#010606')};

@media screen and (max-width:480px){
    font-size:32px;
}
@media screen and (max-width:768px){
margin:auto;
text-align:left;
}
`
    ;

export const Subtitle = styled.p`
max-width:440px;
margin-bottom:35px;
font-size:18px;
line-height:1.75rem;
line-spacing:1rem;
font-weight:300;
font-family: Verdana, Geneva, Tahoma, sans-serif;
color: ${({ darkText }) => (darkText ? '#010606' : "#f4f4f4")};
@media screen and (max-width:768px){
margin:auto;
padding-top:1rem;
align-items:center;
padding-left:1rem;
}
`
    ;

export const BtnWrap = styled.div`
display:flex;
justify-content:flex-start;
height:100%;
`
    ;

export const ImgWrap = styled.div`
max-width:555px;
height:100%;
`
    ;

export const Img = styled.img`
display:flex;
overflow:hidden;
width:22rem;
max-width:100%;
margin:0 0 10px 0;
padding-right:0;
box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
@media screen and (max-width:768px){
margin:auto;
align-items:center;
}
`

