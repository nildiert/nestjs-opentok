import { Test, TestingModule } from '@nestjs/testing';
import { OpentokService } from './opentok.service';

describe('OpentokService', () => {
  let service: OpentokService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OpentokService],
    }).compile();

    service = module.get<OpentokService>(OpentokService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
