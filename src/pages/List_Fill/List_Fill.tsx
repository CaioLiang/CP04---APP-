import { Layout } from "../../components/Layout/Layout";
import {StyledH1, StyledP } from "../../styles/Colors"
import {Formulario} from "../../components/Formulario/Formulario"

export default function List_Fill(){
    return (
        <Layout>
            <StyledH1>Nova Lista</StyledH1>
            <StyledP>Adicionar item</StyledP>
            <Formulario
             type="text"
             id="newItem"
             name="newItem"
             placeholder="Digite o item desejado"
            />
        </Layout>
    );
}