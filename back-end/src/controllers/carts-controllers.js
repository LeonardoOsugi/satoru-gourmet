import prisma from "../config/database.js";


export async function postCarts(req, res){
    const {product_id, servations} = req.body;
    try{
        const productId = +product_id;
        const productExist = await prisma.products.findFirst({ where: { id: productId}})

        if(!productExist) return res.sendStatus(404);

        const cart = await prisma.cart.create({
            data: {
                product_id: productId, servations
            }});

        res.status(201).send(cart)
    }catch(e){
        res.status(500).send(e);
    }
}