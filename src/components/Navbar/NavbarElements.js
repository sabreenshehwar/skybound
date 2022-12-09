import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom'
import styled from 'styled-components';

export const Nav = styled.nav`
background:${({ scrollNav }) => (scrollNav ? '' : 'transparent')};
height:120px;
margin-top:-120px;
display:flex;
justify-content:center;
align-items:center;
font-size:1rem;
position:sticky;
padding-right:5rem;
top:0;
z-index:10;

@media screen and (max-width:960px){
  transition:0.8s all ease;
}
`
  ;

export const NavContainer = styled.nav`
display:flex;
justify-content:space-between;
height:100px;
z-index:1;
 width:100%;
 padding: 0.5rem calc((100vw - 1000px) / 2);
 max-width:1300px;
`
  ;

export const NavLogo = styled(LinkR)`
color:#fff;
justify-self:flex-start;
cursor:pointer;
display:flex;
align-items:center;
padding-top:1rem;
padding-bottom:1rem;
padding-left:1rem;
text-transform: uppercase;
text-decoration:none;
`
  ;
export const MobileIcon = styled.div`
display: none;
@media screen and (max-width:768px){
  display:block;
  position:absolute; 
  top:0;
  right:0;
  padding-top:10px;
  transform:translate(-130%,90%);
  font-size:1.8rem;
  cursor:pointer;
  color:#fff;
}
`
  ;
export const NavbarMenu = styled.ul`
display:flex;
align-items:center;
list-style:none;
text-align:center;

@media screen and (max-width:768px;){
  display:none;
}
`
  ;
export const NavItem = styled.li`
height:120px;
`
  ;

export const NavLinks = styled(LinkS)`
color:#fff;
display:flex;
align-items:center;
text-decoration:none;
overflow:hidden;
font-family:'Work Sans', sans-serif;
text-transform:uppercase;
padding:0 1rem;
height:100%;
cursor:pointer;
:hover {
  text-decoration:line-through;
  text-decoration-color:#262ea4;
  text-decoration-thickness:2px;
  color:#fff;
  transition: 0.2s ease-in-out;
}

@media screen and (max-width: 768px) {
   display: none;
 }
 &.active{
   border-bottom:3px; solid #C952CF;
 }
`
  ;

export const NavBtn = styled.nav`
display:flex;
align-items:center;

@media screen and (max-width:768px){
  display:none;
}
`
  ;

export const Button = styled.button`
border:#C952CF 2px solid;
background:transparent;
position:relative;
letter-spacing:2px;
box-sizing:border-box;
display:inline-block;
text-align:center;
padding:15px;
padding-right:5px;
color:#fff;
white-space:nowrap;
justify-self:flex-end;
font-family:'Work Sans', sans-serif;
text-transform:lowercase;
border-radius:20px;
font-size:16px;
transition:all 0.2s ease-in-out;
text-decoration:none;

:hover {
background:transparent;
border-width:3px;
border-style:solid;
border-color:#262ea4;
border-radius:20px;
color:#fff;
box-shadow: 0 0 5px #262ea4, 0 0 25px #262ea4, 0 0 50px #262ea4, 0 0 200px #262ea4;
cursor:pointer;
transition: all 0.2s ease-in-out;
}
`;
