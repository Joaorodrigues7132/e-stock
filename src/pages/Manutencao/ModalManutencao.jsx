import { BackModal, Modal, Field, Input, Select, ModalFields, ModalHeader, Button } from "./modalStyles";

import { AiOutlineClose } from 'react-icons/ai'
import { useEffect, useState } from "react";
import axios from 'axios';

export default function ModalManutencao({open, onChangeOpen}) {
    
    const [dataEnvio, setDataEnvio] = useState('')
    const [valor, setValor] = useState('')
    const [descricao, setDescricao] = useState('')
    const [dataSolucao, setDataSolucao] = useState('')
    const [prestadores, setPrestadores] = useState([])
    const [ativos, setAtivos] = useState([])

    const prestador = document.getElementById('prestador')
    const ativo = document.getElementById('ativo')

    useEffect(() => {
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

        getPrestador()
        getAtivo()
    }, [])


    const saveManutencao = async () => {
        try {
            if(dataEnvio !== '' && descricao !== '' && dataSolucao !== '' && valor !== '' && prestador.value !== 'Selecione um Prestador' &&  ativo.value !== 'Selecione uma Ativo'){
                await axios({
                    method: "post",
                    url: "http://localhost:3001/manutencao",
                    data: {
                        DataEnvio: dataEnvio,
                        Descricao: descricao,
                        DataSolucao: dataSolucao,
                        Valor: Number(valor),
                        prestadorId: Number(prestador.value),
                        ativoId: Number(ativo.value)
                    },
                  }).then(function (response) {
                    alert('conteudo salvo com sucesso')
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
                            <Input value={dataEnvio} onChange={(e) => setDataEnvio(e.target.value)} />
                        </Field>
        
                        <Field>
                            <p>Valor:</p>
                            <Input value={valor} onChange={(e) => setValor(e.target.value)} />
                        </Field>
        
                        <Field>
                            <p>Descricao:</p>
                            <Input value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                        </Field>
        
                        <Field>
                            <p>Data Solucao:</p>
                            <Input value={dataSolucao} onChange={(e) => setDataSolucao(e.target.value)} />
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


                        <Button spaced="15px" fill="rgba(33, 217, 82, 0.8)" size="100%" onClick={() =>saveManutencao()}>Salvar</Button>
                    </ModalFields>
                </Modal>   
            </BackModal> 
        )
    )
   } else {
    return undefined
   }}
}