import styled from 'styled-components';
import Navbar from '../../components/NavBar';
import { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

export default function HomePage(){
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function getProducts(){
            try{
                const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/products`);
                setProducts(res.data);
            }catch(e){
                console.log("deu erro direto");
                alert(e.response.data.message);
            }
        }

        getProducts();
    },[products, setProducts])
    return(
        <>
            <Navbar/>
            <BoxContent>
                <h1>SEJA BEM VINDO!</h1>
                <input
                placeholder='O que você procura?'
                />
                <h1>Categorias</h1>
                <p>Navegue por categoria</p>
                <AlignCategoria>
                    <BoxCategoria>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_9bX_NKTM0K9hBS3DDeNxY98J5HtreLTG-hQm7aQjHw&s" alt="combo-hamburguer"/>
                        <p>Combos</p>
                    </BoxCategoria>
                    <BoxCategoria>
                        <img src="https://img.freepik.com/fotos-premium/batatas-fritas-com-bacon-e-cebola-doce-temperado-com-molho-barbecue-num-prato-branco-fechar-se-fundo-branco-isolado_323569-351.jpg" alt="acompanhamento"/>
                        <p>Acompanhamentos</p>
                    </BoxCategoria>
                    <BoxCategoria>
                        <img src="https://giassi.vtexassets.com/arquivos/ids/690688/Refresco-Adocado-Guarana-Leao-Copo-300ml.png?v=638267698219800000" alt="bebidas"/>
                        <p>Bebidas</p>
                    </BoxCategoria>
                    <BoxCategoria>
                        <img src="https://andaluza.com.br/wp-content/uploads/2015/11/15332_mousse_maracuja.png" alt="sobremesas"/>
                        <p>Sobremesas</p>
                    </BoxCategoria>
                </AlignCategoria>
                <h1>Produtos</h1>
                <p>Selecione um produto para adicionar ao seu pedido</p>
                <BoxProducts>
                    {products.map((p) => 
                            <BoxProduct key={p.id}>
                                <Link to={`/product/${p.id}`}>
                                    <img src={p.image} alt="BURGUE"/>
                                    <BackgroudDescription>
                                        <p>{p.product_name}</p>
                                        <p>{p.product_description}</p>
                                        <p>R${(p.price / 100).toLocaleString("pt-BR", { style: "decimal", minimumFractionDigits: 2 })}</p>
                                    </BackgroudDescription>
                                </Link>
                            </BoxProduct>
                    )}
                </BoxProducts>
            </BoxContent>
        </>
    )
};

const BoxContent = styled.div`
        display: flex;
        flex-direction: column;
        margin-left: 15%;
        margin-right: 15%;
        margin-top: 5%;
        input{
            margin-top: 2%;
            margin-bottom: 5%;
            width: 30%;
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
`;

const AlignCategoria = styled.div`
    display: flex;
    margin-bottom: 5%;
`;

const BoxCategoria = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    width: 30%;
    box-shadow: 10px 5px 10px lightslategray;
    align-items: center;
    justify-content: center;
    margin-right: 5%;
    img{
        width: 45%;
    }
`;

const BoxProducts = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    a {
        text-decoration: none;
        color: inherit; 
    }
`;
const BoxProduct = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 20%;
    padding: 10px;
    border-radius: 10px;
    border: 2px solid black;
    box-shadow: 10px 5px 10px lightslategray;
    margin-bottom: 10%;
    margin-left: 10px;
    img{
        width: 75%;
        margin-bottom: 10px;
    }
`;

const BackgroudDescription = styled.div`
    background-color: red;
    color: yellow;
    border-radius: 10px;
    text-decoration: none;
    padding: 10px;
    box-shadow: 10px 5px 10px lightslategray;
`;
