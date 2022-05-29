import { Controller, Get, Post, Body, Put, Param } from '@nestjs/common';
import { ConfigService } from './config.service';
import { ConfigEntity } from './config.entity';
import { get } from 'lodash';

@Controller('v1/config')
export class ConfigController {
  constructor(private readonly configService: ConfigService) {}

  @Post('create')
  async create(
    @Body() config: Omit<ConfigEntity, 'id'>,
  ): Promise<ConfigEntity> {
    return this.configService.create(config);
  }

  @Put(':id')
  async update(@Body() config: Partial<ConfigEntity>, @Param() id: number) {
    return this.configService.update({ ...config, id });
  }

  @Get(':key')
  async findByKey(@Param('key') key: string) {
    return this.configService.findByKey(key);
  }

  @Get()
  async findAll() {
    return this.configService.findAll();
  }
}
