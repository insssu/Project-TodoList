import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import Search from '../../components/Dashboard/Search/Search';
import DateTitle from '../../components/Dashboard/DateTitle/DateTitle';
import MenuList from '../../components/Dashboard/MenuList/MenuList';
import RegisterTodoButton from '../../components/RegisterTodoButton/RegisterTodoButton';
import MainContainer from '../../components/MainContainer/MainContainer';
import { Route, Routes } from 'react-router-dom';
import TodoAll from '../TodoAll/TodoAll';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { refreshTodolistAtom, todolistAtom } from '../../atoms/todolistAtoms';
import { getTodoAllApi, getTodoCountsApi } from '../../apis/todoApis/getTodoApi';


function Dashboard(props) {
    const setTodolistAll = useSetRecoilState(todolistAtom);
    const [ refresh, setRefresh ] = useState(refreshTodolistAtom);

    const requestTodolist = async () => {
        const todolist = await getTodoAllApi();
        const counts = await getTodoCountsApi();
        setTodolistAll({
            todolist: todolist?.data,   // '?'는 참조할 수 없는 null이면 참조하지마 ! 하는 것임. null safe라고 부름. 객체 참조 앞에서 붙이는 것.
            counts: counts?.data
        });
    }

    // 리스트를 가져오려면 아래 useEffect 실행
    // 처음 실행되면 정보들을 다 가져옴 (true) , if문에서 refresh가 true이므로 구문안의 requestTodolist를 실행 ,
    // setRefresh가 false로 변경 , true에서 false로 상태가 변경 되었으므로 한번 더 useEffect가 실행 , 
    // 이때는 refresh가 false이므로 if 구문을 실행하지 않고 바로 setRefresh(false) 실행, 이제는 상태가 바뀌는게 없기 때문에 종료되는 과정
    useEffect(() => {
        if(refresh) {
            requestTodolist();  // 처음 한번 들고오지만 계속 업데이트 되지는 않음. 따라서 그 상태를 전역에다 만들어야 함 -> todolistAtoms
        }
        setRefresh(false);
    }, [refresh]); 

    return (
            <MainContainer>
                <div css={s.layout}>
                    <header>
                        <Search />
                    </header>
                    <main>  
                        <DateTitle />
                        <MenuList />
                    </main>
                    <footer>
                        <RegisterTodoButton />
                    </footer>
                </div>
                <Routes>
                    <Route path="/all" element={<TodoAll />} />
                </Routes>
            </MainContainer>
    );
}

export default Dashboard;