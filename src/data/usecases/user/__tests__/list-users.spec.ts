import { User } from "@/domain/entities";
import { ListUsers } from "@/data/usecases/user";
import { ListUsersRepository } from "@/data/protocols";

// It's recommended to move these 2 mock functions to a mock folder
// to reuse the code that you probably need again
const mockUsers = () =>
  [
    {
      id: 1,
      name: "name",
    },
    {
      id: 2,
      name: "name_2",
    },
    {
      id: 3,
      name: "name_3",
    },
  ] as User[];

const mockRepository = (): ListUsersRepository => {
  class Repository implements ListUsersRepository {
    async listUsers(): Promise<User[]> {
      return mockUsers();
    }
  }

  return new Repository();
};

const makeSut = () => {
  const repository = mockRepository();

  const sut = new ListUsers(repository);

  return { repository, sut };
};

describe("ListUsers UseCase", () => {
  it("Should call repository", async () => {
    const { sut, repository } = makeSut();

    const spy = jest.spyOn(repository, "listUsers");

    await sut.list();

    expect(spy).toHaveBeenCalled();
  });

  it("Should return a list of users on success", async () => {
    const { sut } = makeSut();

    const result = await sut.list();

    expect(result).toEqual(mockUsers());
  });

  it("Should throw when repository throws", async () => {
    const { sut, repository } = makeSut();

    jest.spyOn(repository, "listUsers").mockImplementationOnce(() => {
      throw new Error();
    });

    const result = sut.list();

    await expect(result).rejects.toThrow();
  });
});
