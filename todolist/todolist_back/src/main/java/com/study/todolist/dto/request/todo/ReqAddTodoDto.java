package com.study.todolist.dto.request.todo;

import com.study.todolist.entity.Todo;
import lombok.Data;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Data   // 2. 요청 때 데이터와 동일한 키값으로 받아와야 한다.
public class ReqAddTodoDto {
    private String title;
    private String content;
    private String dateTime;
    private int important;
    private int busy;

    public Todo toEntity() {    // 7.
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss");
        LocalDateTime todoDateTime = LocalDateTime.parse(dateTime + ":00", formatter);

        return Todo.builder()
                .title(title)
                .content(content)
                .important(important)
                .busy(busy)
                .todoDateTime(todoDateTime)
                .build();
    }
}
