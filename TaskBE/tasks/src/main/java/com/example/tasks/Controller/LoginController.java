package com.example.tasks.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.tasks.Entity.Login;
import com.example.tasks.Service.LoginService;

@RestController

@CrossOrigin("*")
@RequestMapping
public class LoginController {

	@Autowired
	LoginService ls;
	
	@PostMapping("/check")
	public boolean check(@RequestBody Login lg) {
		return ls.authenticate(lg);
	}
	
	@PostMapping("addUser")
	public void addUser(@RequestBody Login lg) {
		ls.addUserIntoDb(lg);
	}
	
}
