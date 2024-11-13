import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';
import * as bcryptjs from 'bcryptjs'

@Injectable()
export class AuthService {
    constructor(
        private readonly usersServices: UsersService,
    ) {}
    
    async register({name, email, password}: RegisterDto) {

        const user = await this.usersServices.findOneByEmail(email);

        if (user) {
            throw new BadRequestException('El usuario ya existe')
        }
        return await this.usersServices.create({name,email, password});


    }
    
    login() {
        return ' login'
    }
}
