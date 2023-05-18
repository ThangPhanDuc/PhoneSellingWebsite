package vn.com.devmaster.services.service.mapper;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import vn.com.devmaster.services.domain.User;
import vn.com.devmaster.services.service.dto.UserDTO;

import java.util.ArrayList;
import java.util.List;
@Component
@RequiredArgsConstructor
public class UserMapper implements EntityMapper<UserDTO, User>{
//    private final OrderMapper orderMapper;
    @Override
    public User toEntity(UserDTO dto) {
        User user = new User();
        user.setId(dto.getId());
        user.setUserName(dto.getUserName());
        user.setRole(dto.getRole());
        user.setFullName(dto.getFullName());
        user.setAge(dto.getAge());
        user.setPhone(dto.getPhone());
        user.setAddress(dto.getAddress());
//        user.setOrders(orderMapper.toDTO(dto.getOrders()) );
        return user;
    }

    @Override
    public UserDTO toDTO(User entity) {
        UserDTO userDTO = new UserDTO();
        userDTO.setId(entity.getId());
        userDTO.setUserName(entity.getUserName());
        userDTO.setRole(entity.getRole());
        userDTO.setFullName(entity.getFullName());
        userDTO.setAge(entity.getAge());
        userDTO.setPhone(entity.getPhone());
        userDTO.setAddress(entity.getAddress());
//        userDTO.setOrders(orderMapper.toDTO(entity.getOrders()) );
        return userDTO;
    }

    @Override
    public List<User> toEntity(List<UserDTO> dto) {
        List<User> users = new ArrayList<>();
        dto.forEach(userDTO -> {
            User user = toEntity(userDTO);
            users.add(user);
        });
        return users;
    }

    @Override
    public List<UserDTO> toDTO(List<User> entity) {
        List<UserDTO> userDTOS = new ArrayList<>();
        entity.forEach(user -> {
            UserDTO userDTO = toDTO(user);
            userDTOS.add(userDTO);
        });
        return userDTOS;
    }
}
