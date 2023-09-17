import { useEffect, useState } from "react";
import { ButtonAction, ButtonAdd, ButtonDiv, Container, Table, TableItem, TAction, Tbody, TbSection, Thead, TitleTable } from "./styles";
import { AiOutlinePlus } from 'react-icons/ai'
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs'
import axios from 'axios';
import ModalClasse from "./ModalClasse";
import ModalClasseUpdate from "./ModalClasseUpdate";


export default function Classe() {

    const [open, setOpen] = useState(false)
    const [openEdit, setOpenEdit] = useState(false)
    const [classes, setClasses] = useState([])
    const [idEdit, setIdEdit] = useState()

    const deleteClasse = async (id) => {
        try {
            await axios({
                    method: "delete",
                    url: `http://localhost:3001/classe/${id}`,
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

    const openEditClasse = (id) => {
        setIdEdit(id)
        setOpenEdit(true)
    }

    useEffect(() => {
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
                console.log(alert)
            }
        }

        getClasse()
    }, [])

    return(
        <Container>
            <TitleTable>
                <h1>Classe</h1>
            </TitleTable>
            <ButtonDiv>
                <ButtonAdd onClick={() => setOpen(!open)}>Adicionar<AiOutlinePlus/></ButtonAdd>
            </ButtonDiv>
            <ModalClasse open={open} onChangeOpen={() => setOpen(!open)} />
            <ModalClasseUpdate  open={openEdit} onChangeOpen={() => setOpenEdit(!openEdit)} id={idEdit} />
            <Table>
               <Thead>
                    
                    <TableItem>Nome</TableItem>
                    <TableItem>Descricao</TableItem>
                    <TableItem>Acoes: </TableItem>
               </Thead>
               <Tbody>
                   {classes.map(item => (
                        <>
                            
                            <TableItem>{item.Nome}</TableItem>
                            <TableItem>{item.Descricao}</TableItem>
                            <TAction>
                                <ButtonAction onClick={() => deleteClasse(item.id)}>
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