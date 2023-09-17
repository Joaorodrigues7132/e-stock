import styled from "styled-components";


export const BackModal = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.2);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export const ModalFields = styled.div`
    width: 80%;
    margin: 0 auto;
`

export const Button = styled.button`
    width: ${props => props.size || "30px"};
    height: 30px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    font-size: 25px;
    text-align: center;
    background: none;
    background-color: ${props => props.fill || "none"};
    margin-top: ${props => props.spaced || "0px"};
    cursor: pointer;
`

export const ModalHeader = styled.div`
    width: 90%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export const Modal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: black;
    background-color: white;
    border-radius: 10px;
    padding: 10px;
`

export const Input = styled.input`
    width: 100%;
    border: none;
    border-bottom: 0.5px solid black;
    padding: 5px;
    font-size: 20px;
    :focus{
        outline: none;
    }
`

export const Select = styled.select`
    background-color: white;
    width: 100%;
`

export const Field = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    margin-bottom: 1.4%;
`