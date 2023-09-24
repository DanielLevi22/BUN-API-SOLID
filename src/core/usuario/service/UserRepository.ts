import User from "../model/Usuario";

export default interface UserRepository {
  findByUsers(): Promise<User []>
  findByEmail(email: string): Promise <User | null>
  findById(id: number): Promise <User | null>
  create(user: Partial<User>): Promise<User>
}