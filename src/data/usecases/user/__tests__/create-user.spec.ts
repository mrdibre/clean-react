import { User } from "@/domain/entities";
import { CreateUserDTO } from "@/domain/dtos";
import { CreateUserRepository } from "@/data/protocols";

import { CreateUser } from "../create-user";

// It's recommended to move these 2 mock functions to a mock folder
// to reuse the code that you probably need again
const mockUser = () =>
  ({
    id: 1,
    name: "name",
  } as User);

const mockRepository = (): CreateUserRepository => {
  class Repository implements CreateUserRepository {
    async createUser(params: CreateUserDTO): Promise<User> {
      return mockUser();
    }
  }

  return new Repository();
};

const makeSut = () => {
  const repository = mockRepository();

  const sut = new CreateUser(repository);

  return { repository, sut };
};

describe("CreateUser UseCase", () => {
  it("Should call repository with correct values", async () => {
    const { sut, repository } = makeSut();

    const spy = jest.spyOn(repository, "createUser");

    await sut.create({ name: "name" });

    expect(spy).toHaveBeenCalledWith({ name: "name" });
  });

  it("Should return an user on success", async () => {
    const { sut } = makeSut();

    const result = await sut.create({ name: "name" });

    expect(result).toEqual(mockUser());
  });

  it("Should throw when repository throws", async () => {
    const { sut, repository } = makeSut();

    jest.spyOn(repository, "createUser").mockImplementationOnce(() => {
      throw new Error();
    });

    const result = sut.create({ name: "name" });

    await expect(result).rejects.toThrow();
  });
});
