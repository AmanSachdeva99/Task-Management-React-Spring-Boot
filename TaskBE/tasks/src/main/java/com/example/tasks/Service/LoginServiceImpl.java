package com.example.tasks.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.tasks.Dao.LoginDao;
import com.example.tasks.Entity.Login;

@Service
public class LoginServiceImpl implements LoginService {
	@Autowired
	LoginDao ld;

	@Override
	public boolean authenticate(Login l) {
		// TODO Auto-generated method stub
		Login nl=ld.findByUsernameAndPassword(l.getUsername(), l.getPassword());
		if(nl==null) {
			return false;
		}
		return true;
	}

	@Override
	public void addUserIntoDb(Login l) {
		// TODO Auto-generated method stub
		ld.save(l);
		
	}

}
