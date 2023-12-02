import prismaclient from "../prisma";
import { FastifyRequest, FastifyReply } from "fastify";
import { UpdateCustomerService } from "../services/UpdateCustomerService";

class UpdateCustomerController {
	async handle(request: FastifyRequest, reply: FastifyReply) {
		const updateCustomerService = new UpdateCustomerService();
		const { id } = request.query as { id: string };
		const { nome, email, password } = request.body as {
			nome: string;
			email: string;
			password: string;
		};
		const findCustomer = await prismaclient.customer.findFirst({
			where: {
				id: id,
			},
		});

		if (!findCustomer) {
			throw new Error("Cliente não encontrado");
		} else {
			console.log("O id enviado é:", id);
		}

		// await prismaclient.customer.update({ where: { id: id } });
	}
}
export { UpdateCustomerController };
