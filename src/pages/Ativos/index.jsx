import { useEffect, useState } from "react";
import ModalAtivo from "./ModalAtivos";
import { ButtonAction, ButtonAdd, ButtonDiv, Container, Table, TableItem, TAction, Tbody, TbSection, Thead, TitleTable } from "./styles";
import { AiOutlinePlus } from 'react-icons/ai'
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs'
import ModalAtivoUpdate from "./ModalAtivoUpdate";
import axios from 'axios';
import ModalAtivoDelete from "./ModalAtivoDelete";
import { Field, Input } from "./modalStyles";

export default function Ativos() {

    const [open, setOpen] = useState(false)
    const [openEdit, setOpenEdit] = useState(false)
    const [openDelete, setOpenDelete] = useState(false)
    const [ativos, setAtivos] = useState([])
    const [idEdit, setIdEdit] = useState()
    const [idDelete, setIdDelete] = useState()
    const [search,setSearch] = useState('')

    const getAtivo = async() => {
        try {
            axios({
                method: "get",
                url: "http://localhost:3001/ativo",
                responseType: "json",
              }).then(function (response) {
                setAtivos(response.data)
                console.log(response)
              });
        } catch (error) {
            console.log(alert)
        }
    }

    const openEditAtivo = (id) => {
        setIdEdit(id)
        setOpenEdit(true)
    }

    const openDeleteAtivo = (id) => {
        setIdDelete(id)
        setOpenDelete(true)
    }


    useEffect(() => {
        getAtivo()
    }, [])

    const closeModal = () => {
        setOpen(!open)
        getAtivo()
    }

    const closeModalEdit = () => {
        setOpenEdit(!openEdit)
        getAtivo()
    }

    const closeModalDelete = () => {
        setOpenDelete(!openDelete)
        getAtivo()
    }


    return(
        <Container>
            <TitleTable>
                <h1>Ativos</h1>
            </TitleTable>
            <ButtonDiv >
       

                      
                        <div style={{display:'flex', alignItems:'center', width:'100%'}}>
                        <Field style={{width: '300px'}}>
                            <p>Pesquisa:</p>
                            <Input   value={search} onChange={(e) => setSearch(e.target.value)} />
                        </Field>
                        </div>
                        
                <ButtonAdd onClick={() => setOpen(!open)}>Adicionar<AiOutlinePlus/></ButtonAdd>
            </ButtonDiv>
            <ModalAtivo open={open} onChangeOpen={() => closeModal()} />
            <ModalAtivoUpdate  open={openEdit} onChangeOpen={() => closeModalEdit()} id={idEdit} />
            <ModalAtivoDelete  open={openDelete} onChangeOpen={() => closeModalDelete()} id={idDelete} />
            <Table>
               <Thead>
                    <TableItem>Marca</TableItem>
                    <TableItem>Estoque</TableItem>
                    <TableItem>Classe</TableItem>
                    <TableItem>Descrição</TableItem>
                    <TableItem>Proprietário</TableItem>
                    <TableItem>Modelo</TableItem>
                    <TableItem>Ações</TableItem>
               </Thead>
               <Tbody>
                   {ativos.filter((item) => {
 
   const propriedadesEmLowercase = Object.values(item)
   .map(value => value && value.Nome ? value.Nome.toLowerCase() : value.toString().toLowerCase());

 const termoEmLowercase = search.toLowerCase();


 return propriedadesEmLowercase.some(propriedade => propriedade.includes(termoEmLowercase));
}).map(item => (
                        <>
                            <TableItem>{item.Marca}</TableItem>
                            <TableItem>{item.estoque?.Nome}</TableItem>
                            <TableItem>{item.classe?.Nome}</TableItem>
                            <TableItem>{item.Descricao}</TableItem>
                            <TableItem>{item.propietario?.Nome}</TableItem>
                            <TableItem>{item.Modelo}</TableItem>
                            <TAction>
                                <ButtonAction onClick={() => openDeleteAtivo(item.id)}>
                                    <BsFillTrashFill />
                                </ButtonAction>
                                <ButtonAction>
                                    <BsFillPencilFill onClick={() => openEditAtivo(item.id)}/>
                                </ButtonAction>
                            </TAction>
                        </>
                   ))}
               </Tbody>
            </Table>
        </Container>
    )
}