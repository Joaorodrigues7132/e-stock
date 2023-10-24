import { Container, ContainerIcon, Logo } from "./styles";
import {HiMenuAlt2} from 'react-icons/hi'
import { useState } from "react";
import Sidebar from "../sidebar";
import logo from '../../Images/logo_transparente.jpg'
export default function Header() {
    const [sideBar, setSideBar] = useState(false)

    const showSideBar = () => setSideBar(!sideBar)


    return(
        <Container>
            <ContainerIcon><HiMenuAlt2 onClick={showSideBar}/></ContainerIcon>
            <Logo />
            {sideBar && <Sidebar active={setSideBar} />}
        </Container>
    )
}