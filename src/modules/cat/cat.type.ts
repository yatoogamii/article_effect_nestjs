import { Schema } from 'effect';

const _Cat = Schema.Struct({
  id: Schema.String,
  name: Schema.String,
});

export interface Cat extends Schema.Schema.Type<typeof _Cat> {}

export const Cat: Schema.Schema<Cat> = _Cat;
