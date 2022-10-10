package com.example.tasks.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.tasks.Entity.Task;
import com.example.tasks.Service.TaskService;

@RestController

@CrossOrigin("*")
@RequestMapping
public class TaskController {

	@Autowired
	TaskService ts;
	
	@GetMapping("/getAll")
	public List<Task> getAll(){
		return ts.getAll();
	}
	
	@GetMapping("/getById/{id}")
	public Task ById(@PathVariable int id){
		return ts.getById(id);
		
	}
	
	@PostMapping("/add")
	public ResponseEntity<HttpStatus> add(@RequestBody Task t) {
		ts.addAll(t);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@PutMapping("/edit/{id}")
	public void edit(@PathVariable int id,@RequestBody Task t) {
		ts.updateById(id, t);
	}
	
	@DeleteMapping("/delete/{id}")
	public void remove(@PathVariable int id) {
		ts.delteById(id);
	}
}
