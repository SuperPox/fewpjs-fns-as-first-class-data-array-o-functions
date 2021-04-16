var wakeDog = function(dogName, dogBreed)
{
    console.log(`Wake ${dogName} the ${dogBreed}`);
    return `Wake ${dogName} the ${dogBreed}`
}

var leashDog = function(dogName, dogBreed)
{
    var leash = `Leash ${dogName} the ${dogBreed}`;
    console.log(leash);
    return leash
}

var walkToPark = function(dogName, dogBreed)
{
    var v3 = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(v3);
    return v3
}

var throwFrisbee = function(dogName, dogBreed)
{
    var v4 = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(v4);
    return v4
}

var walkHome = function(dogName, dogBreed)
{
    var v5 = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(v5);
    return v5
}

var unleashDog = function(dogName, dogBreed)
{
    var v6 = `Unleash ${dogName} the ${dogBreed}`;
    console.log(v6);
    return v6
}

const routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]

function exerciseDog(dog, breed) {
  return routine.map(fn => fn(dog, breed))
}