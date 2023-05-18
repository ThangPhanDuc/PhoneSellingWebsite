package vn.com.devmaster.services.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import vn.com.devmaster.services.domain.Order;
import vn.com.devmaster.services.repository.OrderRepository;
import vn.com.devmaster.services.service.dto.OrderDTO;
import vn.com.devmaster.services.service.mapper.OrderMapper;

import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderSevice {
    private final OrderRepository orderRepository;
    private final OrderMapper orderMapper;

    public List<OrderDTO> findAllOrder(){
        return orderMapper.toDTO(orderRepository.findAll());
    }

    public void createOrder(OrderDTO orderDTO){
        orderRepository.save(orderMapper.toEntity(orderDTO));
    }
    public void deleteOrderById(Long id){
        orderRepository.deleteById(id);
    }

    public void updateStatusOrder(Long id, String status){
        Order order = orderRepository.getById(id);
        order.setStatus(status);
        orderRepository.save(order);
    }

    public List<OrderDTO> findOrderByIdUser(Long idUser){
        return orderMapper.toDTO(orderRepository.findOrderByIdUser(idUser));
    }

}
