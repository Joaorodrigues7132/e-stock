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
                            <p>Marca:</p>
                            <Input />
                        </Field>
        
                        <Field>
                            <p>Modelo:</p>
                            <Input />
                        </Field>
        
                        <Field>
                            <p>Descricao:</p>
                            <Input />
                        </Field>
        
                        <Field>
                            <p>Estoque:</p>
                            <Select />
                        </Field>
        
                        <Field>
                            <p>Proprietario:</p>
                            <Select />
                        </Field>
        
                        <Field>
                            <p>Classe:</p>
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