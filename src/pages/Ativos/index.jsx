import { useEffect, useState } from "react";
import ModalAtivo from "./ModalAtivos";
import { ButtonAction, ButtonAdd, ButtonDiv, Container, Table, TableItem, TAction, Tbody, TbSection, Thead, TitleTable } from "./styles";
import { AiOutlinePlus } from 'react-icons/ai'
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs'
import ModalAtivoUpdate from "./ModalAtivoUpdate";
import axios from 'axios';

export default function Ativos() {

    const [open, setOpen] = useState(false)
    const [openEdit, setOpenEdit] = useState(false)
    const [ativos, setAtivos] = useState([])
    const [idEdit, setIdEdit] = useState()

    const deleteAtivo = async (id) => {
        try {
            await axios({
                    method: "delete",
                    url: `http://localhost:3001/ativo/${id}`,
                    params: {
                       id: id
                    },
                  }).then(function (response) {
                    alert('conteudo deletado com sucesso')
                    console.log(response)
                  });
            }
            catch (error) {
                console.log(error)
            }
    }

    const openEditAtivo = (id) => {
        setIdEdit(id)
        setOpenEdit(true)
    }

    useEffect(() => {
        const getAtivo = async() => {
            try {
                axios({
                    method: "get",
                    url: "http://localhost:3001/ativo",
                    responseType: "json",
                  }).then(function (response) {
                    setAtivos(response.data)
                    console.log(response)
                  });
            } catch (error) {
                console.log(alert)
            }
        }

        getAtivo()
    }, [])


    return(
        <Container>
            <TitleTable>
                <h1>Ativos</h1>
            </TitleTable>
            <ButtonDiv>
                <ButtonAdd onClick={() => setOpen(!open)}>Adicionar<AiOutlinePlus/></ButtonAdd>
            </ButtonDiv>
            <ModalAtivo open={open} onChangeOpen={() => setOpen(!open)} />
            <ModalAtivoUpdate  open={openEdit} onChangeOpen={() => setOpenEdit(!openEdit)} id={idEdit} />
            <Table>
               <Thead>
                    <TableItem>Marca</TableItem>
                    <TableItem>Estoque</TableItem>
                    <TableItem>Classe</TableItem>
                    <TableItem>Descrição</TableItem>
                    <TableItem>Proprietário</TableItem>
                    <TableItem>Modelo</TableItem>
                    <TableItem>Ações</TableItem>
               </Thead>
               <Tbody>
                   {ativos.map(item => (
                        <>
                            <TableItem>{item.Marca}</TableItem>
                            <TableItem>{item.estoque?.Nome}</TableItem>
                            <TableItem>{item.classe?.Nome}</TableItem>
                            <TableItem>{item.Descricao}</TableItem>
                            <TableItem>{item.propietario?.Nome}</TableItem>
                            <TableItem>{item.Modelo}</TableItem>
                            <TAction>
                                <ButtonAction onClick={() => deleteAtivo(item.id)}>
                                    <BsFillTrashFill />
                                </ButtonAction>
                                <ButtonAction>
                                    <BsFillPencilFill onClick={() => openEditAtivo(item.id)}/>
                                </ButtonAction>
                            </TAction>
                        </>
                   ))}
               </Tbody>
            </Table>
        </Container>
    )
}