import { FastifyReply, FastifyRequest } from "fastify";
import { FindCustomerUniqueService } from "../services/FindCustomerUniqueService";

class FindCustomerUniqueController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const listCustomerUniqueService = new FindCustomerUniqueService();
    const { id } = request.query as { id: string };
    const customers = await listCustomerUniqueService.execute(id);
    reply.send(customers);
  }
}
export { FindCustomerUniqueController };
