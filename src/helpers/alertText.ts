import { toast } from "react-toastify";

export const alert = (text: alertText | string, type: toastType ) => {
    new Promise<void>((res) => {
        const value = text
        toast[type](value, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        res();
    })
}

export enum alertText {
    emptyCategory = "Введите название категории!",
    addCategory = "Категория успешно создана!",
    emptyTask = "Введите название задачи!",
    addTask = "Задача успешно создана!",
    removeTask = "Задача удалена!",
    removeCategory = "Категория удалена!"
}

type toastType = "success" | "error" | "info"