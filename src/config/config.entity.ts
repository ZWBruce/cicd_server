import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  DeleteDateColumn,
} from 'typeorm';

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

  @DeleteDateColumn({
    type: 'datetime',
    comment: '删除时间',
  })
  deleteTime?: Date;
}
