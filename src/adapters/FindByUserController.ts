import Elysia from "elysia";
import FindByUsers from "../core/usuario/service/findByUsers";

export default class FindByUserController {

  constructor(
    readonly server: Elysia,
    readonly useCase: FindByUsers
  ) {

    server.get('/users', async () => {
      return useCase.execute()

   
    })
  }


}