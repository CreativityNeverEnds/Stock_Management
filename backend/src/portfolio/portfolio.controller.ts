// src/portfolio/portfolio.controller.ts
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PortfolioService } from './portfolio.service';

@Controller('portfolio')
export class PortfolioController {
  constructor(private readonly portfolioService: PortfolioService) {}

  @Post()
  async create(@Body() body: { username: string; stocks: string[] }) {
    return this.portfolioService.createPortfolio(body.username, body.stocks);
  }

  @Post('update')
  async update(@Body() body: { username: string; stocks: string[] }) {
    return this.portfolioService.updatePortfolio(body.username, body.stocks);
  }

  @Get(':username') 
  async getPortfolio(@Param('username') username: string) {
    return this.portfolioService.getPortfolio(username);
  }
}
