let base = 5,
    i = 0,
    j = 0,
    asteri = "*",
    space = " ",
    word = "";

for (i = 1; i <= base; i += 1) {
    j = base - i;
    word = space.repeat(j) + asteri.repeat(i)
    console.log(word)
}

