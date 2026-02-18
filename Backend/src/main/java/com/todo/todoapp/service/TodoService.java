
package com.todo.todoapp.service;

import com.todo.todoapp.model.Todo;
import com.todo.todoapp.repository.TodoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoService {

    private final TodoRepository repo;

    public TodoService(TodoRepository repo){
        this.repo = repo;
    }

    // CREATE
    public Todo create(Todo todo){
        return repo.save(todo);
    }

    // GET ALL (with optional filter)
    public List<Todo> getAll(Boolean completed){
        if(completed == null)
            return repo.findAll();
        return repo.findByCompleted(completed);
    }

    // UPDATE
    public Todo update(Long id, Todo updated){
        Todo todo = repo.findById(id)
                .orElseThrow(() -> new RuntimeException("Todo not found"));

        todo.setTitle(updated.getTitle());
        todo.setDescription(updated.getDescription());
        todo.setCompleted(updated.isCompleted());

        return repo.save(todo);
    }

    // DELETE
    public void delete(Long id){
        repo.deleteById(id);
    }
}
