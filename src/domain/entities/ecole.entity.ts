import { Base } from './base.entity';

export class Ecole extends Base {
    name: string;
    admin: any;
    logo: string;
    year:Date;
    city:string;
    region:string;
    country:string;
    maxUsers:number;
    description?:string
}

