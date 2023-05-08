import { useState } from "react";
import ModalAtivo from "./ModalAtivos";
import { ButtonAction, ButtonAdd, ButtonDiv, Container, Table, TableItem, TAction, Tbody, TbSection, Thead, TitleTable } from "./styles";
import { AiOutlinePlus } from 'react-icons/ai'
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs'

export default function Estoque() {

    const [open, setOpen] = useState(false)

    const Item = [
        {
            Id: 'Mazeratti',
            Nome: '10',
            Endereco: 'Carro',
            Descricao: 'Carro esportivo',
            Telefone: 'Isaac',
        },

        {
            Id: 'Mazeratti',
            Nome: '10',
            Endereco: 'Carro',
            Descricao: 'Carro esportivo',
            Telefone: 'Isaac',
        },
    ]

    return(
        <Container>
            <TitleTable>
                <h1>Estoque</h1>
            </TitleTable>
            <ButtonDiv>
                <ButtonAdd onClick={() => setOpen(!open)}>Adicionar<AiOutlinePlus/></ButtonAdd>
            </ButtonDiv>
            <ModalAtivo open={open} onChangeOpen={() => setOpen(!open)} />
            <Table>
               <Thead>
                    <TableItem>Id</TableItem>
                    <TableItem>Endereco</TableItem>
                    <TableItem>Nome</TableItem>
                    <TableItem>Telefone</TableItem>
                    <TableItem>Descricao</TableItem>
                    <TableItem>Acoes</TableItem>
               </Thead>
               <Tbody>
                   {Item.map(item => (
                        <>
                            <TableItem>{item.Id}</TableItem>
                            <TableItem>{item.Nome}</TableItem>
                            <TableItem>{item.Endereco}</TableItem>
                            <TableItem>{item.Descricao}</TableItem>
                            <TableItem>{item.Telefone}</TableItem>
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