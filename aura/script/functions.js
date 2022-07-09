var element = document.querySelector('pre');
AsciiMorph(element, {x: 50,y: 25});

// First, define some ascii art.
// var bird = [
//     "                             /",
//     "                            /",
//     "                           /;",
//     "                          //",
//     "                         ;/",
//     "                       ,//",
//     "                   _,-' ;_,,",
//     "                _,'-_  ;|,'",
//     "            _,-'_,..--. |",
//     "    ___   .'-'_)'  ) _)\\|      ___",
//     "  ,'\"\"\"`'' _  )   ) _)  ''--'''_,-'",
//     "-={-o-  /|    )  _)  ) ; '_,--''",
//     "  \\ -' ,`.  ) .)  _)_,''|",
//     "   `.\"(   `------''     /",
//     "     `.\\             _,'",
//     "       `-.____....-\\\\",
//     "                 || \\\\",
//     "                 // ||",
//     "                //  ||",
//     "            _-.//_ _||_,",
//     "              ,'  ,-'/"
// ]
//
// var mona = [
//     "         ____",
//     "        o8%8888,",
//     "      o88%8888888.",
//     "     8'-    -:8888b",
//     "    8'         8888",
//     "   d8.-=. ,==-.:888b",
//     "   >8 `~` :`~' d8888",
//     "   88         ,88888",
//     "   88b. `-~  ':88888",
//     "   888b ~==~ .:88888",
//     "   88888o--:':::8888",
//     "   `88888| :::' 8888b",
//     "   8888^^'       8888b",
//     "  d888           ,%888b.",
//     " d88%            %%%8--'-.",
//     "/88:.__ ,       _%-' ---  -",
//     "    '''::===..-'   =  --.  `",
// ]

var asciis = [[
    "                    .-~~~- ",
    "                .-~~~_._~~~\ ",
    "                /~-~~   ~.  `._",
    "               /    \     \  | ~~-_",
    "       __     |      |     | |  /~\|",
    "   _-~~  ~~-..|       ______||/__..-~~/",
    "    ~-.___     \     /~\_________.-~~",
    "         \~~--._\   |             /",
    "          ^-_    ~\  \          /^",
    "             ^~---|~~~~-.___.-~^",
    "               /~^| | | |^~\\",
    "              //~^`/ /_/ ^~\\",
    "              /   //~||      \\",
    "                 ~   ||",
    "          ___      -(||      __ ___ _",
    "         |\|  \       ||_.-~~ /|\-  \~-._",
    "         | -\| |      ||/   /  | |\- | |\ \\",
    "          \__-\|______ ||  |    \___\|  \_\|",
    "    _____ _.-~/|\     \\||  \  |  /       ~-.",
    "  /'  --/|  / /|  \    \||    \ /          |\~-",
    " ' ---/| | |   |\  |     ||                 \__|",
    "| --/| | ;  \ /|  /    -(||",
    "`./  |  /     \|/        ||)",
    "  `~^~^                  ||",
],[
    "        /{.=-.}\ ",
    "       | / .  \ |",
    "       |;   :  :|",
    "       \(   :  )/",
    "        `._'__.'",
    "      |\   ||",
    "      \ \  ||",
    "       | | ||",
    "       | | ||   /|",
    "       \  \||  / /",
    "        \ ||| | |",
    "         | || | |",
    "          \||/  /",
    "           ||| /",
    "           || |",
    "           ||/",
    "           ||",
]]

