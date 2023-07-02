const boom = require('@hapi/boom');

class ProductsService {

  constructor(){

    this.products = [];

  }

  create() {

  }

  find() {
    return this.products;
  }

  findOne(id) {
    return this.products.find(item=> item.id === id);
  }

  update() {

  }

  deleted() {

  }

}

module.exports = ProductsService;
