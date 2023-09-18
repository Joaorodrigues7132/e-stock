import { BackModal, Modal, Field, Input, Select, ModalFields, ModalHeader, Button } from "./modalStyles";

import { AiOutlineClose } from 'react-icons/ai'

import axios from 'axios';
import {useState } from "react";
import InputMask from "react-input-mask";


export default function ModalEstoqueUpdate({open, onChangeOpen, id}) {

    const [endereco, setEndereco] = useState('')
    const [nome, setNome] = useState('')
    const [telefone, setTelefone] = useState('')
    const [descricao, setDescricao] = useState('')

    const fillInputs = (response) => {
        const desc = document.getElementById('desc')
        const endereco = document.getElementById('endereco')
        const nome = document.getElementById('nome')
        const telefone = document.getElementById('telefone')

        desc.value = response.Descricao
        setDescricao(response.Descricao)

        endereco.value = response.Endereco
        setEndereco(response.Endereco)

        nome.value = response.Nome
        setNome(response.Nome)

        setTelefone(response.Telefone)
        telefone.value = response.Telefone

        console.log('clicou')
    }


        const getEstoque = async(id) => {
            try {
                axios({
                    method: "get",
                    url: `http://localhost:3001/estoque/${id}`,
                    responseType: "json",
                  }).then(function (response) {
                    fillInputs(response.data)
                    console.log(response)
                  });
            } catch (error) {
                console.log(error)
            }
        }


    const updateEstoque = async (id) => {
        try {
            if(endereco !== '' && nome !== '' && telefone !== '' && descricao !== ''){
                await axios({
                    method: "put",
                    url: `http://localhost:3001/estoque/${id}`,
                    data: {
                        Endereco: endereco,
                        Nome: nome,
                        Telefone: telefone,
                        Descricao: descricao
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
                            <p>Endereço:</p>
                            <Input id="endereco" onChange={(e) => setEndereco(e.target.value)} />
                        </Field>
        
                        <Field>
                            <p>Nome:</p>
                            <Input id="nome"  onChange={(e) => setNome(e.target.value)}/>
                        </Field>
        
                        
                        <Field>
                                <p>Contato:</p>
                                    <InputMask
                                        mask="(99)9999-9999"
                                        value={telefone}
                                        onChange={(e) => setTelefone(e.target.value)}
                                    >
                                        {(inputProps) => <Input {...inputProps} type="tel" placeholder="" />}
                                    </InputMask>

                                </Field>
                        <Field>
                            <p>Descrição:</p>
                            <Input id="desc"   onChange={(e) => setDescricao(e.target.value)} />
                        </Field>        
                        <Button spaced="15px" fill="rgba(33, 217, 82, 0.8)" size="100%" onClick={() => updateEstoque(id)}>Editar</Button>
                        <Button spaced="15px" fill="rgba(33, 217, 82, 0.8)" size="100%" onClick={() => getEstoque(id)}>Pegar dados atuais</Button>
                    </ModalFields>
                </Modal>   
            </BackModal> 
        )
    )
   } else {
    return undefined
   }}
}