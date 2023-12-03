import prismaclient from "../prisma";

interface CreateCustomerProps {
  nome: string;
  email: string;
  password: string;
}

class CreateCustomerService {
  async execute({ nome, email, password }: CreateCustomerProps) {
    if (!nome || !email || !password) {
      throw new Error("Nome,Email e Senha são obrigatórios");
    }

    const customer = await prismaclient.customer.create({
      data: {
        nome,
        email,
        password,
      },
    });
    return customer;
  }
}
export { CreateCustomerService };
