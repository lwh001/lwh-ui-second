import styled,{createGlobalStyle} from "styled-components";

export const Global = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('iconfont.eot?t=1538976515061'); /* IE9*/
  src: url('iconfont.eot?t=1538976515061#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
  url('iconfont.ttf?t=1538976515061') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('iconfont.svg?t=1538976515061#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:22px;
  display:block;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-yduifaxian:before { content: "\\e607"; }

.icon-cart:before { content: "\\e613"; }

.icon-wode:before { content: "\\e66c"; }

.icon-home:before { content: "\\e62a"; }

`
export const HomeIcon = styled.i.attrs({
  className:"iconfont"
})`
&::before{
  content:"\\e62a"
}
`
export const DestoryIcon = styled.i.attrs({
  className:"iconfont"
})`
&::before{
  content:"\\e607"
}
`
export const CarIcon = styled.i.attrs({
  className:"iconfont"
})`
&::before{
  content:"\\e613"
}
`
export const MineIcon = styled.i.attrs({
  className:"iconfont"
})`
&::before{
  content:"\\e66c"
}
`