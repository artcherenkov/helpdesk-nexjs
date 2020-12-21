import {PrismaClient} from '@prisma/client';

export default async function (req, res) {
  const prisma = new PrismaClient({ log: ["query"] });

  try {
    const {content: contentData} = JSON.parse(req.body);
    if (contentData.name.length === 0) {
      throw new Error(`Can't add empty string.`);
    }
    await prisma.users.create({
      data: {
        name: contentData.name,
        surname: contentData.surname,
        email: contentData.email,
        password: contentData.password,
      }
    });

    const _content = await prisma.users.findMany();
    res.status(201);
    res.json(_content);
  } catch (e) {
    res.status(500);
    res.json({error: `Sorry, unable to save content to database: ${e}`});
  } finally {
    await prisma.disconnect();
  }
}
