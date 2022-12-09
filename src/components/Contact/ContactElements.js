import styled from 'styled-components'

export const ContactContainer = styled.div`
display:flex;
justify-content:center;
background:#0e1111;
height:10rem;
width:100%
padding-top:2rem;
border:none;
z-index:-2;
padding-left:1.5rem;
padding-right:1.5rem;
@media screen and (max-width:768px){
top:0;
left:0;
right0:
position:fixed;
padding-left:1rem;
padding-right:1rem;
@media screen and (max-width: 480px) {
top:0;
left:0;
right0:
position:fixed;
padding-left:1rem;
padding-right:1rem;
}
`;
export const ContactWrapper = styled.div`
justify-content:center;
align-items:center;
display:grid;
z-index:1;
height:100%;
overflow:hidden;
width:100%;
max-width:1300px;
`;

export const IconWrapper = styled.div`
margin:0 auto;
display:flex;
flex-direction:row;
background: transparent;
justify-content:center;
align-items:center;
`
    ;
export const ContactH1 = styled.h1`
justify-content:center;
text-align:center;
color:#f9f9f9;
font-size:2.5rem;
line-height:1.1;
font-weight:500;
padding-top:2rem;
letter-spacing:3px;
font-family: 'Saira', sans-serif;
`
    ;
export const ContactP = styled.p`
justify-content:center;
text-align:center;
padding:0;
color:#f9f9f9;
font-family:'Work Sans', sans-serif;
`
    ;

export const Icons = styled.svg`
z-index:1;
width:2rem;
height:2rem;
cursor:pointer;
padding:0;

&:hover{
transform:scale(1.3);
transition:all 0.2s ease-in-out;
cursor:pointer;
}

@media screen and (max-width: 480px) {
width:1.2rem;
height:1.2rem;
}
`
    ;