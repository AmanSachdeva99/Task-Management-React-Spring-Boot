package com.example.tasks.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.tasks.Dao.TaskDao;
import com.example.tasks.Entity.Task;

@Service
public class TaskServiceImpl implements TaskService{

	@Autowired
	TaskDao td;
	
	@Override
	public List<Task> getAll() {
		// TODO Auto-generated method stub
		return td.findAll();
	}

	@Override
	public void addAll(Task t) {
		// TODO Auto-generated method stub
		td.save(t);
		
	}

	@Override
	public Task getById(int id) {
		// TODO Auto-generated method stub
		return td.findById(id);
	}

	@Override
	public String updateById(int id,Task t) {
		List<Task> li=new ArrayList<>();
		li=td.findAll();
		for(Task ti:li) {
			if(ti.getId()==id) {
				td.delete(ti);
				td.save(t);
			}
		}
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String delteById(int id) {
		// TODO Auto-generated method stub
		List<Task> li=new ArrayList<>();
		li=td.findAll();
		for(Task t:li) {
			if(t.getId()==id) {
				td.delete(t);
			}
		}
		return null;
	}

}
