/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[email]` on the table `Users`. If there are existing duplicate values, the migration will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Users.email_unique` ON `Users`(`email`);
