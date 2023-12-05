import prisma from "../config/database.js";


export async function getProducts(req, res){
    try{
        const product = await prisma.products.findMany({});
        res.status(200).send(product);
    }catch(e){
        res.status(500).send(e);
    }
}