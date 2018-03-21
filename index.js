var menu = document.getElementById("menu"),
    controls = document.getElementById("controls"),
    mtop = 0,
    mleft = 0,
    mheight = 300;

function expandMenu(){
    controls.style.bottom = 63+"px";
};

function changeColor(){
    document.getElementById("background").style.backgroundImage = "url('"+bgimg.value+"')";
};

function changeTitle(){
    document.getElementById("title").innerHTML = inputtitle.value;
};

function changeDescription(){
    document.getElementById("des").innerHTML = inputdes.value;
};

function changeBG(){
    document.getElementById("title").style.backgroundColor = changecolor.value;
    document.getElementById("des").style.backgroundColor = changecolor.value;
};

function moveBG(keyCode){
    if(keyCode == 38){
        mtop = mtop + 10
        document.getElementById("background").style.bottom = mtop+"px";
    }
    else if(keyCode == 40){
        mtop = mtop - 10
        document.getElementById("background").style.bottom = mtop+"px";
    }
    else if(keyCode == 37){
        mleft = mleft + 10
        document.getElementById("background").style.right = mleft+"px";
    }
    else if(keyCode == 39){
        mleft = mleft - 10
        document.getElementById("background").style.right = mleft+"px";
    }
    else if(keyCode == 187){
        mheight = mheight + 10
        document.getElementById("background").style.height = mheight+"px";
    }
    else if(keyCode == 189){
        mheight = mheight - 10
        document.getElementById("background").style.height = mheight+"px";
    }
};

menu.addEventListener("click",function(){
    expandMenu()
});

document.getElementById("bgimg").addEventListener("keyup",function(ev){
    if(ev.keyCode == 13){
        changeColor()
    }
});

document.getElementById("inputtitle").addEventListener("keyup",function(ev){
    if(ev.keyCode != 0){
        changeTitle()
    }
});

document.getElementById("inputdes").addEventListener("keyup",function(ev){
    if(ev.keyCode != 0){
        changeDescription()
    }
});

document.getElementById("changecolor").addEventListener("change",function(){
    changeBG()
});

document.addEventListener("keydown",function(ev){
    moveBG(ev.keyCode);
    /*if(ev.keyCode == 38){
        mtop = mtop + 10
        document.getElementById("background").style.bottom = mtop+"px";
    }
    else if(ev.keyCode == 40){
        mtop = mtop - 10
        document.getElementById("background").style.bottom = mtop+"px";
    }
    else if(ev.keyCode == 37){
        mleft = mleft + 10
        document.getElementById("background").style.right = mleft+"px";
    }
    else if(ev.keyCode == 39){
        mleft = mleft - 10
        document.getElementById("background").style.right = mleft+"px";
    }
    else if(ev.keyCode == 187){
        mheight = mheight + 10
        document.getElementById("background").style.height = mheight+"px";
    }
    else if(ev.keyCode == 189){
        mheight = mheight - 10
        document.getElementById("background").style.height = mheight+"px";
    }*/
});

document.getElementById("bgimg").addEventListener("keyup",function(ev){
    if(ev.keyCode == 13){
        if(bgimg.value == "horse"){
            document.getElementById("background").style.backgroundImage = "url('h.png')";
        }
        else if(bgimg.value == "night"){
            document .getElementById("background").style.backgroundImage = "url('n.png')";
        }
        else if(bgimg.value == "mountain"){
            document.getElementById("background").style.backgroundImage = "url('m.png')";
        }
        else if((bgimg.value.indexOf("epic")) >= 0){
            document.getElementById("background").style.backgroundImage = "url('epic.png')";
        }
    }
});

document.getElementById("plus").addEventListener("click",function(){
    var newBG = document.createElement("div");
    newBG.className = "col-xs-12 col-sm-6 col-md-4 col-lg-3";
    document.getElementById("Row").appendChild(newBG);
    var newTitle = document.createElement("div");
    newTitle.className = "newtitle";
    newBG.appendChild(newTitle);
    var newPara = document.createElement("div");
    newPara.className = "newpara";
    newBG.appendChild(newPara);
    
    newTitle.innerHTML = document.getElementById("title").innerHTML;
    newPara.innerHTML = document.getElementById("des").innerHTML;
    newBG.style.backgroundImage = document.getElementById("background").style.backgroundImage;
});