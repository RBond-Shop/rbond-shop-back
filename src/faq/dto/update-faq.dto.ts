import { IsString } from 'class-validator'

export class UpdateFaqDto {
  @IsString() readonly question: string

  @IsString() readonly answer: string
}
