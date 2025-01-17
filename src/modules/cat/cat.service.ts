import { Injectable } from '@nestjs/common';
import { Effect, Schema } from 'effect';
import { ParseError } from 'effect/ParseResult';
import { Cat } from './cat.type';

@Injectable()
export class CatService {
  db: Map<string, Cat> = new Map();

  getCats(): Effect.Effect<Cat[]> {
    return Effect.succeed(Array.from(this.db.values()));
  }

  createCat(name: string): Effect.Effect<string, ParseError> {
    return Effect.gen(this, function* () {
      const id = this.db.size + 1;

      const newCat = {
        id: id.toString(),
        name,
      };

      const cat = yield* Schema.decode(Cat)(newCat);

      this.db.set(cat.id, cat);

      return cat.id;
    });
  }

  getCat(id: string): Effect.Effect<Cat, Error> {
    const cat = this.db.get(id);

    return Effect.fromNullable(cat);
  }
}
