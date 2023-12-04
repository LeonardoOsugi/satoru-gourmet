-- CreateEnum
CREATE TYPE "OrderCategory" AS ENUM ('COMBOS', 'ACOMPANHAMENTOS', 'BEBIDAS', 'SOBREMESAS');

-- CreateEnum
CREATE TYPE "PaymentForm" AS ENUM ('DEBITO', 'CREDITO', 'DINHEIRO');

-- CreateTable
CREATE TABLE "order" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "product_name" VARCHAR(255) NOT NULL,
    "product_description" VARCHAR(255) NOT NULL,
    "total_price" TEXT NOT NULL,
    "form" "PaymentForm" NOT NULL DEFAULT 'DINHEIRO',
    "category" "OrderCategory" NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "code" VARCHAR(10) NOT NULL,
    "servations" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT timezone('America/Sao_Paulo'::text, (CURRENT_DATE)::timestamp with time zone),

    CONSTRAINT "order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order_ready" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "product_name" VARCHAR(255) NOT NULL,
    "product_description" VARCHAR(255) NOT NULL,
    "total_price" TEXT NOT NULL,
    "form" "PaymentForm" NOT NULL DEFAULT 'DINHEIRO',
    "category" "OrderCategory" NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "code" VARCHAR(10) NOT NULL,
    "servations" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT timezone('America/Sao_Paulo'::text, (CURRENT_DATE)::timestamp with time zone),

    CONSTRAINT "order_ready_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "product_name" VARCHAR(255) NOT NULL,
    "product_description" VARCHAR(255) NOT NULL,
    "price" TEXT NOT NULL,
    "category" "OrderCategory" NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT timezone('America/Sao_Paulo'::text, (CURRENT_DATE)::timestamp with time zone),

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);
