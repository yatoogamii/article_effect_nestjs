import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { CatModule } from './modules/cat/cat.module';
import { EffectValidationPipe } from './shared/effect-validation.pipe';
import { EffectInterceptor } from './shared/effect.interceptor';

@Module({
  imports: [CatModule],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: EffectInterceptor,
    },
    {
      provide: APP_PIPE,
      useClass: EffectValidationPipe,
    },
  ],
})
export class AppModule {}
