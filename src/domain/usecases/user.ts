import { CreateUserDTO } from "@/domain/dtos";
import { User } from "@/domain/entities";

export interface CreateUserUseCase {
  create(params: CreateUserDTO): Promise<User>;
}

export interface ListUsersUseCase {
  list(): Promise<User[]>;
}
