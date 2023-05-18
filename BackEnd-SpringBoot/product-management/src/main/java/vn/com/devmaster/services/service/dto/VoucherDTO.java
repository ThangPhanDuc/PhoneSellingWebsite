package vn.com.devmaster.services.service.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import java.util.Date;
@Data
public class VoucherDTO {
    private Long id;
    private String name;
    private Long discountAmount;
    private int discountPersentage;
    private Date voucherStartDate;
    private Date voucherEndDate;
}
