package com.study.todolist.service;

import com.study.todolist.dto.request.todo.ReqAddTodoDto;
import com.study.todolist.dto.response.todo.RespTodoCountsDto;
import com.study.todolist.dto.response.todo.RespTodoDto;
import com.study.todolist.entity.Todo;
import com.study.todolist.repository.TodoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service        // 5.
public class TodoService {

    @Autowired
    private TodoMapper todoMapper;

    public int addTodo(ReqAddTodoDto dto) {

        return todoMapper.save(dto.toEntity());
    }

    public List<RespTodoDto> getTodoList() {
        List<Todo> todoList = todoMapper.findAll();     // 데이터베이스에서 가져온 모든 리스트(의 형태는 entity)
        List<RespTodoDto> dtoList = new ArrayList<>();  // 비어있는 리스트(entity를 dto로 변환시켜 줘야 controller에서 사용하겠지?)
        for(Todo todo : todoList) {                     // Todo를 꺼내는데 어디서? todoList 에서
            dtoList.add(todo.toTodoDto());
        }
        return dtoList;
    }

    public RespTodoCountsDto getTodoCounts() {
        return todoMapper.getTodoCounts().toDto();
    }
}
