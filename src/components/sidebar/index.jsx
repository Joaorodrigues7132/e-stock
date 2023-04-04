import React from 'react'
import { Container, Content } from './styles'
import { 
    AiOutlineClose
} from 'react-icons/ai'

import {
    BsFillBoxFill,
    BsFillPersonFill,
    BsScrewdriver,
    BsFillWalletFill,
    BsClipboard2CheckFill,
    BsFillFileEarmarkSpreadsheetFill
} from 'react-icons/bs'

import SidebarItem from '../sidebarItem'
import { NavLink } from 'react-router-dom'

export default function Sidebar({ active }){

  const closeSidebar = () => {
    active(false)
  }

  return (
    <div>
    <Container sidebar={active}>
      <AiOutlineClose onClick={closeSidebar} />  
      <Content>
        <NavLink to={'/'} style={{textDecoration: 'none'}}>
            <SidebarItem Icon={BsFillBoxFill} Text="Estoque" />
        </NavLink>
        <NavLink to={'/proprietario'} style={{textDecoration: 'none'}}>
            <SidebarItem Icon={BsFillPersonFill} Text="Proprietário" />
        </NavLink>
        <SidebarItem Icon={BsScrewdriver} Text="Manutenção" />
        <SidebarItem Icon={BsFillWalletFill} Text="Prestador de Serviço" />
        <NavLink to={'/ativos'} style={{textDecoration: 'none'}}>
            <SidebarItem Icon={BsClipboard2CheckFill} Text="Ativos" />
        </NavLink>
        <SidebarItem Icon={BsFillFileEarmarkSpreadsheetFill} Text="Classes" />
      </Content>
    </Container>
    </div>
  )
}