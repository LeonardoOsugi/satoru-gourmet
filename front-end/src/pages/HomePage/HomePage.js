import styled from 'styled-components';
import Navbar from '../../components/NavBar';

export default function HomePage(){
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
