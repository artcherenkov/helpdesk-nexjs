import {PrismaClient} from '@prisma/client';
import {generateIssue} from '../../../mock/issue';

export default async function (req, res) {
  const prisma = new PrismaClient({ log: ["query"] });

  try {
    const {content: contentData} = JSON.parse(req.body);
    console.log(contentData);

    await prisma.issues.create({
      data: {
        topic: contentData.topic,
        client: contentData.client,
        type: contentData.type,
        product: contentData.product,
        department: contentData.department,
        responsible: contentData.responsible,
        status: contentData.status,
        dueDate: contentData.dueDate,
        actualDueDate: contentData.actualDueDate,
        lastAnswer: contentData.lastAnswer,
        priority: contentData.priority,
        isExpired: contentData.isExpired,
        description: contentData.description
      }
    });

    const _content = await prisma.issues.findMany();
    res.status(201);
    res.json(_content);
  } catch (e) {
    res.status(500);
    res.json({error: `Sorry, unable to save content to database: ${e}`});
  } finally {
    await prisma.disconnect();
  }
}
