import React from 'react';
import style from './style.css';
import io from 'socket.io-client';
import { withRouter } from 'react-router';

let socket=io();

class createRoom extends React.Component{
    
    constructor(props){
        super(props);
        
        this.state={
            room:"",
            type:""
        };
    }
    
    onFormSend(e){
        e.preventDefault();
        console.log(this.state);
        
         var room=this.state.room;
         var type=this.state.type;
        if(type=='private')
            socket.emit('join_private',room);
        else
            socket.emit('join_public',room);
        
        this.props.router.push('/'+room);
    }
    
    setType(e){
        this.setState({
            type:e.target.value
        });
    }
    
    setName(e){
        this.setState({
            room:e.target.value
        });
    }
    
    render(){
        return(
    <div>
        <div className="container">

            <form method="post" className="form-inline create_form text-center" onSubmit={this.onFormSend.bind(this)}>
                <h3 className="title">Create and Join Room</h3>
                <div className="form-group">
                    <input onChange={this.setName.bind(this)} value={this.state.room} placeholder="Enter Room Name" type="text" className="form-control" name="name" id="name" required />
                </div>
                <input type="radio" name="type" value="public" required checked={this.state.type==='public'} onChange={this.setType.bind(this)}/>public
                <input type="radio" name="type" value="private" required checked={this.state.type==='private'} onChange={this.setType.bind(this)}/>private
                <button type="submit" className="btn btn-primary">Create</button>
            </form>

            <form className="form-inline text-center public_data">
                <h3 className="title">Join Public Room</h3>
                <div className="form-group">
                    <select className="form-control" id="sel1">
                        <option></option>
                        <option>abcdef</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Join Public</button>
            </form>

            <form className="form-inline text-center private_data">
            <h3 className="title">Join Private Room</h3>
            <div className="form-group">
            <input placeholder="Enter Room Name" type="email" className="form-control" id="email" />
            </div>
            <button type="submit" className="btn btn-primary">Join Private</button>
            </form>

        </div>

    </div>
        )
    }
}

export default createRoom;