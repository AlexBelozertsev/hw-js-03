// Написание кода корзины товаров
// 1. getItems()
// 2. add(product)
// 3. remove(productName)
// 4. clear()
// 5. countTotalPrice()
// 6. increaseQuantity(productName)
// 7. decreaseQuantity(productName)

// { name: 'apple', price: 50 };
// { name: 'grapes', price: 70 };
// { name: 'lemon', price: 60 };
// { name: 'strawberry', price: 110 };

const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    product.quantity = 1; //добавляем новое .entries для объектов
    this.items.push(product);

    for (const item of items) {
      if (item.name === product.name) {
        item.quantity += 1;
        return;
      }
    }
  },
  remove(productName) {
    //находит элемент, но не позволяет с ним работать:
    // for (const item of this.items) {
    //   if (productName === item.name) {
    //     console.log("found");
    //   }
    // }
    //поэтому использовать for
    for (let i = 0; i < this.items.length; i += 1) {
      const item = this.items[i]; // разбивка длинной строки this.items[i].name ради читабельности
      if (productName === item.name) {
        console.log(`found in index ${i} is removed`);
        this.items.splice(i, 1);
      }
    }
  },
  clear() {
    this.items = [];
  },
  countTotalPrice() {
    let total = 0;
    for (const item of this.items) {
      total += item.price * item.quantity;
    }
    return total;
  },
  increaseQuantity(productName) {
    for (const item of items) {
      if (item.name === productName) {
        item.quantity += 1;
      }
    }
  },
  decreaseQuantity(productName) {
    for (const item of items) {
      if (item.name === productName) {
        if (item.quantity - 1 === 0) {
          this.remove(productName);
          return;
        }
        item.quantity -= 1;
      }
    }
  },
};

cart.add({ name: "grapes", price: 70 });
cart.add({ name: "apple", price: 50 });
cart.add({ name: "strawberry", price: 110 });

console.table(cart.getItems());

cart.remove("apple");
console.table(cart.getItems());

console.log("Total", cart.countTotalPrice);
