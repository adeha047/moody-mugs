package com.example.gtommee.rest_tutorial.models;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
public class Product {
  @Id
  public ObjectId _id;
  public String name;
  public String image;
  public String description;
  public Number price;
  public Number rating;
  public Number numReviews;


  // Constructors
  public Product() {}
  public Product(ObjectId _id, String name, String species, String breed) {
    this._id = _id;
    this.name = name;
    this.image = image;
    this.description = description;
    this.price = price;
    this.rating = rating;
    this.numReviews = numReviews;
  }
  // ObjectId needs to be converted to string
  public String get_id() { return _id.toHexString(); }
  public void set_id(ObjectId _id) { this._id = _id; }
  public String getName() { return name; }
  public void setName(String name) { this.name = name; }
  public String getImage() { return image; }
  public void setImage(String image) { this.image = image;}
  public String getDescription() { return description; }
  public void setDescription(String description) { this.description = description;}
  public Number getPrice() { return price; }
  public void setPrice(Number price) { this.price = price; }
  public Number getRating() { return rating; }
  public void setRating(Number rating) { this.rating = rating; }
  public Number getNumReviews() { return numReviews; }
  public void setNumReviews(Number numReviews) { this.numReviews = numReviews; }
}