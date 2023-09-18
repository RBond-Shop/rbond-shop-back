import { IsEmail, IsPhoneNumber, IsString } from 'class-validator'

export class CreateContactDto {
  @IsString() readonly instagram: string

  @IsString() readonly facebook: string

  @IsString() readonly telegram: string

  @IsPhoneNumber() readonly phoneNumber: string

  @IsEmail() readonly email: string
}
