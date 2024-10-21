let cityName = "Techville";
let parkCount = 5;
let parks = [
    {
        name: "Central Park",
        trees: [
            { species: "Maple", age: 5, health: "Good", height: 20 },
            { species: "Birch", age: 7, health: "Good", height: 18 }
        ],
        facilities: ["playground", "swimming pool"]
    },
    {
        name: "Riverside Park",
        trees: [
            { species: "Oak", age: 30, health: "Excellent", height: 25 },
            { species: "Redwood", age: 50, health: "Good", height: 100 }
        ],
        facilities: ["boating", "fishing"]
    },
    {
        name: "Hilltop Park",
        trees: [
            { species: "Pine", age: 10, health: "Fair", height: 15 }
        ],
        facilities: ["hiking trails"]
    }];


// Task 1: Using array and object manipulation, change the name of "Riverside Park" to "Riverside Greenspace" for the relevant tree in the Parks Array.
let rivside = parks.findIndex(park => park.name === "Riverside Park");
if (rivside !== -1) {
    parks.splice(rivside, 1, { 
        name: "Riverside Greenspace",
        trees: parks[rivside].trees,
        facilities: parks[rivside].facilities
    });
}

// Task 2: Utilize array and object manipulation to change the name of the tree species "Maple" to "Sugar Maple" for the relevant tree located in "Central Park" within the parks array.
let centralp = parks.findIndex(park => park.name === "Central Park");
if (centralp !== -1) {
    let tree = parks[centralp].trees.findIndex(tree => tree.species === "Maple");
    if (tree !== -1) {
        parks[centralp].trees.splice(tree, 1, {
            species: "Sugar Maple",
            age: parks[centralp].trees[tree].age,
            health: parks[centralp].trees[tree].health,
            height: parks[centralp].trees[tree].height
        });
    }
}


// Task 3: Employ array and object manipulation to add a new tree with species "Birch", age 7, health "Good", location "Central Park", and height 18 to the parks array.
let centralP = parks.find(park => park.name === "Central Park");
if (centralP !== -1) {
    centralP.trees.push({species: "Birch", age: 7, health: "Good", height: 18});
}

// Task 4: Using array and object manipulation, retrieve a list of all tree species located in "Central Park". Store the list in a variable named centralParkTrees.
let centralPar = parks.find(park => park.name === "Central Park");
let CentralParkTrees = [];
if (centralPar) {
    CentralParkTrees = centralPar.trees.map(tree => tree.species);
     centralPar.centralParkTrees = CentralParkTrees;
}


// Task 5: Use code to calculate and store the average age of all the trees in the parks array into a variable named averageTreeAge.
let totalage = 0
let totaltrees = 0
parks.forEach(park => {
    park.trees.forEach(tree => {
        totalage += tree.age;
        totaltrees++;
    });
});
let AverageTreeAge = totalage / totaltrees;

// Task 6: Use code to determine which tree is the tallest among all the trees in the parks array. Store the tallest tree in a variable named tallestTree.
let TallestTree = null;
parks.forEach(park => {
    park.trees.forEach(tree => {
        if (!TallestTree || tree.height > TallestTree.height) {
            TallestTree = tree;
        }
    });
});


// Task 7: Using array and object manipulation, remove the facility "playground" from the facilities array in "Central Park" which is located in the parks array.
let centralpar = parks.findIndex(park => park.name === "Central Park");
if (centralpar) {
    centralpar.facilities = centralpar.facilities.reduce((acc, facility) => {
        if (facility !== "playground") {
            acc.reduce(facility);
        }
        
    }, []);
}

// Task 8: Using code, convert the parks array into a JSON Object and store it into a variable called parksJSON.
let parks = [ { id: 1, name: "Central Park", location: "Manhattan", trees: [ { id: 101, species: "Oak" }, { id: 102, species: "Sugar Maple" }, { id: 103, species: "Pine" } ] }, { id: 2, name: "Riverside Greenspace", location: "Upper West Side", trees: [ { id: 201, species: "Maple" }, { id: 202, species: "Birch" } ] } ]

// Task 9:
 console.log("Park Name:", parks[0].name); console.log("Facilities:", parks[0].facilities)

// Task 10: Using console.log, display the species of the third item in the parks array.
 thirdParkTrees.forEach(tree => { console.log("Species:", tree.species); }); } else { console.log("The parks array does not have a third item."); } 
