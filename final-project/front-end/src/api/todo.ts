import axios from "axios";
import { ITask, ITodo } from "../models/Todo";

const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL

export const getTodos = async () => {
    const response = await axios.get(`${VITE_BACKEND_URL}`)
    return response.data    
}

export const createTodo = async (data: ITodo): Promise<ITask[]> => {
    const response = await axios.post(`${VITE_BACKEND_URL}`, data)
    return response.data    
}

export const deleteTodo = async (id: string): Promise<ITask> => {
    const response = await axios.delete(`${VITE_BACKEND_URL}/${id}`)
    return response.data    
}

export const isCompleteTodo = async (id: string): Promise<ITask> => {
    const response = await axios.patch(`${VITE_BACKEND_URL}/${id}`)
    return response.data    
}



