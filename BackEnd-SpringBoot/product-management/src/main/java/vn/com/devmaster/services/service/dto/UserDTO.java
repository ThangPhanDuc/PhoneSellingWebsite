package vn.com.devmaster.services.service.dto;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.List;

@Data
public class UserDTO {
    private Long id;
    private String userName;
    private String role;
    private String fullName;
    private String age;
    private String phone;
    private String address;

//    List<OrderDTO> orders;
}
