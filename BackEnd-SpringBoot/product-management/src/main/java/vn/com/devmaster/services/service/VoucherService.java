package vn.com.devmaster.services.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import vn.com.devmaster.services.repository.VoucherRepository;
import vn.com.devmaster.services.service.dto.VoucherDTO;
import vn.com.devmaster.services.service.mapper.VoucherMapper;

import java.util.List;

@Service
@RequiredArgsConstructor
public class VoucherService {
    private final VoucherRepository voucherRepository;
    private final VoucherMapper voucherMapper;

    public List<VoucherDTO> findAllVoucher(){
        return voucherMapper.toDTO(voucherRepository.findAll());
    }

    public VoucherDTO findVoucherByName(String name){
        return voucherMapper.toDTO(voucherRepository.findVoucherByName(name)) ;
    }

    public void createVoucher(VoucherDTO voucherDTO){
        voucherRepository.save(voucherMapper.toEntity(voucherDTO));
    }

    public void deleteVoucherByid(Long id){
        voucherRepository.deleteById(id);
    }
}
