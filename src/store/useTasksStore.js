import { create } from "zustand";
import axios from "axios";


const tasksStore = (set) => ({
    tasks: [],
    loading: false,
    error: null,
    fetchTasks: async () => {
        set((state) => ({
            ...state, loading: true
        }))
        try {
            const res = await axios.get(`http://localhost:3000/tasks`)
            const data = res.data;
            set((state) => ({
                ...state,
                loading: false,
                tasks: data,
                error: null
            }))
        } catch (error) {
            set((state) => ({
                ...state,
                loading: false,
                tasks: [],
                error: error.message
            }))
        }
    },
    createTask: async (newTask) => {
        set((state) => ({
            ...state,
            loading: true
        }));
        try {
            const response = await axios.post("http://localhost:3000/tasks", newTask);
            set((state) => ({
                ...state,
                loading: false,
                tasks: [...state.tasks, response.data],
            }));
        } catch (error) {
            set((state) => ({
                ...state,
                loading: false,
                error: error.message
            }));
        }
    }
});

export const useTasksStore = create(tasksStore)