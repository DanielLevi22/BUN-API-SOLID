import User from "../../core/usuario/model/Usuario";
import UserRepository from "../../core/usuario/service/UserRepository";

export default class UserRepositoryInMemory implements UserRepository  {
  private readonly users: User[] = []

async findByUsers() {
  return this.users
}

 async create(user: User) {

    const newUser =  {...user, id:Math.random()}
     this.users.push(newUser)
     return newUser
  }
 async findByEmail(email: string) {
    return this.users.find( item => item.email === email ) ?? null
  }
 async  findById(id: number): Promise<User | null> {
  return this.users.find( item => item.id === id ) ?? null
    
  }
}