export abstract class IRepository<T> {
    abstract getAll(EcoleId?:string): Promise<T[]>;

    abstract get(id: string,EcoleId?:string): Promise<T | null>;

    abstract count(query?: any, EcoleId?: string): Promise<number>;

    abstract findByAttribute(attribute: string, value: any,EcoleId?:string): Promise<T | null>;

    abstract findAllByAttribute(attribute: string, value: any,EcoleId?:string): Promise<T[] | null>;

    abstract findAllByAttributeWithFilter(query: any,page:number,limit:number): Promise<T[] | null>;

    abstract create(item: T,EcoleId?:string): Promise<T>;

    abstract update(id: string, item: Partial<T>,associationId?:string): Promise<T | null>;

    abstract delete(id: string,EcoleId?:string): Promise<boolean>;

    abstract aggregate(pipeline: object[]): Promise<T[]>;

}