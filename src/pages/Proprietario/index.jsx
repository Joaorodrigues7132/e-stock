import { useEffect, useState } from "react";
import { ButtonAction, ButtonAdd, ButtonDiv, Container, Table, TableItem, TAction, Tbody, TbSection, Thead, TitleTable } from "./styles";
import { AiOutlinePlus } from 'react-icons/ai'
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs'
import axios from 'axios';
import ModalPropietario from "./ModalPropietario";
import ModalPropietarioUpdate from "./ModalProprietarioUpdate";

export default function Proprietario() {

    const [open, setOpen] = useState(false)
    const [openEdit, setOpenEdit] = useState(false)
    const [propietarios, setPropietarios] = useState([])
    const [idEdit, setIdEdit] = useState()

    const deletePropietario = async (id) => {
        try {
            await axios({
                    method: "delete",
                    url: `http://localhost:3001/propietario/${id}`,
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

    const openEditPropietario = (id) => {
        setIdEdit(id)
        setOpenEdit(true)
    }

    useEffect(() => {
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

        getPropietario()
    }, [])


    return(
        <Container>
            <TitleTable>
            <h1>Proprietário</h1>
            </TitleTable>
            <ButtonDiv>
                <ButtonAdd onClick={() => setOpen(!open)}>Adicionar<AiOutlinePlus/></ButtonAdd>
            </ButtonDiv>
            <ModalPropietario open={open} onChangeOpen={() => setOpen(!open)} />
            <ModalPropietarioUpdate  open={openEdit} onChangeOpen={() => setOpenEdit(!openEdit)} id={idEdit} />
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
                                <ButtonAction onClick={() => deletePropietario(item.id)}>
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