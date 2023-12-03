import {
  FastifyInstance,
  FastifyPluginAsync,
  FastifyRequest,
  FastifyReply,
  FastifyPluginOptions,
} from "fastify";
import { CreateCustomerController } from "./controllers/CreateCustomerController";
import { DeleteCustomerController } from "./controllers/DeleteCustomerController";
import { ListCustomerController } from "./controllers/ListCustomerController";
import { FindCustomerUniqueController } from "./controllers/FindCustomerUniqueController";
import { UpdateCustomerController } from "./controllers/UpdateCustomerController";

export async function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions,
) {
  fastify.get(
    "/customer/:id",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new FindCustomerUniqueController().handle(request, reply);
    },
  );
  fastify.post(
    "/customer",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreateCustomerController().handle(request, reply);
    },
  );

  // app.put('/publish/:id', async (req, res) => {
  //   const { id } = req.params;
  //   const post = await prisma.post.update({
  //     where: { id },
  //     data: { published: true },
  //   });
  //   res.json(post);
  // });

  fastify.put(
    "/customer",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new UpdateCustomerController().handle(request, reply);
    },
  );
  // fastify.put(
  // 	'/customer/:id',
  // 	async (request: FastifyRequest, reply: FastifyReply) => {
  // 		return new UpdateCustomerController().handle(request, reply);
  // 	}
  // );
  fastify.get(
    "/customers",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new ListCustomerController().handle(request, reply);
    },
  );

  fastify.delete(
    "/customer",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new DeleteCustomerController().handle(request, reply);
    },
  );
}
