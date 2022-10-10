package com.example.tasks.Service;

import com.example.tasks.Entity.Login;

public interface LoginService {

	public boolean authenticate(Login l);
	public void addUserIntoDb(Login l);
}
