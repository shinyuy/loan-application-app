import React, { Component } from 'react';
import './chat.css';
import io from 'socket.io-client';
 



export default class Chat extends Component {

    componentDidMount(){
        const socket = io('http://localhost:4000');
    }

    render() {
        return (
            <div id='chat'>
            <div id='chat-window'>
               <div id='output'></div>
            </div>
                <form>
                    <input type='text' name='name' id='name' placeholder='Enter Name' onChange={this.handleChange} />
                    <textarea type='text' name='message' id='message' placeholder='Type Message' onChange={this.handleChange} />
                    <button type='submit'>Send</button> 
                </form>
            </div>
        )
    }
}
