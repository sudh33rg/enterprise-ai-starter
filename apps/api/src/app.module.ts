import { Module, MiddlewareConsumer } from '@nestjs/common';
import { AiModule } from './ai/ai.module.js';
import { safetyMiddleware } from './middleware/safety.middleware.js';

@Module({
  imports: [AiModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(safetyMiddleware).forRoutes('*');
  }
}
