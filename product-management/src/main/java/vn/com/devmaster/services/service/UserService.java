package vn.com.devmaster.services.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import vn.com.devmaster.services.domain.User;
import vn.com.devmaster.services.repository.UserRepository;
import vn.com.devmaster.services.service.dto.UserDTO;
import vn.com.devmaster.services.service.mapper.UserMapper;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final UserMapper userMapper;

    public UserDTO login(String userName, String password){
        List<User> users = userRepository.findAll();
        for (User user:users){
            if (user.getUserName().equals(userName)&&user.getPassword().equals(password)){
                return userMapper.toDTO(user);
            }
        }
        return null;
    }
    public List<UserDTO> findAllUser(){
        return userMapper.toDTO(userRepository.findAll());
    }

    public void createUser(UserDTO userDTO){
        userRepository.save(userMapper.toEntity(userDTO));
    }

    public void deleteUserById(Long id){
        userRepository.deleteById(id);
    }
}
