var isPalindrome = function(x) {
    return x.toString().split('').reverse().join('') == x ? true : false
};