import { Test, TestingModule } from '@nestjs/testing';
import { OpentokController } from './opentok.controller';

describe('OpentokController', () => {
  let controller: OpentokController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OpentokController],
    }).compile();

    controller = module.get<OpentokController>(OpentokController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
