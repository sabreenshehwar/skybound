import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { Link as LinkS } from 'react-scroll';

export const SidebarContainer = styled.aside`
position:fixed;
z-index:999;
width:100%;
height:100%;
background:#000;
display:grid;
align-items:center;
top:0;
left:0;
transition:0.3s ease-in-out;
opacity:${({ isOpen }) => (isOpen ? '100%' : '0')};
top:${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
color:#fff;
`
export const Icon = styled.div`
position:absolute;
background:transparent;
top:1.2rem;
right:1.5rem;
font-size:2rem;
cursor:pointer;
outline:none;

`;
export const SidebarWrapper = styled.div`
color:#fff;
`;

export const SidebarMenu = styled.ul`
display:grid;
grid-template-columns:1fr;
grid-template-rows:repeat (5, 80px);
text-align:center;
padding:1rem;

@media screen and (max-width:480px;){
    grid-template-rows: repeat(5, 60px);
}
`;
export const SidebarLink = styled(LinkS)`
display:flex;
align-items:center;
justify-content: center;
font-size:1.5rem;
font-family: 'Work Sans', sans-serif;
text-transform:lowercase;
text-decoration:none;
list-style:none;
padding:20px;
transition: 0.2s ease-in-out;
color:#fff;
cursor:pointer;

:hover {
transition: 0.2s ease-in-out;
 text-decoration:line-through;
  text-decoration-color:#262EA3;
  text-decoration-thickness:5px;
  color:#fff;
}
`
  ;


export const SideBtnWrap = styled.div`
display:flex;
justify-content:center;
`

export const Button = styled.button`
position:relative;
padding:12px 36px;
letter-spacing:2px;
box-sizing:border-box;
display:inline-block;
text-align:center;
padding:1.5rem;
color:#fff;
white-space:nowrap;
justify-self:flex-end;
font-family:'Work Sans', sans-serif;
background:#262EA3;
border-radius:50%;
text-transform:lowercase;
font-size:16px;
transition:all 0.2s ease-in-out;
text-decoration:none;

:hover {
background:transparent;
border-width:3px;
border-style:solid;
border-color:#262ea4;
color:#fff;
box-shadow: 0 0 5px #262ea4, 0 0 25px #262ea4, 0 0 50px #262ea4, 0 0 200px #262ea4;
cursor:pointer;
transition: all 0.2s ease-in-out;
}
`;






