-- CreateTable
CREATE TABLE "cart" (
    "id" SERIAL NOT NULL,
    "product_id" INTEGER NOT NULL,
    "servations" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT timezone('America/Sao_Paulo'::text, (CURRENT_DATE)::timestamp with time zone),

    CONSTRAINT "cart_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "cart" ADD CONSTRAINT "cart_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
