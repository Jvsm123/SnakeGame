const table = document.querySelector('div.table');

let initialScreen = document.createElement('div');

let divControl = document.createElement('div');

let commads = document.createElement('img');

let title = document.createElement('h2');
let subTitle = document.createElement('h3');
let beggin = document.createElement('h2');

let lockScreen = false;
let lockPlayer = false;

let i = [false, null];

commads.src = './assets/Comands.png';
commads.style.height = '10rem';
commads.style.widht = '10rem';

title.style.marginLeft = '13rem';
subTitle.style.marginLeft = '12rem';
commads.style.marginLeft = '11rem';

title.innerHTML = 'Snake!';
subTitle.innerHTML = 'Comandos:';
beggin.innerHTML = 'Aperte uma das Teclas para começar!';

divControl.appendChild(title)
divControl.appendChild(subTitle);
divControl.appendChild(commads);
divControl.appendChild(beggin);

initialScreen.appendChild(divControl);

table.appendChild(initialScreen);

document.body.addEventListener('keydown', (e) =>
{
	if(!lockPlayer)
	{
		switch(e.which)
		{
			case 37:
				table.style.display = 'none';
				game(37, lockScreen, lockPlayer, i);
				lockScreen = true;
			break;

			case 38:
				table.style.display = 'none';
				game(38, lockScreen, lockPlayer, i);
				lockScreen = true;
			break;

			case 39:
				table.style.display = 'none';
				game(39, lockScreen, lockPlayer, i);
				lockScreen = true;
			break;

			case 40:
				table.style.display = 'none';
				game(40, lockScreen, lockPlayer, i);
				lockScreen = true;
			break;
		}
	}
	else end();
});

function end()
{
	table.style.display = 'block';
	alert('O jogo Terminou você acertou a borda ou a sí mesmo!');
};
