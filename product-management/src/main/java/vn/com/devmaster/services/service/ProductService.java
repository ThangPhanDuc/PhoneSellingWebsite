package vn.com.devmaster.services.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import vn.com.devmaster.services.domain.Product;
import vn.com.devmaster.services.repository.ProductRepository;
import vn.com.devmaster.services.service.dto.ProductDTO;
import vn.com.devmaster.services.service.mapper.ProductMapper;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductService {
    private final ProductRepository productRepository;
    private final ProductMapper productMapper;

    public List<ProductDTO> findAllProduct(){
        return productMapper.toDTO(productRepository.findAll());
    }

    public List<ProductDTO> findProductById(Long id){
        return  productMapper.toDTO(productRepository.findProductById(id));
    }


    public List<ProductDTO> findProductByKeyword(String keyword){
        return productMapper.toDTO((productRepository.findProductByKeyword(keyword)));
    }

    public void createProduct(ProductDTO productDTO){
        productRepository.save(productMapper.toEntity(productDTO));
    }

    public void createListProduct(List<ProductDTO> productDTOS){
        productRepository.saveAll(productMapper.toEntity(productDTOS));
    }

    public void updateProductById(Long id,ProductDTO productDTO){
        Product product = productMapper.toEntity(productDTO);
        product.setId(id);
        productRepository.save(product);
    }

    public void deleteProductById(Long id){
        productRepository.deleteById(id);
    }


}
