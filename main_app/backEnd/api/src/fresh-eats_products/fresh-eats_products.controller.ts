import { Body, Controller, Post } from '@nestjs/common';
import { FreshEatsProductsService } from './fresh-eats_products.service';

@Controller('fresh-eats-products')
export class FreshEatsProductsController {

    // @Post()
    // createPost(
    //     @Body('seller_id') seller_id : number,
    //     @Body('name') name : string,
    //     @Body('price') price: number,
    //     @Body('img_src') img_src: string,
    //     @Body('rem_item') rem_item: number,
    //     @Body('description') description?: string,
    //     @Body('rating') rating?: number,
    // ){
    //     return this.FreshEatsProductsService
    // }
}
