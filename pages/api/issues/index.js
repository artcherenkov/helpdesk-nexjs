import {PrismaClient} from '@prisma/client';

export default async function (req, res) {
  let { error, content } = await getIssues();

  if (error) {
    res.status(500);
    res.json({error: `Sorry, unable to save content to database suuuukaaa: ${error}`});
    return;
  }

  res.json({content});
}

export const getIssues = async () => {
  const prisma = new PrismaClient();
  let content, error = null;

  try {
    content = await prisma.issues.findMany();
  } catch (e) {
    error = e;
  } finally {
    prisma.disconnect();
  }

  return {error, content};
}
