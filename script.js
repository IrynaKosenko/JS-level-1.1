/**
 * Abstract Class Product
 */
class AbstractProduct {
  constructor(ID, name, description, price, brand, quantity, date, reviews, images) {
    this.ID = ID;
    this.name = name;
    this.description = description;
    this.price = price;
    this.quantity = quantity;
    this.reviews = reviews;
    this.images = images;
    this.date = date;
    this.brand = brand;
  }
  getID() { return this.ID };
  setID(id) { this.ID = id; };
  setName(name) { this.name = name };
  getName() { return this.name };
  getDescription() { return this.description };
  setDescription(description) { this.description = description; };
  getPrice() { return this.price };
  setPrice(price) { this.price = price };
  getBrand() { return this.brand };
  setBrand(brand) { this.brand = brand; };
  getQuantity() { return this.quantity };
  setQuantity(quantity) { this.quantity = quantity };
  getDate() { return this.date };
  setDate(date) { this.date = date };
  getReviews() { return this.reviews };
  setReviews(reviews) { this.reviews = reviews; };
  getImages() { return this.images };
  setImages(images) { this.quantimagesty = images };

  getReviewByID(revID) {
    let arrayReviews = this.reviews;
    for (let value of arrayReviews) {
      if (value.reviewID === revID)
        return value;
    }
  }

  getImage(img) {
    let arrayImages = this.images;
    for (let value of arrayImages) {
      if (value === img) {
        return value
      }
    } return this.images[0];
  }

  addReview(newReview) {
    this.reviews.push(newReview);
  }

  deleteReview(delReviewID) {
    for (let i = 0; i < this.reviews.length; i++) {
      if (this.reviews[i].reviewID === delReviewID) {
        this.reviews.splice(i, 1)
      }
    }
  }

  getAverageRating() {
    let sum = 0;
    let currRating;
    for (let i = 0; i < this.reviews.length; i++) {
      currRating = this.reviews[i].rating;
      for (let key of Object.values(currRating)) {
        sum += Number(key);
      }
    }
    return Number(sum / Object.keys(currRating).length / this.reviews.length);
  }
  
  //name, description, price, brand, quantity, date, reviews

  getFullInformation() {
    return `Name: ${this.name}\nBrand: ${this.brand}\nDescription: ${this.description}\nPrice: ${this.price}
    \nQuantity: ${this.quantity}\nDate: ${this.date}\nReviews: ${this.getReviews()}`;
  }

  getPriceForQuantity(int) {
    return `$ ${int * this.price}`;
  }
}
class Clothes extends AbstractProduct {

  constructor(ID, name, description, price, brand, quantity, date, reviews, images, sizes, activeSize, material, color) {
    super(ID, name, description, price, brand, quantity, date, reviews, images);
    this.sizes = sizes;
    this.activeSize = activeSize;
    this.material = material;
    this.color = color;
  }
  getSizes() { return this.sizes }
  setSizes(sizes) { this.sizes = sizes };
  getActiveSize() { return this.activeSize };
  setActiveSize(activeSize) { this.activeSize = activeSize };
  getMaterial() { return this.material };
  setMaterial(material) { this.material = material };
  getColor() { return this.color }
  setColor(color) { this.color = color };

  addSize(newSize) {
    this.sizes.push(newSize);
  }

  deleteSize(delSize) {
    for (let i = 0; i < this.sizes.length; i++) {
      if (this.sizes[i] === delSize) {
        this.sizes.splice(i, 1)
      }
    }
  }
}
class Electronics extends AbstractProduct {

  constructor(ID, name, description, price, brand, quantity, date, reviews, images, warranty, power) {
    super(ID, name, description, price, brand, quantity, date, reviews, images);
    this.warranty = warranty;
    this.power = power;
  }

  getWarranty() { return this.warranty; }
  setWarranty(warranty) { this.warranty = warranty; }
  getPower() { return this.power; }
  setPower(power) { this.power = power; }
}
// Function - constructor
function review(reviewID, author, reviewDate, comment, rating) {
  this.reviewID = reviewID;
  this.author = author;
  this.reviewDate = reviewDate;
  this.comment = comment;
  this.rating = rating;
}

