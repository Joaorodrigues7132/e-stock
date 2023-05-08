import { useState } from "react";
import ModalAtivo from "./ModalAtivos";
import { ButtonAction, ButtonAdd, ButtonDiv, Container, Table, TableItem, TAction, Tbody, TbSection, Thead, TitleTable } from "./styles";
import { AiOutlinePlus } from 'react-icons/ai'
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs'

export default function Classe() {

    const [open, setOpen] = useState(false)

    const Item = [
        {
            id: 2,
            Nome: 'nome2',
            desc: 'desc2'
        },

        {
            id: 2,
            Nome: 'nome2',
            desc: 'desc2'
        },

    ]

    return(
        <Container>
            <TitleTable>
                <h1>Classe</h1>
            </TitleTable>
            <ButtonDiv>
                <ButtonAdd onClick={() => setOpen(!open)}>Adicionar<AiOutlinePlus/></ButtonAdd>
            </ButtonDiv>
            <ModalAtivo open={open} onChangeOpen={() => setOpen(!open)} />
            <Table>
               <Thead>
                    <TableItem>Id</TableItem>
                    <TableItem>Nome</TableItem>
                    <TableItem>Descricao</TableItem>
                    <TableItem>Acoes: </TableItem>
               </Thead>
               <Tbody>
                   {Item.map(item => (
                        <>
                            <TableItem>{item.id}</TableItem>
                            <TableItem>{item.Nome}</TableItem>
                            <TableItem>{item.desc}</TableItem>
                            <TAction>
                                <ButtonAction>
                                    <BsFillTrashFill />
                                </ButtonAction>
                                <ButtonAction>
                                    <BsFillPencilFill />
                                </ButtonAction>
                            </TAction>
                        </>
                   ))}
               </Tbody>
            </Table>
        </Container>
    )
}