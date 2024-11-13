import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';
export declare class AuthService {
    private readonly usersServices;
    constructor(usersServices: UsersService);
    register({ name, email, password }: RegisterDto): Promise<import("../users/dto/create-user.dto").CreateUserDto & import("../users/entities/user.entity").User>;
    login(): string;
}
