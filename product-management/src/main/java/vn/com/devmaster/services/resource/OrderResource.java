package vn.com.devmaster.services.resource;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import vn.com.devmaster.services.service.OrderSevice;
import vn.com.devmaster.services.service.dto.OrderDTO;

import java.util.List;

@RestController
@RequestMapping("/order")
@RequiredArgsConstructor
public class OrderResource {
    private final OrderSevice orderSevice;

    @GetMapping("")
    List<OrderDTO> findAllOrder(){
        return  orderSevice.findAllOrder();
    }

    @GetMapping("/findByUser/{userId}")
    List<OrderDTO> findOrderByIdUser(@PathVariable(name = "userId") Long userId){
        return orderSevice.findOrderByIdUser(userId);
    }

    @PostMapping("")
    void createOrder(@RequestBody OrderDTO orderDTO){
        orderSevice.createOrder(orderDTO);
    }

    @DeleteMapping("/{id}")
    void deleteOrderById(@PathVariable("id") Long id){
        orderSevice.deleteOrderById(id);
    }

    @PutMapping("/updateStatus/{id}/{status}")
    void updateStatusOrder(@PathVariable(name = "id") Long id ,@PathVariable("status") String status){
        orderSevice.updateStatusOrder(id,status);
    }

}
