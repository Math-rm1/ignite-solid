import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    if (!user || !user.admin) {
      const errorMessage = !user
        ? `User with id ${user_id} not found`
        : `User with id ${user_id} is not an admin`;

      throw new Error(errorMessage);
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
