import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { FreshEatsProductsModule } from './fresh-eats_products/fresh-eats_products.module';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    AuthModule, 
    FreshEatsProductsModule,
    MongooseModule.forRoot('mongodb://localhost:27017/soilSociety')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
