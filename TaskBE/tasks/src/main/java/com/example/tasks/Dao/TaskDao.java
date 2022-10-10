package com.example.tasks.Dao;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.tasks.Entity.Task;


public interface TaskDao extends JpaRepository<Task, Long> {

	public Task findById(int id);
}
