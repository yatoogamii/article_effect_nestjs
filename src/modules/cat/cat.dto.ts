import { Schema } from 'effect';

export class CatDto extends Schema.Class<CatDto>('CatDto')({
  name: Schema.String,
}) {}
