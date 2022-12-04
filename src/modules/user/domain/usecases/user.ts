import { CreateUserDTO } from "../dtos";
import { User } from "../entities";

export interface CreateUserUseCase {
  create(params: CreateUserDTO): Promise<User>;
}

export interface ListUsersUseCase {
  list(): Promise<User[]>;
}
