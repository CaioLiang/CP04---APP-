import { Layout } from "../../components/Layout/Layout";
import {StyledH1, StyledP, StyledDiv} from "../../styles/Colors"
import {Formulario} from "../../components/Formulario/Formulario"
import { IoIosAddCircleOutline  } from "react-icons/io";


export default function List_Fill(){
    return (
        <Layout>
            <StyledH1>Nova Lista</StyledH1>
            <StyledP>Adicionar item</StyledP>
            <StyledDiv>
                <Formulario
                type="text"
                id="newItem"
                name="newItem"
                placeholder="Digite o item desejado"
                />
                <IoIosAddCircleOutline size="3rem" color="#38aede"/>
            </StyledDiv>

        </Layout>
    );
}