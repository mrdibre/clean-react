import { CreateUserUseCase } from "@/domain/usecases";
import { CreateUserRepository } from "@/data/protocols";
import { CreateUserDTO } from "@/domain/dtos";
import { User } from "@/domain/entities";

class CreateUser implements CreateUserUseCase {
  constructor(private readonly repository: CreateUserRepository) {}

  async create(params: CreateUserDTO): Promise<User> {
    return this.repository.createUser(params);
  }
}

export { CreateUser };
