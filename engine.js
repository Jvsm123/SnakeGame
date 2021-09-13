function engine(e, lockScreen, lockPlayer, i)
{
	console.log('Aqui');
	const player = document.querySelector('#player');

	let top = player.offsetTop;
	let left = player.offsetLeft;

	let wW = window.innerWidth;
	let wH = window.innerHeight;

	if(lockScreen) controls( e, top, left, i, wW, wH );
}

function controls(e, top, left, i, wW, wH)
{
	switch( e )
	{
		case 37:
			if(!i[0])
			{
				i[1] = setInterval( () =>
				{
					left -= 40;
					player.style.left = `${left}px`;
					verify(wW, wH, top, left, i);
				}, 1000);

				i[0] = true;
			}
			else
			{
				clearInterval(i[1]);

				i[1] = setInterval( () =>
				{
					left -= 40;
					player.style.left = `${left}px`;
					verify(wW, wH, top, left, i);
				}, 1000);
			}
		break;

		case 38:
			if(!i[0])
			{
				i[1] = setInterval( () =>
				{
					top -= 40;
					player.style.top = `${top}px`;
					verify(wW, wH, top, left, i);
				}, 1000);

				i[0] = true;
			}
			else
			{
				clearInterval(i[1]);

				i[1] = setInterval( () =>
				{
					top -= 40;
					player.style.top = `${top}px`;
					verify(wW, wH, top, left, i);
				}, 1000);
			}
		break;

		case 39:
			if(!i[0])
			{
				i[1] = setInterval( () =>
				{
					left += 40;
					player.style.left = `${left}px`;
					verify(wW, wH, top, left, i);
				}, 1000);

				i[0] = true;
			}
			else
			{
				clearInterval(i[1]);

				i[1] = setInterval( () =>
				{
					left += 40;
					player.style.left = `${left}px`;
					verify(wW, wH, top, left, i);
				}, 1000);
			}
		break;

		case 40:
			if(!i[0])
			{
				i[1] = setInterval( () =>
				{
					top += 40;
					player.style.top = `${top}px`;
					verify(wW, wH, top, left, i);
				}, 1000);

				i[0] = true;
			}
			else
			{
				clearInterval(i[1]);

				i[1] = setInterval( () =>
				{
					top += 40;
					player.style.top = `${top}px`;
					verify(wW, wH, top, left, i);
				}, 1000);
			}
		break;
	}
}

function verify( wW, wH, top, left )
{
	if(top > wH || top < 0)
	{
		clearInterval(i[1]);

		lockPlayer = true;

		document.body.remove(player);

		end();
	}
	else if( left > wW || left < 0)
	{
		clearInterval(i[1]);

		lockPlayer = true;

		document.body.remove(player);

		end();
	}
}
