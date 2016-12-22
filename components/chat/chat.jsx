import React from 'react';
import style from './style.css';


class chat extends React.Component{
    render(){
        return(

      <div>
          <div className="container bootstrap snippet">
            <div className="row">
             
              <div className="col-md-8 bg-white ">
                <div className="chat-message">
                  <ul className="chat">
                   
                    <Left name="Sigma" time="10" message="asdhjashsajdhjskdhfjskdhfjksdhfjksdhfjksdhjklfhsdkfhdfhjdlsddjfjshafhfdjshjdhfkssfd hdhjddsThis is working"/>
                    <Right name="web" time="12" message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales at. " />
                                        
                  </ul>
                </div>
                <InputArea/>
              </div>        
            </div>
          </div>
      </div>
    

        )
    }
}

class InputArea extends React.Component{
    render(){
        return(
            <div className="chat-box bg-white">
                  <div className="input-group">
                    <input className="form-control border no-shadow no-rounded" placeholder="Type your message here" />
                    <span className="input-group-btn">
                      <button className="btn btn-success no-rounded" type="button">Send</button>
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
                   <strong className="primary-font">{this.props.name}</strong>
                   <small className="pull-right text-muted"><i className="fa fa-clock-o" />  {this.props.time} min ago</small>
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