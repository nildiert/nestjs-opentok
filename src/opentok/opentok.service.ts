import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as OpenTok from 'opentok';
import { OpentokDTO } from './opentok.dto';
import { OpentokModule } from './opentok.module';
import { OpentokEntity } from './opentok.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OpentokService {
  constructor(
    @InjectRepository(OpentokEntity)
    private opentokRepository: Repository<OpentokEntity>,
  ) {}

  // TODO add config values
  private apikey = '46893344';
  private secretKey = '2926a4a97c660f3c26c2eb05a22dc0d6403100c0';
  private readonly opentok: OpenTok = new OpenTok(this.apikey, this.secretKey);

  createSession(): Promise<OpenTok.Session> {
    return new Promise((resolve, reject) => {
      this.opentok.createSession({ mediaMode: 'routed' }, (err, session) => {
        if (session) {
          resolve(session);
        } else {
          reject(err);
        }
      });
    });
  }

  generateToken(sessionId: string, options?: any): OpenTok.Token {
    return this.opentok.generateToken(sessionId, options);
  }

  getApiKey(): string {
    return this.apikey;
  }
  async saveData(data: OpentokDTO) {
    const room = this.opentokRepository.create(data);
    await this.opentokRepository.save(data);
    return room;
  }
}
