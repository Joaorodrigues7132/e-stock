import styled from "styled-components";
import logo from '../../Images/logo_transparente.jpg'

export const Container = styled.div`
    height: 80px;
    display: flex;
    background-color: #748493;
    box-shadow: 0 0 3px 3px;
    margin-bottom: 5%;
    justify-content: center;
    align-items: center;
    > svg {
        position: fixed;
        color: white;
        width: 30px;
        height: 30px;
        margin-top: 32px;
        margin-left: 32px;
        cursor: pointer;
        top: 0;
        left: 0;
    }
`

export const Logo = styled.div`
    background-image: url(${logo});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 250px;
    height: 250px;
`