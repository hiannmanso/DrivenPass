-- CreateTable
CREATE TABLE "accounts" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "accounts_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cards" (
    "id" SERIAL NOT NULL,
    "cardNumber" TEXT NOT NULL,
    "cardName" TEXT NOT NULL,
    "cvc" TEXT NOT NULL,
    "expirationDate" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "isVirtual" BOOLEAN NOT NULL,
    "cardType" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "userID" INTEGER NOT NULL,

    CONSTRAINT "cards_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "credentials" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "userID" INTEGER NOT NULL,

    CONSTRAINT "credentials_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "secureNotes" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "annotation" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "userID" INTEGER NOT NULL,

    CONSTRAINT "secureNotes_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wifi" (
    "id" SERIAL NOT NULL,
    "networkName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "userID" INTEGER,

    CONSTRAINT "wifi_pk" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "accounts_email_key" ON "accounts"("email");

-- AddForeignKey
ALTER TABLE "cards" ADD CONSTRAINT "cards_fk0" FOREIGN KEY ("userID") REFERENCES "accounts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "credentials" ADD CONSTRAINT "credentials_fk0" FOREIGN KEY ("userID") REFERENCES "accounts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "secureNotes" ADD CONSTRAINT "secureNotes_fk0" FOREIGN KEY ("userID") REFERENCES "accounts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "wifi" ADD CONSTRAINT "wifi_fk0" FOREIGN KEY ("userID") REFERENCES "accounts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
