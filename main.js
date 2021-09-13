function game(e, lockScreen, lockPlayer, i)
{
	if(!lockScreen)
	{
		let player = document.createElement('div');
		player.style.width = '30px';
		player.style.height = '30px';
		player.style.position = 'absolute';
		player.style.backgroundColor = 'green';

		player.id = 'player';

		document.body.appendChild(player);

		lockScreen = !lockScreen;
	}
	else engine(e, lockScreen, lockPlayer, i);
}
