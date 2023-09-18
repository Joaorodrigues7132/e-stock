import { BackModal, Modal, Field, Input, Select, ModalFields, ModalHeader, Button } from "./modalStyles";
import axios from 'axios';
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from "react";
import InputMask from "react-input-mask";

export default function ModalPropietario({open, onChangeOpen}) {

    const [contato, setContato] = useState('')
    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')

    const savePropietario = async () => {
        try {
            if(contato !== '' && nome !== '' && descricao !== ''){
                await axios({
                    method: "post",
                    url: "http://localhost:3001/propietario",
                    data: {
                        Nome: nome,
                        Descricao: descricao,
                        Contato: contato
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
                            <p>Contato:</p>
                            <InputMask
                                mask="(99)9999-9999"
                                value={contato}
                                onChange={(e) => setContato(e.target.value)}
                            >
                                {(inputProps) => <Input {...inputProps} type="tel" placeholder="(99)9999-9999" />}
                            </InputMask>
                        </Field>
        
                        <Field>
                            <p>Descrição:</p>
                            <Input value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                        </Field>

                        <Button spaced="15px" fill="rgba(33, 217, 82, 0.8)" size="100%" onClick={() =>savePropietario()}>Salvar</Button>
                    </ModalFields>
                </Modal>   
            </BackModal> 
        )
    )
   } else {
    return undefined
   }}
}