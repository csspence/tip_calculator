/*
Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

You need to consider the following ratings:

Terrible: tip 0%
Poor: tip 5%
Good: tip 10%
Great: tip 15%
Excellent: tip 20%
The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

"Rating not recognised" in Javascript, Python and Ruby...
...or null in Java
...or -1 in C#
Because you're a nice person, you always round up the tip, regardless of the service.
*/

const tipCalculator = (total, rating) => {
    const service = rating.toLowerCase();
    const rates = {
        "poor": .05,
        "good": .1,
        "great": .15,
        "excellent": .2 
    }
  
    if((service !== 'poor') && (service !== 'good') && (service !== 'great') && (service !== 'excellent')) {
        //console.log('Rating not recognised');
        return 'Rating not recognised';
    }
  
    //console.log("$" + Math.ceil(total * rates[service]));
    return "$" + Math.ceil(total * rates[service]);
  
  }
  
  //tipCalculator(100, "Excellent"); // $20
  //tipCalculator(97, "pOor"); // $5
  //tipCalculator(100, "greeat") // "Rating not recognised"
  //tipCalculator(56, "excellent") // $12
  