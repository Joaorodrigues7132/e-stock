import { useState } from "react";
import ModalAtivo from "./ModalAtivos";
import { ButtonAdd, ButtonDiv, Container, Table, TableItem, TAction, Tbody, TbSection, Thead } from "./styles";
import { AiOutlinePlus } from 'react-icons/ai'

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
        },

        {
            Marca: 'Mazeratti',
            Estoque: '10',
            Classe: 'Carro',
            Descricao: 'Carro esportivo',
            Proprietrio: 'Isaac',
            Modelo: '2022',
        },

        {
            Marca: 'Mazeratti',
            Estoque: '10',
            Classe: 'Carro',
            Descricao: 'Carro esportivo',
            Proprietrio: 'Isaac',
            Modelo: '2022',
        },

        {
            Marca: 'Mazeratti',
            Estoque: '10',
            Classe: 'Carro',
            Descricao: 'Carro esportivo',
            Proprietrio: 'Isaac',
            Modelo: '2022',
        }
    ]

    return(
        <Container>
            <ButtonDiv>
                <h1>Ativos: </h1>
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
                            <TAction>
                                <p>Deletar</p>
                                <p>Editar</p>
                            </TAction>
                        </>
                   ))}
               </Tbody>
            </Table>
        </Container>
    )
}