import prismaClient from "../prisma";

class FindCustomerUniqueService {
  async execute(id: string) {
    console.log("O id enviado é:", id);
    const customer = await prismaClient.customer.findUnique({
      where: {
        id: id,
      },
    });
    return customer;
  }
}
export { FindCustomerUniqueService };
