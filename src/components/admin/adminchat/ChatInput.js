import React, { Component } from 'react'
import './chat.css';

export default class ChatInput extends Component {
  render() {
    return (
      <div>
        <form>
            <input type='text' name='name' id='handle' placeholder='Enter Name' onChange={this.handleChange} />
            <textarea type='text' name='message' rows='5' id='message' placeholder='Type Message' onChange={this.handleChange} />
            <button type='submit'>Send</button>
        </form>
      </div>
    )
  }
}
