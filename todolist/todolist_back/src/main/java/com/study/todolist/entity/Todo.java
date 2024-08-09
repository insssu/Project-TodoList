package com.study.todolist.entity;

import com.study.todolist.dto.response.todo.RespTodoDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Builder                // builder가 있으면 AllArgsConstructor가 무조건 따라오게 되는데 이때, NoArgsConstructor를 사용할 수 없게된다. 따라서 둘 다 명시해줘야 함
@NoArgsConstructor      // todo 를 new Todo() 로 만들어 NoArgsConstructor를 만들어준 뒤에
@AllArgsConstructor     // NoArgsConstructor, AllArgsConstructor 달아야 하는 이유는 mybatis때문
@Data
public class Todo {
    private int todoId;
    private int userId;
    private String title;
    private String content;
    private int important;
    private int busy;
    private int status;
    private LocalDateTime todoDateTime;

    public RespTodoDto toTodoDto() {
        return RespTodoDto.builder()
                .todoId(todoId)
                .userId(userId)
                .title(title)
                .content(content)
                .important(important)
                .busy(busy)
                .status(status)
                .todoDateTime(todoDateTime.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm"))) // 자료형을 바꿔주는 과정
                .build();
    }
}
