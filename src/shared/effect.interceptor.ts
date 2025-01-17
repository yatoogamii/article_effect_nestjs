import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Effect } from 'effect';
import { map, Observable } from 'rxjs';

@Injectable()
export class EffectInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next
      .handle()
      .pipe(map((data: Effect.Effect<unknown>) => Effect.runPromise(data)));
  }
}
