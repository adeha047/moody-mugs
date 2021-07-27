package com.example.gtommee.rest_tutorial.repositories;
import com.example.gtommee.rest_tutorial.models.Product;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
public interface ProductRepository extends MongoRepository<Product, String, List> {
  Product findBy_id(ObjectId _id);
  Product findAll();
}