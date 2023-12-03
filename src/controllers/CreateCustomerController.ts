import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerService } from "../services/CreateCustomerService";

class CreateCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { nome, email, password } = request.body as {
      nome: string;
      email: string;
      password: string;
    };
    const customerService = new CreateCustomerService();
    const customer = await customerService.execute({ nome, email, password });
    reply.send(customer);
  }
}
export { CreateCustomerController };
