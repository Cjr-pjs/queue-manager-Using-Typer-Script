import { QueueService } from "./services/QueueService";
import { TaskStatus } from "./models/TaskStatus";
import { Logger } from "./utils/Logger";

Logger.info("Aplicação iniciada");

const queue = new QueueService();

queue.add({
  id: "task-1",
  payload: "Enviar email",
  status: TaskStatus.PENDING,
});

queue.add({
  id: "task-2",
  payload: "Gerar relatório",
  status: TaskStatus.PENDING,
});

queue.processNext();
queue.processNext();
queue.processNext();
