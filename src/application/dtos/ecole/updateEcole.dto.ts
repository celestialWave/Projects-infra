import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateEcoleDto {
    @ApiProperty()
    @IsOptional()
    @IsString()
    name: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    year: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    city: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    region: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    country: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    logo: string;



    @ApiProperty()
    @IsOptional()
    @IsString()
    description: string;

}
