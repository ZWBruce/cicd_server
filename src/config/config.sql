-- auto-generated definition
create table website_config
(
    id             bigint auto_increment comment '自增主键'
        primary key,
    field_key      varchar(255) UNIQUE  not null comment '字段key值',
    field_value    text              not null comment '字段value值',
    create_time    datetime default CURRENT_TIMESTAMP  not null comment '创建时间',
    update_time    datetime default CURRENT_TIMESTAMP not null comment '更新时间',
    delete_time    datetime            null comment '删除时间'
)
    comment '配置表';