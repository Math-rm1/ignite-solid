import { Request, Response } from "express";
import { User } from "modules/users/model/User";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;

    let userList: User[];

    try {
      userList = this.listAllUsersUseCase.execute({
        user_id: user_id.toString(),
      });
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
    return response.status(200).json(userList);
  }
}

export { ListAllUsersController };
