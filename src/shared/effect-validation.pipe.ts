import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { Schema } from 'effect';

@Injectable()
export class EffectValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (Schema.isSchema(metadata.metatype)) {
      return new metadata.metatype(value);
    }

    return value;
  }
}
