class AnimePool {
    constructor(jsonString){
        this.available_nums = [];
        this.animeListData = JSON.parse(jsonString.replaceAll("&#34;", '"'));

        for(var i = 0; i < 300; i++){
            this.available_nums.push(i);
        }

    }

    pullFromPool(){
        let num = Math.floor(Math.random() * this.available_nums.length);
        let num_pick = this.available_nums[num];
        this.available_nums.splice(num, 1);
        return num_pick;
    }

    queryRandomData(){
        return this.animeListData.data[this.pullFromPool()].node;
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




