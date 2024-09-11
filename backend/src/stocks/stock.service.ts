
// src/stocks/stocks.service.ts
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class StocksService {
    constructor(private httpService: HttpService) {}

  async getStockQuote(): Promise<any> {
    const url :any = `https://financialmodelingprep.com/api/v3/stock/list?apikey=psNN5q9cEUQlkktIHZdjzylaXcsfUv5M`;

    try {
      const response = await this.httpService.get(url).toPromise();
      return response.data;
    } catch (error) {
      throw error;  // Handle this in the controller if needed
    }
  }
}
