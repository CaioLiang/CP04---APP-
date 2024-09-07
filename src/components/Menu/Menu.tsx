import { BiHomeAlt } from 'react-icons/bi';
import { GoChecklist } from 'react-icons/go';
import { BiUserCircle } from 'react-icons/bi';
import { StyledMenu, StyledMenuItem, StyledWrapperMenu, StyledLink } from './Menu.style';

export const Menu = () => {
    return (
        <StyledMenu>
            <StyledWrapperMenu>
                <StyledMenuItem>
                    <BiHomeAlt size="1.5rem" color="#38aede" />
                    <StyledLink to="/">Home</StyledLink>
                </StyledMenuItem>
                <StyledMenuItem>
                    <GoChecklist size="1.5rem" color="#38aede" />
                    <StyledLink to="/novalista">Nova Lista</StyledLink>
                </StyledMenuItem>
                <StyledMenuItem>
                    <BiUserCircle size="1.5rem" color="#38aede" />
                    <StyledLink to="/perfil">Perfil</StyledLink>
                </StyledMenuItem>
            </StyledWrapperMenu>
        </StyledMenu>
    );
};