import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardsService {
  private boards = [{ id: 0, contents: 'hello nest' }];

  getAllBoards() {
    return this.boards;
  }
}
