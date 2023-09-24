export default interface UseCase <E,S>{
    execute(prohibited: E): Promise<S>
}