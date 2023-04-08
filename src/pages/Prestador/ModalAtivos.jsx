import { BackModal, Modal, Field, Input, Select, ModalFields, ModalHeader, Button } from "./modalStyles";

import { AiOutlineClose } from 'react-icons/ai'

export default function ModalAtivo({open, onChangeOpen}) {
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
                            <Input />
                        </Field>
        
                        <Field>
                            <p> Telefone:</p>
                            <Input />
                        </Field>
        
                        <Field>
                            <p>Endereco:</p>
                            <Input />
                        </Field>
        
                        <Field>
                            <p>Descricao:</p>
                            <Input />
                        </Field>

                        <Field>
                            <p>Proprietario:</p>
                            <Select />
                        </Field>

                        <Button spaced="15px" fill="rgba(33, 217, 82, 0.8)" size="100%" onClick={() =>onChangeOpen(!open)}>Salvar</Button>
                    </ModalFields>
                </Modal>   
            </BackModal> 
        )
    )
   } else {
    return undefined
   }}
}