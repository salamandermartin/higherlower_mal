// function jsonDataLoad(jsonString){
//     animeListData = JSON.parse(jsonString.replaceAll("&#34;", '"'));
//     //console.log(animeListData.data[0]);s
//     return animeListData;
// }

function loadGameStart(data1, data2) {
    document.querySelector('body').innerHTML = '<div id="ipBackground"></div>';

    document.getElementById('ipBackground').innerHTML = `<div id="gc1bg" class = "gameChoice" style="float:left"></div>       \
                                                        <div id="gc2bg" class = "gameChoice" style="margin-left:50%; background-color:red"></div>`;


    //initial data populating for first 2 choices
    document.getElementById('gc1bg').innerHTML = `<div class="gameChoiceContent" onclick="choose(${data1.num_list_users}, ${data2.num_list_users}, true, 0, animePool.queryData(animePool.pullFromPool()))"> <div id = "content1"></div> </div>`;
    document.getElementById('gc2bg').innerHTML = `<div class="gameChoiceContent" onclick="choose(${data1.num_list_users}, ${data2.num_list_users}, false, 0, animePool.queryData(animePool.pullFromPool()))"> <div id = "content2"></div> </div>`;

    document.getElementById('gc1bg').style.backgroundImage = `url("${data1.main_picture.large}")`;
    document.getElementById('gc2bg').style.backgroundImage = `url("${data2.main_picture.large}")`;



    document.getElementById('content1').innerHTML = `<h2>${data1.title}</h2> <br /> <p>${data1.num_list_users}</p>`;
    document.getElementById('content2').innerHTML = `<h2>${data2.title}</h2> <br /> <p>${data2.num_list_users}</p>`;
}

function loseGame(){

}

function loadNewData(removeNum, newData){
    if (removeNum == 2){
        document.getElementById(`gc${removeNum}bg`).innerHTML = `<div class="gameChoiceContent" onclick="choose(${data1.num_list_users}, ${newData.num_list_users}, true, 0, animePool.queryData(animePool.pullFromPool()))"> <div id = "content1"></div> </div>`;
    }
    else{
        document.getElementById(`gc${removeNum}bg`).innerHTML = `<div class="gameChoiceContent" onclick="choose(${newData.num_list_users}, ${data2.num_list_users}, true, 0, animePool.queryData(animePool.pullFromPool()))"> <div id = "content1"></div> </div>`;
    }
    
    document.getElementById(`gc${removeNum}bg`).style.backgroundImage = `url("${newData.main_picture.large}")`;
    document.getElementById(`content${removeNum}`).innerHTML = `<h2>${newData.title}</h2> <br /> <p>${newData.num_list_users}</p>`;

}

function choose(data1, data2, choice, streak, newData){
    if (data1 >= data2 && choice == true){
        streak++;
        data2 = newData.num_list_users;
        console.log(streak);
        loadNewData(2, newData);
    }
    else if (data2 >= data1 && choice == false){
        streak++;
        data1 = newData.num_list_users;
        console.log(streak);
        loadNewData(1, newData);
    }
    else {
        loseGame();
    }
}