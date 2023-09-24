[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11841677&assignment_repo_type=AssignmentRepo)
# Reverse Insertion Sort

Consider the code for insertion sort we covered in class:

```javascript
function insertionSort(arr) {
  for(var i = 1; i < arr.length; i++) {
    var val = arr[i];
    var j;
    for(j = i; j > 0 && arr[j-1] > val; j--) {
      arr[j] = arr[j-1];
    }
    arr[j] = val;
  }
  return arr;
}
```

Change this function such that it works from the end of the array rather than
the beginning, `insertionSortReverse()` -- only the direction of
iterating over the elements is reversed, the array is still sorted the same way
(ascending). Add your code in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

## Average-Case Time Complexity of Insertion Sort

In the lectures, we covered that insertion sort has best-case time complexity of
$\Theta(n)$ and worst-case time complexity of $\Theta(n^2)$. What is the
average-case time complexity ($\Theta$)?

Hint: Think about what happens in each iteration of the loop, and how often the
loop is executed. Keep in mind that for asymptotic analysis we don't care about
constant factors.

Describe your reasoning and the conclusion you've come to. Your reasoning is
most important -- you can easily find the answer, but you need to demonstrate
that you've understood the concept. Add your answer to this markdown file.

## Answer
The average complexity of insertion sort is $\Theta(n^2)$, and the reasons are as follows by the above insertion code:
1. In the first for loop when i = 1, val = arr[1] is the second element, j = 1. Then goes to the second for loop j = 1; arr[0] compare with arr[1], if arr[0] > arr[1], not need to swap, j = 0. So, we still get into two for loops to compare elements.
2. When i = 2, val = arr[2] the third element, j = 2. In the second for loop, j = 2, if arr[1] > arr[2], we swap arr[2] to the arr[1]. Again, we need to go through two loops even without too many swap elements in average cases.
3. So, ignore constant swap and arr[j] = val, One for loop is n, and two for loops is $(n^2)$.
