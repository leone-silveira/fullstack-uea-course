export interface ITodo{
    title?: string,
    isCompleted?: boolean,
    isDeleted?: boolean
}

export interface ITask {
    id: string;
    title: string;
    isCompleted: boolean;
    isDeleted: boolean;
    createdAt: Date;
  }

  export enum IFilter {
    Todos = "Todos",
    Completados = "Completados",
    Ativos = "Ativos",
  }