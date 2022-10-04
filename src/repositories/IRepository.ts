export interface IRepository<Type, K>{
    save(args: Type): Promise<Type>
    update(args: Type): Promise<Type> 
    findAll(): Promise<Type[]>
    findById(id: K): Promise<Type>
    delete(id: Type): Promise<Type>
}