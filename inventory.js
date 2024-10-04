console.log("1. Add Icecream");
console.log("2. Change Flavour");
console.log("3. Total Quantity");
console.log("4. Total Cost");
console.log("5. Display");

let Flavors = new Array();
let Prices = new Array();
let c ='N';

do {
    let Choice = prompt("Enter Your Choice:");
    switch (Choice) {
        case '1':
            let Flavor = prompt("Enter Icecream flavor:");
            let Cost =prompt("Enter the cost of Icecream");
            Flavors.push(Flavor);
            Prices.push(Cost);
            break;

        case '2':
            if (Flavors.length == 0) {
                console.log("No Icecream Available");
            } else {
                console.log("Icecream flavors available:");
                for (let i = 0; i < Flavors.length; i++) {
                    console.log(Flavors[i]+" ");
                }
                let oldFlavor = prompt("Enter the Flavor you want to change:");
                let newFlavor = prompt("Enter the Flavor you want:");

                for (let i = 0; i <Flavors.length; i++) {
                    if (Flavors[i] == oldFlavor) {
                        Flavors[i] = newFlavor;
                    }
                }
                console.log("Updated Flavors List:");
                for (let i = 0; i < Flavors.length; i++) {
                    console.log(Flavors[i]+" ");
                }
            }
            break;

        case '3':
            console.log("Total number of Icecreams available: " + Flavors.length);
            break;

        case '4':
            let totalAmount = 0;
            for (let i = 0; i < Prices.length; i++) {
                totalAmount =totalAmount + Prices[i];
            }
            console.log("Total Cost: " + totalAmount);
            break;

        case '5':
            console.log("Icecream flavors in inventory:");
            for (let i = 0; i < Flavors.length; i++) {
                console.log(Flavors[i]+" ");
            }
            break;
        }
        c = prompt("Do you want to?(y/n):");
}while (c == 'y' || c == 'Y');
