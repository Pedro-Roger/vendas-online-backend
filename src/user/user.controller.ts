/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/require-await */
import {  Body, Controller,  Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';

@Controller('user')
export class UserController {
    
    @Post()
    async createUser(@Body() createUser: CreateUserDto) {
      return {
        ...createUser,
        password: undefined,
      };
    }
}
