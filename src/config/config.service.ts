import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConfigEntity } from './config.entity';
import { omit } from 'lodash';
import * as assert from 'assert';

@Injectable()
export class ConfigService {
  constructor(
    @InjectRepository(ConfigEntity)
    private readonly configRepository: Repository<ConfigEntity>,
  ) {}

  create(config: Omit<ConfigEntity, 'id'>): Promise<ConfigEntity> {
    return this.configRepository.save(omit(config, 'id'));
  }

  update(config: Partial<ConfigEntity>) {
    assert(config.id, 'id is required');

    return this.configRepository.update(config.id, omit(config, 'id'));
  }

  remove(id: number) {
    return this.configRepository.softDelete(id);
  }

  findByKey(key: string): Promise<ConfigEntity> {
    return this.configRepository.findOne({
      where: { fieldKey: key },
    });
  }

  findAll(): Promise<ConfigEntity[]> {
    return this.configRepository.find();
  }
}
