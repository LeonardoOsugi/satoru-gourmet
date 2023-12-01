import Navbar from "../../components/NavBar";
import styled from "styled-components";

export default function KitchenPage(){
    return(
        <>
            <Navbar/>
            <BoxContentKitchen>
                <List>
                    <h1>Preparando:</h1>
                </List>
                <VerticaLine></VerticaLine>
                <List>
                    <h1>Pronto:</h1>
                </List>
            </BoxContentKitchen>
        </>
    );
}

const BoxContentKitchen = styled.div`
    display: flex;
    justify-content: space-around;
    margin-left: 15%;
    margin-right: 15%;
    margin-top: 5%;
`;

const VerticaLine = styled.div`
    border-left: 2px solid black;
    margin: 0 20px;
`;

const List = styled.div`
    flex-direction: column;
    h1{
        font-size: 40px;
        font-weight: bold;
    }
`;

