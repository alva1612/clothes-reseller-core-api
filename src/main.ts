import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  const config = new DocumentBuilder().setVersion('1.0');
  config.addBearerAuth();

  const document = SwaggerModule.createDocument(app, config.build());
  app.enableCors({
    origin: 'http://localhost:3001',
  });
  SwaggerModule.setup('swagger', app, document);
  await app.listen(3000);
}
bootstrap();
