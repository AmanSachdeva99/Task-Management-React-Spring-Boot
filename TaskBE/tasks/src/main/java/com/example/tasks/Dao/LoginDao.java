package com.example.tasks.Dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.tasks.Entity.Login;

public interface LoginDao extends JpaRepository<Login, Long>{

	Login findByUsernameAndPassword(String username,String password);
	
}
