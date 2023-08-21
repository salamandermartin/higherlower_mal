class AnimePool {
    constructor(curr_pool, length){
        var available_nums = [];

        for(var i = 1; i < 500; i++){
            available_nums.push(i);
        }
    }

    pull_from_pool(){
        let num = Math.floor(Math.random() * this.available_nums.length);
    }
}


