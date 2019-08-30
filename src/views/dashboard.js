import React from 'react';
import '../scss/dashboard.scss';
import { randomColor } from '../lib/utils';

//组件
import TestComponent from '../components/ComponnetTest';
const Component=React.Component;

class Test extends Component{
    constructor(props){
        super(props)
        this.state={
            value:0,
            background:randomColor(),
        }
        this.handleGetFocus=this.handleGetFocus.bind(this);
        this.handleShowMenu=this.handleShowMenu.bind(this);
    }
    focus(){
        this.textInput.focus();
    }   
    handleShowMenu(e) {
        e.stopPropagation();
    }
    handleGetFocus(e){
        e.stopPropagation();
        this.focus();
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                value:this.state.value+20,
                background:randomColor(),
            })
        },2000)
    }
    shouldComponentUpdate(){
        return false;
    } 
    render(){
        return (
            <div className="container" style={{
                marginTop:this.state.value+'px',
                background:randomColor(),
                transition:'all 2s linear',
            }}>
                输入框:<TestComponent  textInput={(dom)=>{this.textInput=dom}} test={2222222}/>
                <br/>
                <button onClick={this.handleGetFocus}>获取焦点</button>
                <button onClick={this.handleShowMenu} style={{marginLeft:'10px'}}>展示路由菜单</button>
                <div className="menu-container">
                    
                </div>
            </div>
        )
    }
}
export default Test;