// var flower1 = [
//     "        /{.=-.}\ ",
//     "       | / .  \ |",
//     "       |;   :  :|",
//     "       \(   :  )/",
//     "        `._'__.'",
//     "      |\   ||",
//     "      \ \  ||",
//     "       | | ||",
//     "       | | ||   /|",
//     "       \  \||  / /",
//     "        \ ||| | |",
//     "         | || | |",
//     "          \||/  /",
//     "           ||| /",
//     "           || |",
//     "           ||/",
//     "           ||",
// ]
//
// var flower2 = [
// "                    .-~~~- ",
// "                .-~~~_._~~~\ ",
// "                /~-~~   ~.  `._",
// "               /    \     \  | ~~-_",
// "       __     |      |     | |  /~\|",
// "   _-~~  ~~-..|       ______||/__..-~~/",
// "    ~-.___     \     /~\_________.-~~",
// "         \~~--._\   |             /",
// "          ^-_    ~\  \          /^",
// "             ^~---|~~~~-.___.-~^",
// "               /~^| | | |^~\\",
// "              //~^`/ /_/ ^~\\",
// "              /   //~||      \\",
// "                 ~   ||",
// "          ___      -(||      __ ___ _",
// "         |\|  \       ||_.-~~ /|\-  \~-._",
// "         | -\| |      ||/   /  | |\- | |\ \\",
// "          \__-\|______ ||  |    \___\|  \_\|",
// "    _____ _.-~/|\     \\||  \  |  /       ~-.",
// "  /'  --/|  / /|  \    \||    \ /          |\~-",
// " ' ---/| | |   |\  |     ||                 \__|",
// "| --/| | ;  \ /|  /    -(||",
// "`./  |  /     \|/        ||)",
// "  `~^~^                  ||",
// ]
//
var flower3 = [
"                              _.-'''.\ ",
"                    _       .'       \ ",
"      ,..______  .-/\`--.../          \ ",
"      |        '\| \_`_-.  `.  _       \ ",
"     /        _ .' / /_`\`\  \/ '.      \ ",
"    /       /` /  /\_|_\/\ '._|   \      :",
"  .'       /  :   \ _  |  `\ .'__ |      | __,'\ ",
"  \        | __'. |/.`'----./ /| `'    .'''     '-.",
"   :      .`" `'\/ |`,"--.'/`  \     /          / ",
"   |     /|   |   \ |    / |     \   /          /",
"   '    | '.__'____\'_ .'_.'      | /          |",
"  /     \     ___.-'`\`'-.._      |/          .'",
" '-.     `--'` '.     `.    `'-._/__..._       |",
"    `-.    __    `.     \_..,____..'    \      /",
"     / `'-'  `---- \      .--'''`       |    ,'.__",
"    /               `-...:____          |  .'/ _. ''--.",
"  ,'              ,'`        `\--'`.   |''`,-'-.   ,'` ",
".'              .'            _\    \  |,' \    _,'",
"'-._            '--..._   _,-'  '.   '-'..__.-'",
"    `.                /`-' /    |'-._  `'.___",
"      \         _    /|   |     /.' .`-.__..'`\ ",
"     ,-'.---'''`/`'./ `.  |-.  |/  /    _\'-._`|",
"    /    -''- ,'-.     | |   \  \      /  \   ' |",
"   .' .-'''-,'\   \    `|/   ',.--.   '  .'\.__`|",
"   | '    ,'   |   '    '   ,'     `\    '  \   \ ",
"   .     / \   '   |       /         /--.    '. '.",
"   /   .'  |     _,'      .'  '`'--,'.   \.   \  |",
"   | .'    ' _.,'         |  ___ ,'  \    |`-._  |",
"  /.'__.,-'''            .| '   / \   |   '    `-.",
" '--'                    |    ,'  |   '   /      '|",
"                         |  ,'    '  _,.-'",
"                        .' /   _,.--'",
"                        |..--''"
]

// // Then, you can render (will render instantly)
// AsciiMorph.render(bird);
//
// // Then morph, to a new creation
// AsciiMorph.morph(mona);
//
// AsciiMorph.morph(flower1);

//repeated
AsciiMorph.render(asciis[0]);

var currentIndex = 2;

setTimeout(function() {
    AsciiMorph.morph(asciis[1]);
}, 1000);

setInterval(function() {
    AsciiMorph.morph(asciis[currentIndex]);
    currentIndex++;
    currentIndex%= asciis.length;
}, 3000);