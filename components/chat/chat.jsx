import React from 'react';
import style from './style.css';
import io from 'socket.io-client';
import { withRouter } from 'react-router';

class chat extends React.Component{

    
    constructor(props){
        super(props);

        this.state={
            message:[]
        };
    }
    
        getMessage(messagereceived){
            this.setState({
                message:this.state.message.concat(messagereceived)
            })
           console.log(messagereceived);
        }

    render(){
   
        
    return(

      <div>
          <div className="container bootstrap snippet">
            <div className="row">
             
              <div className="col-md-8 bg-white ">
                <div className="chat-message">
                  <ul className="chat">
                   
                   <InputArea updateChat={this.getMessage.bind(this)} />
                     {this.state.message}
                  </ul>
                </div>
              </div>        
            </div>
          </div>
      </div>
    

        )
    }
}

class InputArea extends React.Component{
    
    constructor(props){
        super(props);

        this.state={
            message:""
        };
    }
  
    updateMessage(e){
        this.setState({
            message:e.target.value
        })
    }
    
    sendMessage(e){
        
        this.props.updateChat(<Right message={this.state.message}/>);
        
        this.setState({
            message:""
        })
    }
    
    render(){
        
        return(
            <div className="chat-box bg-white">
                  <div className="input-group">
                    <input value={this.state.message} onChange={this.updateMessage.bind(this)} className="form-control border no-shadow no-rounded" placeholder="Type your message here" />
                    <span className="input-group-btn">
                      <button onClick={this.sendMessage.bind(this)} className="btn btn-success no-rounded" type="button">Send</button>
                    </span>
                  </div>
                </div>
        )
    }
}

class Left extends React.Component{
 
       render(){
           return(
            <li className="left clearfix">
                  <span className="chat-img pull-left">
                    <img src="http://bootdey.com/img/Content/user_3.jpg" alt="User Avatar" />
                  </span>
                  <div className="chat-body clearfix">
                    <div className="header">
                      <strong className="primary-font">{this.props.name}</strong>
                      <small className="pull-right text-muted"><i className="fa fa-clock-o" /> {this.props.time} min ago</small>
                    </div>
                    <p>
                      "{this.props.message}"
                    </p>
                  </div>
                </li>
    )
       }
  
}


class Right extends React.Component{
    render(){
        return(
             <li className="right clearfix">
               <span className="chat-img pull-right">
                 <img src="http://bootdey.com/img/Content/user_1.jpg" alt="User Avatar" />
               </span>
               <div className="chat-body clearfix">
                 <div className="header">
                   <strong className="primary-font">Name</strong>
                   <small className="pull-right text-muted"><i className="fa fa-clock-o" />  10 min ago</small>
                 </div>
                 <p>
                   "{this.props.message}"
                 </p>
               </div>
             </li>
        )
    }
}


export default chat;