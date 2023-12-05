import prisma from "../config/database.js";


export async function getProducts(req, res){
    try{
        const product = await prisma.products.findMany({});
        res.status(200).send(product);
    }catch(e){
        res.status(500).send(e);
    }
}

export async function getProductsId(req, res){
    const {id} = req.params;
    const productId = +id;

    try{
        const product = await prisma.products.findFirst({where: {id: productId}});

        res.status(200).send(product);
    }catch(e){
        res.status(500).send(e)
    }
}