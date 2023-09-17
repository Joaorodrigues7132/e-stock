import styled from "styled-components";

export const Container = styled.div`
    display: block;
    margin: 0 auto;
    width: 90%;
`

export const Table = styled.div`
    width: 100%;
    background-color: white;
    color: black;
`

export const Thead = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const TableItem = styled.div`
    width: calc(100%/4);
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    padding: 10px;
`

export const Tbody = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`

export const TAction = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: calc(100%/4);
    border: 1px solid black;
    padding: 10px;
`

export const ButtonAction = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
`

export const ButtonAdd = styled.button`
    width: 150px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;
    font-size: 20px;
`

export const ButtonDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 1.2%;
`

export const TitleTable = styled.div`
    width: 100%;
    text-align: center;
    margin-bottom: 2%;
`