import React, { Component } from "react";
import io from "socket.io-client";

export default class Chat extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            message: '',
            messages: []
        };

        this.socket = io('localhost:4000');

        this.socket.on('RECEIVE_MESSAGE', function (data) {
            addMessage(data);
        });

        const addMessage = data => {
            console.log(data);
            this.setState({ messages: [...this.state.messages, data] });
            console.log(this.state.messages);
        };

        this.sendMessage = e => {
            e.preventDefault();
            this.socket.emit('SEND_MESSAGE', {
                author: this.state.username,
                message: this.state.message
            })
            this.setState({ message: '' });

        }
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title">Chat</div>
                                <hr />
                                <div className="messages" 
                                style={{
                                    overflowY : 'scroll',
                                    height :'200px'
                                    }} >
                                    {this.state.messages.map(message => {
                                        return (
                                            <div><span className='chat'>{message.author}</span>: {message.message}</div>
                                        )
                                    })}
                                </div>

                            </div>
                            <div className="card-footer">
                                <input type="text" placeholder="Username" value={this.state.username} onChange={e => this.setState({ username: e.target.value })} className="form-control" />
                                <br />
                                <input type="text" placeholder="Message" className="form-control" value={this.state.message} onChange={e => this.setState({ message: e.target.value })} />
                                <br />
                                <button onClick={this.sendMessage} className="btn" style={{backgroundColor: ' #e1ddc3'}} >Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

 
