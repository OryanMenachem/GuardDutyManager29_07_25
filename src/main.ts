import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  /**
   * Apply global validation pipes to validate and transform incoming requests.
   */
  app.useGlobalPipes(new ValidationPipe({
    /**
     * Automatically transform payloads to be objects typed according to their DTO classes.
     */
    transform: true,
    /**
     * Strip properties that do not have any decorators in the DTO.
     */
    whitelist: true,
    /**
     * Throw an error if non-whitelisted properties are present in the request.
     */
    forbidNonWhitelisted: true
  }));

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
