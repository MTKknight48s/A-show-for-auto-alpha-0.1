var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["26f5fee4-24f3-4f53-860a-f7085e839de3","924f9669-e446-4b1b-80df-c609002222e3","dbea2e2a-fd24-4967-a610-b79677e30563","22425c97-496c-4b60-9d1d-68f753660078","d3361484-cf9b-40ae-9a8b-0e1140f795bb","4058ad79-f689-44fe-9a9e-68be485dbf4f","03cf0789-2f18-4747-b3eb-761292ecb93b","96dadcaa-2917-4ddc-b95d-0ac98804c4f1","a57fdc38-fd08-4ff9-9033-47bef3e28389","7ac0abde-5b1c-48a4-8cfe-91cfb86a9b84","d082cb8d-f77d-4411-b2dd-e72fe9fa09d2","d69caaa6-0e9b-4181-a7aa-bb37acd13fa7","821c03b4-bbcb-4a53-8236-7410f90eea46","4d6305b0-07ea-4a02-808a-f9852beeaf98","d32fb1bc-9629-4557-9206-2273407082df","b372a8cd-009f-48f1-bd98-1c8696e3f3a6","e069b17b-38bd-4c7a-8f42-598a76f34b3f"],"propsByKey":{"26f5fee4-24f3-4f53-860a-f7085e839de3":{"name":"Logo","sourceUrl":null,"frameSize":{"x":100,"y":51},"frameCount":1,"looping":true,"frameDelay":12,"version":"VX5tar5H1gjGoE5QXokwne5XbCMpA2oi","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":51},"rootRelativePath":"assets/26f5fee4-24f3-4f53-860a-f7085e839de3.png"},"924f9669-e446-4b1b-80df-c609002222e3":{"name":"qf2.1","sourceUrl":"assets/v3/animations/2CkVhYdhV1H5ar9ubTp4MbqN8eaqrFWWQkVkCkQle5U/924f9669-e446-4b1b-80df-c609002222e3.png","frameSize":{"x":761,"y":425},"frameCount":1,"looping":true,"frameDelay":4,"version":"p4qMeIOAefQrdSoJQxI1llUYuGmH61FD","loadedFromSource":true,"saved":true,"sourceSize":{"x":761,"y":425},"rootRelativePath":"assets/v3/animations/2CkVhYdhV1H5ar9ubTp4MbqN8eaqrFWWQkVkCkQle5U/924f9669-e446-4b1b-80df-c609002222e3.png"},"dbea2e2a-fd24-4967-a610-b79677e30563":{"name":"qf22","sourceUrl":null,"frameSize":{"x":620,"y":350},"frameCount":1,"looping":true,"frameDelay":12,"version":"UE7IU3NWGzf9BIs8qNFN2n5g7xz0dpBu","loadedFromSource":true,"saved":true,"sourceSize":{"x":620,"y":350},"rootRelativePath":"assets/dbea2e2a-fd24-4967-a610-b79677e30563.png"},"22425c97-496c-4b60-9d1d-68f753660078":{"name":"qf23","sourceUrl":"assets/v3/animations/2CkVhYdhV1H5ar9ubTp4MbqN8eaqrFWWQkVkCkQle5U/22425c97-496c-4b60-9d1d-68f753660078.png","frameSize":{"x":621,"y":350},"frameCount":1,"looping":true,"frameDelay":4,"version":"pG4gC6o29bFt72RONjjXOWbqgbRNANKx","loadedFromSource":true,"saved":true,"sourceSize":{"x":621,"y":350},"rootRelativePath":"assets/v3/animations/2CkVhYdhV1H5ar9ubTp4MbqN8eaqrFWWQkVkCkQle5U/22425c97-496c-4b60-9d1d-68f753660078.png"},"d3361484-cf9b-40ae-9a8b-0e1140f795bb":{"name":"qf24","sourceUrl":"assets/v3/animations/2CkVhYdhV1H5ar9ubTp4MbqN8eaqrFWWQkVkCkQle5U/d3361484-cf9b-40ae-9a8b-0e1140f795bb.png","frameSize":{"x":849,"y":350},"frameCount":1,"looping":true,"frameDelay":4,"version":"y6YCWxcxDToy89jrstN0FbXwv_1AdRPm","loadedFromSource":true,"saved":true,"sourceSize":{"x":849,"y":350},"rootRelativePath":"assets/v3/animations/2CkVhYdhV1H5ar9ubTp4MbqN8eaqrFWWQkVkCkQle5U/d3361484-cf9b-40ae-9a8b-0e1140f795bb.png"},"4058ad79-f689-44fe-9a9e-68be485dbf4f":{"name":"Aventador S.jpg_1","sourceUrl":"assets/v3/animations/2CkVhYdhV1H5ar9ubTp4MbqN8eaqrFWWQkVkCkQle5U/4058ad79-f689-44fe-9a9e-68be485dbf4f.png","frameSize":{"x":1151,"y":768},"frameCount":1,"looping":true,"frameDelay":4,"version":"HbGvRUDopFpC6QLBQ9k2fHfkyQJtSEIF","loadedFromSource":true,"saved":true,"sourceSize":{"x":1151,"y":768},"rootRelativePath":"assets/v3/animations/2CkVhYdhV1H5ar9ubTp4MbqN8eaqrFWWQkVkCkQle5U/4058ad79-f689-44fe-9a9e-68be485dbf4f.png"},"03cf0789-2f18-4747-b3eb-761292ecb93b":{"name":"Veneno.jpg_1","sourceUrl":"assets/v3/animations/2CkVhYdhV1H5ar9ubTp4MbqN8eaqrFWWQkVkCkQle5U/03cf0789-2f18-4747-b3eb-761292ecb93b.png","frameSize":{"x":730,"y":500},"frameCount":1,"looping":true,"frameDelay":4,"version":"K9zvPZXd_T4LIIw1OoppeXQ5dh3lop5w","loadedFromSource":true,"saved":true,"sourceSize":{"x":730,"y":500},"rootRelativePath":"assets/v3/animations/2CkVhYdhV1H5ar9ubTp4MbqN8eaqrFWWQkVkCkQle5U/03cf0789-2f18-4747-b3eb-761292ecb93b.png"},"96dadcaa-2917-4ddc-b95d-0ac98804c4f1":{"name":"huracan evo.jpg_1","sourceUrl":"assets/v3/animations/2CkVhYdhV1H5ar9ubTp4MbqN8eaqrFWWQkVkCkQle5U/96dadcaa-2917-4ddc-b95d-0ac98804c4f1.png","frameSize":{"x":1240,"y":620},"frameCount":1,"looping":true,"frameDelay":4,"version":"gOoyHxkEvn21xZIrwF48ah1OLyAdeh7j","loadedFromSource":true,"saved":true,"sourceSize":{"x":1240,"y":620},"rootRelativePath":"assets/v3/animations/2CkVhYdhV1H5ar9ubTp4MbqN8eaqrFWWQkVkCkQle5U/96dadcaa-2917-4ddc-b95d-0ac98804c4f1.png"},"a57fdc38-fd08-4ff9-9033-47bef3e28389":{"name":"918.jpg_1","sourceUrl":"assets/v3/animations/2CkVhYdhV1H5ar9ubTp4MbqN8eaqrFWWQkVkCkQle5U/a57fdc38-fd08-4ff9-9033-47bef3e28389.png","frameSize":{"x":728,"y":410},"frameCount":1,"looping":true,"frameDelay":4,"version":"mtn9tWBFTIhIxPrPXzb85ngR4nevFOyb","loadedFromSource":true,"saved":true,"sourceSize":{"x":728,"y":410},"rootRelativePath":"assets/v3/animations/2CkVhYdhV1H5ar9ubTp4MbqN8eaqrFWWQkVkCkQle5U/a57fdc38-fd08-4ff9-9033-47bef3e28389.png"},"7ac0abde-5b1c-48a4-8cfe-91cfb86a9b84":{"name":"720s.jpg_1","sourceUrl":"assets/v3/animations/2CkVhYdhV1H5ar9ubTp4MbqN8eaqrFWWQkVkCkQle5U/7ac0abde-5b1c-48a4-8cfe-91cfb86a9b84.png","frameSize":{"x":416,"y":234},"frameCount":1,"looping":true,"frameDelay":4,"version":"LowC_O9hUABnytXJDZz5XE9VEpuOGlcN","loadedFromSource":true,"saved":true,"sourceSize":{"x":416,"y":234},"rootRelativePath":"assets/v3/animations/2CkVhYdhV1H5ar9ubTp4MbqN8eaqrFWWQkVkCkQle5U/7ac0abde-5b1c-48a4-8cfe-91cfb86a9b84.png"},"d082cb8d-f77d-4411-b2dd-e72fe9fa09d2":{"name":"959.jpg_1","sourceUrl":"assets/v3/animations/2CkVhYdhV1H5ar9ubTp4MbqN8eaqrFWWQkVkCkQle5U/d082cb8d-f77d-4411-b2dd-e72fe9fa09d2.png","frameSize":{"x":576,"y":288},"frameCount":1,"looping":true,"frameDelay":4,"version":"9od2irwwVIyU4ZoBV.oh3LXiUz9N7HW7","loadedFromSource":true,"saved":true,"sourceSize":{"x":576,"y":288},"rootRelativePath":"assets/v3/animations/2CkVhYdhV1H5ar9ubTp4MbqN8eaqrFWWQkVkCkQle5U/d082cb8d-f77d-4411-b2dd-e72fe9fa09d2.png"},"d69caaa6-0e9b-4181-a7aa-bb37acd13fa7":{"name":"911 Turbo S.jpg_1","sourceUrl":"assets/v3/animations/2CkVhYdhV1H5ar9ubTp4MbqN8eaqrFWWQkVkCkQle5U/d69caaa6-0e9b-4181-a7aa-bb37acd13fa7.png","frameSize":{"x":589,"y":332},"frameCount":1,"looping":true,"frameDelay":4,"version":"uKP._RorFuPqJG7aCesU7HliNbgPKL3z","loadedFromSource":true,"saved":true,"sourceSize":{"x":589,"y":332},"rootRelativePath":"assets/v3/animations/2CkVhYdhV1H5ar9ubTp4MbqN8eaqrFWWQkVkCkQle5U/d69caaa6-0e9b-4181-a7aa-bb37acd13fa7.png"},"821c03b4-bbcb-4a53-8236-7410f90eea46":{"name":"P1.jpg_1","sourceUrl":"assets/v3/animations/2CkVhYdhV1H5ar9ubTp4MbqN8eaqrFWWQkVkCkQle5U/821c03b4-bbcb-4a53-8236-7410f90eea46.png","frameSize":{"x":533,"y":300},"frameCount":1,"looping":true,"frameDelay":4,"version":"Jv4vOUPKf6TMQulalJxWQApqY.a5.Vwe","loadedFromSource":true,"saved":true,"sourceSize":{"x":533,"y":300},"rootRelativePath":"assets/v3/animations/2CkVhYdhV1H5ar9ubTp4MbqN8eaqrFWWQkVkCkQle5U/821c03b4-bbcb-4a53-8236-7410f90eea46.png"},"4d6305b0-07ea-4a02-808a-f9852beeaf98":{"name":"countach.jpg_1","sourceUrl":"assets/v3/animations/2CkVhYdhV1H5ar9ubTp4MbqN8eaqrFWWQkVkCkQle5U/4d6305b0-07ea-4a02-808a-f9852beeaf98.png","frameSize":{"x":445,"y":300},"frameCount":1,"looping":true,"frameDelay":4,"version":"wxnALbWEwEwdJbYOzqx8kWCzpUAE2CXY","loadedFromSource":true,"saved":true,"sourceSize":{"x":445,"y":300},"rootRelativePath":"assets/v3/animations/2CkVhYdhV1H5ar9ubTp4MbqN8eaqrFWWQkVkCkQle5U/4d6305b0-07ea-4a02-808a-f9852beeaf98.png"},"d32fb1bc-9629-4557-9206-2273407082df":{"name":"Mclaren F1.jpg_1","sourceUrl":"assets/v3/animations/2CkVhYdhV1H5ar9ubTp4MbqN8eaqrFWWQkVkCkQle5U/d32fb1bc-9629-4557-9206-2273407082df.png","frameSize":{"x":400,"y":297},"frameCount":1,"looping":true,"frameDelay":4,"version":"5Zpq2EYfWpdqqVMMb1gOrn9xlT3xZ_wf","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":297},"rootRelativePath":"assets/v3/animations/2CkVhYdhV1H5ar9ubTp4MbqN8eaqrFWWQkVkCkQle5U/d32fb1bc-9629-4557-9206-2273407082df.png"},"b372a8cd-009f-48f1-bd98-1c8696e3f3a6":{"name":"2018-Porsche-911-GT3-RS-review.jpg_1","sourceUrl":"assets/v3/animations/2CkVhYdhV1H5ar9ubTp4MbqN8eaqrFWWQkVkCkQle5U/b372a8cd-009f-48f1-bd98-1c8696e3f3a6.png","frameSize":{"x":449,"y":300},"frameCount":1,"looping":true,"frameDelay":4,"version":"Fh5tWBHbNRArvceE6kTUR5crpnuXRj8_","loadedFromSource":true,"saved":true,"sourceSize":{"x":449,"y":300},"rootRelativePath":"assets/v3/animations/2CkVhYdhV1H5ar9ubTp4MbqN8eaqrFWWQkVkCkQle5U/b372a8cd-009f-48f1-bd98-1c8696e3f3a6.png"},"e069b17b-38bd-4c7a-8f42-598a76f34b3f":{"name":"600LT.jpg_1","sourceUrl":"assets/v3/animations/2CkVhYdhV1H5ar9ubTp4MbqN8eaqrFWWQkVkCkQle5U/e069b17b-38bd-4c7a-8f42-598a76f34b3f.png","frameSize":{"x":640,"y":427},"frameCount":1,"looping":true,"frameDelay":4,"version":"_J3FwOwBp2HUAnRUR5T7lfFFDU_mxVZE","loadedFromSource":true,"saved":true,"sourceSize":{"x":640,"y":427},"rootRelativePath":"assets/v3/animations/2CkVhYdhV1H5ar9ubTp4MbqN8eaqrFWWQkVkCkQle5U/e069b17b-38bd-4c7a-8f42-598a76f34b3f.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

 var Logo = createSprite(300,40,1,1);
Logo.setAnimation("Logo");
var gameState = "mainmenu";
//playSound("assets/category_loops/vibrant_game_harping_down_forever_loop_2_accent.mp3",true);
function draw() {
  background("maroon");
  drawSprites();
  fill("White");
  textSize(14);
  text("v0.1 (alpha)",320,390);
  textSize(30);
  text("AutoShow",110,50);
  textSize(15);
  if (gameState === "mainmenu"){
   text("Welcome to AutoShow",147.5,150);
   text("Press the spacebar to begin",130,170);
  }
  /*if (keyDown("space")) {
    gameState="q1";
    playSound("assets/category_pop/tech_bubble_pop_notification.mp3");
  }*/
 if ((keyDown("space"))&&(gameState === "mainmenu")) {
   gameState = "q1";
   playSound("assets/category_pop/tech_bubble_pop_notification.mp3");
 } 
 
 if (gameState === "q1") {
   text("Out of these brands, which one do you prefer?",50,130);
   text("Press the arrow key accordingly",100,150);
   text("1.Ferrari (^)",160,200);
   text("2.Lamborghini(>)",160,220);
   text("3.Porsche(<)",160,240);
   text("4.Mclaren(V)",160,260);
   //if(keyDown(UP_ARROW))
 }
 if ((gameState === "q1")&&(keyDown(UP_ARROW))){
   gameState = "qf2";
   playSound("assets/category_pop/tech_bubble_pop_notification.mp3");
 }
 if ((gameState ==="q1")&&(keyDown(RIGHT_ARROW))){
   gameState = "ql2";
   playSound("assets/category_pop/tech_bubble_pop_notification.mp3");
 }
 if ((gameState==="q1")&&(keyDown(LEFT_ARROW))){
   gameState = "qp2";
   playSound("assets/category_pop/tech_bubble_pop_notification.mp3");
 }
 if ((gameState==="q1")&&(keyDown(DOWN_ARROW))) {
   gameState= "qm2";
   playSound("assets/category_pop/tech_bubble_pop_notification.mp3");
 }
 if (gameState==="qf2") {
   text("Which Model?",165,150);
   text("1.812 Superfast (^)",160,200);
   text("2.Laferrari (>)",160,220);
   text("3.F8 Tributo (<)",160,240);
   text("4. F40 (V)",160,260);
   if ((keyDown(UP_ARROW))&&(keyDown("space"))&&(gameState==="qf2")) {
     gameState="qf21";
     playSound("assets/category_pop/tech_bubble_pop_notification.mp3");
   }
   if ((keyDown(RIGHT_ARROW))&&(keyDown("space"))&&(gameState==="qf2")){
     gameState="qf22";
      playSound("assets/category_pop/tech_bubble_pop_notification.mp3");
   }
   if ((keyDown(LEFT_ARROW))&&(keyDown("space"))&&(gameState==="qf2")) {
     gameState="qf23";
     playSound("assets/category_pop/tech_bubble_pop_notification.mp3");
   }
   if ((keyDown(DOWN_ARROW))&&(keyDown("space"))&&(gameState==="qf2")) {
     gameState="qf24";
     playSound("assets/category_pop/tech_bubble_pop_notification.mp3");
     if (keyDown("space")) {
      gameState="q1";
      playSound("assets/category_pop/tech_bubble_pop_notification.mp3");
    }
   }
 
 }
if (gameState === "ql2") {
  text("Which Model?",165,150);
  text("1.Aventador S (^)",160,200);
  text("2.Veneno (>)",160,220);
  text("3.Huracan EVO (<)",160,240);
  text("4.Countach(V)",160,260);
   if (keyDown("space")) {
     gameState="q1";
     playSound("assets/category_pop/tech_bubble_pop_notification.mp3");
   }
}
if (gameState ==="qp2") {
  text("Which Model?",165,150);
  text("1.Porsche 911 Turbo S (^)",160,200);
  text("2.Porsche 918 Spyder (>)",160,220);
  text("3.Porsche 911 GT3 RS (<)",160,240);
  text("4.Porsche 959 (V)",160,260);
   if (keyDown("space")) {
     gameState="q1";
     playSound("assets/category_pop/tech_bubble_pop_notification.mp3");
   }
}
if (gameState === "qm2") {
  text("Which Model?",165,150);
  text("1. Mclaren 720s (^)",160,200);
  text("2. Mclaren P1 (>)",160,220);
  text("3. Mclaren 600LT (<)",160,240);
  text("4. Mclaren F1 (V)",160,260);
   if (keyDown("space")) {
     gameState="q1";
     playSound("assets/category_pop/tech_bubble_pop_notification.mp3");
   }
}
  if (gameState==="qf21") {
    var es = createSprite(200,200,20,20);
    es.setAnimation("qf2.1");
    es.scale=0.4;
    text("6.5 Liter NA V12",50,300);
    text("789 Horsepower",50,320);
    text("718 NM of torque",50,340);
    text("Nurburging time of 7:27",50,360);
    text("0-60 in 2.7 seconds",200,300);
    text("Quarter Mile in 10.4 seconds",200,320);
    text("Top Speed of 211 MPH",200,340);
    
    }
  if (gameState==="qf22") {
    var el = createSprite(200,200,20,20);
    el.setAnimation("qf22");
    el.scale=0.7;
    text("6.3 Liter NA V12 w/ HY-KERS setup",50,300);
    text("963 Horsepower",50,320);
    text("900 NM of torque,50,340");
    text("0-60 in 2.5 seconds", 50,340);
    text("Quarter Mile time of 9.65",50,360);
    text("Top Speed of 218 MPH",50,380);
    
  }
  if (gameState==="qf23") {
    var ef = createSprite(200,200,20,20);
    ef.setAnimation("qf23");
    ef.scale=0.59;
    text("3.9 Liter Twin Turbo V8",30,315);
    text("710 Horsepower",30,335);
    text("770 NM of torque",30,355);
    text("0-60 in 2.8 seconds",30,375);
    text("Quarter mile time of 10.5 secs",175,335);
    text("Top Speed of 211 MPH",175,355);
  }
  if (gameState==="qf24") {
    var eff = createSprite(200,200,20,20);
    eff.setAnimation("qf24");
    eff.scale=0.5530;
    text("2.9 Liter Twin Turbo V8",50,310);
    text("471 Horsepower",50,330);
    text("577 NM of torque",50,350);
    text("Nurburging time of 7:46 seconds",50,370);
    text("0-60 in 4.2 seconds",230,310);
    text("Quarter Mile in 11.8 seconds",230,330);
    text("Top Speed of 201 MPH",230,350);
  }
}
  
  
  
  

  
  
  





  
 

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
