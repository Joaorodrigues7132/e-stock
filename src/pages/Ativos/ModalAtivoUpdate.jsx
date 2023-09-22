import { BackModal, Modal, Field, Input, Select, ModalFields, ModalHeader, Button } from "./modalStyles";

import { AiOutlineClose } from 'react-icons/ai'

import axios from 'axios';
import {useEffect, useState } from "react";

export default function ModalAtivoUpdate({open, onChangeOpen, id}) {

    const [marca, setMarca] = useState('')
    const [descricao, setDescricao] = useState('')
    const [modelo, setModelo] = useState('')
    const [classes, setClasses] = useState([])
    const [estoques, setEstoques] = useState([])
    const [propietarios, setPropietarios] = useState([])

    const classe = document.getElementById('classe')
    const estoque = document.getElementById('estoque')
    const propietario = document.getElementById('propietario')

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

        const getEstoque = async() => {
            try {
                axios({
                    method: "get",
                    url: "http://localhost:3001/estoque",
                    responseType: "json",
                  }).then(function (response) {
                    setEstoques(response.data)
                    console.log(response)
                  });
            } catch (error) {
                console.log(alert)
            }
        }

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

        getClasse()
        getEstoque()
        getPropietario()
    }, [])


    const fillSelect = (id, nome, idRequest) => {
        const arr = []
        const elemento = document.getElementById(`${id}`)
        const conteudoElemento = elemento.innerHTML.split("</option>")
        conteudoElemento.pop()
        const conteudoElementoFiltrado = conteudoElemento.map(e => e + "</option>")
        const dadoDaRequisicao = conteudoElementoFiltrado.find(e => e === `<option value="${idRequest}">${nome}</option>`)
        arr.push(`<option value="${idRequest}">${nome}</option>`)
            for(let i = 1; i <= conteudoElementoFiltrado.length; i++) {
                if (conteudoElementoFiltrado[i] == dadoDaRequisicao) {
                    i++;
                }
                arr.push(conteudoElementoFiltrado[i])
            }
            arr.pop()
       elemento.innerHTML = ""
       arr.map(e => {
        return elemento.innerHTML += e
       })
    }

    const fillInputs = (response) => {
        fillSelect('classe', response?.classe?.Nome, response?.classeId)
        fillSelect('estoque', response?.estoque?.Nome, response?.estoqueId)
        fillSelect('propietario', response?.propietario?.Nome, response?.proprietarioId)

        const marca = document.getElementById("marca")
        marca.value = response?.Marca
        setMarca(response?.Marca)

        const desc = document.getElementById("desc")
        desc.value = response?.Descricao
        setDescricao(response?.Descricao)

        const modelo = document.getElementById("modelo")
        modelo.value = response?.Modelo
        setModelo(response?.Modelo)
    }


    const getAtivo = async(id) => {
        try {
            axios({
                method: "get",
                url: `http://localhost:3001/ativo/${id}`,
                responseType: "json",
              }).then(function (response) {
                fillInputs(response.data)
                console.log(response.data[0])
              });
        } catch (error) {
            console.log(alert)
        }
    }


    const updateAtivo = async (id) => {
        try {
            if(marca !== '' && 
            descricao !== '' && 
            modelo !== '' && 
            propietario.value !== 'Selecione um Propietario' && 
            classe.value !== 'Selecione uma Classe' && 
            estoque.value !== 'Selecione um Estoque'){
                await axios({
                    method: "put",
                    url: `http://localhost:3001/ativo/${id}`,
                    data: {
                        Marca: marca,
                        Descricao: descricao,
                        Modelo: modelo,
                        estoqueId: Number(estoque.value),
                        proprietarioId: Number(propietario.value),
                        classeId: Number(classe.value)
                    },
                  }).then(function (response) {
                    alert('conteudo editado com sucesso')
                    console.log(response)
                  });
            } else {
                alert('preencha os campos')
            }
        } catch (error) {
            console.log(error)
        }
    }

   {if(open) {
    return(
        (
            <BackModal>
                <Modal>
                    <ModalHeader>
                        <Button onClick={() =>onChangeOpen(!open)}><AiOutlineClose /></Button>
                    </ModalHeader>
                    <ModalFields>     
                    <Field>
                            <p>Marca:</p>
                            <Input id="marca"  value={marca} onChange={(e) => setMarca(e.target.value)} />
                        </Field>
        
                        <Field>
                            <p>Modelo:</p>
                            <Input id="modelo"  value={modelo} onChange={(e) => setModelo(e.target.value)} />
                        </Field>
        
                        <Field>
                            <p>Descrição:</p>
                            <Input id="desc" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                        </Field>
        
                        <Field>
                            <p>Estoque:</p>
                            <Select id="estoque">
                            <option>Selecione um Estoque</option>
                                {estoques.map((e) => {
                                    return <option value={e.id}>{e.Nome}</option>
                                })}
                            </Select>
                        </Field>
        
                        <Field>
                            <p>Proprietário:</p>
                            <Select id="propietario">
                                <option>Selecione um Propietário</option>
                                {propietarios.map((e) => {
                                    return <option value={e.id}>{e.Nome}</option>
                                })}
                            </Select>
                        </Field>

                        <Field>
                            <p>Classe:</p>
                            <Select id="classe">
                            <option>Selecione uma Classe</option>
                            {classes.map((e) => {
                                    return <option value={e.id}>{e.Nome}</option>
                             })}
                            </Select>
                        </Field>

                        <Button spaced="15px" fill="rgba(33, 217, 82, 0.8)" size="100%" onClick={() => updateAtivo(id)}>Editar</Button>
                        <Button spaced="15px" fill="rgba(33, 217, 82, 0.8)" size="100%" onClick={() => getAtivo(id)}>Pegar dados atuais</Button>
                    </ModalFields>
                </Modal>   
            </BackModal> 
        )
    )
   } else {
    return undefined
   }}
}