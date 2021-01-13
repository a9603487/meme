
let pic;
let picc;
function preload(){
  pic1= loadImage('21.png'); //載入圖片
  pic12= loadImage('2.png');
  pic2= loadImage('4.png');
  pic22= loadImage('41.png');
  pic3= loadImage('3.png'); 
  pic32= loadImage('31.png'); 
  pic4= loadImage('1.png');
   pic42= loadImage('11.png');
  pic5= loadImage('5.png'); 
    pic52= loadImage('51.png'); 
 sound1= loadSound('5656.m4a');
sound2 = loadSound('7778.m4a');
   pic77= loadImage('bg.png');
}

function setup(){
  createCanvas(1200 , 1650);
 background(pic77);}

function mousePressed(){
  tint(250, 270); // 半透明
  
  
  
  
 
  
  if(mouseX>0&&mouseX<300&&mouseY<350)
  {
    //tint(250, 10); // 半透明
  image(pic1, 00,0,pic1.width / 2, 
        pic1.height / 2);
  
    sound1.play(); 
  }
  if(mouseX>300&&mouseX<600&&mouseY<350)
  {
    //tint(250, 10); // 半透明
  image(pic1, 300,0,pic1.width / 2, 
        pic1.height / 2);
   tint(250, 30); // 半透明 
   image(pic12, 300,0,pic12.width / 2, 
        pic12.height / 2);
    sound1.play(); 
  }
   if(mouseX>600&&mouseX<900&&mouseY<350)
  {
    
  image(pic1, 600,0,pic1.width / 2, 
        pic1.height / 2);
   tint(250, 100); // 半透明 
   image(pic12, 600,0,pic12.width / 2, 
        pic12.height / 2);
     sound1.play(); 
  }
   if(mouseX>900&&mouseX<1200&&mouseY<350)
  {
    
  image(pic1, 900,0,pic1.width / 2, 
        pic1.height / 2);
   tint(250, 250); // 半透明 
   image(pic12, 900,0,pic12.width / 2, 
        pic12.height / 2);
     sound2.play(); 
  }
  
  
  
  //222222222222222222222222222
  if(mouseX>0&&mouseX<300&&mouseY>350&&mouseY<650)
  {
    //tint(250, 10); // 半透明
  image(pic2, 0,350,pic2.width / 2, 
        pic2.height / 2);
  sound1.play(); 
  }
  if(mouseX>300&&mouseX<600&&mouseY>350&&mouseY<650)
  {
    //tint(250, 10); // 半透明
  image(pic2, 300,350,pic2.width / 2, 
        pic2.height / 2);
   tint(250, 50); // 半透明 
   image(pic22, 300,350,pic22.width / 2, 
        pic22.height / 2);
     sound1.play(); 
  }
   if(mouseX>600&&mouseX<900&&mouseY>350&&mouseY<650)
  {
    //tint(250, 10); // 半透明
  image(pic2, 600,350,pic2.width / 2, 
        pic2.height / 2);
   tint(250, 120); // 半透明 
   image(pic22, 600,350,pic22.width / 2, 
        pic22.height / 2);
     sound1.play(); 
  }
  if(mouseX>900&&mouseX<1200&&mouseY>350&&mouseY<650)
  {
    //tint(250, 10); // 半透明
  image(pic2, 900,350,pic2.width / 2, 
        pic2.height / 2);
   tint(250, 250); // 半透明 
   image(pic22, 900,350,pic22.width / 2, 
        pic22.height / 2);
     sound2.play(); 
  }
  
  //33333333333333333333333333333333
  if(mouseX>0&&mouseX<300&&mouseY>650&&mouseY<950)
  {
    //tint(250, 10); // 半透明
  image(pic32, 0,700,pic32.width / 2, 
        pic32.height / 2);
   sound1.play(); 
  }
  if(mouseX>300&&mouseX<600&&mouseY>650&&mouseY<950)
  {
    //tint(250, 10); // 半透明
  image(pic32, 300,700,pic32.width / 2, 
        pic32.height / 2);
   tint(250, 50); // 半透明 
   image(pic3, 300,700,pic3.width / 2, 
        pic3.height / 2);
     sound1.play(); 
  }
  if(mouseX>600&&mouseX<900&&mouseY>650&&mouseY<950)
  {
    //tint(250, 10); // 半透明
  image(pic32, 600,700,pic32.width / 2, 
        pic32.height / 2);
   tint(250, 120); // 半透明 
   image(pic3, 600,700,pic3.width / 2, 
        pic3.height / 2);
     sound1.play(); 
  }
  if(mouseX>900&&mouseX<1200&&mouseY>650&&mouseY<950)
  {
    //tint(250, 10); // 半透明
  image(pic32, 900,700,pic32.width / 2, 
        pic32.height / 2);
   tint(250, 250); // 半透明 
   image(pic3, 900,700,pic3.width / 2, 
        pic3.height / 2);
     sound2.play(); 
  }
  //4444444444444444444
 
  if(mouseX>0&&mouseX<300&&mouseY>1050&&mouseY<1350)
  {
    //tint(250, 10); // 半透明
  image(pic42, 0,1050,pic42.width / 2, 
        pic42.height / 2);
  sound1.play(); 
  }if(mouseX>300&&mouseX<600&&mouseY>1050&&mouseY<1350)
  {
    //tint(250, 10); // 半透明
  image(pic42, 300,1050,pic42.width / 2, 
        pic42.height / 2);
   tint(250, 50); // 半透明 
   image(pic4, 300,1050,pic4.width / 2, 
        pic4.height / 2);
     sound1.play(); 
  }
  if(mouseX>600&&mouseX<900&&mouseY>1050&&mouseY<1350)
  {
    //tint(250, 10); // 半透明
  image(pic42, 600,1050,pic42.width / 2, 
        pic42.height / 2);
   tint(250, 120); // 半透明 
   image(pic4, 600,1050,pic4.width / 2, 
        pic4.height / 2);
     sound1.play(); 
  }
  if(mouseX>900&&mouseX<1200&&mouseY>1050&&mouseY<1350)
  {
    //tint(250, 10); // 半透明
  image(pic42, 900,1050,pic42.width / 2, 
        pic42.height / 2);
   tint(250, 250); // 半透明 
   image(pic4, 900,1050,pic4.width / 2, 
        pic4.height / 2);
     sound2.play(); 
  }
  //555555555555
  
   if(mouseX>0&&mouseX<300&&mouseY>1350&&mouseY<1650)
  {sound1.play(); 
    //tint(250, 10); // 半透明
  image(pic52, 0,1400,pic52.width / 2, 
        pic52.height / 2);
   
  } 
  if(mouseX>300&&mouseX<600&&mouseY>1350&&mouseY<1650)
  {
    //tint(250, 10); // 半透明
  image(pic52, 300,1400,pic52.width / 2, 
        pic52.height / 2);
   tint(250, 50); // 半透明 
   image(pic5, 300,1400,pic5.width / 2, 
        pic5.height / 2);
     sound1.play(); 
  }
  if(mouseX>600&&mouseX<900&&mouseY>1350&&mouseY<1650)
  {
    //tint(250, 10); // 半透明
  image(pic52, 600,1400,pic52.width / 2, 
        pic52.height / 2);
   tint(250, 120); // 半透明 
   image(pic5, 600,1400,pic5.width / 2, 
        pic5.height / 2);
     sound1.play(); 
  }
  if(mouseX>900&&mouseX<1200&&mouseY>1350&&mouseY<1650)
  {
    //tint(250, 10); // 半透明
  image(pic52, 900,1400,pic52.width / 2, 
        pic52.height / 2);
   tint(250, 250); // 半透明
   image(pic5, 900,1400,pic5.width / 2, 
        pic5.height / 2);
     sound2.play(); 
  }
  
  line(300,0,300,height);
  line(600,0,600,height);
  line(900,0,900,height);
  
}