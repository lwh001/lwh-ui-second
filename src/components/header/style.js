import styled from "styled-components";
import fenli from "../../assets/img/icon_cla@2x.png";
import kefu from "../../assets/img/icon_service@2x.png";
import sear from "../../assets/img/nav_search@2x.png";

export const WraperHeader = styled.div`
    padding: 10px 0;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    display: flex;
    margin: 0;
    background:green;
    border: 0;
    outline: 0;
    font-size: 100%;
    vertical-align: baseline;
    -webkit-text-size-adjust: none;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    box-sizing: border-box;
`
export const HeaderFenli = styled.div`
width: 10%;
text-align: center;
display: block;
`
export const Fenli = styled.a`
color: #333;
font-size: 10px;
display: block;
width: 100%;
height: 100%;
text-decoration: none;
cursor: pointer;
color: #888888;
-webkit-tap-highlight-color: rgba(255, 255, 255, 0);
`
export const IconTag = styled.i`
display: block;
width: 37.5px;
height: 18px;
margin: 0 auto;
font-style: normal;
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
    &.head_icon{
        background-image: url(${fenli});
        background-size: 18px auto;
background-repeat: no-repeat;   
background-position:9px 0;
    };
`
export const SearchBar = styled.div`
position: relative;
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
-webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -webkit-flex-shrink: 1;
    -ms-flex-negative: 1;
    flex-shrink: 1;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
`
export const KeFu = styled.div`
width: 10%;
text-align: center;
`
export const IconTags = styled.i`
display: block;
width: 37.5px;
height: 18px;
margin: 0 auto;
font-style: normal;
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
    &.kefu_icon{
        background-image: url(${kefu});
        background-size: 18px auto;
background-repeat: no-repeat;   
background-position:9px 0;
    };
`

export const Inpu = styled.input.attrs({
    placeholder:"请输入搜索内容"
})`
width: 100%;
padding-left: 42px;
height: 30px;
line-height: 30px;
border-radius: 25px;
border: none;
background: #f6f6f6;
box-sizing: border-box;
font-size: 13px;
outline:none;
`
export const Searc = styled.i`
display: block;
width: 18.48px;
height: 19.98px;
position: absolute;
top: 50%;
left: 14px;
-webkit-transform: translate3d(0, -50%, 0);
-ms-transform: translate3d(0, -50%, 0);
transform: translate3d(0, -50%, 0);
&.search{
    background: url(${sear}) no-repeat;
    background-size: cover;
}
`