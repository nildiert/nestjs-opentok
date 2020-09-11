import { Module } from "@nestjs/common";
import { ChannelsModule } from "./channels.module";
import { ChannelsService } from "./channels.service";
import { ChannelsController } from "./channels.controller";

@Module({
    imports: [ChannelsModule],
    providers: [ChannelsService],
    controllers: [ChannelsController]
})

export class channelsHttpModule {}