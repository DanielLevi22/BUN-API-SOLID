import Elysia from "elysia";

import userFindById from "../core/usuario/service/userFindByid";

export default class userFindByIdController {

  constructor(
    readonly server: Elysia,
    readonly useCase: userFindById
  ) {

    server.get('/users/:id', async ({params}) => {
      return useCase.execute(Number(params.id))

   
    })
  }


}