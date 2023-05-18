package vn.com.devmaster.services.service.dto;

import lombok.Data;
import vn.com.devmaster.services.domain.Product;

@Data
public class OrderProductDTO {
    private Long quantity;
    private ProductDTO product;
}
