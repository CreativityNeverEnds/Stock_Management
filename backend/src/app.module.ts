// src/app.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PortfolioModule } from './portfolio/portfolio.module';
import { StocksModule } from './stocks/stocks.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/stock-management'),  // MongoDB connection
    PortfolioModule,
    StocksModule,  // Ensure this is imported
  ],
})
export class AppModule {}