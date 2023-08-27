function loadGameStart(data1, data2) {
    document.querySelector('body').innerHTML = '<div id="ipBackground"></div>';

    document.getElementById('ipBackground').innerHTML = `<div id="gc1bg" class = "gameChoice" style="float:left"></div>       \
                                                        <div id="gc2bg" class = "gameChoice" style="margin-left:50%;"></div>`;


    //initial data populating for first 2 choices
    document.getElementById('gc1bg').innerHTML = `<div class="gameChoiceContent" onclick="choose(${data1.num_list_users}, ${data2.num_list_users}, true, 0, animePool.queryData(animePool.pullFromPool()))"> <div id = "content1"></div> </div>`;
    document.getElementById('gc2bg').innerHTML = `<div class="gameChoiceContent" onclick="choose(${data1.num_list_users}, ${data2.num_list_users}, false, 0, animePool.queryData(animePool.pullFromPool()))"> <div id = "content2"></div> </div>`;

    document.getElementById('gc1bg').style.backgroundImage = `url("${data1.main_picture.large}")`;
    document.getElementById('gc2bg').style.backgroundImage = `url("${data2.main_picture.large}")`;



    document.getElementById('content1').innerHTML = `<h2>${data1.title}</h2> <br /> <b id="users1">${data1.num_list_users}</b>`;
    document.getElementById('content2').innerHTML = `<h2>${data2.title}</h2> <br /> <b id="users2></b>`;
}

function loseGame(){

}

function loadNewData(removeNum, newData, data1, data2, score){
    newTitle = newData.title;
    newUsers = newData.num_list_users;
    newPic = newData.main_picture.large;

    if (removeNum == 2){
        document.getElementById(`gc${removeNum}bg`).innerHTML = `<div class="gameChoiceContent" onclick="choose(${data1}, ${newUsers}, false, ${score}, animePool.queryData(animePool.pullFromPool()))"> <div id = "content${removeNum}"></div> </div>`;
    }
    else{
        document.getElementById(`gc${removeNum}bg`).innerHTML = `<div class="gameChoiceContent" onclick="choose(${newUsers}, ${data2}, true, ${score}, animePool.queryData(animePool.pullFromPool()))"> <div id = "content${removeNum}"></div> </div>`;
    }   
    
    document.getElementById(`gc${removeNum}bg`).style.backgroundImage = `url("${newPic}")`;
    document.getElementById(`content${removeNum}`).innerHTML = `<h2>${newTitle}</h2> <p></p> <br />`;

}

function choose(data1, data2, choice, streak, newData){

    //clicking on the first choice and it does have a larger member count
    if (data1 >= data2 && choice === true){
        loadNewData(2, newData, data1, data2, ++streak);
        
        $(document).ready(function(){
            $("#gc1bg").click(function(){
                $("#gc2bg").addClass("gameChoiceGoUp");
            })
            $("#gc2bg").on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
                $(this).removeClass("gameChoiceGoUp");
            })

        })

    }

    //clicking on the second choice and it does have a larger member count
    else if (data2 >= data1 && choice === false){
        loadNewData(1, newData, data1, data2, ++streak);

        $(document).ready(function(){
            $("#gc2bg").click(function(){
                $("#gc1bg").addClass("gameChoiceGoUp");
            })
            $("#gc1bg").on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
                $(this).removeClass("gameChoiceGoUp");
            })

        })
    }
    else {
        loseGame(streak);
    }
}