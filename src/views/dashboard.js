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
    }
    focus(){
        this.textInput.focus();
    }   
    handleClick() {
        alert(321)
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
    render(){
        return (
            <div className="container" style={{
                marginTop:this.state.value+'px',
                background:randomColor(),
                transition:'all 2s linear',
            }} onClick={this.handleClick}>
                {'输入框'}:<TestComponent  textInput={(dom)=>{this.textInput=dom}} test={2222222}/>
                <br/>
                <button onClick={this.handleGetFocus}>获取焦点</button>
            </div>
        )
    }
}
export default Test;