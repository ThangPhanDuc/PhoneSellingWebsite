package vn.com.devmaster.services.service.mapper;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import vn.com.devmaster.services.domain.OrderProduct;
import vn.com.devmaster.services.service.dto.OrderProductDTO;

import java.util.ArrayList;
import java.util.List;

@Component
@RequiredArgsConstructor
public class OrderProductMapper implements EntityMapper<OrderProductDTO, OrderProduct>{
    private final ProductMapper productMapper;
    @Override
    public OrderProduct toEntity(OrderProductDTO dto) {
        OrderProduct orderProduct = new OrderProduct();
        orderProduct.setQuantity(dto.getQuantity());
        orderProduct.setProduct(productMapper.toEntity(dto.getProduct()) );
        return orderProduct;
    }

    @Override
    public OrderProductDTO toDTO(OrderProduct entity) {
        OrderProductDTO orderProductDTO = new OrderProductDTO();
        orderProductDTO.setQuantity(entity.getQuantity());
        orderProductDTO.setProduct(productMapper.toDTO(entity.getProduct()) );
        return orderProductDTO;
    }

    @Override
    public List<OrderProduct> toEntity(List<OrderProductDTO> dto) {
        List<OrderProduct> orderProducts = new ArrayList<>();
        dto.forEach(orderProductDTO -> {
            OrderProduct orderProduct = toEntity(orderProductDTO);
            orderProducts.add(orderProduct);
        });
        return orderProducts;
    }

    @Override
    public List<OrderProductDTO> toDTO(List<OrderProduct> entity) {
        List<OrderProductDTO> orderProductDTOS=new ArrayList<>();
        entity.forEach(orderProduct -> {
            OrderProductDTO orderProductDTO = toDTO(orderProduct);
            orderProductDTOS.add(orderProductDTO);
        });
        return orderProductDTOS;
    }
}
