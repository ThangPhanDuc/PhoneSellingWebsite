package vn.com.devmaster.services.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Table(name = "product")
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Product {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "name")
    private String name;
    @Column(name = "img")
    private String img;
    @Column(name = "price")
    private Long price;
    @Column(name = "oldPrice")
    private Long oldPrice;
    @Column(name = "cpu")
    private String cpu;
    @Column(name = "screen")
    private String screen;
    @Column(name = "ram")
    private String ram;
    @Column(name = "memory")
    private String memory;
    @Column(name = "classify")
    private String classify;

    @OneToMany(mappedBy = "product",cascade = CascadeType.ALL)
    private List<OrderProduct> orderProducts;

}
