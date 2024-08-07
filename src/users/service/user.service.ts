import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from '../entites/user.entity';
import { CreateUserDto } from '../dto/users.dto';
import * as bcrypt  from 'bcrypt';

@Injectable()
export class UserService {
    constructor(@InjectRepository(Users) private repo: Repository<Users>) {}
    
    async getUser(id: string) {
        const user = await this.repo.findOneBy({ id });
        if (!user) {
            throw new NotFoundException("User not found");
        }

        return user;
    }

    async findUserByEmail(email: string) {
        return await this.repo.findOneBy({ email });
    }

    async createUser(CreateUserDto: CreateUserDto) {
        const { password, ...obj } = CreateUserDto;
        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(password, salt);

        const user = this.repo.create({...obj, password: hashPassword,});
        
        await this.repo.save(user);
        return user;
    }

    async verifyPassword(plainPassword: string, hashPassword: string) {
        return await bcrypt.compare(plainPassword, hashPassword)
    }
}
