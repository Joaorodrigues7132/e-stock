import { useEffect, useState } from "react";
import { ButtonAction, ButtonAdd, ButtonDiv, Container, Table, TableItem, TAction, Tbody, TbSection, Thead, TitleTable } from "./styles";
import { AiOutlinePlus } from 'react-icons/ai'
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs'
import axios from 'axios';
import ModalPrestador from "./ModalPrestador";
import ModalPrestadorUpdate from "./ModalPrestadorUpdate";

export default function Prestador() {

    const [open, setOpen] = useState(false)
    const [openEdit, setOpenEdit] = useState(false)
    const [prestadores, setPrestadores] = useState([])
    const [idEdit, setIdEdit] = useState()

    const deletePrestador = async (id) => {
        try {
            await axios({
                    method: "delete",
                    url: `http://localhost:3001/prestador/${id}`,
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

    const openEditPrestador = (id) => {
        setIdEdit(id)
        setOpenEdit(true)
    }

    useEffect(() => {
        const getPrestador = async() => {
            try {
                axios({
                    method: "get",
                    url: "http://localhost:3001/prestador",
                    responseType: "json",
                  }).then(function (response) {
                    setPrestadores(response.data)
                    console.log(response)
                  });
            } catch (error) {
                console.log(alert)
            }
        }

        getPrestador()
    }, [])


    return(
        <Container>
            <TitleTable>
            <h1>Prestador</h1>
            </TitleTable>
            <ButtonDiv>
                <ButtonAdd onClick={() => setOpen(!open)}>Adicionar<AiOutlinePlus/></ButtonAdd>
            </ButtonDiv>
            <ModalPrestador open={open} onChangeOpen={() => setOpen(!open)} />
            <ModalPrestadorUpdate open={openEdit} onChangeOpen={() => setOpenEdit(!openEdit)} id={idEdit} />
            <Table>
               <Thead>
                    <TableItem>Nome</TableItem>
                    <TableItem>Telefone</TableItem>
                    <TableItem>Endereço</TableItem>
                    <TableItem>Descrição</TableItem>
                    <TableItem>Proprietário</TableItem>
                    <TableItem>Ações</TableItem>
               </Thead>
               <Tbody>
                   {prestadores.map(item => (
                        <>
                            <TableItem>{item.Nome}</TableItem>
                            <TableItem>{item.Telefone}</TableItem>
                            <TableItem>{item.Endereco}</TableItem>
                            <TableItem>{item.Descricao}</TableItem>
                            <TableItem>{item.propietario?.Nome}</TableItem>
                            <TAction>
                                <ButtonAction onClick={() => deletePrestador(item.id)}>
                                    <BsFillTrashFill />
                                </ButtonAction>
                                <ButtonAction>
                                    <BsFillPencilFill onClick={() => openEditPrestador(item.id)}/>
                                </ButtonAction>
                            </TAction>
                        </>
                   ))}
               </Tbody>
            </Table>
        </Container>
    )
}