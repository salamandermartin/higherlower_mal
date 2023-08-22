class AnimePool {
    constructor(curr_pool, length){
        this.available_nums = [];

        for(var i = 1; i < 500; i++){
            this.available_nums.push(i);
        }
    }

    pullFromPool(){
        let num = Math.floor(Math.random() * this.available_nums.length);
        let num_pick = available_nums[num];
        this.available_nums.splice(num, 1);

    }

    resetPool(){
        this.available_nums = [];

        for(var i = 1; i < 500; i++){
            this.available_nums.push(i);
        }
    }

    printPool(){
        console.log(this.available_nums);
    }
}




