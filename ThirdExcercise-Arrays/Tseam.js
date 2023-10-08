function Tseam(arr) {
    let games = arr[0].split(' ');
    let index = 1;
    while (arr[index] != "Play!") {
        let tokens = arr[index].split(' ')
        let command = tokens[0];
        let game = tokens[1];
        if (command == 'Install' && !games.includes(game)) {
            games.push(game);
        }
        else if (command == 'Uninstall' && games.includes(game)) {
            games.splice(games.indexOf(game), 1)
        }
        else if (command == 'Update' && games.includes(game)) {
            let updated = games.splice(games.indexOf(game), 1);
            games.push(updated.join(''))
        }
        else if (command == 'Expansion') {
            let gameExpansion = game.split('-')
            let gameName = gameExpansion[0];
            game=gameExpansion.join(':')
            if (games.includes(gameName)) {
                games.splice((games.indexOf(gameName))+1, 0, game)
            }
        }
        index++
    }

    console.log(games.join(' '))
}

Tseam(['CS WoW Diablo',

    'Install LoL',

    'Uninstall WoW',

    'Update Diablo',

    'Expansion CS-Go',

    'Play!'])