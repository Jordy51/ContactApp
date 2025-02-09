import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(@Inject('POSTGRES_POOL') private readonly sql: any) {}

  getHello(): string {
    return 'Hello World!';
  }
  async getTable(name: string): Promise<any[]> {
    return await this.sql(`SELECT * FROM ${name}`);
  }
}
