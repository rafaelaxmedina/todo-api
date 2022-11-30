import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import ProductEntity from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}

  findAll(): Promise<ProductEntity[]> {
      return this.productRepository.find();
  }

  async save(name: CreateProductDto): Promise<ProductEntity> {
    return this.productRepository.save(this.productRepository.create(name));
  }

  async update(id: any, name: UpdateProductDto): Promise<ProductEntity> {
    await this.productRepository.update(id, name);
    const updatedName = await this.productRepository.findOne({ where: { id: id } });

    if (!updatedName) {
      throw new Error('product does not exist');
    }

    return updatedName;
  }

  async remove(id: number) {
    return this.productRepository.delete(id)
  }
}
