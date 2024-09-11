// src/stocks/stocks.module.ts
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios'; // Ensure this is imported correctly
import { StocksController } from './stocks.controller';
import { StocksService } from './stock.service';

@Module({
  imports: [HttpModule],  // This enables the HttpService to be used in StocksService
  controllers: [StocksController],
  providers: [StocksService],
})
export class StocksModule {}
