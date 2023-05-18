package vn.com.devmaster.services.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import vn.com.devmaster.services.domain.Product;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product,Long> {
    @Query(value = "select p1 from Product p1 where p1.id like concat('%',:id,'%') ")
    List<Product> findProductById(Long id);

    @Query(value = "select p from Product p " +
            "where p.name like concat('%',:keyword,'%') " +
            "or p.classify like concat('%',:keyword,'%')" )
    List<Product> findProductByKeyword(String keyword);
}
