import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UserRegisterDto {
	@IsEmail({}, { message: 'Некорректный email' })
	email: string;

	@IsString({ message: 'Не указан пароль' })
	password: string;

	@IsNotEmpty({ message: 'Не указано имя' })
	name: string;
}
