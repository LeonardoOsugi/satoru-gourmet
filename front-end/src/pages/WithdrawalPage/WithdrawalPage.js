import styled from "styled-components";
import Navbar from "../../components/NavBar";


export default function WithdrawalPage(){
    return(
        <>
            <Navbar/>
            <BoxContentWithdrawal>
                <List>
                    <h1>Preparando:</h1>
                </List>
                <VerticaLine></VerticaLine>
                <List>
                    <h1>Pronto:</h1>
                </List>
            </BoxContentWithdrawal>
        </>
    )
};

const BoxContentWithdrawal = styled.div`
    display: flex;
    justify-content: space-around;
    margin-left: 15%;
    margin-right: 15%;
    margin-top: 5%;
`;

const VerticaLine = styled.div`
    border-left: 5px solid black;
    margin: 0 20px;
`;

const List = styled.div`
    flex-direction: column;
    h1{
        font-size: 40px;
        font-weight: bold;
    }
`;