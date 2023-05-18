package vn.com.devmaster.services.domain;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "voucher")
@Data
public class Voucher {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "discount_amount")
    private Long discountAmount;

    @Column(name = "discount_persentage")
    private int discountPersentage;

    @Column(name = "voucher_start_date")
    private Date voucherStartDate;

    @Column(name = "voucher_end_date")
    private Date voucherEndDate;

}
