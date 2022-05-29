import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createServer } from 'http';
import fs from 'fs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  await app.listen(3000);
}
bootstrap();

createServer((req, res) => {
  req.pipe(fs.createWriteStream('/tmp/test.txt'));
});

const methodDecorator = () => {
  return function (target: any, targetKey: string) {
    console.log(target, target.constructor, targetKey);
  };
};

@Reflect.metadata('type', 'class')
class A {
  constructor(public name: string, public age: number) {}
  @Reflect.metadata(undefined, undefined)
  @methodDecorator()
  method(): boolean {
    return true;
  }
}

const t1 = Reflect.getMetadata('design:paramtypes', A);
const t2 = Reflect.getMetadata('design:returntype', A.prototype, 'method');
const t3 = Reflect.getMetadata('design:type', A.prototype, 'method');

console.log(...t1, t2, t3);

class Test {
  constructor(public a) {}
  say() {
    console.log('hello');
  }
}

const t = new Test(1);
console.log(t.a);
