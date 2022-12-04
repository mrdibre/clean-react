import { ListUsersUseCase } from "@/modules/user/domain/usecases";
import { ListUsersRepository } from "@/modules/user/data/protocols";
import { User } from "@/modules/user/domain/entities";

class ListUsers implements ListUsersUseCase {
  constructor(private readonly repository: ListUsersRepository) {}

  async list(): Promise<User[]> {
    return this.repository.listUsers();
  }
}

export { ListUsers };
