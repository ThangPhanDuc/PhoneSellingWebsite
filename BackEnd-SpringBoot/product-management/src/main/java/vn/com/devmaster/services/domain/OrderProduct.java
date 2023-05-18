package vn.com.devmaster.services.domain;

import lombok.Data;
import lombok.ToString;

import javax.persistence.*;

@Table(name = "order_product")
@Entity
@Data
public class OrderProduct {
    @EmbeddedId
    private OrderProductId id;

    @Column(name = "quantity")
    private Long quantity;

    @ManyToOne(cascade = CascadeType.ALL)
    @MapsId("order_id")
    @JoinColumn(name = "order_id")
    @ToString.Exclude
    private Order order;

    @ManyToOne(cascade = CascadeType.ALL)
    @MapsId("product_id")
    @JoinColumn(name = "product_id")
    @ToString.Exclude
    private Product product;


}
