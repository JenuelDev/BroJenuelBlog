# My first blog post

We already know that aside from objects, most of the time we use arrays on every javascript program. It is one of the important types that anyone should know.

In this article, we will look at some of the tips that you should know about manipulating arrays in javascript. 

### Number One: How to remove **duplicates** inside an array?
Sometimes we only want unique data in our array, so how can we do this? we do this by using `Set` object. Because a set should contain a unique value, so it removes the duplicates.


<CommonCodeHighlight>
var numbers = [“1”, “2”, “3”, “4”, “5”, “3”, “9”, “1”];

var uniqueNumbers = […new Set(numbers)];
console.log(uniqueFruits2);
// returns [“1”, “2”, “3”, “4”, “5”,"9"]
</CommonCodeHighlight>


