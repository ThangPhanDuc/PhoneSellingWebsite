package vn.com.devmaster.services.resource;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import vn.com.devmaster.services.service.ProductService;
import vn.com.devmaster.services.service.dto.ProductDTO;
import vn.com.devmaster.services.service.dto.UserDTO;

import javax.websocket.server.PathParam;
import java.util.List;

@RestController
@RequestMapping("/product")
@RequiredArgsConstructor
public class ProductResource {
    private final ProductService productService;

    @GetMapping("")
    List<ProductDTO> findAllProduct(){
        return productService.findAllProduct();
    }

    @GetMapping("/{id}")
    List<ProductDTO>  findProductById(@PathVariable(name = "id") Long id){
        return productService.findProductById(id);
    }

    @GetMapping("/search/{keyword}")
    List<ProductDTO> findProductByKeyword(@PathVariable(name = "keyword") String keyword){
        return productService.findProductByKeyword(keyword);
    }

    @PostMapping("")
    void createProduct(@RequestBody ProductDTO productDTO){
        productService.createProduct(productDTO);
    }

//    @PostMapping("")
//    void createListProduct(@RequestBody List<ProductDTO> productDTOS){
//        productService.createListProduct(productDTOS);
//    }

    @PutMapping("/{id}")
    void updateProductById(@PathVariable(name = "id") Long id,@RequestBody ProductDTO productDTO){
        productService.updateProductById(id,productDTO);
    }

    @DeleteMapping("{id}")
    void deleteProductById(@PathVariable(name = "id") Long id){
        productService.deleteProductById(id);
    }

}
