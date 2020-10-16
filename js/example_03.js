//  разобрать пример с вебинара модуль 3 -1

const SIZES = {
    BIG: { price: 25, cal: 100, time: 15 },
    SMALL: { price: 15, cal: 50, time: 7 },
    MEDIUM: { price: 15, cal: 50, time: 7 },
};

const STUFFING = {
    CHEESE: { price: 6.5, cal: 45, time: 2 },
    BEACON: { price: 10, cal: 70, time: 6 },
    TOMATO: { price: 12.1, cal: 4, time: 5 },
    CHICKEN: { price: 9.3, cal: 30, time: 5.1 },
};

const SAUCES = {
    MUSTARD: { price: 3, cal: 5, time: 1 },
    KETCHUP: { price: 4.2, cal: 20, time: 1.5 },
    BOLOGNESE: { price: 7.5, cal: 50, time: 3 },
};

const pizza = {
    size: null, // поле для хранения размера пиццы
    stuffings: [], // поле для хранения списка добавок
    sauces: [], // поле для хранения списка соусов

    addStuffing(stuffing) {
        if (!this.stuffings.includes(stuffing) && stuffing.toUpperCase() in STUFFING) {
        this.stuffings.push(stuffing.toUpperCase());
        } else {
            console.log(`${stuffing} has already been ordered`)
        };
    },

    removeStuffing(stuffing) {
        if (this.stuffings.includes(stuffing)) {
            const indexToDelete = this.stuffings.indexOf(stuffing);
            this.stuffings.splice(indexToDelete, 1);
        }
    },

    addSauces(sauce) {
        if (!this.sauces.includes(sauce) && sauce.toUpperCase() in SAUCES) {
        this.sauces.push(sauce.toUpperCase());
        } else {
            console.log(`${sauce} has already been ordered`)
        };
    },

    removeSauces(sauce) {
        if (this.sauces.includes(sauce)) {
            const indexToDelete = this.sauces.indexOf(sauce);
            this.sauces.splice(indexToDelete, 1);
        }
    },

    getTotalProperty(prop) {
        const getSizeProperty = () => {
            // const sizePrice = SIZES[this.size].price;
            return SIZES[this.size][prop];
        }

        const getSauceProperty = () => {
            let total = 0;
            for (const sauce of this.sauces) {
                const sauceProperty = SAUCES[sauce][prop];
                total += sauceProperty;
            }
            return total;
        }

        const getStuffingProperty = () => {
            let total = 0;
            for (const stuffing of this.stuffings) {
                const stuffingProperty = STUFFING[stuffing][prop];
                total += stuffingProperty;
            }
            return total;
        }

        const sizeProperty = getSizeProperty();
        const sauceProperty = getSauceProperty();
        const stuffingProperty = getStuffingProperty();
        return sizeProperty + sauceProperty + stuffingProperty;

    },

    // getPizzaConfig() {
    //     return {
    //     price: this.getTotalProperty('price'),
    //     cal: this.getTotalProperty('cal'),
    //     time: this.getTotalProperty('time'),
    //     }
    // },
};

pizza.size = 'BIG';
pizza.addSauces('KETCHUP');
pizza.addStuffing('CHEESE');
pizza.getTotalProperty('price');
pizza.getTotalProperty('cal');
pizza.getTotalProperty('time');
