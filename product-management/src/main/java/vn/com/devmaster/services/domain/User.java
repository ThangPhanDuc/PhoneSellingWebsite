package vn.com.devmaster.services.domain;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Table(name = "user")
@Entity
@Data
public class User {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_name")
    private String userName;

    @Column(name = "password")
    private String password;

    @Column(name = "role")
    private String role;
    @Column(name = "full_name")
    private String fullName;
    @Column(name = "age")
    private String age;
    @Column(name = "phone")
    private String phone;
    @Column(name = "address")
    private String address;

//    @OneToMany(mappedBy = "user",cascade = CascadeType.ALL)
//    private List<Order> orders;

}
