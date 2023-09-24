import { Elysia } from "elysia";
import UserRepositoryInMemory from "./external/memory/userrepositoryinmemory";
import UserRegister from "./core/usuario/service/UserRegister";
import UserRegisterController from "./adapters/UserRegisterController";
import UserRepositoryPrismaPg from "./external/prisma/userrepositoryprismapg";
import FindByUsers from "./core/usuario/service/findByUsers";
import FindByUserController from "./adapters/FindByUserController";
import userFindByIdController from "./adapters/UserFindByIdController";
import UserFindById from "./core/usuario/service/userFindByid";

const app = new Elysia()

const userRepository = new UserRepositoryPrismaPg()
const  userRegister = new UserRegister(userRepository)
new UserRegisterController(app, userRegister)


const findByUsers = new FindByUsers(userRepository)
new FindByUserController(app, findByUsers)


const userFindById = new UserFindById(userRepository)
new userFindByIdController(app, userFindById)


app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
