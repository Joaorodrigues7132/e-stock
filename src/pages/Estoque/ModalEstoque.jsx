import { BackModal, Modal, Field, Input, Select, ModalFields, ModalHeader, Button } from "./modalStyles";

import { AiOutlineClose } from 'react-icons/ai'

import axios from 'axios';
import { useState } from "react";
import InputMask from "react-input-mask";

export default function ModalEstoque({ open, onChangeOpen }) {

    const [endereco, setEndereco] = useState('')
    const [nome, setNome] = useState('')
    const [telefone, setTelefone] = useState('')
    const [descricao, setDescricao] = useState('')


    const saveEstoque = async () => {
        try {
            if (endereco !== '' && nome !== '' && telefone !== '' && descricao !== '') {
                await axios({
                    method: "post",
                    url: "http://localhost:3001/estoque",
                    data: {
                        Endereco: endereco,
                        Nome: nome,
                        Telefone: telefone,
                        Descricao: descricao
                    },
                }).then(function (response) {
                    alert('conteudo salvo com sucesso')


                    setEndereco('')
                     setNome('')
                     setTelefone('')
                     setDescricao('')


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

    {
        if (open) {
            return (
                (
                    <BackModal>
                        <Modal>
                            <ModalHeader>
                                <Button onClick={() => onChangeOpen(!open)}><AiOutlineClose /></Button>
                            </ModalHeader>
                            <ModalFields>
                                <Field>
                                    <p>Endereço:</p>
                                    <Input value={endereco} onChange={(e) => setEndereco(e.target.value)} />
                                </Field>

                                <Field>
                                    <p>Nome:</p>
                                    <Input value={nome} onChange={(e) => setNome(e.target.value)} />
                                </Field>

                                <Field>
                                <p>Contato:</p>
                                    <InputMask
                                        mask="(99)9999-9999"
                                        value={telefone}
                                        onChange={(e) => setTelefone(e.target.value)}
                                    >
                                        {(inputProps) => <Input {...inputProps} type="tel" placeholder="(99)9999-9999" />}
                                    </InputMask>

                                </Field>

                                <Field>
                                    <p>Descrição:</p>
                                    <Input value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                                </Field>
                                <Button spaced="15px"fill="#998543"size="100%" onClick={() => saveEstoque()}>Salvar</Button>
                            </ModalFields>
                        </Modal>
                    </BackModal>
                )
            )
        } else {
            return undefined
        }
    }
}