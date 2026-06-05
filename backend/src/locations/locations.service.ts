import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';

@Injectable()
export class LocationsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createLocationDto: CreateLocationDto) {
    const location = await this.prisma.location.create({ data: createLocationDto });
    return this.withItemCount(location, 0);
  }

  async findAll() {
    const locations = await this.prisma.location.findMany({
      include: { _count: { select: { items: true } } },
      orderBy: { name: 'asc' },
    });
    return locations.map((location) =>
      this.withItemCount(location, location._count.items),
    );
  }

  async findOne(id: string) {
    const location = await this.prisma.location.findUnique({
      where: { id },
      include: { _count: { select: { items: true } } },
    });
    if (!location) throw new NotFoundException(`Location #${id} not found`);
    return this.withItemCount(location, location._count.items);
  }

  async update(id: string, updateLocationDto: UpdateLocationDto) {
    await this.findOne(id);
    const location = await this.prisma.location.update({
      where: { id },
      data: updateLocationDto,
    });
    const itemCount = await this.prisma.inventoryItem.count({
      where: { locationId: id },
    });
    return this.withItemCount(location, itemCount);
  }

  async remove(id: string) {
    const location = await this.findOne(id);
    if (location.itemCount > 0) {
      throw new BadRequestException(
        'Cannot delete a location that still has inventory items',
      );
    }
    return this.prisma.location.delete({ where: { id } });
  }

  private withItemCount<T extends { _count?: unknown; itemCount?: number }>(
    location: T,
    itemCount: number,
  ) {
    const { _count: _count, ...locationData } = location;
    return { ...locationData, itemCount };
  }
}
