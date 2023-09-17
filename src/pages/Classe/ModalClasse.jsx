import { BackModal, Modal, Field, Input, Select, ModalFields, ModalHeader, Button } from "./modalStyles";

import { AiOutlineClose } from 'react-icons/ai'

import axios from 'axios';
import { useState } from "react";

export default function ModalClasse({open, onChangeOpen}) {
    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')


    const saveClasse = async () => {
        try {
            if(nome !== '' && descricao !== ''){
                await axios({
                    method: "post",
                    url: "http://localhost:3001/classe",
                    data: {
                        Nome: nome,
                        Descricao: descricao
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
                            <p>Nome:</p>
                            <Input value={nome} onChange={(e) => setNome(e.target.value)} />
                        </Field>
        
                        <Field>
                            <p>Descricao:</p>
                            <Input value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                        </Field>

                        <Button spaced="15px" fill="rgba(33, 217, 82, 0.8)" size="100%" onClick={() =>saveClasse()}>Salvar</Button>
                    </ModalFields>
                </Modal>   
            </BackModal> 
        )
    )
   } else {
    return undefined
   }}
}