package vn.com.devmaster.services.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import vn.com.devmaster.services.domain.Order;
import vn.com.devmaster.services.domain.Product;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order,Long> {
    @Query(value = "select o from Order o where o.user.id like concat('%',:idUser,'%')")
    List<Order> findOrderByIdUser(Long idUser);
}
