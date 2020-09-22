import {MigrationInterface, QueryRunner} from "typeorm";

export class P1600741268424 implements MigrationInterface {
    name = 'P1600741268424'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `name`");
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `email`");
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `password`");
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `apikey`");
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `sessionId`");
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `token`");
        await queryRunner.query("ALTER TABLE `users` ADD `apikey` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `users` ADD `sessionId` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `users` ADD `token` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `users` ADD `name` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `users` ADD `email` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `users` ADD `password` varchar(255) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `password`");
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `email`");
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `name`");
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `token`");
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `sessionId`");
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `apikey`");
        await queryRunner.query("ALTER TABLE `users` ADD `token` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `users` ADD `sessionId` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `users` ADD `apikey` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `users` ADD `password` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `users` ADD `email` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `users` ADD `name` varchar(255) NOT NULL");
    }

}
