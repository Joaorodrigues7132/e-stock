import { useEffect, useState } from "react";
import { ButtonAction, ButtonAdd, ButtonDiv, Container, Table, TableItem, TAction, Tbody, TbSection, Thead, TitleTable } from "./styles";
import { AiOutlinePlus } from 'react-icons/ai'
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs'
import axios from 'axios';
import ModalManutencao from "./ModalManutencao";
import ModalManutencaoUpdate from "./ModalManutencaoUpdate";

export default function Manutencao() {

    const [open, setOpen] = useState(false)
    const [openEdit, setOpenEdit] = useState(false)
    const [manutencoes, setManutencoes] = useState([])
    const [idEdit, setIdEdit] = useState()


    const deleteManutencao = async (id) => {
        try {
            await axios({
                    method: "delete",
                    url: `http://localhost:3001/manutencao/${id}`,
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

    const openEditManutencao = (id) => {
        setIdEdit(id)
        setOpenEdit(true)
    }

    useEffect(() => {
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

        getManutencao()
    }, [])


    return(
        <Container>
            <TitleTable>
            <h1>Manutencao</h1>
            </TitleTable>
            <ButtonDiv>
                <ButtonAdd onClick={() => setOpen(!open)}>Adicionar<AiOutlinePlus/></ButtonAdd>
            </ButtonDiv>
            <ModalManutencao open={open} onChangeOpen={() => setOpen(!open)} />
            <ModalManutencaoUpdate  open={openEdit} onChangeOpen={() => setOpenEdit(!openEdit)} id={idEdit} />
            <Table>
               <Thead>
                    <TableItem>Data_Envio</TableItem>
                    <TableItem>Valor</TableItem>
                    <TableItem>Descricao</TableItem>
                    <TableItem>Data_solucao</TableItem>
                    <TableItem>Prestador:</TableItem>
                    <TableItem>Ativo:</TableItem>
                    <TableItem>Acoes:</TableItem>
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
                                <ButtonAction onClick={() => deleteManutencao(item.id)}>
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