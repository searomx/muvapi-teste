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

		// const customer = await prismaclient.customer.update({
		// 	where: { id: id },
		//     data: {
		//         nome: nome,
		//         email: email,
		//         password: password,
		//     },
		// });
		// return customer;
	}
}
export { UpdateCustomerService };
