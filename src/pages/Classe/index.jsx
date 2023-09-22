import { useEffect, useState } from "react";
import { ButtonAction, ButtonAdd, ButtonDiv, Container, Table, TableItem, TAction, Tbody, TbSection, Thead, TitleTable } from "./styles";
import { AiOutlinePlus } from 'react-icons/ai'
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs'
import axios from 'axios';
import ModalClasse from "./ModalClasse";
import ModalClasseUpdate from "./ModalClasseUpdate";
import ModalClasseDelete from "./ModalClasseDelete";


export default function Classe() {

    const [open, setOpen] = useState(false)
    const [openEdit, setOpenEdit] = useState(false)
    const [openDelete, setOpenDelete] = useState(false)
    const [classes, setClasses] = useState([])
    const [idEdit, setIdEdit] = useState()
    const [idDelete, setIdDelete] = useState()

    const getClasse = async() => {
        try {
            axios({
                method: "get",
                url: "http://localhost:3001/classe",
                responseType: "json",
              }).then(function (response) {
                setClasses(response.data)
                console.log(response)
              });
        } catch (error) {
            console.log(error)
        }
    }

    const openEditClasse = (id) => {
        setIdEdit(id)
        setOpenEdit(true)
    }

    const openDeleteClasse = (id) => {
        setIdDelete(id)
        setOpenDelete(true)
    }

    useEffect(() => {
        getClasse()
    }, [])

    const closeModal = () => {
        setOpen(!open)
        getClasse()
    }

    const closeModalEdit = () => {
        setOpenEdit(!openEdit)
        getClasse()
    }

    const closeModalDelete = () => {
        setOpenDelete(!openDelete)
        getClasse()
    }

    return(
        <Container>
            <TitleTable>
                <h1>Classe</h1>
            </TitleTable>
            <ButtonDiv>
                <ButtonAdd onClick={() => setOpen(!open)}>Adicionar<AiOutlinePlus/></ButtonAdd>
            </ButtonDiv>
            <ModalClasse open={open} onChangeOpen={() => closeModal()} />
            <ModalClasseUpdate  open={openEdit} onChangeOpen={() => closeModalEdit()} id={idEdit} />
            <ModalClasseDelete  open={openDelete} onChangeOpen={() => closeModalDelete()} id={idDelete} />
            <Table>
               <Thead>
                    
                    <TableItem>Nome</TableItem>
                    <TableItem>Descrição</TableItem>
                    <TableItem>Ações</TableItem>
               </Thead>
               <Tbody>
                   {classes.map(item => (
                        <>
                            
                            <TableItem>{item.Nome}</TableItem>
                            <TableItem>{item.Descricao}</TableItem>
                            <TAction>
                                <ButtonAction onClick={() => openDeleteClasse(item.id)}>
                                    <BsFillTrashFill />
                                </ButtonAction>
                                <ButtonAction>
                                    <BsFillPencilFill onClick={() => openEditClasse(item.id)}/>
                                </ButtonAction>
                            </TAction>
                        </>
                   ))}
               </Tbody>
            </Table>
        </Container>
    )
}