a=document.getElementById('but');
b=document.getElementById('mine');
var www=document.getElementsByClassName('w');

c=1;

a.onclick=run;

function run() { 
  for(i=0;i<16;i++) {
  // b.innerHTML=b.innerHTML+"<div class='w'><a href='#'>"+c+"</a></div>";c++ 
    b.innerHTML=b.innerHTML+"<div class='w'></div>";
	
	c++ 
}
      on();
}

// function color () {
	// www[49].style.background="black"
// }
function on(){
	  for(i=0;i<www.length;i++){
	  www[i].onclick=color
	  }
	  
    }

function color() {
	  // this.style.background="black";
	  this.style.transform="scale(-1,1)";
	  this.addEventListener("transitionend", showMessage, false);
	  
	  }
	  
	  function showMessage() {
		 
		   // this.style.backgroundImage='url(img/c'+i+'.png)';
		  
      this.innerHTML="<img src='http://bm.img.com.ua/nxs/img/prikol/images/large/4/3/31834_5792.jpg'>";
	  
	  
}


// url(img/c'+arr[i]+'.png)








