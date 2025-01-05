import React from 'react'
import './style.css'
import logo from '../../Assets/T-Shirts.png'
import { useNavigate } from "react-router-dom";
import Button from '../Button/Button';

export default function Header() {

  const navigate = useNavigate()

  return (
    <header>
      <div className="header-content">
        <div className="w-[150px] hover:cursor-pointer" onClick={() => navigate('/')}>
          <img src={logo} alt=""/>
        </div>

        <Button onClick={() => navigate('/cart')}>Cart</Button>
      </div>
    </header>
  )
}
