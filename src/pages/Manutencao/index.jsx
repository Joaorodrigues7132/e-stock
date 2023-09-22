import { useEffect, useState } from "react";
import { ButtonAction, ButtonAdd, ButtonDiv, Container, Table, TableItem, TAction, Tbody, TbSection, Thead, TitleTable } from "./styles";
import { AiOutlinePlus } from 'react-icons/ai'
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs'
import axios from 'axios';
import ModalManutencao from "./ModalManutencao";
import ModalManutencaoUpdate from "./ModalManutencaoUpdate";
import ModalManutencaoDelete from "./ModalManutencaoDelete";

export default function Manutencao() {

    const [open, setOpen] = useState(false)
    const [openEdit, setOpenEdit] = useState(false)
    const [openDelete, setOpenDelete] = useState(false)
    const [manutencoes, setManutencoes] = useState([])
    const [idEdit, setIdEdit] = useState()
    const [idDelete, setIdDelete] = useState()

    const openEditManutencao = (id) => {
        setIdEdit(id)
        setOpenEdit(true)
    }

    const openDeleteManutencao = (id) => {
        setIdDelete(id)
        setOpenDelete(true)
    }

    const getManutencao = async() => {
        try {
            axios({
                method: "get",
                url: "http://localhost:3001/manutencao",
                responseType: "json",
              }).then(function (response) {
                setManutencoes(response.data)
                console.log(response)
              });
        } catch (error) {
            console.log(alert)
        }
    }

    useEffect(() => {
        getManutencao()
    }, [])

    const closeModal = () => {
        setOpen(!open)
        getManutencao()
    }

    const closeModalEdit = () => {
        setOpenEdit(!openEdit)
        getManutencao()
    }

    const closeModalDelete = () => {
        setOpenDelete(!openDelete)
        getManutencao()
    }


    return(
        <Container>
            <TitleTable>
            <h1>Manutenção</h1>
            </TitleTable>
            <ButtonDiv>
                <ButtonAdd onClick={() => setOpen(!open)}>Adicionar<AiOutlinePlus/></ButtonAdd>
            </ButtonDiv>
            <ModalManutencao open={open} onChangeOpen={() =>closeModal()} />
            <ModalManutencaoUpdate  open={openEdit} onChangeOpen={() => closeModalEdit()} id={idEdit} />
            <ModalManutencaoDelete  open={openDelete} onChangeOpen={() => closeModalDelete()} id={idDelete} />
            <Table>
               <Thead>
                    <TableItem>Data Envio</TableItem>
                    <TableItem>Valor</TableItem>
                    <TableItem>Descrição</TableItem>
                    <TableItem>Data Solução</TableItem>
                    <TableItem>Prestador</TableItem>
                    <TableItem>Ativo</TableItem>
                    <TableItem>Ações</TableItem>
               </Thead>
               <Tbody>
                   {manutencoes.map(item => (
                        <>
                            <TableItem>{item.DataEnvio}</TableItem>
                            <TableItem>{item.Valor}</TableItem>
                            <TableItem>{item.Descricao}</TableItem>
                            <TableItem>{item.DataSolucao}</TableItem>
                            <TableItem>{item.prestador?.Nome}</TableItem>
                            <TableItem>{item.ativo?.Descricao}</TableItem>
                            <TAction>
                                <ButtonAction onClick={() => openDeleteManutencao(item.id)}>
                                    <BsFillTrashFill />
                                </ButtonAction>
                                <ButtonAction>
                                    <BsFillPencilFill onClick={() => openEditManutencao(item.id)}/>
                                </ButtonAction>
                            </TAction>
                        </>
                   ))}
               </Tbody>
            </Table>
        </Container>
    )
}