import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { PrismaClientExceptionFilter } from "nestjs-prisma";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    app.useGlobalPipes(
        new ValidationPipe({
            transform: true,
            // whitelist: true,
            // forbidNonWhitelisted: true,
            disableErrorMessages: false,
        }),
    );
    app.useGlobalFilters(new PrismaClientExceptionFilter());
    await app.listen(5001);
}
bootstrap();
