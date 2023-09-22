import { useEffect, useState } from "react";
import { ButtonAction, ButtonAdd, ButtonDiv, Container, Table, TableItem, TAction, Tbody, TbSection, Thead, TitleTable } from "./styles";
import { AiOutlinePlus } from 'react-icons/ai'
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs'
import axios from 'axios';
import ModalPropietario from "./ModalPropietario";
import ModalPropietarioUpdate from "./ModalProprietarioUpdate";
import ModalPropietarioDelete from "./ModalPropietarioDelete";

export default function Proprietario() {

    const [open, setOpen] = useState(false)
    const [openEdit, setOpenEdit] = useState(false)
    const [openDelete, setOpenDelete] = useState(false)
    const [propietarios, setPropietarios] = useState([])
    const [idEdit, setIdEdit] = useState()
    const [idDelete, setIdDelete] = useState()

    const openEditPropietario = (id) => {
        setIdEdit(id)
        setOpenEdit(true)
    }

    const openDeletePropietario = (id) => {
        setIdDelete(id)
        setOpenDelete(true)
    }

    const getPropietario = async() => {
        try {
            axios({
                method: "get",
                url: "http://localhost:3001/propietario",
                responseType: "json",
              }).then(function (response) {
                setPropietarios(response.data)
                console.log(response)
              });
        } catch (error) {
            console.log(alert)
        }
    }

    useEffect(() => {
        getPropietario()
    }, [])

    const closeModal = () => {
        setOpen(!open)
        getPropietario()
    }

    const closeModalEdit = () => {
        setOpenEdit(!openEdit)
        getPropietario()
    }

    const closeModalDelete = () => {
        setOpenDelete(!openDelete)
        getPropietario()
    }


    return(
        <Container>
            <TitleTable>
            <h1>Proprietário</h1>
            </TitleTable>
            <ButtonDiv>
                <ButtonAdd onClick={() => setOpen(!open)}>Adicionar<AiOutlinePlus/></ButtonAdd>
            </ButtonDiv>
            <ModalPropietario open={open} onChangeOpen={() => closeModal()} />
            <ModalPropietarioUpdate  open={openEdit} onChangeOpen={() => closeModalEdit()} id={idEdit} />
            <ModalPropietarioDelete  open={openDelete} onChangeOpen={() => closeModalDelete()} id={idDelete} />
            <Table>
               <Thead>
                    <TableItem>Nome</TableItem>
                    <TableItem>Contato</TableItem>
                    <TableItem>Descrição</TableItem>
                    <TableItem>Ações:</TableItem>
               </Thead>
               <Tbody>
                   {propietarios.map(item => (
                        <>
                            <TableItem>{item.Nome}</TableItem>
                            <TableItem>{item.Contato}</TableItem>
                            <TableItem>{item.Descricao}</TableItem>
                            <TAction>
                                <ButtonAction onClick={() => openDeletePropietario(item.id)}>
                                    <BsFillTrashFill />
                                </ButtonAction>
                                <ButtonAction>
                                    <BsFillPencilFill onClick={() => openEditPropietario(item.id)}/>
                                </ButtonAction>
                            </TAction>
                        </>
                   ))}
               </Tbody>
            </Table>
        </Container>
    )
}