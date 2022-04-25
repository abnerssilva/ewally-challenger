import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `Para acessar a api digite na url: "http://localhost:8080/boleto/" + uma linha digitável válida.
    <br><br>
    Ex.: http://localhost:8080/boleto/21290001192110001210904475617405975870000002000
    `;
  }
}
