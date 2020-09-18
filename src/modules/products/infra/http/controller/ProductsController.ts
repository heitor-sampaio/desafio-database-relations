import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateProductService from '@modules/products/services/CreateProductService';

import AppError from '@shared/errors/AppError';

export default class ProductsController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const createCustomer = container.resolve(CreateProductService);

      const { name, price, quantity } = request.body;

      const product = await createCustomer.execute({ name, price, quantity });

      return response.json(product);
    } catch (err) {
      throw new AppError(err.message);
    }
  }
}
