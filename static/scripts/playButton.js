function loadGameStart(data1, data2) {
    document.querySelector('body').innerHTML = '<div id="ipBackground"></div>';
    document.getElementById('ipBackground').innerHTML = `<div id="gc1bg" class = "gameChoice" style="float:left"></div>       \
                                                        <div id="gc2bg" class = "gameChoice" style="margin-left:50%;"></div>`;


    //initial data populating for first 2 choices
    document.getElementById('gc1bg').innerHTML = `<div class="gameChoiceContent" onclick="choose(${data1.num_list_users}, ${data2.num_list_users}, true, 0, animePool.queryRandomData(), 1)"> <div id = "content1"></div> </div>`;
    document.getElementById('gc2bg').innerHTML = `<div class="gameChoiceContent" onclick="choose(${data1.num_list_users}, ${data2.num_list_users}, false, 0, animePool.queryRandomData(), 1)"> <div id = "content2"></div> </div>`;

    document.getElementById('gc1bg').style.backgroundImage = `url("${data1.main_picture.large}")`;
    document.getElementById('gc2bg').style.backgroundImage = `url("${data2.main_picture.large}")`;


    document.getElementById('content1').innerHTML = `<h2>${data1.title}</h2> <br /> <b id="users1">${data1.num_list_users}</b>`;
    document.getElementById('content2').innerHTML = `<h2>${data2.title}</h2> <br /> <b id="users2">${data2.num_list_users}</b>`;
}

function loadNewData(removeNum, newData, data1, data2, score){
    newTitle = newData.title;
    newUsers = newData.num_list_users;
    newPic = newData.main_picture.large;
    if (removeNum == 1){
        let newReplace = 2;

        document.getElementById('gc1bg').innerHTML = `<div class="gameChoiceContent" onclick="choose(${newUsers}, ${data2}, true, 0, animePool.queryRandomData(), 2)"> <div id = "content1"></div> </div>`;
        document.getElementById('gc2bg').innerHTML = `<div class="gameChoiceContent" onclick="choose(${newUsers}, ${data2}, false, 0, animePool.queryRandomData(), 2)"> <div id = "content2"></div> </div>`;

        document.getElementById('content1').innerHTML = `<h2>${newTitle}</h2> <br /> <b id="users1">${newUsers}</b>`;

        // document.getElementById(`gc1bg`).setAttribute("onclick", `choose(${newUsers}, ${data2}, true, ${score}, animePool.queryData(animePool.pullFromPool()), 2)`);
        // document.getElementById(`gc2bg`).setAttribute("onclick", `choose(${newUsers}, ${data2}, false, ${score}, animePool.queryData(animePool.pullFromPool()), 2)`);
    } 
    else if (removeNum == 2){
        let newReplace = 1;

        document.getElementById('gc1bg').innerHTML = `<div class="gameChoiceContent" onclick="choose(${data1}, ${newUsers}, true, 0, animePool.queryRandomData(), 1)"> <div id = "content1"></div> </div>`;
        document.getElementById('gc2bg').innerHTML = `<div class="gameChoiceContent" onclick="choose(${data1}, ${newUsers}, false, 0, animePool.queryRandomData(), 1)"> <div id = "content2"></div> </div>`;

        document.getElementById('content2').innerHTML = `<h2>${newTitle}</h2> <br /> <b id="users2">${newUsers}</b>`;

        // document.getElementById(`gc2bg`).setAttribute("onclick", `choose(${data1}, ${newUsers}, false, ${score}, animePool.queryData(animePool.pullFromPool()), 1)`);
        // document.getElementById(`gc1bg`).setAttribute("onclick", `choose(${data1}, ${newUsers}, true, ${score}, animePool.queryData(animePool.pullFromPool()), 1)`);
    }
    
    document.getElementById(`gc${removeNum}bg`).style.backgroundImage = `url("${newPic}")`;
    document.getElementById(`content${removeNum}`).innerHTML = `<h2>${newTitle}</h2> <p>${newUsers}</p> <br />`;
}

function choose(data1, data2, choice, streak, newData, replaceNum){
    
    //clicking on the first choice and it does have a larger member count
    if (data1 >= data2 && choice == true){
        console.log(replaceNum);
        loadNewData(replaceNum, newData, data1, data2, ++streak);
        // $(document).ready(function(){
        //     $("#gc1bg").click(function(){
        //         $("#gc2bg").addClass("gameChoiceGoUp");
        //     })
        //     $("#gc2bg").on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        //         $(this).removeClass("gameChoiceGoUp");
        //     })

        // })

    }

    //clicking on the second choice and it does have a larger member count
    else if (data2 >= data1 && choice == false){
        console.log(replaceNum);
        loadNewData(replaceNum, newData, data1, data2, ++streak);
        // $(document).ready(function(){
        //     $("#gc2bg").click(function(){
        //         $("#gc1bg").addClass("gameChoiceGoUp");
        //     })
        //     $("#gc1bg").on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        //         $(this).removeClass("gameChoiceGoUp");
        //     })

        // })
    }
    else {
        loseGame(streak);
    }
}

function loseGame(x){
    console.log(x);
    document.querySelector('body').innerHTML = '<p>hi</p>'
}

function slide(affectedNum, correctNum, direction){
    $(document).ready(function(){
        $(`#gc${correctNum}bg`).click(function(){
            $(`#gc${affectedNum}bg`).addClass(`gameChoiceGo${direction}`);
        })
        $(`gc${affectedNum}bg`).on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
            $(this.removeClass(`gameChoiceGo${direction}`));
        })
    })
}