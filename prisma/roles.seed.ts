import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const seedRoles = async () => {
  await prisma.role.createMany({
    data: [
      {
        name: 'OWNER',
      },
    ],
  });
};

async function main() {
  await seedRoles();
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
