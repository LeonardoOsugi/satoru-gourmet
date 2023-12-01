import styled from "styled-components";


export default function Navbar(){
    return(
        <NavBar>
                <Logo>
                    <img src="https://www.svgrepo.com/show/168814/hamburguer.svg" alt="hamburguer"/>
                    <p>Seutoru Gourmet</p>
                </Logo>
                <Botoes>
                    <button>
                        Pedidos
                    </button>
                    <button>
                        Cozinha
                    </button>
                    <button>
                        Retirada
                    </button>
                </Botoes>
        </NavBar>
    )
}

const NavBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: red;
    color: yellow;
    padding: 10px;
    font-size: 30px;
    p{
        margin: 10px;
    }
    img{
        width: 30px;
        height: 30px;
        margin: 10px;
    }
`;

const Logo = styled.div`
    display: flex;
`;

const Botoes = styled.div`
    display: flex;
    justify-content: space-evenly;
    button{
        border-radius: 10px;
        border-color: red;
        background-color: red;
        color: yellow;
        font-size: 30px;
        margin-left: 10px;
    }
`;