import styled from "styled-components";
const img = require("./profile.png");

export const Table = styled.table`
 font-family: Noto Sans;
 width :85%;
 color: #383838;
 position:relative;
 top : 100px;
 left:50px;
 border-collapse:collapse;
 margin-bottom:220px;
 @media(max-width:900px){
    left :2px;
 }
`;
export const Th = styled.th`
box-sizing: border-box;
border-width: 1px 1px 1px 1px;
border-style: solid;
border-color: #E1E1E1;
font-weight: 600;
font-size: 14px;
text-align:start;
padding: 8px 10px;
@media(max-width:600px){
    font-size: 9px;
}
`;
export const Td = styled.th`
box-sizing: border-box;
border-width: 1px 1px 1px 1px;
border-style: solid;
border-color: #E1E1E1;
font-weight: 400;
font-size: 14px;
text-align:start;
padding: 8px 10px;
@media(max-width:900px){
    font-size: 8px;
}

`;
export const Tr =styled.tr`
  &:nth-child(odd){
    background-color: #F5F5F5;
  }
`;
export const UserName =styled.div   `
 position :relative;
 display:flex;
 flex-direction:row;
 gap:15px;
 border-box:box-sizing;
 align-items:center;
//  background:blue;
`
export const UserAvatar = styled.div`
width: 25px;
height: 25px;
border-redius:25px;
background:url(${img});
background-repeat:no-repeat;
`;

export const Span = styled.span`
`;
export const Sorting = styled.div`
    display:inline-block;
    position:relative;
    margin-left:20px;
    top:4px;
    display:flex;
    flex-direction:row;
    gap:6px;

`;
export const DownArrow = styled.div`
    display:inline-block;
    background: black;
    height: 15px;
    width: 2px;
    border-redius:6px;
    margin: 0 auto;
    position: relative;
    cursor: pointer;
    &::after,::before{
        content: "";
        background: #000000;
        position: absolute;
        height: 4px;
        width: 2px;
    }
    &::after{
        right: -2px;
        top: 10.2px;
        transform: rotate(-135deg);
    }
    &::before{
        right: 2px;
        top: 10.2px;
        transform: rotate(135deg);
    }
    @media(max-width:900px){
        height: 14px;
        width: 1px;
        &::after,::before{
            height: 3px;
            width: 1px;
        }
        &::after{
            right: -1px;
            top: 10.5px;
            transform: rotate(-135deg);
        }
        &::before{
            right: 1px;
            top: 10.5px;
            transform: rotate(135deg);
        }
    }

`
;
export const UpArrow = styled.div`
    background: black;
    display:inline-block;
    height: 15px;
    width: 2px;
    border-redius:6px;
    margin: 0 auto;
    position: relative;
    cursor: pointer;
    &::after,::before{
        content: "";
        background: #000000;
        position: absolute;
        height: 4px;
        width: 2px;
    }
    &::after{
        right: -2px;
        top: 0.7px;
        transform: rotate(-45deg);
    }
    &::before{
        right: 2px;
        top: 0.7px;
        transform: rotate(45deg);
    }
    @media(max-width:900px){
        height: 14px;
        width: 1px;
        &::after,::before{
            height: 2px;
            width: 1px;
        }
        &::after{
            right: -1px;
            top: 0.6px;
            transform: rotate(-45deg);
        }
        &::before{
            right: 1px;
            top: 0.6px;
            transform: rotate(45deg);
        }

`;
export const CellHeader = styled.div`
  display:flex;
  flex-direction:row;
  cursor:pointer;

`;