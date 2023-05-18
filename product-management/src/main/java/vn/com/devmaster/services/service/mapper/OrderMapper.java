package vn.com.devmaster.services.service.mapper;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import vn.com.devmaster.services.domain.Order;
import vn.com.devmaster.services.service.dto.OrderDTO;

import java.util.ArrayList;
import java.util.List;

@Component
@RequiredArgsConstructor
public class OrderMapper implements EntityMapper<OrderDTO, Order>{

    private final OrderProductMapper orderProductMapper;
    private final UserMapper userMapper;

    private final VoucherMapper voucherMapper;
    @Override
    public Order toEntity(OrderDTO dto) {
        Order order = new Order();
        order.setId(dto.getId());
        order.setUser(userMapper.toEntity(dto.getUser()));
        order.setOrderProducts(orderProductMapper.toEntity(dto.getOrderProducts()));
        order.setVoucher(voucherMapper.toEntity(dto.getVoucher()));
        order.setStatus(dto.getStatus());
        return order;
    }

    @Override
    public OrderDTO toDTO(Order entity) {
        OrderDTO orderDTO = new OrderDTO();
        orderDTO.setId(entity.getId());
        orderDTO.setUser(userMapper.toDTO(entity.getUser()));
        orderDTO.setOrderProducts(orderProductMapper.toDTO(entity.getOrderProducts()));
        orderDTO.setVoucher(voucherMapper.toDTO(entity.getVoucher()));
        orderDTO.setStatus(entity.getStatus());
        return orderDTO;
    }

    @Override
    public List<Order> toEntity(List<OrderDTO> dto) {
        List<Order> orders = new ArrayList<>();
        dto.forEach(orderDTO -> {
            Order order = toEntity(orderDTO);
            orders.add(order);
        });
        return orders;
    }

    @Override
    public List<OrderDTO> toDTO(List<Order> entity) {
        List<OrderDTO> orderDTOS = new ArrayList<>();
        entity.forEach(order -> {
            OrderDTO orderDTO = toDTO(order);
            orderDTOS.add(orderDTO);
        });
        return orderDTOS;
    }
}
