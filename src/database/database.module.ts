import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import  Product from 'src/products/entities/product.entity'

@Module({
    imports: [TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        username: 'postgres',
        password: 'docker',
        database: 'shop_list',
        entities: [Product],
        synchronize: true,
    })]
})
export class DatabaseModule {}
