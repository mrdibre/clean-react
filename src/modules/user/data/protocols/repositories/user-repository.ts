import { CreateUserDTO } from "../../../domain/dtos";
import { User } from "../../../domain/entities";

export interface CreateUserRepository {
  createUser: (params: CreateUserDTO) => Promise<User>;
}

export interface ListUsersRepository {
  listUsers: () => Promise<User[]>;
}
