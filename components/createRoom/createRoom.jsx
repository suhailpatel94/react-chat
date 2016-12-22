import React from 'react';
import style from './style.css';
import jquery from 'jquery';
import io from 'socket.io-client';
import {browserHistory} from 'react-router';

let socket=io();
let $=jquery;

class createRoom extends React.Component{
    
    componentDidMount() {
        
        $(()=>{

            //create room

            var create_form=$('.create_form');

            create_form.submit(function(e){
                var name=$('input[name=name]').val();
                var type=$('input[name=type]:checked').val();
                e.preventDefault();
                if(type=='private')
                    socket.emit('join_private',name);
                else
                    socket.emit('join_public',name);
            })

            socket.on('joined',function(){
                console.log("redirect");
                browserHistory.push('/'+name);
            })

            //create room end
        })
    
    }   
    
    render(){
        return(
    <div>
        <div className="container">

            <form className="form-inline create_form text-center">
                <h3 className="title">Create and Join Room</h3>
                <div className="form-group">
                    <input placeholder="Enter Room Name" type="text" className="form-control" name="name" id="name" required />
                </div>
                <input type="radio" name="type" value="public" required />public
                <input type="radio" name="type" value="private" required />private
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