import { useState } from "react";
import ModalAtivo from "./ModalAtivos";
import { ButtonAction, ButtonAdd, ButtonDiv, Container, Table, TableItem, TAction, Tbody, TbSection, Thead, TitleTable } from "./styles";
import { AiOutlinePlus } from 'react-icons/ai'
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs'

export default function Manutencao() {

    const [open, setOpen] = useState(false)

    const Item = [
        {
            Data_Envio: '27/04/2002',
            Valor: '13123123123',
            Descricao: 'rua alzino martelo',
            Data_solucao: '27/04/2002',
            Prestador: 'Prestador',
            Ativo: 'Ativo'
        },

        {
            Data_Envio: '25/06/2002',
            Valor: '13123123123',
            Descricao: 'rua alzino martelo',
            Data_solucao: '27/04/2002',
            Prestador: 'Prestador',
            Ativo: 'Ativo'
        },

    ]

    return(
        <Container>
            <TitleTable>
            <h1>Manutencao</h1>
            </TitleTable>
            <ButtonDiv>
                <ButtonAdd onClick={() => setOpen(!open)}>Adicionar<AiOutlinePlus/></ButtonAdd>
            </ButtonDiv>
            <ModalAtivo open={open} onChangeOpen={() => setOpen(!open)} />
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
                   {Item.map(item => (
                        <>
                            <TableItem>{item.Data_Envio}</TableItem>
                            <TableItem>{item.Valor}</TableItem>
                            <TableItem>{item.Descricao}</TableItem>
                            <TableItem>{item.Data_solucao}</TableItem>
                            <TableItem>{item.Prestador}</TableItem>
                            <TableItem>{item.Ativo}</TableItem>
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