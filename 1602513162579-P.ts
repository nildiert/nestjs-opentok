import {MigrationInterface, QueryRunner} from "typeorm";

export class P1602513162579 implements MigrationInterface {
    name = 'P1602513162579'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `Cat_Str` (`id` int NOT NULL AUTO_INCREMENT, `cat_id` int NOT NULL, `str_id` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `categories` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `likes` (`id` int NOT NULL AUTO_INCREMENT, `user_id` int NOT NULL, `str_id` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `opentok` (`id` int NOT NULL AUTO_INCREMENT, `apikey` varchar(255) NOT NULL, `sessionId` varchar(255) NOT NULL, `token` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `role` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `suscriptions` (`id` int NOT NULL AUTO_INCREMENT, `user_id` int NOT NULL, `channel_id` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `users` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `users`");
        await queryRunner.query("DROP TABLE `suscriptions`");
        await queryRunner.query("DROP TABLE `role`");
        await queryRunner.query("DROP TABLE `opentok`");
        await queryRunner.query("DROP TABLE `likes`");
        await queryRunner.query("DROP TABLE `categories`");
        await queryRunner.query("DROP TABLE `Cat_Str`");
    }

}
