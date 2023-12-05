import { useParams } from "react-router-dom";
import Navbar from "../../components/NavBar";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";


export default function ProductIdPage(){
    const[servations, setServations] = useState("");
    const[product, setProduct] = useState({});
    const {id} = useParams();

    useEffect(() =>{
        async function getProductById(){
            try{
                const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/products/${id}`)
                setProduct(res.data);
            }catch(e){
                alert(e.response.data.message)
            }
        }

        getProductById();
    },[id]);

    async function addCart(e){
        e.preventDefault();
        const body = {
            product_id: id,
            servations
        }
        try{
            await axios.post(`${process.env.REACT_APP_API_BASE_URL}/carts`, body);

            alert("Adicionado ao pedido")
        }catch(e){
            alert(e.response.data.message)
        }
    }

    return(
        <>
            <Navbar/>
            <BoxContentProductId>
                <h1>Revise seu pedido</h1>
                <BoxElements>
                    <BoxImage>
                        <img src={product.image} alt="BURGUE"/>
                    </BoxImage>
                    <BoxDescriptions>
                        <p>{product.product_name}</p>
                        <p className="description">{product.product_description}</p>
                    </BoxDescriptions>
                    <p>R${(product.price / 100).toLocaleString("pt-BR", { style: "decimal", minimumFractionDigits: 2 })}</p>
                </BoxElements>
                <h1>
                    Observações
                </h1>
                <input
                type="text"
                placeholder="Adicione uma observação ao pedido"
                value={servations}
                onChange={(e) => setServations(e.target.value)}
                required
                />
                <button onClick={addCart}>
                    ADICIONE AO PEDIDO
                </button>
            </BoxContentProductId>
        </>
    )
}

const BoxContentProductId = styled.div`
        display: flex;
        flex-direction: column;
        margin-left: 15%;
        margin-right: 15%;
        margin-top: 5%;
        input{
            margin-top: 2%;
            margin-bottom: 5%;
            width: 50%;
            text-decoration: none;
            background-color: lightgray;
            font-size: 25px;
            border-radius: 10px;
            border-color: solid white;
        };
        h1{
            margin-bottom: 2%;
            font-size: 40px;
        };
        p{
            margin-bottom: 5%;
            font-size:25px;
        };
        button{
            background-color: red;
            color: yellow;
            width: 25%;
            height: 50px;
            font-size: 25px;
            border-radius: 10px;
        };
`

const BoxImage = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20%;
        border: 1px solid black;
        border-radius: 10px;
        box-shadow: 10px 5px 10px lightslategray;
        img{
            width: 50%;
        }
`;

const BoxElements = styled.div`
        display: flex;
        justify-content: space-between;
        margin-left:30px;
        margin-bottom:10%;
`;

const BoxDescriptions = styled.div`
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
`;