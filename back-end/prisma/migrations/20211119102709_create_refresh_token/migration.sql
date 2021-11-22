-- CreateTable
CREATE TABLE "RefreshTokens" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "expiresIn" INTEGER NOT NULL,
    "userId" UUID NOT NULL,

    CONSTRAINT "RefreshTokens_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "RefreshTokens_userId_key" ON "RefreshTokens"("userId");

-- AddForeignKey
ALTER TABLE "RefreshTokens" ADD CONSTRAINT "RefreshTokens_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
