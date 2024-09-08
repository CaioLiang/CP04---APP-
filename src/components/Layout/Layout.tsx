import { Menu } from "../Menu/Menu"
import { StyledLayout } from "./Layout.style"
import { Barra } from "../Barra/Barra"

interface LayoutProps {
    children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <StyledLayout>
            <main>{children}</main>
            <Barra />
            <Menu />
        </StyledLayout>
    )
}