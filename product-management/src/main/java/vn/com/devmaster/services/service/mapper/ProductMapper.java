package vn.com.devmaster.services.service.mapper;

import org.springframework.stereotype.Component;
import vn.com.devmaster.services.domain.Product;
import vn.com.devmaster.services.service.dto.ProductDTO;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Component
public class ProductMapper implements EntityMapper<ProductDTO, Product> {
    @Override
    public Product toEntity(ProductDTO dto) {
        Product product = new Product();
//        product.setId(dto.getId());
        product.setName(dto.getName());
        product.setImg(dto.getImg());
        product.setPrice(dto.getPrice());
        product.setOldPrice(dto.getOldPrice());
        product.setCpu(dto.getCpu());
        product.setScreen(dto.getScreen());
        product.setRam(dto.getRam());
        product.setMemory(dto.getMemory());
        product.setClassify(dto.getClassify());
        return product;
    }

    @Override
    public ProductDTO toDTO(Product entity) {
        ProductDTO productDTO = new ProductDTO();
        productDTO.setId(entity.getId());
        productDTO.setName(entity.getName());
        productDTO.setImg(entity.getImg());
        productDTO.setPrice(entity.getPrice());
        productDTO.setOldPrice(entity.getOldPrice());
        productDTO.setCpu(entity.getCpu());
        productDTO.setScreen(entity.getScreen());
        productDTO.setRam(entity.getRam());
        productDTO.setMemory(entity.getMemory());
        productDTO.setClassify(entity.getClassify());
        return productDTO;
    }

    @Override
    public List<Product> toEntity(List<ProductDTO> dto) {
        List<Product> products = new ArrayList<>();
        dto.forEach(productDTO -> {
            Product product = toEntity(productDTO);
            products.add(product);
        });
        return products;
    }

    @Override
    public List<ProductDTO> toDTO(List<Product> entity) {
        List<ProductDTO> productDTOS = new ArrayList<>();
        entity.forEach(product -> {
            ProductDTO productDTO = toDTO(product);
            productDTOS.add(productDTO);
        });
        return productDTOS;
    }


}
