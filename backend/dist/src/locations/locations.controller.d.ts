import { LocationsService } from './locations.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
export declare class LocationsController {
    private readonly locationsService;
    constructor(locationsService: LocationsService);
    create(createLocationDto: CreateLocationDto): Promise<Omit<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        address: string;
        manager: string;
        phone: string;
        itemCount: number;
    }, "_count"> & {
        itemCount: number;
    }>;
    findAll(): Promise<(Omit<{
        _count: {
            items: number;
        };
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        address: string;
        manager: string;
        phone: string;
        itemCount: number;
    }, "_count"> & {
        itemCount: number;
    })[]>;
    findOne(id: string): Promise<Omit<{
        _count: {
            items: number;
        };
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        address: string;
        manager: string;
        phone: string;
        itemCount: number;
    }, "_count"> & {
        itemCount: number;
    }>;
    update(id: string, updateLocationDto: UpdateLocationDto): Promise<Omit<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        address: string;
        manager: string;
        phone: string;
        itemCount: number;
    }, "_count"> & {
        itemCount: number;
    }>;
    remove(id: string): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        address: string;
        manager: string;
        phone: string;
        itemCount: number;
    }>;
}
