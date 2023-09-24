import { PrismaClient } from "@prisma/client";
import User from "../../core/usuario/model/Usuario";
import UserRepository from "../../core/usuario/service/UserRepository";

export default class UserRepositoryPrismaPg implements UserRepository {
  private prisma: PrismaClient

  constructor() {
    this.prisma = new PrismaClient()
  }

  findByUsers(): Promise<User[]> {
    const user = this.prisma.user.findMany()
    return user
  }
 async findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        email: email
      }
    })
  }
 async create(user: User): Promise<User> {
   return this.prisma.user.create({data: user})
  }
  async findById(id: number): Promise<User | null> {
  return  await this.prisma.user.findUnique({
      where: {
       id
      }
    })
  
  }

}