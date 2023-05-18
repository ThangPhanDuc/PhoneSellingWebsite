package vn.com.devmaster.services.service.mapper;

import org.springframework.stereotype.Component;
import vn.com.devmaster.services.domain.Voucher;
import vn.com.devmaster.services.service.dto.VoucherDTO;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Component
public class VoucherMapper implements EntityMapper<VoucherDTO, Voucher>{
    @Override
    public Voucher toEntity(VoucherDTO dto) {
        Voucher voucher = new Voucher();
//        voucher.setId(dto.getId());
        voucher.setName(dto.getName());
        voucher.setDiscountAmount(dto.getDiscountAmount());
        voucher.setDiscountPersentage(dto.getDiscountPersentage());
        voucher.setVoucherStartDate(dto.getVoucherStartDate());
        voucher.setVoucherEndDate(dto.getVoucherEndDate());
        return voucher;
    }

    @Override
    public VoucherDTO toDTO(Voucher entity) {
        VoucherDTO voucherDTO = new VoucherDTO();
        voucherDTO.setId(entity.getId());
        voucherDTO.setName(entity.getName());
        voucherDTO.setDiscountAmount(entity.getDiscountAmount());
        voucherDTO.setDiscountPersentage(entity.getDiscountPersentage());
        voucherDTO.setVoucherStartDate(entity.getVoucherStartDate());
        voucherDTO.setVoucherEndDate(entity.getVoucherEndDate());
        return voucherDTO;
    }

    @Override
    public List<Voucher> toEntity(List<VoucherDTO> dto) {
        List<Voucher> vouchers = new ArrayList<>();
        dto.forEach(voucherDTO -> {
            Voucher voucher = toEntity(voucherDTO);
            vouchers.add(voucher);
        });
        return vouchers;
    }

    @Override
    public List<VoucherDTO> toDTO(List<Voucher> entity) {
        List<VoucherDTO> voucherDTOS = new ArrayList<>();
        entity.forEach(voucher -> {
            VoucherDTO voucherDTO = toDTO(voucher);
            voucherDTOS.add(voucherDTO);
        });
        return voucherDTOS;
    }
}
