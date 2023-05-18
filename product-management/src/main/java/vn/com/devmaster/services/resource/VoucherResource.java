package vn.com.devmaster.services.resource;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import vn.com.devmaster.services.service.VoucherService;
import vn.com.devmaster.services.service.dto.VoucherDTO;

import java.util.List;

@RestController
@RequestMapping("/voucher")
@RequiredArgsConstructor
public class VoucherResource {
    private final VoucherService voucherService;

    @GetMapping("")
    List<VoucherDTO> findAllVoucher(){
        return voucherService.findAllVoucher();
    }

    @GetMapping("/findByName/{name}")
    VoucherDTO findVoucherByName(@PathVariable(name = "name") String name){
        return voucherService.findVoucherByName(name);
    }

    @PostMapping("")
    void createVoucher(@RequestBody VoucherDTO voucherDTO){
        voucherService.createVoucher(voucherDTO);
    }

    @DeleteMapping("/{id}")
    void deleteVoucherByid(@PathVariable("id") Long id){
        voucherService.deleteVoucherByid(id);
    }
}
