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
    document.getElementById('gc1bg').innerHTML = '<div class="gameChoiceContent"> <div id = "content1"></div> </div>';
    document.getElementById('gc2bg').innerHTML = '<div class="gameChoiceContent"> <div id = "content2"></div> </div>';

    document.getElementById('gc1bg').style.backgroundImage = `url("${data1.main_picture.large}")`;
    document.getElementById('gc2bg').style.backgroundImage = `url("${data2.main_picture.large}")`;



    document.getElementById('content1').innerHTML = `<h2>${data1.title}</h2>`;
    document.getElementById('content2').innerHTML = `<h2>${data2.title}</h2>`;

}

