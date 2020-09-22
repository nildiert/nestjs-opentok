import { Controller, Get, Param, HttpStatus } from '@nestjs/common';
import { OpentokService } from './opentok.service';
import * as Opentok from 'opentok';

@Controller('opentok')
export class OpentokController {
  constructor(private readonly opentokService: OpentokService) {}

  @Get('/session')
  async createSession(): Promise<any> {
    const session: Opentok.Session = await this.opentokService.createSession();
    return {
      sessionId: session.sessionId,
    };
  }

  @Get('/session/:id/token')
  generateToken(@Param('id') id) {
    return {
      token: this.opentokService.generateToken(id),
    };
  }

  @Get('/room/:name')
  async roomName(@Param('name') name) {
    const session: Opentok.Session = await this.opentokService.createSession();
    const sessionId = session.sessionId;

    return {
      statusCode: HttpStatus.OK,
      data: {
        apiKey: this.opentokService.getApiKey(),
        sessionId: session.sessionId,
        token: this.opentokService.generateToken(sessionId),
      },
    };
  }
}
