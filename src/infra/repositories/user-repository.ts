import { CreateUserRepository, ListUsersRepository } from "@/data/protocols";
import { User } from "@/domain/entities";
import { CreateUserDTO } from "@/domain/dtos";
import { Storage } from "@/infra/protocols";

class UserRepository implements CreateUserRepository, ListUsersRepository {
  constructor(private readonly storage: Storage) {}

  async createUser({ name }: CreateUserDTO): Promise<User> {
    const id = Math.ceil(Math.random() * 10000);

    const user: User = { id, name: name };

    const currentUsers = await this.listUsers();

    this.storage.add("users", [...currentUsers, user]);

    return user;
  }

  async listUsers(): Promise<User[]> {
    return this.storage.get<User[]>("users") ?? [];
  }

}

export { UserRepository };