function sortProducts(products, sortRule) {
  if (sortRule === 'name') {
    return products.sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase())
      ? -1 : ((b.name.toLowerCase() > a.name.toLowerCase()) ? 1 : 0));
  }
  if (sortRule === 'ID') {
    console.log(1);
    return products.sort((a, b) => Number(a.ID) - Number(b.ID));
  }
  if (sortRule === 'price') {
    console.log(2);
    return products.sort((a, b) => a.price - b.price);
  }

}
function searchProducts(products, search) {
  let reg = new RegExp(search, 'gi');
  for (let i = 0; i < products.length; i++) {
    if (products[i].name.match(reg) || products[i].description.match(reg)) {
      return products[i];
    }
  }
}

// Testing 
const rating1 = [];
rating1['service'] = '5';
rating1['price'] = '5';
rating1['value'] = '5';
rating1['quality'] = '5';

const rating2 = [];
rating2['service'] = '5';
rating2['price'] = '3';
rating2['value'] = '1';
rating2['quality'] = '2';

const rating3 = [];
rating3['service'] = '5';
rating3['price'] = '3';
rating3['value'] = '1';
rating3['quality'] = '2';

let review1 = new review('158', 'Sam', new Date('2022,02,02'), 'ahbgdbbdn', rating1);
let review2 = new review('2659', 'Tom', new Date('2019,10,15'), 'lmkmmkmlkmklm', rating3);
let review3 = new review('11', 'Samanta', new Date('2022,08,03'), 'Zyg jfh hbf', rating2);

const hat = new Clothes('25', 'hat', 'headdress, which consists of headpiece and kris', 658.4, 'IujnO', 5,
  new Date('2022-11-05'), [review1, review2, review3], ['img1', 'img2', 'img3'], ['X', 'XL'], 'X', 'cotton', 'black');
const skirt = new Clothes('25', 'skirt', 'headdress, which consists of headpiece and kris', 44.99, 'PopASA', 5,
  new Date('2022-11-05'), [review1, review2, review3], ['img1', 'img2', 'img3'], ['X', 'XL'], 'X', 'cotton', 'black');
const blouse = new Clothes('25', 'blouse', 'headdress, which consists of headpiece and kris', 5.0, 'KOI BBBN', 5,
  new Date('2022-11-05'), [review1, review2, review3], ['img1', 'img2', 'img3'], ['X', 'XL'], 'X', 'cotton', 'black');

const telephone1 = new Electronics('6', 'Iphone 8Plus', 'telephone Iphone', 2000, 'Iphone',
  20, new Date('2022-11-010'), [review1, review2,], ['img1', 'img2', 'img3'], 58, 220);
const telephone2 = new Electronics('11', 'Samsung JS852', 'telephone Samsung', 1500, 'Samsung',
  11, new Date('2023-01-31'), [review1, review2, review3], ['img1', 'img2', 'img3'], 564, 240);
const telephone3 = new Electronics('5', 'Nokia KL-666', 'nokia', 1010, 'Nokia',
  2, new Date('2019-05-11'), [review1, review2], ['img1', 'img2', 'img3'], 9, 220);

let electronics = [telephone3, telephone1, telephone2];
let clothes = [hat, skirt, blouse];

telephone1.setID('55');
console.log(telephone1);
console.log(review2);
console.log(telephone1.getReviewByID('2659'));
console.log(telephone1.getImage('img3'));
blouse.addSize('XXXL');
console.log(blouse.getSizes());
blouse.deleteSize('X');
console.log(blouse.getSizes());
telephone3.addReview(review3);
console.log(telephone3.getReviews());
telephone3.deleteReview('11');
console.log(telephone3.getReviews());
console.log(rating2);
console.log(telephone1.getAverageRating());
console.log(sortProducts(electronics, 'name'));
console.log(searchProducts(electronics, 'samsung'));
console.log(searchProducts(clothes, 'hat'));
console.log(sortProducts(clothes, 'name'))
console.log(skirt.getFullInformation());
console.log(blouse.getPriceForQuantity(5));
console.log(blouse.getReviews());