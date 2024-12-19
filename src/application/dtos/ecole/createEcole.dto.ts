import { ApiProperty } from '@nestjs/swagger';
import {  IsOptional, IsString } from 'class-validator';

export class CreateEcoleDto {
    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsString()
    year: string;

    @ApiProperty()
    @IsString()
    city: string;

    @ApiProperty()
    @IsString()
    region: string;

    @ApiProperty()
    @IsString()
    country: string;


    @ApiProperty()
    @IsString()
    admin: string;


    @ApiProperty()
    @IsOptional()
    @IsString()
    logo?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    description?: string;
}