function randomChance (coin){
    while (coin > 0 ) {
        if (Math.floor(Math.random()* 100) == 50 )
        {
            coin = coin + (Math.floor(Math.random() * 50) + 51);
            console.log("You Won! You now have: " + coin);
            return coin;
        }
        coin --;
    }
    console.log("try again!");
}
randomChance(50);