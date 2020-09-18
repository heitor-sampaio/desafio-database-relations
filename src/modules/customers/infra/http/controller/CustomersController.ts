import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateCustomerService from '@modules/customers/services/CreateCustomerService';

import AppError from '@shared/errors/AppError';

export default class CustomersController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const createCustomer = container.resolve(CreateCustomerService);

      const { name, email } = request.body;

      const customer = await createCustomer.execute({ name, email });

      return response.json(customer);
    } catch (err) {
      throw new AppError(err.message);
    }
  }
}
