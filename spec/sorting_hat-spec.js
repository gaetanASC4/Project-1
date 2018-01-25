var sorting_hat = function(arr){
    // Checking for proper type of input
    if(!Array.isArray(arr) || !arr.length>0 || !arr.every(person=> typeof person === "string")){
        throw new TypeError;
    }

    var output = []; // the array that gets returned
    var houses = ["Gryffindor","Hufflepuff","Ravenclaw","Slytherin"];

    // looping through the input array and assigning house
    for(var i = 0; i<arr.length;i++){
        var person = arr[i];
        if(person === "Harry Potter"){
            output.push("Gryffindor");
        }else if(person === "Voldemort"){
            output.push("Slytherin");
        }else{
            var house = houses[Math.floor(Math.random()*houses.length)]; //random house
            output.push(house);
        }
    }

    return output;
}

////////////////////
//// Unit Tests ////
////////////////////

// Unit tests for "sorting_hat" function
    describe("sorting_hat",function(){
        it("should be a function", function(){
            expect(sorting_hat instanceof Function).toBeTruthy();
        });

        it("should throw an Error if the first argument is not an array of strings (names) with at least 1 element ", function(){
            expect(()=>sorting_hat("Not an array")).toThrow();
            expect(()=>sorting_hat(1)).toThrow()
            expect(()=>sorting_hat(arr.lenght>0)).toThrow()
        });
        
        it("should return another array of the same length as the given array",  function(){
            expect(sorting_hat(["dude thats a nice jacket"]).length).toBe(1);
        });

        it("it should return an array consisting of only strings (names) of Hogwarts Houses ('Gryffindor','Hufflepuff', 'Ravenclaw','Slytherin", function(){
            var houses = ["Gryffindor","Hufflepuff","Ravenclaw","Slytherin"];
            expect(sorting_hat(["....","...."])).toMatch(/Gryffindor|Hufflepuff|Ravenclaw|Slytherin/);
        });

        it(" it should assign 'Gryffindor' to 'Harry Potter', if the name appears in the given array", function(){
            expect(()=>sorting_hat(["Harry Potter"]).toContain("Gryffindor"))
        });
        
        it("it should assign 'Slytherin' to 'Voldemort', if the name appears in the given array", function(){
            expect(()=>sorting_hat(["Voldemort"]).toContain("Slytherin"))
        });
    });
    


    

