import { BackModal, Modal, Field, Input, Select, ModalFields, ModalHeader, Button } from "./modalStyles";

import { AiOutlineClose } from 'react-icons/ai'

import axios from 'axios';
import {useEffect, useState } from "react";
import InputMask from "react-input-mask"

export default function ModalManutencaoUpdate({open, onChangeOpen, id}) {

    const [dataEnvio, setDataEnvio] = useState('')
    const [valor, setValor] = useState('')
    const [descricao, setDescricao] = useState('')
    const [dataSolucao, setDataSolucao] = useState('')
    const [prestadores, setPrestadores] = useState([])
    const [ativos, setAtivos] = useState([])

    const prestador = document.getElementById('prestador')
    const ativo = document.getElementById('ativo')

    useEffect(() => {
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

        const getPrestador = async() => {
            try {
                axios({
                    method: "get",
                    url: "http://localhost:3001/prestador",
                    responseType: "json",
                  }).then(function (response) {
                    setPrestadores(response.data)
                    console.log(response)
                  });
            } catch (error) {
                console.log(alert)
            }
        }

        getPrestador()
        getAtivo()
    }, [])

    const fillSelect = (id, nome, idRequest) => {
        const arr = []
        const elemento = document.getElementById(`${id}`)
        const conteudoElemento = elemento.innerHTML.split("</option>")
        conteudoElemento.pop()
        const conteudoElementoFiltrado = conteudoElemento.map(e => e + "</option>")
        const dadoDaRequisicao = conteudoElementoFiltrado.find(e => e === `<option value="${idRequest}">${nome}</option>`)
        if(dadoDaRequisicao) {
            for(let i = 1; i <= conteudoElementoFiltrado.length; i++) {
                if (conteudoElementoFiltrado[i] = `<option value="${idRequest}">${nome}</option>`) {
                    i++;
                }
                arr.push(conteudoElementoFiltrado[i])
            }
            arr.pop()
            arr.push(`<option value="${idRequest}">${nome}</option>`)
       }
       elemento.innerHTML = ""
       arr.map(e => {
        return elemento.innerHTML += e
       })
    }

    const fillInputs = (response) => {
        fillSelect('ativo', response?.ativo?.Marca, response?.ativoId)
        fillSelect('prestador', response?.prestador?.Nome, response?.prestadorId)

        const DataEnvio = document.getElementById("dataEnvio")
        DataEnvio.value = response?.DataEnvio
        setDataEnvio(response?.DataEnvio)

        const DataSolucao = document.getElementById("dataSolucao")
        DataSolucao.value = response?.DataSolucao
        setDataSolucao(response?.DataSolucao)

        const Valor = document.getElementById("valor")
        Valor.value = response?.Valor
        setValor(response?.Valor)

        const desc = document.getElementById("desc")
        desc.value = response?.Descricao
        setDescricao(response?.Descricao)
    }


    const getManutencao = async(id) => {
        try {
            axios({
                method: "get",
                url: `http://localhost:3001/manutencao/${id}`,
                responseType: "json",
              }).then(function (response) {
                fillInputs(response.data)
                console.log(response.data[0])
              });
        } catch (error) {
            console.log(alert)
        }
    }


    const updateManutencao = async (id) => {
        try {
            if(dataEnvio !== '' && descricao !== '' && dataSolucao !== '' && valor !== '' && prestador.value !== 'Selecione um Prestador' &&  ativo.value !== 'Selecione uma Ativo'){
                await axios({
                    method: "put",
                    url: `http://localhost:3001/manutencao/${id}`,
                    data: {
                        DataEnvio: dataEnvio,
                        Descricao: descricao,
                        DataSolucao: dataSolucao,
                        Valor: valor,
                        prestadorId: Number(prestador.value),
                        ativoId: Number(ativo.value)
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
                                    <p>Data Envio:</p>
                                    <InputMask
                                        mask="99/99/9999"
                                        value={dataEnvio}
                                        onChange={(e) => setDataEnvio(e.target.value)}
                                    >
                                        {(inputProps) => <Input {...inputProps} type="text" placeholder="dd/mm/aaaa" />}
                                    </InputMask>

                                </Field>
        
                        <Field>
                            <p>Valor:</p>
                            <Input id="valor" value={valor} onChange={(e) => setValor(e.target.value)} />
                        </Field>
        
                        <Field>
                            <p>Descrição:</p>
                            <Input id="desc" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                        </Field>
        
                        <Field>
                                
                                <p>Data Solução:</p>
                                    <InputMask
                                        mask="99/99/9999"
                                        value={dataSolucao}
                                        onChange={(e) => setDataSolucao(e.target.value)}
                                    >
                                        {(inputProps) => <Input {...inputProps} type="text" placeholder="dd/mm/aaaa" />}
                                    </InputMask>

                                </Field>

                        <Field>
                            <p>Prestador:</p>
                            <Select id="prestador"> 
                            <option>Selecione um Prestador</option>
                                {prestadores.map((e) => {
                                    return <option value={e.id}>{e.Nome}</option>
                            })}
                            </Select>
                        </Field>

                        <Field>
                            <p>Ativo:</p>
                            <Select id="ativo"> 
                            <option>Selecione um Ativo</option>
                                {ativos.map((e) => {
                                    return <option value={e.id}>{e.Marca}</option>
                            })}
                            </Select>
                        </Field>
    
                        <Button spaced="15px" fill="rgba(33, 217, 82, 0.8)" size="100%" onClick={() => updateManutencao(id)}>Editar</Button>
                        <Button spaced="15px" fill="rgba(33, 217, 82, 0.8)" size="100%" onClick={() => getManutencao(id)}>Pegar dados atuais</Button>
                    </ModalFields>
                </Modal>   
            </BackModal> 
        )
    )
   } else {
    return undefined
   }}
}