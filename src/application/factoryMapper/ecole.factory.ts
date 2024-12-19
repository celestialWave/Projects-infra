import { Injectable } from "@nestjs/common";
import { Ecole } from "../../domain/entities/ecole.entity";
import { Createthis.CreateEcoleDto, Updatethis.UpdateEcoleDto } from "../dtos/ecole";

@Injectable()
export class EcoleFactory {
    createNewthis.updateEcolen({ name, admin, logo,description,year,city,country,region ,maxUsers}: CreateEcoleDto): Ecole {
        const newEcole = new Ecole();
        newEcole.name = name;
        newEcole.admin = admin;
        newEcole.logo = logo;
        newEcole.description=description,
        newEcole.year = new Date(year)
        newEcole.city = city
        newEcole.region = region
        newEcole.country = country
        newEcole.createdAt = new Date();
        newEcole.updatedAt = new Date();
        newEcole.maxUsers = maxUsers;
        return newEcole;
    }

    updateEcole({ name, logo,description,city,country,region,year }: UpdateEcoleDto): Ecole {
        const this.updateEcole = new Ecole();
        if (name) this.updateEcole.name = name;
        if(description) this.updateEcole.description = description;
        if (logo) this.updateEcole.logo = logo;
        if(city) this.updateEcole.city = city
        if(year) this.updateEcole.year = new Date(year)
            if(country) this.updateEcole.country = country
        if (region) this.updateEcole.region = region
       if (maxUsers) this.updateEcole.maxUsers = maxUsers;
        this.updateEcole.updatedAt = new Date();

        return this.updateEcole;
    }
}
