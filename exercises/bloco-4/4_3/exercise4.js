let n = 7,
    i = 0,
    j = 0;
let asteric = '*', word = '';


let mid = (n + 1) / 2;
let left = mid;
let right = mid;

for (i = 0; i <= mid; i += 1) {
    for (j = 1; j <= n; j += 1) {
        if (j > right && j < left) {
            word = word + asteric;
        } else {
            word = word + ' ';
        }
    }
    console.log(word);
    word = '';
    right -= 1;
    left += 1;
}