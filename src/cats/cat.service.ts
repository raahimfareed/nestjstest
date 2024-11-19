import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Cat } from "./cat.entity";
import { ICat } from "./interfaces/cat.interface";
import { Repository } from "typeorm";

@Injectable()
export class CatService {
    constructor(
        @InjectRepository(Cat)
        private catRepository: Repository<Cat>,
    ) {}

    create(catDetails: ICat): Promise<Cat> {
        const cat = this.catRepository.create(catDetails);
        return this.catRepository.save(cat);
    }

    findAll(): Promise<Cat[]> {
        return this.catRepository.find();
    }

    find(id: number): Promise<Cat | null> {
        return this.catRepository.findOneBy({ id })
    }

    update(id: number, catDetails: ICat) {
        return this.catRepository.update(id, catDetails)
    }

    delete(id: number) {
        return this.catRepository.delete(id);
    }
}
