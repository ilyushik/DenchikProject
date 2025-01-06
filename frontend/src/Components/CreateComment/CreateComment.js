import React, { useState } from 'react'
import './style.css'
import Button from '../Button/Button'
import api from '../../Services/axios'

export default function CreateComment({label, id}) {

  const [comment, setComment] = useState("")

  const [loading, setLoading] = useState(false)

  const onClickHandler = async () => {
    try {
      const url = "/comment/addComment"

      const data = {
        productId: parseInt(id),
        text: comment
      }

      console.log(data)

      const response = await api.post(url, data)

      setComment("")

      console.log(response.data)
    }
    catch(err) {
      console.log(err)
    }
  }

  return (
    <div className="create-comment mt-5">
      <div className="create-comment__comment">
        <div className="formGroup !w-full">
          <textarea 
            maxLength={1500}
            autoComplete="off" 
            className="formInput comment__textarea"
            placeholder=" " 
            value={comment}
            onChange={e => setComment(e.target.value)}
          />
          <label className="formLabel !bg-dark-100">{label}</label>
        </div>
      </div>
      <div className="create-comment__options">
        <div className="create-comment__count-info">
          <p className="create-comment__count-text">{comment.length}/1500 символов</p>
        </div>
        <div className="create-comment__buttons">
          <Button outline={true} onClick={() => onClickHandler()} loading={loading}>Отправить</Button>
        </div>
      </div>
    </div>
  )
}
