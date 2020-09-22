import {MigrationInterface, QueryRunner} from "typeorm";

export class P1600741769084 implements MigrationInterface {
    name = 'P1600741769084'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `users` (`id` int NOT NULL AUTO_INCREMENT, `apikey` varchar(255) NOT NULL, `sessionId` varchar(255) NOT NULL, `token` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `role` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `suscriptions` (`id` int NOT NULL AUTO_INCREMENT, `user_id` int NOT NULL, `channel_id` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
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
        await queryRunner.query("DROP TABLE `suscriptions`");
        await queryRunner.query("DROP TABLE `role`");
        await queryRunner.query("DROP TABLE `users`");
    }

}
