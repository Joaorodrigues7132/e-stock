import { BackModal, Modal, Field, Input, Select, ModalFields, ModalHeader, Button } from "./modalStyles";

import { AiOutlineClose } from 'react-icons/ai'

import axios from 'axios';
import {useState } from "react";

export default function ModalManutencaoDelete({open, onChangeOpen, id}) {
    const deleteManutencao = async (id) => {
        try {
            await axios({
                    method: "delete",
                    url: `http://localhost:3001/manutencao/${id}`,
                    params: {
                       id: id
                    },
                  }).then(function () {
                    alert('conteudo deletado com sucesso')
                    onChangeOpen(!open)
                  });
            }
            catch (error) {
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
                            <p>Deseja realmente deletar esse dado ?</p>
                        </Field>        
                        <Button spaced="15px" fill="#998543" size="100%" onClick={() => deleteManutencao(id)}>Deletar</Button>
                    </ModalFields>
                </Modal>   
            </BackModal> 
        )
    )
   } else {
    return undefined
   }}
}