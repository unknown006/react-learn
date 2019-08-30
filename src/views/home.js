import React from 'react';
import { Link } from 'react-router';
const Component=React.Component;

class RouterPage extends Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return (
            <ul>
                { 
                    this.props.menu.map(()=>{
                        return (
                            <li>
                               <Link>{}</Link>
                            </li>
                        )
                    }) 
                }
            </ul>
        )
    }
}

export default RouterPage;