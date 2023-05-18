package vn.com.devmaster.services.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import vn.com.devmaster.services.domain.Voucher;
@Repository
public interface VoucherRepository extends JpaRepository<Voucher,Long> {
    @Query(value = "select  v from Voucher v where v.name like concat('%',:keyword,'%') " )
    Voucher findVoucherByName(String keyword);
}
