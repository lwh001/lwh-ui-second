import styled from "styled-components";
import {Link} from "react-router-dom";

export const Footers = styled.div`
background: red;
position: fixed;
bottom: 0;
width: 375px;
max-width: 750px;
min-width: 320px;
border-top: 1px solid #eaeaea;
z-index: 20;
`
export const FooterDiv = styled.ul.attrs({
    className:"clearfix"
})`
list-style: none;
padding:0;
margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
    -webkit-text-size-adjust: none;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
&.clearfix{
    zoom:1;
}&.clearfix:before{
    content: ".";
    display: block;
    overflow: hidden;
    visibility: hidden;
    font-size: 0;
    line-height: 0;
    width: 0;
    height: 0;
}&.clearfix:after{
    content: ".";
    display: block;
    overflow: hidden;
    visibility: hidden;
    font-size: 0;
    line-height: 0;
    width: 0;
    height: 0;
}
`
export const DefaultIcon = styled.li`
width: 25%;
float: left;
text-align: center;
padding:7px 0;
position: relative;
`
export const TargetLink = styled(Link).attrs({
    to:props=>props.to
})`
display: block;
width: 100%;
height: 100%;
font-size: 12px;
text-decoration: none;
cursor: pointer;
color: #888888;
-webkit-tap-highlight-color: rgba(255, 255, 255, 0);
`