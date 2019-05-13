import { IsString, IsInt } from "class-validator";

export class CreateItemDto {
  @IsString()  readonly name: string;
  @IsString()  readonly description: string;
  @IsInt()  readonly qty: number;
  @IsInt()  readonly price: number;
  }