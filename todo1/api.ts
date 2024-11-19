import { ITask } from "./types/tasks";

const baseUrl = 'http://127.0.0.1:8090/api/collections/tasks/records';
// const baseUrl = 'https://todo1-snowy-field-3359.fly.dev/';


// export const getAllTodos = async (): Promise<ITask[]> => {
//     const response = await fetch(`${baseUrl}/tasks`, {cache: 'no-cache'});
//     const todos = await response.json();
//     console.log('todos', todos);
//     return todos;
// }

export const getAllTodos = async (): Promise<ITask[]> => {
    const response = await fetch(`${baseUrl}?cache=no-cache`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}, message: ${response.statusText}`);
    }
    const todos = await response.json();
    console.log('Fetched todos:', todos);
    return todos.items; // Adjust based on PocketBase's response structure
};



export const addTodo = async (todo: ITask): Promise<ITask> => {
    const res = await fetch(`${baseUrl}/$`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo),
    });
    const newTodo = await res.json();
    return newTodo;
}

export const editTodo = async (todo: ITask): Promise<ITask> => {
    const res = await fetch(`${baseUrl}${todo.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo),
    });
    const updatedTodo = await res.json();
    return updatedTodo;
}

export const deleteTodo = async (id: string): Promise<void> => {
    await fetch(`${baseUrl}/${id}`, {
        method: 'DELETE',
    });

}