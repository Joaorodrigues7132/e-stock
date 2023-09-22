import { useState, useEffect } from "react";
import { ButtonAction, ButtonAdd, ButtonDiv, Container, Table, TableItem, TAction, Tbody, TbSection, Thead, TitleTable } from "./styles";
import { AiOutlinePlus } from 'react-icons/ai'
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs'
import axios from 'axios';
import ModalEstoque from "./ModalEstoque";
import ModalEstoqueUpdate from "./ModalEstoqueUpdate";
import ModalEstoqueDelete from "./ModalEstoqueDelete";


export default function Estoque() {

    const [open, setOpen] = useState(false)
    const [openEdit, setOpenEdit] = useState(false)
    const [openDelete, setOpenDelete] = useState(false)
    const [estoques, setEstoques] = useState([])
    const [idEdit, setIdEdit] = useState()
    const [idDelete, setIdDelete] = useState()

    const getEstoque = async() => {
        try {
            axios({
                method: "get",
                url: "http://localhost:3001/estoque",
                responseType: "json",
              }).then(function (response) {
                setEstoques(response.data)
                console.log(response)
              });
        } catch (error) {
            console.log(alert)
        }
    }

    const openEditEstoque = (id) => {
        setIdEdit(id)
        setOpenEdit(true)
    }

    const openDeleteEstoque = (id) => {
        setIdDelete(id)
        setOpenDelete(true)
    }

    useEffect(() => {
        getEstoque()
    }, [])

    const closeModal = () => {
        setOpen(!open)
        getEstoque()
    }

    const closeModalEdit = () => {
        setOpenEdit(!openEdit)
        getEstoque()
    }

    const closeModalDelete = () => {
        setOpenDelete(!openDelete)
        getEstoque()
    }

    return(
        <Container>
            <TitleTable>
                <h1>Estoque</h1>
            </TitleTable>
            <ButtonDiv>
                <ButtonAdd onClick={() => setOpen(!open)}>Adicionar<AiOutlinePlus/></ButtonAdd>
            </ButtonDiv>
            <ModalEstoque open={open} onChangeOpen={() =>closeModal()} />
            <ModalEstoqueUpdate  open={openEdit} onChangeOpen={() =>closeModalEdit()} id={idEdit} />
            <ModalEstoqueDelete  open={openDelete} onChangeOpen={() => closeModalDelete()} id={idDelete} />
            <Table>
               <Thead>
                    
                    <TableItem>Endereço</TableItem>
                    <TableItem>Nome</TableItem>
                    <TableItem>Contato</TableItem>
                    <TableItem>Descrição</TableItem>
                    <TableItem>Ações</TableItem>
               </Thead>
               <Tbody>
                   {estoques.map(item => (
                        <>
                            
                            <TableItem>{item.Endereco}</TableItem>
                            <TableItem>{item.Nome}</TableItem>
                            <TableItem>{item.Telefone}</TableItem>
                            <TableItem>{item.Descricao}</TableItem>
                            <TAction>
                                <ButtonAction onClick={() => openDeleteEstoque(item.id)}>
                                    <BsFillTrashFill />
                                </ButtonAction>
                                <ButtonAction>
                                    <BsFillPencilFill onClick={() => openEditEstoque(item.id)}/>
                                </ButtonAction>
                            </TAction>
                        </>
                   ))}
               </Tbody>
            </Table>
        </Container>
    )
}