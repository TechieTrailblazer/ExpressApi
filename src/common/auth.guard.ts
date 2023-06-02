import { NextFunction, Request, Response } from 'express';
import { HttpError } from '../common/errors/http-error.class';
import { IMiddleware } from './middleware.interface';

export class AuthGuard implements IMiddleware {
	execute(req: Request, res: Response, next: NextFunction): void {
		if (req.user) {
			next(); // Проверяем, что в запросе есть пользователь, если есть, то пропускаем дальше
		} else {
			next(new HttpError(401, 'Пользователь не авторизован'));
		}
	}
}
