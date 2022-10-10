package com.example.tasks.Service;

import java.util.List;

import com.example.tasks.Entity.Task;

public interface TaskService {

	public List<Task> getAll();
	public void addAll(Task t);
	public Task getById(int id);
	public String updateById(int id,Task t);
	public String delteById(int id);
	
}
