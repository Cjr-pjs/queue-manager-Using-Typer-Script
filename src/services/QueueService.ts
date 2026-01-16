import { Task } from "../models/Task";
import { TaskStatus } from "../models/TaskStatus";
import { Logger } from "../utils/Logger";

export class QueueService {
  private queue: Task[] = [];

  add(task: Task) {
    this.queue.push(task);
    Logger.info(`Task ${task.id} adicionada à fila`);
  }

  processNext() {
    const task = this.queue.shift();

    if (!task) {
      Logger.warn("Nenhuma task na fila");
      return;
    }

    try {
      Logger.info(`Processando task ${task.id}`);
      task.status = TaskStatus.DONE;
      Logger.info(`Task ${task.id} finalizada`);
    } catch {
      task.status = TaskStatus.FAILED;
      Logger.error(`Task ${task.id} falhou`);
    }
  }

  list() {
    return this.queue;
  }
}
