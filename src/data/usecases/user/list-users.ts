import { ListUsersUseCase } from "@/domain/usecases";
import { ListUsersRepository } from "@/data/protocols";
import { User } from "@/domain/entities";

class ListUsers implements ListUsersUseCase {
  constructor(private readonly repository: ListUsersRepository) {}

  async list(): Promise<User[]> {
    return this.repository.listUsers();
  }
}

export { ListUsers };
