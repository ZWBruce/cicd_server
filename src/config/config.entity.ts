import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('website_config')
export class ConfigEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fieldKey: string;

  @Column()
  fieldValue: string;

  @Column({ type: 'datetime', default: 'CURRENT_TIMESTAMP' })
  createTime: Date;

  @Column({ type: 'datetime', default: 'CURRENT_TIMESTAMP' })
  updateTime: Date;

  @Column({ type: 'datetime' })
  deleteTime?: Date;
}
