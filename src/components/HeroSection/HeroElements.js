import { MdKeyboardArrowDown, MdArrowForward } from 'react-icons/md';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-scroll';

const animateOpacity = keyframes`
0%, 100%{
  opacity:1;  
}
50%{
    opacity:0;
}`;

export const HeroContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
padding: 0 30px;
height:700px;
position:relative;
z-index:1;
padding-bottom:5rem;
@media screen and (max-width:768px){
height:600px;
padding: 0 30px;
padding-bottom:3rem;
@media screen and (max-width: 480px) {
height:600px;
padding: 0 20px;
padding-bottom:3rem;
}
`
    ;
export const HeroBg = styled.div`
position:absolute;
top:0;
right:0;
bottom:0;
left:0;
width:100%;
height:100%;
overflow:hidden;
`
export const VideoBg = styled.video`
width:100%
height:100%
-o- object-fit: cover;
object-fit: cover;
filter:brightness(65%);
`;
export const HeroContent = styled.div`
z-index:3;
max-width:1300px;
position:absolute;
display:flex;
flex-direction:column;
align-items:center;
`;

export const HeroLogo = styled.img`
width:28rem;
max-width:100%
`;


export const HeroP = styled.p`
color:#fff;
font-size:1.5rem;
text-align:center;
max-width:600px;
font-family: 'Work Sans', sans-serif;
text-transform:uppercase;
animation: ${animateOpacity} 2s infinite;

@media screen and(max-width:768px;) {
    font-size:24px;
}

@media screen and(max-width:480px;) {
    font-size:18px;
}
`;

export const HeroBtnWrapper = styled.div`
margin-top: 32px;
display:flex;
flex-direction: column;
align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
margin-left: 8px;
font-size: 20px;
` ;

export const ArrowDown = styled(MdKeyboardArrowDown)`
margin-left: 8px;
font-size: 20px;
`;

export const Button = styled(Link)`
position:relative;
padding:16px 36px;
letter-spacing:2px;
box-sizing:border-box;
display:inline-block;
text-align:center;
border: #fff solid 2px;
color:#fff;
white-space:nowrap;
font-family:'Work Sans', sans-serif;
background:transparent;
text-transform:lowercase;
border-radius:20px;
font-size:16px;
transition:all 0.2s ease-in-out;
text-decoration:none;

:hover {
background:transparent;
border:none;
color:#fff;
box-shadow: 0 0 5px #C952CF, 0 0 25px #C952CF, 0 0 50px #C952CF, 0 0 200px #C952CF;
cursor:pointer;
transition: all 0.2s ease-in-out;
}
`;