import {PrismaClient} from '@prisma/client';

export default async function (req, res) {
  const prisma = new PrismaClient({ log: ["query"] });

  console.log(prisma);

  try {
    const content = await prisma.issues.findMany();
    res.json({content});
  } catch (e) {
    res.status(500);
    res.json({error: `Sorry, unable to save content to database suuuukaaa: ${e}`});
  } finally {
    await prisma.disconnect();
  }
}
