package com.study.todolist.repository;

import com.study.todolist.entity.Todo;
import org.apache.ibatis.annotations.Mapper;

@Mapper     // 5.
public interface TodoMapper {
    int save(Todo todo);
}
