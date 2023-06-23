import { CabinOutlined, LogoutRounded, Money } from '@mui/icons-material'
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import "./DropDown.css"
import styled from 'styled-components'


function DropDown() {
    const [clicado, setClicado] = useState(false);
    
    let menuRef = useRef();
    useEffect(()=>{
        let handler = (e)=>{
            if(!menuRef.current.contains(e.target)){
            setClicado(false);
            console.log(clicado)
        }
        }
        document.addEventListener("mousedown", handler);
        return() =>{
            document.removeEventListener("mousedown", handler);
        }
    })
    
  return (
    <div>
        <div className='menu-container' ref={menuRef}>
            <div className='menu-disparar' onClick={() =>{setClicado(!clicado)}}>
                <img src="https://github.com/oederson.png" alt="" className="topAvatar"/>
            <div className={`dropdown-menu${clicado?'ativo':'inativo'}`} >
                <h3 className='titulo'>Algo <br/><span className='titulo-span'>Outro Algo</span></h3>
                <ul className='dropUl'>
                    <DropDownItem icone={<CabinOutlined/>} text={" Testando"} />
                    <DropDownItem icone={<Money/>} text={"fique rico"}/>
                    <Link to="/deslogar">
                    <DropDownItem icone={<LogoutRounded/>} text={"Logout"}/>
                    </Link>
                    
                </ul>
                </div>    
            </div>

        </div>
    </div>
  )
}

function DropDownItem(props){
    return(
        <li className="dropdownItem">
            <div className='icone'>{props.icone}</div>
            <h4>{props.text}</h4>
        </li>
    )
}

export default DropDown