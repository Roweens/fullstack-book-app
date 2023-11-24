import { Resolver, Query, Args, ID } from '@nestjs/graphql';
import { Book } from './book.model';
import { BookService } from './book.service';

@Resolver(() => Book)
export class BookResolver {
  constructor(private readonly bookService: BookService) {}

  @Query(() => [Book])
  async books(): Promise<Book[]> {
    return this.bookService.findAll();
  }

  @Query(() => Book)
  async book(@Args('id', { type: () => ID }) id: string): Promise<Book> {
    return this.bookService.findOne(id);
  }
}
