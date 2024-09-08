import {StyledForm, StyledDiv } from "./Formulario.style.ts";

interface FormularioProps {
    type: string;
    id: string;
    name: string;
    [key: string]: any;
}

export const Formulario: React.FC<FormularioProps> = ({ type, id, name, ...rest }) => {
    return (
        <StyledDiv>
            <StyledForm
                type={type}
                id={id}
                name={name}
                {...rest}
            />
        </StyledDiv>
    );
};