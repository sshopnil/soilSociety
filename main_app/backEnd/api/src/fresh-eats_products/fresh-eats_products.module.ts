import { Module } from '@nestjs/common';
import { FreshEatsProductsController } from './fresh-eats_products.controller';
import { FreshEatsProductsService } from './fresh-eats_products.service';

@Module({
  controllers: [FreshEatsProductsController],
  providers: [FreshEatsProductsService]
})
export class FreshEatsProductsModule {}
