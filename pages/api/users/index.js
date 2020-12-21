import {PrismaClient} from '@prisma/client';

export default async function (req, res) {
  const prisma = new PrismaClient({ log: ["query"] });

  try {
    const content = await prisma.users.findMany();
    res.json({content});
  } catch (e) {
    res.status(500);
    res.json({error: `Sorry, unable to save content to database: ${e}`});
  } finally {
    await prisma.disconnect();
  }
}
