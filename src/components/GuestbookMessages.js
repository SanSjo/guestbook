import React, { useState, useEffect } from 'react'
import { WriteMessages } from './WriteMessages'
import { AllMessages } from './AllMessages'

export const GuestbookMessages = (props) => {
  const [messages, setMessages] = useState([]);
  const [postMessage, setPostMessage] = useState('');

  const handleSubmit = () => {
    fetch('http://localhost:8080/messages')
      .then((res) => res.json())
      .then((data) => {
        setMessages(data)
      })
  }

  useEffect(() => {
    handleSubmit()
  }, [postMessage]);

  const handleFormSubmit = (message) => {
    fetch('http://localhost:8080/messages', {
      method: 'POST',
      body: JSON.stringify({ message }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(() => {
        setPostMessage(message)
      }).catch(() => {
        alert('Try again');
      })
  }

  return (
    <div>
      <WriteMessages submitForm={handleFormSubmit} />
      <div>
        {messages.reverse().map((message, index) => (
          // eslint-disable-next-line no-underscore-dangle
          <>
            <AllMessages
              key={index}
              author={props.user}
              message={message}
              // eslint-disable-next-line no-underscore-dangle
              id={message._id}
              handleDelete={handleSubmit} />
          </>
        ))}
        {/* <Card>
          <div>
            <p>{message.author}</p>
          </div>
          <div>
            <p>{message.message}</p>
          </div>
        </Card> */}
      </div>
    </div>
  )
}