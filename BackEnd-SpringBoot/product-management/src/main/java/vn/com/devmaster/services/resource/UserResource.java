package vn.com.devmaster.services.resource;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import vn.com.devmaster.services.service.UserService;
import vn.com.devmaster.services.service.dto.UserDTO;

import java.util.List;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserResource {

    private final UserService userService;

    @GetMapping("/login")
    UserDTO login(@RequestParam("userName") String userName, @RequestParam("password") String password){
        return userService.login(userName,password);
    }

    @GetMapping("")
    List<UserDTO> findAllUser(){
        return userService.findAllUser();
    }

    @PostMapping("")
    void createUser(@RequestBody UserDTO userDTO){
        userService.createUser(userDTO);
    }

    @DeleteMapping("/{id}")
    void deleteUserById(@PathVariable(name = "id") Long id){
        userService.deleteUserById(id);
    }
}
