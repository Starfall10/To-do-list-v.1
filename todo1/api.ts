import { ITask } from "./types/tasks";

const baseUrl = 'http://127.0.0.1:8090/api/collections/tasks/records';
// const baseUrl = 'https://todo1-snowy-field-3359.fly.dev/';


export const getAllTodos = async (): Promise<ITask[]> => {
    const response = await fetch(`${baseUrl}?cache=no-cache`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}, message: ${response.statusText}`);
    }
    const todos = await response.json();
    return todos.items.map((item: ITask) => ({
        id: item.id,
        Task: item.Task, // Map database field
    }));
};


export const addTodo = async (todo: ITask): Promise<ITask> => {
    const res = await fetch(`${baseUrl}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({  Task: todo.Task }), // Send the correct field name
    });

    if (!res.ok) {
        throw new Error(`Failed to add todo: ${res.status} ${res.statusText}`);
    }

    const newTodo = await res.json();
    return newTodo;
};


export const editTodo = async (todo: ITask): Promise<ITask> => {
    const res = await fetch(`${baseUrl}/${todo.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo),
    });

    if (!res.ok) {
        throw new Error(`Failed to edit todo: ${res.status} ${res.statusText}`);
    }

    const updatedTodo = await res.json();
    return updatedTodo;
};


export const deleteTodo = async (id: string): Promise<void> => {
    await fetch(`${baseUrl}/${id}`, {
        method: 'DELETE',
    });

}