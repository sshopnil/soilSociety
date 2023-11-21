import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { FreshEatsProductsController } from './fresh-eats_products.controller';
import { FreshEatsProductsService } from './fresh-eats_products.service';
import { FreshEatsProductsSchema } from './fresh-eats_products.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'FreshEatsProducts', schema: FreshEatsProductsSchema}])
  ],
  controllers: [FreshEatsProductsController],
  providers: [FreshEatsProductsService]
})
export class FreshEatsProductsModule {}
