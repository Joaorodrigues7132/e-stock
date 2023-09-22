import { Container, Logo } from "./styles";
import {HiMenuAlt2} from 'react-icons/hi'
import { useState } from "react";
import Sidebar from "../sidebar";
import logo from '../../Images/logo_transparente.jpg'
export default function Header() {
    const [sideBar, setSideBar] = useState(false)

    const showSideBar = () => setSideBar(!sideBar)


    return(
        <Container>
            <HiMenuAlt2 onClick={showSideBar}/>
            <Logo />
            {sideBar && <Sidebar active={setSideBar} />}
        </Container>
    )
}