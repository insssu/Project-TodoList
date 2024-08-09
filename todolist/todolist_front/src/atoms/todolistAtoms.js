import { atom } from "recoil";
import { getTodoAllApi } from "../apis/todoApis/getTodoApi";

// 객체 안에 배열과 객체를 다시 만드는 과정의 기준?
// const와 let
export const todolistAtom = atom({
    key: "todolistState",
    default: {
        todolist: [],
        counts: {
            all: 0,
            today: 0,
            important: 0,
            busy: 0,
            complete: 0
        },
        requestTodolist: async () => {
            const response = getTodoAllApi();

        }
    }
});

export const refreshTodolistAtom = atom({
    key: "refreshTodolistState",
    default: true       // 작업할 땐 true로 두고 수정, 삭제, 완료 등 상태가 변할 때 작동해야 하므로 작업이 완료되면 false로 변경
})