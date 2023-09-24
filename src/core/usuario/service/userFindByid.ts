import { User } from "@prisma/client";
import UseCase from "../../shared/useCase";
import UserRepository from "./UserRepository";


export default class UserFindById implements UseCase<number ,User | null>{

  constructor(private readonly repository :UserRepository) {}

async execute(id: number){
  
    return this.repository.findById(id)
  
}
}