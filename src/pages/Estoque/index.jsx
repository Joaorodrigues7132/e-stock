import { ContainerEstoque, Field, Input, Label, TitleEstoque } from "./styles";

export default function Estoque () {
    return(
        <ContainerEstoque>
            <TitleEstoque>Estoque</TitleEstoque>
            <Field>
                <Label>Endereço: </Label>
                <Input />
            </Field>
            <Field>
                <Label>Nome: </Label>
                <Input />
            </Field>
            <Field>
                <Label>Telefone: </Label>
                <Input type='tel' />
            </Field>
            <Field>
                <Label>Descrição: </Label>
                <Input type='text' />
            </Field>
        </ContainerEstoque>
    )
}