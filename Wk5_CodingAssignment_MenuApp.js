class Drink {                                     
    constructor(drinkType, hotOrCold){
        this.drinkType = drinkType;
        this.hotOrCold = hotOrCold;
    }

    describe(){
        return `${this.drinkType} is ${this.hotOrCold}.`; 
    }
}

class CoffeeOrder {
    constructor(drink){
        this.drink = drink;
        this.drinks = [];                
    }


    addDrink(drinkType, hotOrCold) {
            this.drinks.push(new Drink(drinkType, hotOrCold));
    } 

    describe(){
        return `${this.drinkType} has ${this.drink} drinks.`;
    }
}

class Menu{
    constructor(){
        this.coffeeOrders = [];
        this.selectedCoffeeOrders = null;
    }

    start() {                                               
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch(selection){
                case '1':
                    this.createCoffeeOrder();
                    break;
                case '2':
                    this.viewCoffeeOrder();
                    break;
                case '3':
                    this.deleteOrder();
                    break;
                case '4':
                    this.displayOrder();
                    break;
                default:
                    selection = 0;    
            }
            selection = this.showMainMenuOptions();
        }
        alert('Goodbye!');
    }

    showMainMenuOptions() {
        return prompt(`
        0) exit
        1) create new order
        2) view an order
        3) delete the order
        4) display all orders
        `); 
    }

    showCoffeeMenuOptions(coffeeOrderInfo) {
        return prompt(`
            0) back
            1) create drink
            2) delete drink
            --------------------
            ${coffeeOrderInfo}
            `);
    }

    displayOrder() {
        let drinkString = '';                                              
        for(let i = 0; i < this.coffeeOrders.length; i++) {                  
            drinkString += i + ') ' + this.coffeeOrders[i].drink + '\n';     
        } 
    alert(drinkString);                                                                      
    }

    createCoffeeOrder(){
        let drink = prompt('Enter a name for your new coffee order:');
        this.coffeeOrders.push(new CoffeeOrder(drink));
    }

    viewCoffeeOrder() {
        let index = prompt('Enter the index of the coffee order you wish to view:');
        if(index > -1 && index < this.coffeeOrders.length) {
            this.selectedCoffeeOrders = this.coffeeOrders[index];              
            let description = 'Coffee Order: ' + this.selectedCoffeeOrders.drink + '\n'; 
            
            for (let i = 0; i < this.selectedCoffeeOrders.drinks.length; i++) {
                description += i + ') ' + this.selectedCoffeeOrders.drinks[i].drinkType + ' - ' + this.selectedCoffeeOrders.drinks[i].hotOrCold + '\n';
            }

            let selection = this.showCoffeeMenuOptions(description);
            switch(selection) {
                case '1':
                    this.createDrink();
                    break;
                case '2':
                    this.deleteDrink();
            }
        }
    }

    createDrink(){
        let drinkType = prompt('Enter type of new drink:');
        let hotOrCold = prompt('Enter hot or iced for new drink:');
        this.selectedCoffeeOrders.drinks.push(new Drink(drinkType, hotOrCold));
    }

    deleteDrink(){
        let index = prompt('Enter the index of the drink you wish to delete:');
        if(index > -1 && index < this.selectedCoffeeOrders.drinks.length) {
            this.selectedCoffeeOrders.drinks.splice(index, 1);
        }
    } 
}

let menu = new Menu();
menu.start();