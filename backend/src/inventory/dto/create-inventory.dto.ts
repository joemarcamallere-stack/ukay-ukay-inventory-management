import {
  IsEnum,
  IsNumber,
  IsString,
  IsUUID,
  Min,
  MinLength,
} from 'class-validator';

export enum TargetCustomer {
  Male = 'Male',
  Female = 'Female',
  Unisex = 'Unisex',
}

export enum InventoryCondition {
  Excellent = 'Excellent',
  Good = 'Good',
  Fair = 'Fair',
  Damaged = 'Damaged',
}

export class CreateInventoryDto {
  @IsString()
  @MinLength(2)
  name: string;

  @IsString()
  @MinLength(2)
  category: string;

  @IsEnum(TargetCustomer)
  targetCustomer: TargetCustomer;

  @IsString()
  @MinLength(2)
  subcategory: string;

  @IsString()
  @MinLength(1)
  size: string;

  @IsEnum(InventoryCondition)
  condition: InventoryCondition;

  @IsNumber()
  @Min(0)
  quantity: number;

  @IsNumber()
  @Min(0)
  price: number;

  @IsUUID()
  locationId: string;
}
