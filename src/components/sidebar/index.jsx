import React from 'react'
import { BackSideBar, Container, Content } from './styles'
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

import {AiOutlineCloudServer} from 'react-icons/ai'

import SidebarItem from '../sidebarItem'
import { NavLink } from 'react-router-dom'

export default function Sidebar({ active }){

  const closeSidebar = () => {
    active(false)
  }

  return (
    <div>
    <BackSideBar onClick={closeSidebar} />
    <Container sidebar={active}>
      <AiOutlineClose onClick={closeSidebar} />  
      <Content>
        <NavLink to={'/'} onClick={closeSidebar} style={{textDecoration: 'none'}}>
            <SidebarItem Icon={BsFillBoxFill} Text="Estoque" />
        </NavLink>
        <NavLink to={'/proprietario'} onClick={closeSidebar} style={{textDecoration: 'none'}}>
            <SidebarItem Icon={BsFillPersonFill} Text="Proprietário" />
        </NavLink>
        <NavLink to={'/manutencao'} onClick={closeSidebar} style={{textDecoration: 'none'}}>
          <SidebarItem Icon={BsScrewdriver} Text="Manutenção" />
        </NavLink>
        <NavLink to={'/prestador'} onClick={closeSidebar} style={{textDecoration: 'none'}}>
          <SidebarItem Icon={BsFillWalletFill} Text="Prestador de Serviço" />
        </NavLink>
        <NavLink to={'/ativos'} onClick={closeSidebar} style={{textDecoration: 'none'}}>
            <SidebarItem Icon={BsClipboard2CheckFill} Text="Ativos" />
        </NavLink>
        <NavLink to={'/classe'} onClick={closeSidebar} style={{textDecoration: 'none'}}>
            <SidebarItem Icon={AiOutlineCloudServer} Text="Classe" />
        </NavLink>
      </Content>
    </Container>
    </div>
  )
}