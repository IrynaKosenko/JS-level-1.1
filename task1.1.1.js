function Product(ID, name, description, price, brand, sizes, activeSize, quantity, date, reviews, images) 
{
    this.ID = ID;
    this.name = name;
    this.description = description;
    this.price = price;
    this.brand = brand;
    this.sizes = sizes;
    this.activeSize = activeSize;
    this.quantity = quantity;
    this.date = date;
    this.reviews = reviews;
    this.images = images;
    this.getID = function(){return this.ID};
    this.setID = function(id){this.ID = id;};
    this.getName = function(){return this.name};
    this.setName = function(name){this.name = name};
    this.getDescription = function(){return this.description};
    this.setDescription = function(description){this.description = description;};
    this.getPrice = function(){return this.price};
    this.setPrice = function(price){this.price = price};
    this.getBrand = function(){return this.brand};
    this.setBrand = function(brand){this.brand = brand;};
    this.getSizes = function(){return this.sizes};
    this.setSizes = function(sizes){this.sizes = sizes};
    this.getActiveSize = function(){return this.activeSize};
    this.setActiveSize = function(activeSize){this.activeSize = activeSize;};
    this.getQuantity = function(){return this.quantity};
    this.setQuantity = function(quantity){this.quantity = quantity};
    this.getDate = function(){return this.date};
    this.setDate = function(date){this.date = date};
    this.getReviews = function(){return this.reviews};
    this.setReviews = function(reviews){this.reviews = reviews;};
    this.getImages = function(){return this.images};
    this.setImages = function(images){this.quantimagesty = images};

    this.getReviewByID = function(revID){
      let arrayReviews = this.reviews;
      for(let value of arrayReviews){
        if(value.reviewID === revID)
          return value;
      }
    };

    this.getImage = function(img){
    let arrayImages = this.images;
      for(let value of arrayImages){
        if(value === img){
          return value 
        } 
      }return this.images[0];
    };

    this.addSize = function(newSize){
      this.sizes.push(newSize);
    }

    this.deleteSize = function(delSize){
      for(let i = 0; i < this.sizes.length; i++){
        if(this.sizes[i] === delSize){
          this.sizes.splice(i, 1)
        }
      }
    }

    this.addReview = function(newReview){
      this.reviews.push(newReview);
    }

    this.deleteReview =  function(delReviewID){
      for(let i = 0; i < this.reviews.length; i++){
        if(this.reviews[i].reviewID === delReviewID){
          this.reviews.splice(i, 1)
        }
      }
    }

    this.getAverageRating = function(){
      let sum = 0;
      let currRating;
      for(let i = 0; i < this.reviews.length;i++){
        currRating = this.reviews[i].rating;
        for(let key of Object.values(currRating)){
          sum += Number(key);
        }
      }
      return Number(sum /Object.keys(currRating).length / this.reviews.length); 
    }
}
 
function review(reviewID, author, reviewDate, comment, rating)
{
    return{
    reviewID,
    author,
    reviewDate,
    comment,
    rating,
    };
}

function sortProducts(products, sortRule){
    if(sortRule === 'name'){
      return products.sort((a,b) => (a.name.toLowerCase() < b.name.toLowerCase()) 
                    ? -1 : ((b.name.toLowerCase() > a.name.toLowerCase()) ? 1 : 0));
    }
    if(sortRule === 'ID'){
      console.log(1);
      return products.sort((a,b) => Number(a.ID) - Number(b.ID));
    }
    if(sortRule === 'price'){
      console.log(2);
      return products.sort((a,b) => a.price - b.price);
    }
    
}
function searchProducts(products, search){
 let reg = new RegExp(`${search}`, 'gi');
 for(let i = 0; i < products.length; i++){
    if(products[i].name.match(reg) || products[i].description.match(reg)){
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

let review1 = review('158', 'Sam', new Date('2022,02,02'), 'ahbgdbbdn', rating1);
let review2 = review('2659', 'Tom', new Date('2019,10,15'), 'lmkmmkmlkmklm', rating3);
let review3 = review('11', 'Samanta', new Date('2022,08,03'), 'Zyg jfh hbf', rating2);

let telephone1 = new Product('6', 'Iphone 8Plus','telephone Iphone',2000,'Iphone',
['1','2','3'],'3', 20, new Date('2022,11,010'), [review1, review2,], ['img1','img2','img3']);

let telephone2 = new Product('11', 'Samsung JS852','telephone Samsung',1500,'Samsung',
['1','2','3'],'3', 11, new Date('2023,01,31'), [review1, review2, review3], ['img1','img2','img3']);

let telephone3 = new Product('5', 'Nokia KL-666','nokia', 1010,'Nokia',
['1','2','3'],'3', 2, new Date('2019,05,11'), [review1, review2, review3], ['img1','img2','img3']);

let products = [telephone3,telephone1, telephone2];

  telephone1.setID('55');
  console.log(telephone1); 
  console.log(review2);
  console.log(telephone1.getReviewByID('2659'));
  console.log(telephone1.getImage('img3'));
  telephone1.addSize('10');
  console.log(telephone1.getSizes());
  telephone1.deleteSize('1');
  console.log(telephone1.getSizes());
  telephone1.addReview(review3);
  console.log(telephone1.getReviews());
  telephone1.deleteReview('11');
  console.log(telephone1.getReviews());
  console.log(rating2);
  console.log(telephone1.getAverageRating());
  console.log(sortProducts(products, 'name'));
  console.log(searchProducts(products, 'samsung'));

