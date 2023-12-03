import prismaclient from "../prisma";

interface DeleteCustomerProps {
  id: string;
}

class DeleteCustomerService {
  async execute({ id }: DeleteCustomerProps) {
    if (!id) {
      throw new Error("id é obrigatório");
    }

    const findCustomer = await prismaclient.customer.findFirst({
      where: {
        id: id,
      },
    });

    if (!findCustomer) {
      throw new Error("Cliente não encontrado");
    }
    await prismaclient.customer.delete({ where: { id: id } });
    return { message: `Cliente ${findCustomer.nome} deletado com sucesso` };
  }
}
export { DeleteCustomerService };
