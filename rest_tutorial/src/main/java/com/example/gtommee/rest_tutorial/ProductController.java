package com.example.gtommee.rest_tutorial;
import com.example.gtommee.rest_tutorial.models.Product;
import com.example.gtommee.rest_tutorial.repositories.Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import javax.validation.Valid;
import java.util.List;@RestController
@RequestMapping(“/product”)
public class ProductController {
  @Autowired
  private ProductRepository repository;
}

@RequestMapping(value = “/”, method = RequestMethod.GET)
public List<Product> getAllProduct() {
  return repository.findAll();
}

@RequestMapping(value = “/{id}”, method = RequestMethod.GET)
public Product getProductById(@PathVariable(“id”) ObjectId id) {
  return repository.findBy_id(id);
}