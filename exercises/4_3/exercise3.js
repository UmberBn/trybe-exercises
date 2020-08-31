let n = 5,
    i = 0,
    j = 0,
    aux = "*",
    space = " ",
    word = "";

for (i = 1; i <= n; i += 1) {
    j = n - i;
    word = space.repeat(j) + aux.repeat(i)
    console.log(word)
}