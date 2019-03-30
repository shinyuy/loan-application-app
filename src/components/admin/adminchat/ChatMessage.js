import React, { Component } from 'react'

export default class ChatMessage extends Component {
  render() {
    return (
      <div>
        <form>
            <input id='handle' type='text' placeholder='Handle' />
            <input id='handle' type='text' placeholder='Handle' />
            <button id='send'>Send</button>
        </form>
      </div>
    )
  }
}
