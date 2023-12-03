import { isDataView } from "util/types";
import prismaclient from "../prisma";

interface UpdateCustomerProps {
  id: string;
  nome: string;
  email: string;
  password: string;
}

class UpdateCustomerService {
  async execute({ id, nome, email, password }: UpdateCustomerProps) {
    if (!nome || !email || !password) {
      throw new Error("Nome,Email e Senha são obrigatórios");
    }

    const customer = await prismaclient.customer.update({
      where: {
        id: id,
      },
      data: {
        nome,
        email,
        password,
      },
    });
    return customer;
  }
}
export { UpdateCustomerService };
