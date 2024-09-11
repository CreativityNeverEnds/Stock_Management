// src/portfolio/portfolio.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Portfolio, PortfolioDocument } from './schemas/portfolio.schema';

@Injectable()
export class PortfolioService {
  constructor(@InjectModel(Portfolio.name) private portfolioModel: Model<PortfolioDocument>) {}

  async createPortfolio(username: string, stocks: string[]): Promise<Portfolio> {
    const portfolio = new this.portfolioModel({ username, stocks });
    return portfolio.save();
  }

  async updatePortfolio(username: string, stocks: string[]): Promise<Portfolio> {
    return this.portfolioModel.findOneAndUpdate({ username }, { stocks });
  }

  async getPortfolio(username: string): Promise<Portfolio> {
    return this.portfolioModel.findOne({ username });
  }
}
