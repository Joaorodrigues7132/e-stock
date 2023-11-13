import { BackModal, Modal, Field, Input, Select, ModalFields, ModalHeader, Button } from "./modalStyles";

import { AiOutlineClose } from 'react-icons/ai'
import InputMask from "react-input-mask";
import axios from 'axios';
import {useEffect, useState } from "react";

export default function ModalPrestadorUpdate({open, onChangeOpen, id}) {

    const [descricao, setDescricao] = useState('')
    const [nome, setNome] = useState('')
    const [telefone, setTelefone] = useState('')
    const [endereco, setEndereco] = useState('')
    const [propietarios, setPropietarios] = useState([])

    const propietario = document.getElementById('propietario')

    useEffect(() => {
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
        fillSelect('propietario', response?.propietario?.Nome, response?.proprietarioId)

        const nome = document.getElementById("nome")
        nome.value = response?.Nome
        setNome(response?.Nome)

        const desc = document.getElementById("desc")
        desc.value = response?.Descricao
        setDescricao(response?.Descricao)

        const telefone = document.getElementById("telefone")
        telefone.value = response?.Telefone
        setTelefone(response?.Telefone)

        const endereco = document.getElementById("endereco")
        endereco.value = response?.Endereco
        setEndereco(response?.Endereco)
    }


    const getPrestador = async(id) => {
        try {
            axios({
                method: "get",
                url: `http://localhost:3001/prestador/${id}`,
                responseType: "json",
              }).then(function (response) {
                fillInputs(response.data)
              });
        } catch (error) {
            console.log(error)
        }
    }


    const updatePrestador = async (id) => {
        try {
            if(nome !== '' && descricao !== '' && endereco !== '' && telefone !== '' && propietario.value !== 'Selecione um Propietario'){
                await axios({
                    method: "put",
                    url: `http://localhost:3001/prestador/${id}`,
                    data: {
                        Nome: nome,
                        Descricao: descricao,
                        Endereco: endereco,
                        Telefone: telefone,
                        proprietarioId: Number(propietario.value),
                    },
                  }).then(function (response) {
                    alert('conteudo editado com sucesso')
                    onChangeOpen(!open)
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
                            <p>Nome:</p>
                            <Input id="nome"  value={nome} onChange={(e) => setNome(e.target.value)} />
                        </Field>
        
                        <Field>
                            <p> Telefone:</p>
                            <InputMask
                                mask="(99)9999-9999"
                                value={telefone}
                                onChange={(e) => setTelefone(e.target.value)}
                                id="telefone"
                            >
                                {(inputProps) => <Input {...inputProps} type="tel" placeholder="(99)9999-9999" />}
                            </InputMask>
                        </Field>
        
                        <Field>
                            <p>Endereço:</p>
                            <Input id="endereco"  value={endereco} onChange={(e) => setEndereco(e.target.value)} />
                        </Field>
        
                        <Field>
                            <p>Descrição:</p>
                            <Input id="desc"  value={descricao} onChange={(e) => setDescricao(e.target.value)} />
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

                        <Button spaced="15px" fill="#998543" size="100%" onClick={() => updatePrestador(id)}>Editar</Button>
                        <Button spaced="15px" fill="#998543" size="100%" onClick={() => getPrestador(id)}>Pegar dados atuais</Button>
                    </ModalFields>
                </Modal>   
            </BackModal> 
        )
    )
   } else {
    return undefined
   }}
}