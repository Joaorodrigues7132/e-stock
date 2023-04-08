import { useState } from "react";
import ModalAtivo from "./ModalAtivos";
import { ButtonAction, ButtonAdd, ButtonDiv, Container, Table, TableItem, TAction, Tbody, TbSection, Thead, TitleTable } from "./styles";
import { AiOutlinePlus } from 'react-icons/ai'
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs'

export default function Prestador() {

    const [open, setOpen] = useState(false)

    const Item = [
        {
            Nome: 'Isaac',
            Telefone: '13123123123',
            Endereco: 'rua alzino martelo',
            Descricao: 'Desc',
            Proprietario: 'Proprietario'
        },

        {
            Nome: 'Isaac',
            Telefone: '13123123123',
            Endereco: 'rua alzino martelo',
            Descricao: 'Desc',
            Proprietario: 'Proprietario'
        },

    ]

    return(
        <Container>
            <TitleTable>
            <h1>Prestador</h1>
            </TitleTable>
            <ButtonDiv>
                <ButtonAdd onClick={() => setOpen(!open)}>Adicionar<AiOutlinePlus/></ButtonAdd>
            </ButtonDiv>
            <ModalAtivo open={open} onChangeOpen={() => setOpen(!open)} />
            <Table>
               <Thead>
                    <TableItem>Nome</TableItem>
                    <TableItem>Telefone</TableItem>
                    <TableItem>Endereco</TableItem>
                    <TableItem>Descricao</TableItem>
                    <TableItem>Proprietario:</TableItem>
                    <TableItem>Acoes:</TableItem>
               </Thead>
               <Tbody>
                   {Item.map(item => (
                        <>
                            <TableItem>{item.Nome}</TableItem>
                            <TableItem>{item.Telefone}</TableItem>
                            <TableItem>{item.Endereco}</TableItem>
                            <TableItem>{item.Descricao}</TableItem>
                            <TableItem>{item.Proprietario}</TableItem>
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