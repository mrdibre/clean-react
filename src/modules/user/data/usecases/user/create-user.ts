import { CreateUserUseCase } from "@/modules/user/domain/usecases";
import { CreateUserRepository } from "@/modules/user/data/protocols";
import { CreateUserDTO } from "@/modules/user/domain/dtos";
import { User } from "@/modules/user/domain/entities";

class CreateUser implements CreateUserUseCase {
  constructor(private readonly repository: CreateUserRepository) {}

  async create(params: CreateUserDTO): Promise<User> {
    return this.repository.createUser(params);
  }
}

export { CreateUser };
