package com.todo.todoapp.controller;

import com.todo.todoapp.model.Todo;
import com.todo.todoapp.service.TodoService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/todos")
@CrossOrigin
public class TodoController {

    private final TodoService service;

    public TodoController(TodoService service){
        this.service = service;
    }

    // CREATE TODO
    @PostMapping
    public Todo create(@Valid @RequestBody Todo todo){
        return service.create(todo);
    }

    // GET ALL / FILTER
    @GetMapping
    public List<Todo> getAll(
            @RequestParam(required = false) Boolean completed){
        return service.getAll(completed);
    }

    // UPDATE TODO
    @PutMapping("/{id}")
    public Todo update(@PathVariable Long id,
                       @RequestBody Todo todo){
        return service.update(id, todo);
    }

    // DELETE TODO
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
        service.delete(id);
    }
}

