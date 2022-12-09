import styled from 'styled-components'

export const VideosContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
position:relative;
height:700px;
background:#000;
z-index:1;
@media screen and (max-width: 480px) {
height:300px;
}
`;

export const VideosWrapper = styled.div`
top:0;
right:0;
bottom:0;
left:0;
width:100%;
position:relative;
justify-content:center;
align-items:center;
`;

