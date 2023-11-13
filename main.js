
// Crie a variável canvas
var canvas = new fabric.Canvas('myCanvas');
//Defina as posições iniciais das imagens da bola e do buraco.
ball_y=0;
ball_x=0;
hole_y=400;
hole_x=800;

block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.image.fromURL("golf-b.png", function(img) {
		hole_obj = img;
		hole_obj.scaleToWidht(50);
		hole_obj.scaleToheight(50);
		hole_obj.set({
			top:hole_y,
			left:hole_x
		});
		canvas.add(hole_obj);
	});
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("bola.png", function (Img) {
		ball_obj = Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({ 
			top:ball_y,
			left:ball_x 
		});
		canvas.add(ball_obj);
		});	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
	if((ball_x==hole_x)&&(ball_y==hole_y)){
		canvas.remove(ball_obj);
		document.getElementById("hd3").innerHTML="Voce acertou o buraco!!!"; 
		document.getElementById("myCanvas").style.borderColor="red";
	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("cima");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("baixo");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("esquerda");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("direita");
		}
	}
}

	function up()

		// Programe o movimento da bola para cima.
		{
			if (ball_y <-450) 
			{
				
				ball_y = ball_y + block_image_height;
				console.log("altura do bloco da imagen = " + block_image_height);
				console.log("Quando a seta para baixo pressionada, X = " + ball_x + " , y = " +ball_y);
				canvas.remove(ball_obj); 
				new_image();
			}
		}
	function down()
{
	if (ball_y <-450) 
	{
		
		ball_y = ball_y + block_image_height;
		console.log("altura do bloco da imagen = " + block_image_height);
		console.log("Quando a seta para baixo pressionada, X = " + ball_x + " , y = "+ball_y);
		canvas.remove(ball_obj); 
		new_image();
	}
}

	function left()
	
		{
			if (ball_y <-450) 
			{
				
				ball_y = ball_y + block_image_height;
				console.log("altura do bloco da imagen = " + block_image_height);
				console.log("Quando a seta para baixo pressionada, X = " + ball_x + " , y = "+ball_y);
				canvas.remove(ball_obj); 
				new_image();
			}
		}

	function right()
	{
		if (ball_y <-450) 
		{
			
			ball_y = ball_y + block_image_height;
			console.log("altura do bloco da imagen = " + block_image_height);
			console.log("Quando a seta para baixo pressionada, X = " + ball_x + " , y = "+ball_y);
			canvas.remove(ball_obj); 
			new_image();
		}
	}


