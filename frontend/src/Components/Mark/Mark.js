import React, { useEffect, useState, useRef } from 'react'
import './style.css'
import {RiCloseLine} from 'react-icons/ri'
import { IconContext } from 'react-icons'
import Button from '../Button/Button'
import api from '../../Services/axios'
import useSelectTheme from '../../Hooks/useSecteTheme'
import Select from 'react-select'

const markOptions = [
  { value: 1, label: 1 },
  { value: 2, label: 2 },
  { value: 3, label: 3 },
  { value: 4, label: 4 },
  { value: 5, label: 5 },
  { value: 6, label: 6 },
  { value: 7, label: 7 },
  { value: 8, label: 8 },
  { value: 9, label: 9 },
  { value: 10, label: 10 },
]

export default function Mark({visibility, setVisibility, id, getProduct}) {

  const [loading, setLoading] = useState(false)
  
  const [mark, setMark] = useState()

  const closeLoginMenu = () => {
    setVisibility(false)
  }

  const styles = useSelectTheme(true, '120px')

  const rate = async () => {
    try {
      setLoading(true)

      const url = "/mark/addMark"
  
      const data = {
        productId: id,
        mark: mark.value
      }
  
      const response = await api.post(url, data)
      console.log(response.data)

      getProduct()
      
      setLoading(false)
    }
    catch(err) {
      console.log(err)
    }
  }

  if(visibility)
    return (
      <div className="loginSpace">
        <div className="loginBackground" onClick={() => closeLoginMenu()}></div>

        <div className="loginContent">
          <div className="closeButtonBlock">
            <div className="closeButton" onClick={() => closeLoginMenu()}>
              <IconContext.Provider value={{ color: 'white', size: '20px' }}>
                <RiCloseLine/>
              </IconContext.Provider>
            </div>
          </div>

          <div className="signInHeaderBlock">
            <h2 className="signInHeader">Оценить</h2>
          </div>

          <div className="formBlock">
            <Select 
              value = {mark}
              onChange={e => setMark(e)}
              styles={styles}
              options={markOptions}
              isOptionDisabled={option => option.disabled}
              isSearchable={false}
            />
            <Button loading={loading} outline={true} onClick={() => {
              rate()
              closeLoginMenu()
            }}>Rate</Button>
          </div>
        </div>
      </div>
    )
  else
    return null
}
