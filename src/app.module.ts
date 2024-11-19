import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cats/cat.module';
import { LoggerMiddleware } from './logger.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cat } from './cats/cat.entity';

@Module({
  imports: [
        CatModule,
        TypeOrmModule.forRoot({
            type: 'mariadb',
            host: 'localhost',
            port: 3306,
            username: 'nestjstest',
            password: '12345678',
            database: 'nestjstest',
            entities: [Cat],
            // Do not use synchronize in prod, can cause possible loss of data
            synchronize: true
        })
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(LoggerMiddleware)
            .forRoutes('cats')
    }
}
