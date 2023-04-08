import { useState } from "react";
import ModalAtivo from "./ModalAtivos";
import { ButtonAction, ButtonAdd, ButtonDiv, Container, Table, TableItem, TAction, Tbody, TbSection, Thead, TitleTable } from "./styles";
import { AiOutlinePlus } from 'react-icons/ai'
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs'

export default function Proprietario() {

    const [open, setOpen] = useState(false)

    const Item = [
        {
            Nome: 'Isaac',
            Contato: '13123123123',
            Descricao: 'Desc',
            Endereco: 'rua alzino martelo'
        },

        {
            Nome: 'Joao',
            Contato: '12313131313',
            Descricao: 'Desc',
            Endereco: 'rua alzino martelo'
        },

    ]

    return(
        <Container>
            <TitleTable>
            <h1>Proprietario</h1>
            </TitleTable>
            <ButtonDiv>
                <ButtonAdd onClick={() => setOpen(!open)}>Adicionar<AiOutlinePlus/></ButtonAdd>
            </ButtonDiv>
            <ModalAtivo open={open} onChangeOpen={() => setOpen(!open)} />
            <Table>
               <Thead>
                    <TableItem>Nome</TableItem>
                    <TableItem>Contato</TableItem>
                    <TableItem>Descricao</TableItem>
                    <TableItem>Endereco</TableItem>
                    <TableItem>Acoes:</TableItem>
               </Thead>
               <Tbody>
                   {Item.map(item => (
                        <>
                            <TableItem>{item.Nome}</TableItem>
                            <TableItem>{item.Contato}</TableItem>
                            <TableItem>{item.Descricao}</TableItem>
                            <TableItem>{item.Endereco}</TableItem>
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