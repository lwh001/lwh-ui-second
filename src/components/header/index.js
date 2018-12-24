import React, { Component } from 'react';
import {Link} from "react-router-dom";
 
import {
    WraperHeader,
    HeaderFenli,
    Fenli,
    IconTag,
    SearchBar,
    Inpu ,
    KeFu,
    IconTags,
    Searc
} from "./style.js";
class Header extends Component{
    render(){
        var styled = {
            display:"contents"
        }
        return(
            <WraperHeader>
                <Link to="/deatil" style={styled}>
                <HeaderFenli>
                    <Fenli>
                        <IconTag className="head_icon"></IconTag>分类
                    </Fenli>
                </HeaderFenli>
                </Link>
                <SearchBar>
                    <Inpu></Inpu>
                    <Searc className="search"></Searc>
                </SearchBar>
                <KeFu>
                    <Fenli>
                        <IconTags className="kefu_icon"></IconTags>客服
                    </Fenli>
                </KeFu>
            </WraperHeader>
        );
    }
}
export default Header;