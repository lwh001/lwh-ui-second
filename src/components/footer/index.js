import React, { Component } from 'react';
import {
    Footers,
    FooterDiv,
    DefaultIcon,
    TargetLink
} from "./style";
import {HomeIcon,DestoryIcon,CarIcon,MineIcon,GlobalStyle} from "../../assets/icon/iconfont.js";
class Footer extends Component{
    constructor(props){
        super()
        this.state = {"selectIndex":0,"arr":[
            {"to":"/","tag":<HomeIcon></HomeIcon>,"name":"首页"},
            {"to":"/descover","tag":<DestoryIcon ></DestoryIcon>,"name":"发现"},
            {"to":"/car","tag":<CarIcon></CarIcon>,"name":"购物车"},
            {"to":"/mine","tag":<MineIcon></MineIcon>,"name":"我的"}],
            "styled":{"color":"#ff3376"}
        }
    }
    click(x){
        this.setState({"selectIndex":x})   
    }
    render(){
        var styled = {
            "color":"red"
        }
        return(
            <div>
                <GlobalStyle />>
            <Footers>
                
                <FooterDiv>
                    {
                        this.state.arr.map((x,index)=>{
                            return (
                                <DefaultIcon>
                                    <TargetLink to={x.to} key={index} onClick={()=>{this.click(index)}} style={index === this.state.selectIndex?this.state.styled:null}> 
                                        {x.tag}{x.name}
                                    </TargetLink>
                                </DefaultIcon>
                            )
                        })
                    }
                    {/* <DefaultIcon>
                        <TargetLink to="/">
                            <HomeIcon></HomeIcon>首页
                        </TargetLink>
                    </DefaultIcon>
                    <DefaultIcon>
                        <TargetLink to="/descover">
                            <DestoryIcon ></DestoryIcon>发现
                        </TargetLink>
                    </DefaultIcon>
                    <DefaultIcon>
                        <TargetLink to="/car">
                            <CarIcon></CarIcon>购物车
                        </TargetLink>
                    </DefaultIcon>
                    <DefaultIcon>
                        <TargetLink to="/mine">
                            <MineIcon></MineIcon>我的
                        </TargetLink>
                    </DefaultIcon> */}
                </FooterDiv>
            </Footers>
            </div>
        )
    }
}

export default Footer;