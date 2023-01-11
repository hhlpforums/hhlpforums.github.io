
activekeys = [0,0,0,0,0,0];
			
  document.onkeydown = function (e) {
  if(e.key=="w"){
  activekeys[0] = 1;
  }else if(e.key=="a"){
  activekeys[1] = 1;
  }else if(e.key=="s"){
  activekeys[2] = 1;
  }else if(e.key=="d"){
  activekeys[3] = 1;
  }else if(e.key=="ArrowRight"){
  activekeys[4] = 1;
  }else if(e.key=="ArrowLeft"){
  activekeys[5] = 1;
  }else if(e.key =="h") {
  ambience();
  }
};

document.onkeyup = function (e) {
  if(e.key=="w"){
  activekeys[0] = 0;
  }else if(e.key=="a"){
  activekeys[1] = 0;
  }else if(e.key=="s"){
  activekeys[2] = 0;
  }else if(e.key=="d"){
  activekeys[3] = 0;
  }else if(e.key=="ArrowRight"){
  activekeys[4] = 0;
  }else if(e.key=="ArrowLeft"){
  activekeys[5] = 0;
  }
};

function checkkeys() {
if(activekeys[0] == 1){
camera.translate.z(-0.05);
}

if(activekeys[1] == 1){
camera.translate.x(-0.05);
}

if(activekeys[2] == 1){
camera.translate.z(0.05);
}

if(activekeys[3] == 1){
camera.translate.x(0.05);
}

if(activekeys[4] == 1){
camera.rotation.y -= 0.03;
}

if(activekeys[5] == 1){
camera.rotation.y += 0.03;
}
}

