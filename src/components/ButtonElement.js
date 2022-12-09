import styled from 'styled-components';
import { Link } from 'react-scroll';
import { MdKeyboardArrowDown, MdArrowForward } from 'react-icons/md';

export const Button = styled(Link)`
border-radius:15px;
background:transparent;
white-space:nowrap;
padding:${({ big }) => (big ? '14px 48px' : '12px 30px')};
color:${({ dark }) => (dark ? '#fff' : '#262ea4')};
font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
border-color:${({ primary }) => (primary ? '#012999' : '#262ea4')};
border-thickness:3px;
border-style:solid;
text-transform:capitalize;
text-decoration:none;
padding:20px;
cursor:pointer;
display:flex;
justify-content:center;
align-items:center;
transition:all 0.2s ease-in-out;
font-family: 'Work Sans',sans-serif;

&:hover {
transition: all 0.2s ease-in-out;
background:${({ primary }) => (primary ? '#012999' : '#262ea4')};
color:${({ dark }) => (dark ? '#262ea4' : '#fff')};
border:none;
box-shadow: 0 0 5px #262ea4, 0 0 25px #262ea4, 0 0 50px #262ea4, 0 0 50px #262ea4;
transform:scale(1.1);
`;

export const ArrowForward = styled(MdArrowForward)`
margin-left:8px;
font-size:20px;
` ;

export const ArrowDown = styled(MdKeyboardArrowDown)`
margin-left:8px;
font-size:20px;
`;





