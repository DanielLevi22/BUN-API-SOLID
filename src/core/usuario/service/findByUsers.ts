
import UseCase from "../../shared/useCase";
import User from "../model/Usuario";
import UserRepository from "./UserRepository";

export default class FindByUsers implements UseCase<void, User[]> {

  constructor (readonly repositorio: UserRepository) {}
  
  async execute(){
    return await this.repositorio.findByUsers()

  }



}