import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return an orientation to access the api corretly', () => {
      expect(appController.getHello())
        .toBe(`Para acessar a api digite na url: "http://localhost:8080/boleto/" + uma linha digitável válida.
      <br><br>
      Ex.: http://localhost:8080/boleto/21290001192110001210904475617405975870000002000
      `);
    });
  });
});
