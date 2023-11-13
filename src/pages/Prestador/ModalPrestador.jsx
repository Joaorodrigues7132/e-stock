import { BackModal, Modal, Field, Input, Select, ModalFields, ModalHeader, Button } from "./modalStyles";

import { AiOutlineClose } from 'react-icons/ai'
import { useEffect, useState } from "react";
import axios from 'axios';
import InputMask from "react-input-mask";

export default function ModalPrestador({open, onChangeOpen}) {

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

    const savePrestador = async () => {
        try {
            if(nome !== '' && descricao !== '' && endereco !== '' && telefone !== '' && propietario.value !== 'Selecione um Propietario'){
                await axios({
                    method: "post",
                    url: "http://localhost:3001/prestador",
                    data: {
                        Nome: nome,
                        Descricao: descricao,
                        Endereco: endereco,
                        Telefone: telefone,
                        proprietarioId: Number(propietario.value),
                    },
                  }).then(function (response) {
                    alert('conteudo salvo com sucesso')


                    setDescricao('')
                 setNome('')
                     setTelefone('')
                     setEndereco('')

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


                        <Button spaced="15px" fill="#998543" size="100%" onClick={() =>savePrestador()}>Salvar</Button>
                    </ModalFields>
                </Modal>   
            </BackModal> 
        )
    )
   } else {
    return undefined
   }}
}