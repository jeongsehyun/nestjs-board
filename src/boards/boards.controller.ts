import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './board.model';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('boards')
export class BoardsController {
  constructor(private boardServce: BoardsService) {}

  @Get('')
  getAllBoards(): Board[] {
    return this.boardServce.getAllBoards();
  }

  @Post()
  createBoard(@Body() createBoardDto: CreateBoardDto): Board {
    return this.boardServce.createBoard(createBoardDto);
  }
}
