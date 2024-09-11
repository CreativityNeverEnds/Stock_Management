// src/stocks/stocks.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { StocksService } from './stock.service';

@Controller('stocks')
export class StocksController {
  constructor(private readonly stocksService: StocksService) {}

  @Get()
  async getStock() {
    const stockData = await this.stocksService.getStockQuote();
    return stockData;
  }
}
