import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './product.entity';

@Injectable()
export class InventoryService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  findAll() {
    return this.productRepository.find({ order: { createdAt: 'DESC' } });
  }

  create(createProductDto: CreateProductDto) {
    const product = this.productRepository.create(createProductDto);
    return this.productRepository.save(product);
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const product = await this.productRepository.preload({ id, ...updateProductDto });
    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return this.productRepository.save(product);
  }

  async remove(id: string) {
    const result = await this.productRepository.delete(id);
    if (!result.affected) {
      throw new NotFoundException('Product not found');
    }

    return { deleted: true };
  }
}
