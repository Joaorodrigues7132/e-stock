import { BackModal, Modal, Field, Input, Select, ModalFields, ModalHeader, Button } from "./modalStyles";

import { AiOutlineClose } from 'react-icons/ai'

import axios from 'axios';
import {useState } from "react";

export default function ModalClasseUpdate({open, onChangeOpen, id}) {

    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')

    const fillInputs = (response) => {
        const desc = document.getElementById('desc')
        const nome = document.getElementById('nome')

        desc.value = response.Descricao
        setDescricao(response.Descricao)

        nome.value = response.Nome
        setNome(response.Nome)

        console.log('clicou')
    }


        const getClasse = async(id) => {
            try {
                axios({
                    method: "get",
                    url: `http://localhost:3001/classe/${id}`,
                    responseType: "json",
                  }).then(function (response) {
                    fillInputs(response.data)
                    console.log(response)
                  });
            } catch (error) {
                console.log(error)
            }
        }


    const updateClasse = async (id) => {
        try {
            if(nome !== '' && descricao !== ''){
                await axios({
                    method: "put",
                    url: `http://localhost:3001/classe/${id}`,
                    data: {
                        Nome: nome,
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
                            <p>Nome:</p>
                            <Input id="nome"  onChange={(e) => setNome(e.target.value)}/>
                        </Field>
        
                        <Field>
                            <p>Descrição:</p>
                            <Input id="desc"   onChange={(e) => setDescricao(e.target.value)} />
                        </Field>        
                        <Button spaced="15px" fill="rgba(33, 217, 82, 0.8)" size="100%" onClick={() => updateClasse(id)}>Editar</Button>
                        <Button spaced="15px" fill="rgba(33, 217, 82, 0.8)" size="100%" onClick={() => getClasse(id)}>Pegar dados atuais</Button>
                    </ModalFields>
                </Modal>   
            </BackModal> 
        )
    )
   } else {
    return undefined
   }}
}