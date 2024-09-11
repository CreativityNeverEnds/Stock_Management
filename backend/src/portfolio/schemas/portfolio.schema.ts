// src/portfolio/schemas/portfolio.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PortfolioDocument = Portfolio & Document;

@Schema()
export class Portfolio {
  @Prop({ required: true })
  username: string;

  @Prop([String])
  stocks: string[];
}

export const PortfolioSchema = SchemaFactory.createForClass(Portfolio);
