var resposta = 'Nunca tinha programado antes. Essa foi a minha primeira experiência programando e achei bem divertido e não mutio difícil. Consegui entender todas as partes do tutorial tranquilamente. O programa funcionou com tudo certo'

var config =    {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update,
    }
};

var game = new Phaser.Game(config);

var peixinho;

function preload(_){
    this.load.image('mar', 'assets/bg_azul-claro.png')

    this.load.image('palmeira', 'assets/palmeira-removebg-preview.png')

    this.load.image('areia', 'assets/areia-removebg-preview.png')

    this.load.image('frase', 'assets/frase-removebg-preview.png')

    // carregar a logo
    this.load.image('logo', 'assets/logo-inteli_branco.png')

    // carregar o peixe
    this.load.image('peixe', 'assets/peixes/tubarao.png')
};

function create(){
    this.add.image(400, 300, 'mar')

    this.add.image(400, 300, 'frase')

    this.add.image(400, 550, 'areia')

    this.add.image(550, 550, 'palmeira')

    // adicionar o logo  na tela
    this.add.image(400, 525, 'logo').setScale(0.5);

    // adicionar o peixe na tela e guardando o peixe em uma variável
    peixinho = this.add.image(400, 300, 'peixe').setOrigin(0.5, 0.5);
    
    // transformando a variável
    peixinho.setFlip(true, false);
};

function update(){

    // adicionando controles ao peixe
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
};