import { FastifyRequest, FastifyReply } from "fastify";
import { UpdateCustomerService } from "../services/UpdateCustomerService";

class UpdateCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id, nome, email, password } = request.body as {
      id: string;
      nome: string;
      email: string;
      password: string;
    };
    const customerService = new UpdateCustomerService();
    const customer = await customerService.execute({
      id,
      nome,
      email,
      password,
    });
    reply.send(customer);
  }
}
export { UpdateCustomerController };
