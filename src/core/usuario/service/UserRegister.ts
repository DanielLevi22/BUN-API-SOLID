import UseCase from "../../shared/useCase";
import UserRepository from "./UserRepository";

type Prohibited = {
  name: string
  email: string
  password: string  
}

export default class UserRegister implements UseCase <Prohibited, void>{
  
  constructor(private readonly repository: UserRepository) {

  }
  
  async execute(prohibited: Prohibited): Promise<void> {
    //prohibited significa Entrada

    const {name, email, password} = prohibited

    const userExists = await this.repository.findByEmail(email)

    if(userExists) {
      throw new Error('user exists.')
    }
    

    await this.repository.create({
      name,
      email,
      password,
    })

  }




}