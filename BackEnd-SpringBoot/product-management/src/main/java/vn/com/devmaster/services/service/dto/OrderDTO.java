package vn.com.devmaster.services.service.dto;

import lombok.Data;
import lombok.ToString;
import vn.com.devmaster.services.domain.OrderProduct;
import vn.com.devmaster.services.domain.Voucher;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import java.util.List;

@Data
public class OrderDTO {
    private Long id;
    private UserDTO user;
    private List<OrderProductDTO> orderProducts;
    private VoucherDTO voucher;
    private String status;
}
