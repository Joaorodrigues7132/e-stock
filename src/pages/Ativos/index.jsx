import { useState } from "react";
import ModalAtivo from "./ModalAtivos";
import { ButtonAction, ButtonAdd, ButtonDiv, Container, Table, TableItem, TAction, Tbody, TbSection, Thead, TitleTable } from "./styles";
import { AiOutlinePlus } from 'react-icons/ai'
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs'

export default function Ativos() {

    const [open, setOpen] = useState(false)

    const Item = [
        {
            Marca: 'Mazeratti',
            Estoque: '10',
            Classe: 'Carro',
            Descricao: 'Carro esportivo',
            Proprietrio: 'Isaac',
            Modelo: '2022',
            Posto: 18
        },

        {
            Marca: 'Mazeratti',
            Estoque: '10',
            Classe: 'Carro',
            Descricao: 'Carro esportivo',
            Proprietrio: 'Isaac',
            Modelo: '2022',
            Posto: 18
        },

        {
            Marca: 'Mazeratti',
            Estoque: '10',
            Classe: 'Carro',
            Descricao: 'Carro esportivo',
            Proprietrio: 'Isaac',
            Modelo: '2022',
            Posto: 18
        },

        {
            Marca: 'Mazeratti',
            Estoque: '10',
            Classe: 'Carro',
            Descricao: 'Carro esportivo',
            Proprietrio: 'Isaac',
            Modelo: '2022',
            Posto: 18
        }
    ]

    return(
        <Container>
            <TitleTable>
                <h1>Ativos</h1>
            </TitleTable>
            <ButtonDiv>
                <ButtonAdd onClick={() => setOpen(!open)}>Adicionar<AiOutlinePlus/></ButtonAdd>
            </ButtonDiv>
            <ModalAtivo open={open} onChangeOpen={() => setOpen(!open)} />
            <Table>
               <Thead>
                    <TableItem>Marca</TableItem>
                    <TableItem>Estoque</TableItem>
                    <TableItem>Classe</TableItem>
                    <TableItem>Descricao</TableItem>
                    <TableItem>Proprietario</TableItem>
                    <TableItem>Modelo</TableItem>
                    <TableItem>Posto</TableItem>
                    <TableItem>Acoes: </TableItem>
               </Thead>
               <Tbody>
                   {Item.map(item => (
                        <>
                            <TableItem>{item.Marca}</TableItem>
                            <TableItem>{item.Estoque}</TableItem>
                            <TableItem>{item.Classe}</TableItem>
                            <TableItem>{item.Descricao}</TableItem>
                            <TableItem>{item.Proprietrio}</TableItem>
                            <TableItem>{item.Modelo}</TableItem>
                            <TableItem>{item.Posto}</TableItem>
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