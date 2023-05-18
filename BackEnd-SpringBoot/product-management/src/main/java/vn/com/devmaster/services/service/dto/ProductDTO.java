package vn.com.devmaster.services.service.dto;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
@Data
public class ProductDTO {
    private Long id;
    private String name;
    private String img;
    private Long price;
    private Long oldPrice;
    private String cpu;
    private String screen;
    private String ram;
    private String memory;
    private String classify;
}
