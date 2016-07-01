$(document).ready(function() {
        var currentURL = document.location.href;
        var page = currentURL.split('/');
        var file = page[page.length -1];
        if(file == 'membres' || file == 'magazines'){
            $('header').css('background-image', 'url(\'assets/background/'+file+'.jpg\')');
        }
        else{
            $('header').css('background-image', 'url(\'background01.jpg\'');
        }
});

/* STAFF */

$('#brandy').click(function(){
    $('.modal-content').empty().append('<div class="modal-header">'+
        '<h2>Brandy - rédactrice et correctrice</h2>'+
        '</div>'+
        '<div class="modal-body">'+
        '<div class="row">'+
        '<div>'+
        '<p>Hey, je suis Brandy, correctrice et rédactrice pour le Kippon Dream !' +
        'C’est avant tout ma passion pour le dessin et la BD qui m’a fait pousser les portes du webzine, ' +
        ' et même si je n’y suis pas auteur, j’aime faire partie d’un collectif comme celui-là rempli de jeunes talents ' +
        ' et de fans de manga comme moi ^^ À coté de ça je dessine mes propres BD aussi bien sûr, j’ai le même rêve que les auteurs ' +
        'du KD : me faire publier un jour ! :) ' +
        '</p>'+
        '</div>'+
        '</div>'+
        '<div class="row">'+
        '<div class="col-md-12">'+
        '<div class="col-md-6">'+
        '<div class="flex">'+
        '<p>Ses projets : </p>'+
        '<div class="flex-pair"><img src="images/pair.png" alt="pair" />'+
        '<img src="images/impair.png" alt="impair" />'+
        '</div>' +
        '</div>'+
        '<p> </p>'+
        '<p class="liste-serie"></p>'+
        '</div>'+
        '<div class="col-md-6">'+
        '<img src="images/presentation/brandy.png" alt="Brandy" class="img-presentation">'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>');
    $('#infos').modal('toggle');
    $('#modal').animate({ scrollTop: 0 }, 'slow');
});

/* AUTEURS */

$('#ataru').click(function(){
    $('.modal-content').empty().append('<div class="modal-header">'+
        '<h2>Ataru - Dessinateur</h2>'+
        '</div>'+
        '<div class="modal-body">'+
        '<div class="row">'+
        '<div>'+
        '<p>Je suis Ataru, amoureux du dessin, de la BD, de l’animation et du jeu vidéo. Au risque de passer pour un ancien, ' +
        ' mes maîtres sont Tezuka, Toriyama, Takahashi Rumiko et d’autres auteurs plus proches comme Franquin ou Gotlib.' +
        ' J’ai fait du dessin animé il y a quelques années avec Monsieur René Borg (un projet assez avancé est malheureusement en attente,' +
        'depuis le décès du maître). J’ai intégré le webzine parce qu’on a bien voulu de moi, tout d’abord, ensuite parce que je trouve' +
        ' qu’il y a de supers talents au KD et je voulais montrer une partie de ce que j’aime dessiner, raconter. J’espère que mes histoires ' +
        'vous plairont  à très bientôt pour la suite.' +
        '</p>'+
        '</div>'+
        '</div>'+
        '<div class="row">'+
        '<div class="col-md-12">'+
        '<div class="col-md-6">'+
        '<div class="flex">'+
        '<p>Ses projets : </p>'+
        '<img src="images/impair.png" alt="impair" />'+
        '</div>'+
        '<p>O.S.E.F</p>'+
        '<p class="liste-serie"> #15 - One-Shot </p>'+
        '</div>'+
        '<div class="col-md-6">'+
        '<img src="images/presentation/ataru.png" alt="Ataru" class="img-presentation">'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>');
    $('#infos').modal('toggle');
    $('#modal').animate({ scrollTop: 0 }, 'slow');
});

$('#ayu').click(function(){
    $('.modal-content').empty().append('<div class="modal-header">'+
        '<h2>Ayu - Dessinatrice</h2>'+
        '</div>'+
        '<div class="modal-body">'+
        '<div class="row">'+
        '<div>'+
        '<p>Passionnée de dessin depuis mon enfance, j’essaie depuis le collège de créer mes propres mangas.' +
        'Je continue depuis plusieurs années déjà de dessiner mon projet' +
        'principal Animix. Mes inspirations sont Walt Disney et Obata Takeshi. En dehors du dessin, je suis passionnée' +
        'par la culture japonaise, les jeux vidéo et la pâtisserie.' +
        '</p>'+
        '</div>'+
        '</div>'+
        '<div class="row">'+
        '<div class="col-md-12">'+
        '<div class="col-md-6">'+
        '<div class="flex">'+
        '<p>Ses projets : </p>'+
        '<img src="images/pair.png" alt="pair" />'+
        '</div>'+
        '<h3>Animix</h3>'+
        '<p class="liste-serie"> #1 Chapitre 1 Partie 1 <br/> #2 Chapitre 1 Partie 2 <br/> #3 Chapitre 1 Partie 3 <br/>' +
        '#5 - Chapitre 2 Partie 1 <br/> #6 - Chapitre 2 Partie 2 <br/> #8 - Chapitre 3 <br/> #10 - Chapitre 4 <br/> #12 - Chapitre 5 <br/>' +
        '#14 - Chapitre 6 </p>'+
        '</div>'+
        '<div class="col-md-6">'+
        '<img src="images/presentation/ayu.png" alt="Ayu" class="img-presentation">'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>');
    $('#infos').modal('toggle');
    $('#modal').animate({ scrollTop: 0 }, 'slow');
});

$('#christ').click(function(){
    $('.modal-content').empty().append('<div class="modal-header">'+
        '<h2>Christ - Dessinateur</h2>'+
        '</div>'+
        '<div class="modal-body">'+
        '<div class="row">'+
        '<div>'+
        '<p>' +
        '</p>'+
        '</div>'+
        '</div>'+
        '<div class="row">'+
        '<div class="col-md-12">'+
        '<div class="col-md-6">'+
        '<div class="flex">'+
        '<p>Ses projets : </p>'+
        '<img src="images/pair.png" alt="pair" />'+
        '</div>'+
        '<h3>Blood Sorcerer</h3>'+
        '<p class="liste-serie"> #8 - One Shot <br/> #10 - Chapitre 1 <br/> #12 - Chapitre 2 <br/>' +
        '#14 - Chapitre 3 </p>'+
        '</div>'+
        '<div class="col-md-6">'+
        '<img src="images/presentation/christ.png" alt="Christ" class="img-presentation">'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>');
    $('#infos').modal('toggle');
    $('#modal').animate({ scrollTop: 0 }, 'slow');
});

$('#emu').click(function(){
    $('.modal-content').empty().append('<div class="modal-header">'+
        '<h2>Emueiichi - Dessinateur</h2>'+
        '</div>'+
        '<div class="modal-body">'+
        '<div class="row">'+
        '<div>'+
        '<p>Hellow ! C’est EmuEiichi ! J’ai 17 ans, et je dessine depuis plusieurs années, mais je verse une petite larme' +
        'de fragile quand je vois que mon évolution et un peu lente... TTvTT J’ai toujours adoré le dynamisme et la liberté' +
        'que possède le manga, que possède peu (ou presque pas) la BD franco-belge. Et comme beaucoup, j’ai été influencé' +
        'par Dragon Ball d’Akira Toriyama, mais aujourd’hui je m’inspire grandement de Fullmetal Alchemist d’Hiromu Arakawa ! ' +
        'A part le manga, j’ai une passion pour l’aviation (deux mondes différents °-° ) et je rêve de travailler dans ce secteur !' +
        '- Pour finir, je me dis au fond que je mérite peut-être pas cette opportunité, vu mon niveau encore un peu faible...Mais faut' +
        'bien une première fois à tout non ?' +
        '</p>'+
        '</div>'+
        '</div>'+
        '<div class="row">'+
        '<div class="col-md-12">'+
        '<div class="col-md-6">'+
        '<div class="flex">'+
        '<p>Ses projets : </p>'+
        '<img src="images/impair.png" alt="impair" />'+
        '</div>'+
        '<h3>Infinite Revenge</h3>'+
        '<p class="liste-serie"> #7 - One Shot<br/> #9 - Chapitre 1 <br/> #11 - Chapitre 2 <br/>' +
        '#13 - Chapitre 3 <br/> #15 - Chapitre 4 </p>'+
        '</div>'+
        '<div class="col-md-6">'+
        '<img src="images/presentation/emu.png" alt="Emueiichi" class="img-presentation">'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>');
    $('#infos').modal('toggle');
    $('#modal').animate({ scrollTop: 0 }, 'slow');
});

$('#julien').click(function(){
    $('.modal-content').empty().append('<div class="modal-header">'+
        '<h2>Julien - Dessinateur</h2>'+
        '</div>'+
        '<div class="modal-body">'+
        '<div class="row">'+
        '<div>'+
        '<p> Moi c’est Julien! Je fais partie de la génération Club Dorothée et j’aime énormément Dragon Ball, Saint Seiya,' +
        'Captain Tsubasa… J’aime aussi Spider-Man et les comics Marvel. En ce moment je travaille sur les BD' +
        'Dawn of the Sorain et  Paranormal Investigation. Ah oui, j’adore les jeux vidéo, le saucisson et le poulet !' +
        '</p>'+
        '</div>'+
        '</div>'+
        '<div class="row">'+
        '<div class="col-md-12">'+
        '<div class="col-md-6">'+
        '<div class="flex">'+
        '<p>Ses projets : </p>'+
        '<img src="images/impair.png" alt="impair" />'+
        '</div>'+
        '<h3>Dawn of the Sorain</h3>'+
        '<p class="liste-serie"> #7 - One Shot <br/> #7 - Chapitre 1 <br/> #9 - Chapitre 2 <br/>' +
        '#11 - Chapitre 3 <br/> #13 - Chapitre 4 </p>'+
        '<h3>Paranormal Investigations</h3>'+
        '<p class="liste-serie"> #15 One Shot</p>'+
        '</div>'+
        '<div class="col-md-6">'+
        '<img src="images/presentation/julien.png" alt="Julien Mestre" class="img-presentation">'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>');
    $('#infos').modal('toggle');
    $('#modal').animate({ scrollTop: 0 }, 'slow');
});

$('#kowasu').click(function(){
    $('.modal-content').empty().append('<div class="modal-header">'+
        '<h2>Kowasu - Dessinatrice et illustratrice</h2>'+
        '</div>'+
        '<div class="modal-body">'+
        '<div class="row">'+
        '<div>'+
        '<p> Bonjour , je suis Kowasu , l’auteur de No-Life Makoto , je suis accessoirement une illustratrice pour le KD' +
        'J’ai pas grand chose à dire sur moi à part vous souhaiter une agréable lecture !</p>'+
        '</div>'+
        '</div>'+
        '<div class="row">'+
        '<div class="col-md-12">'+
        '<div class="col-md-6">'+
        '<div class="flex">'+
        '<p>Ses projets : </p>'+
        '<div class="flex-pair"><img src="images/pair.png" alt="pair" />'+
        '<img src="images/impair.png" alt="impair" />'+
        '</div>' +
        '</div>'+
        '<h3>No-Life Makoto</h3>'+
        '<p class="liste-serie"> #1 - Chapitre 1 <br/> #2 - hapitre 2 <br/> #3 - Chapitre 3 <br/>' +
        '#4 - Chapitre 4 <br/> #5 Chapitre - 5 <br/> #6 - Chapitre 6 <br/> #7 - Chapitre 7 <br/ #8 - Chapitre 8</p>'+
        '</div>'+
        '<div class="col-md-6">'+
        '<img src="images/presentation/kowasu.png" alt="Kowasu" class="img-presentation">'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>');
    $('#infos').modal('toggle');
    $('#modal').animate({ scrollTop: 0 }, 'slow');
});

$('#kuro').click(function(){
    $('.modal-content').empty().append('<div class="modal-header">'+
        '<h2>Kuro - Scénariste et webmaster</h2>'+
        '</div>'+
        '<div class="modal-body">'+
        '<div class="row">'+
        '<div>'+
        '<p>Hellow, moi c’est Kuro, je suis le scénariste de Dawn of the Sorain  et le webmaster du site internet que vous parcourez en ce moment!' +
        'Ecrire a toujours été ma  passion et quand j’ai découvert les mangas j’ai tout de suite eu envie d’en créer un.' +
        'One Piece, Death Note, Steins Gate (bon d’accord, c’est un light-novel et un anime, mais je le case quand même car il' +
        'est génial :D ), et surtout  Bakuman sont mes références sacrées, je rêve d’écrire un manga d’une telle envergure !!' +
        'J’aime également les shojo comme Lovely Complex, Suzuka... En fait j’aime un peu tout, sauf les seinen gore haha.' +
        'J’espère pouvoir vous divertir autant que tous ces mangas grâce à Dawn of, moi en tout cas j’adore l’écrire pour vous ^^ </p>'+
        '</div>'+
        '</div>'+
        '<div class="row">'+
        '<div class="col-md-12">'+
        '<div class="col-md-6">'+
        '<div class="flex">'+
        '<p>Ses projets : </p>'+
        '<img src="images/impair.png" alt="impair" />'+
        '</div>'+
        '<h3>Dawn of the Sorain</h3>'+
        '<p class="liste-serie"> #7 - One Shot <br/> #7 - Chapitre 1 <br/> #9 - Chapitre 2 <br/>' +
        '#11 - Chapitre 3 <br/> #13 - Chapitre 4 </p>'+
        '</div>'+
        '<div class="col-md-6">'+
        '<img src="images/presentation/kuro.png" alt="Kuro" class="img-presentation">'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>');
    $('#infos').modal('toggle');
    $('#modal').animate({ scrollTop: 0 }, 'slow');
});

$('#larryon').click(function(){
    $('.modal-content').empty().append('<div class="modal-header">'+
        '<h2>Larryon - Dessinateur</h2>'+
        '</div>'+
        '<div class="modal-body">'+
        '<div class="row">'+
        '<div>'+
        '<p>Je suis Larryon, bientôt 25 ans, habite en région parisienne et dessinateur de la série Dragon(s).'+
        'J’ai intégré le Kippon Dream au numéro 08 et je suis passionné par la BD et l’animation depuis tout petit.'+
        'A mes heures perdues je m’adonne à la création de jeux vidéo. Bonne lecture !'+
        '</p>'+
        '</div>'+
        '</div>'+
        '<div class="row">'+
        '<div class="col-md-12">'+
        '<div class="col-md-6">'+
        '<div class="flex">'+
        '<p>Ses projets : </p>'+
        '<img src="images/pair.png" alt="pair" />'+
        '</div>'+
        '<p>Dragon(s) </p>'+
        '<p class="liste-serie"> #8 - One-Shot - <br />#10 - Chapitre 1 - <br /> #12 - Chapitre 2 - <br /> #14 - Chapitre 3 </p>'+
        '</div>'+
        '<div class="col-md-6">'+
        '<img src="images/presentation/larryon.png" alt="Larryon class="img-presentation">'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>');
    $('#infos').modal('toggle');
    $('#modal').animate({ scrollTop: 0 }, 'slow');
});

$('#lao').click(function(){
    $('.modal-content').empty().append('<div class="modal-header">'+
        '<h2>Lao - Dessinatrice</h2>'+
        '</div>'+
        '<div class="modal-body">'+
        '<div class="row">'+
        '<div>'+
        '<p>Salut je suis Lao (et pas en bas) je suis Atsem en grande et petite section de maternelle.' +
        'Dans le webzine je suis l’auteure de Demon Spider. Fan de manga je suis influencée par mon manga' +
        'préféré Fullmetal Alchemist... ah et j’aime les framboises aussi !</p>'+
        '</div>'+
        '</div>'+
        '<div class="row">'+
        '<div class="col-md-12">'+
        '<div class="col-md-6">'+
        '<div class="flex">'+
        '<p>Ses projets : </p>'+
        '<img src="images/pair.png" alt="pair" />'+
        '</div>'+
        '<h3>Demon Spider</h3>'+
        '<p class="liste-serie"> #10 - One Shot <br/> #12 - Chapitre 1 </p>'+
        '</div>'+
        '<div class="col-md-6">'+
        '<img src="images/presentation/lao.png" alt="Lao" class="img-presentation">'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>');
    $('#infos').modal('toggle');
    $('#modal').animate({ scrollTop: 0 }, 'slow');
});

$('#midori').click(function(){
    $('.modal-content').empty().append('<div class="modal-header">'+
        '<h2>Midori - Dessinatrice</h2>'+
        '</div>'+
        '<div class="modal-body">'+
        '<div class="row">'+
        '<div>'+
        '<p>Hm...que dire de moi ? Et bien, à 20 ans je me lance pour la première fois dans la création d’une série originale' +
        'que vous aurez l’occasion de lire dans les pages du Kippon Dream ! Je dessine depuis que je suis petite mais' +
        'c’est au collège que j’ai sérieusement commencé à m’intéresser à la réalisation de mangas en faisant des doujinshis.' +
        'Sinon j’ai d’autres passions dont le jeu vidéo et le cinéma ! En général je travaille autour d’univers mélancoliques' +
        'et romantiques, mais j’ai tendance à beaucoup aimer l’horreur et l’épouvante aussi ~ </p>'+
        '</div>'+
        '</div>'+
        '<div class="row">'+
        '<div class="col-md-12">'+
        '<div class="col-md-6">'+
        '<div class="flex">'+
        '<p>Ses projets : </p>'+
        '<img src="images/impair.png" alt="impair" />'+
        '</div>'+
        '<h3> 3 coups avant l aube</h3>'+
        '<p class="liste-serie"> #Dream Cup - One Shot <br/> #15 - Chapitre 1</p>'+
        '</div>'+
        '<div class="col-md-6">'+
        '<img src="images/presentation/midori.png" alt="Midori" class="img-presentation">'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>');
    $('#infos').modal('toggle');
    $('#modal').animate({ scrollTop: 0 }, 'slow');
});

$('#oz').click(function(){
    $('.modal-content').empty().append('<div class="modal-header">'+
        '<h2>Oz - Scénariste</h2>'+
        '</div>'+
        '<div class="modal-body">'+
        '<div class="row">'+
        '<div>'+
        '<p>Yo les KippReaders,  moi c’est Mickael. Je sais pas trop quoi dire alors je vais faire court.' +
        'Comme vous j’ai été pris de passion pour le manga très jeune dans ma vie, avec des films comme' +
        ' Macross ou encore Oz-Teacher, d’où mon pseudo ! Mais le manga qui m’a réellement donné envie d’écrire' +
        ' des manga c’est Guilty Crown ! Depuis j’essaye d’écrire des histoires pour plaire au lecteur.' +
        ' Blood n’est que le premier d’une longue série. En tout cas j’espère que vous apprécierez! À bientôt. </p>'+
        '</div>'+
        '</div>'+
        '<div class="row">'+
        '<div class="col-md-12">'+
        '<div class="col-md-6">'+
        '<div class="flex">'+
        '<p>Ses projets : </p>'+
        '<img src="images/pair.png" alt="pair" />'+
        '</div>'+
        '<h3>Blood Sorcerer</h3>'+
        '<p class="liste-serie"> #8 - One Shot <br/> #10 - Chapitre 1 <br/> #12 - Chapitre 2 <br/>' +
        '#14 - Chapitre 3 </p>'+
        '</div>'+
        '<div class="col-md-6">'+
        '<img src="images/presentation/oz.png" alt="Oz" class="img-presentation">'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>');
    $('#infos').modal('toggle');
    $('#modal').animate({ scrollTop: 0 }, 'slow');
});

$('#smaiky').click(function(){
    $('.modal-content').empty().append('<div class="modal-header">'+
        '<h2>Smaiky - Dessinateur</h2>'+
        '</div>'+
        '<div class="modal-body">'+
        '<div class="row">'+
        '<div>'+
        '<p>Salut tout le monde, moi c’est Smaiky ! Comme vous pouvez vous en douter j’adore le dessin et ' +
        'plus particulièrement dessiner des planches de BD !! C’est un passe-temps que j’ai depuis tout petit' +
        ' et qui a évolué en passion, surtout lorsque j’ai découvert le style Manga ! Après avoir appris ce que' +
        ' c’était sur le tard, (au collège je crois, imaginez ma surprise quand j’ai su que Dragon ball, Nicky' +
        ' Larson ou encore Yuyu Hakusho étaient des mangas alors que je les regardais dans l’ignorance XD !)' +
        ' j’ai donc commencé sérieusement à mettre des histoires imaginaires sur papier sous forme de dessins' +
        'et depuis je ne lâche plus mon crayon ! J’espère que la lecture de mes BD vous plaira autant que moi je prends plaisir à les dessiner !!</p>'+
        '</div>'+
        '</div>'+
        '<div class="row">'+
        '<div class="col-md-12">'+
        '<div class="col-md-6">'+
        '<div class="flex">'+
        '<p>Ses projets : </p>'+
        '<img src="images/impair.png" alt="impair" />'+
        '</div>'+
        '<h3>Païn</h3>'+
        '<p class="liste-serie"> #1 - Chapitre 1 Partie 1 <br/> #2 - Chapitre 1 Partie 2 <br/> #3 - Chapitre 2 Partie 1 <br/>' +
        '#5 - Chapitre 2 Partie 2 <br/> #7 - Chapitre 3 Partie 1 <br/> #9 - Chapitre 3 Partie 2 <br/> #11 - Chapitre 4 Partie 1' +
        ' <br/> #13 - Chapitre 4 Partie 2 <br/> #15 - Chapitre 5 </p>'+
        '</div>'+
        '<div class="col-md-6">'+
        '<img src="images/presentation/smaiky.png" alt="Smaiky" class="img-presentation">'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>');
    $('#infos').modal('toggle');
    $('#modal').animate({ scrollTop: 0 }, 'slow');
});

$('#thibault').click(function(){
    $('.modal-content').empty().append('<div class="modal-header">'+
        '<h2>Thbault Deboom - Dessinateur</h2>'+
        '</div>'+
        '<div class="modal-body">'+
        '<div class="row">'+
        '<div>'+
        '<p>Hoy ! Moi c’est Thibault Deboom j’ai 18 ans, je dessine depuis toujours, ma principale source d’inspiration est Dragon Ball ,' +
        ' ça se ressent certainement dans mon style !</p>'+
        '</div>'+
        '</div>'+
        '<div class="row">'+
        '<div class="col-md-12">'+
        '<div class="col-md-6">'+
        '<div class="flex">'+
        '<p>Ses projets : </p>'+
        '<img src="images/pair.png" alt="pair" />'+
        '</div>'+
        '<h3>Symphony of Angels</h3>'+
        '<p class="liste-serie"> #12 - One Shot <br/> #14 - Chapitre 1 </p>'+
        '</div>'+
        '<div class="col-md-6">'+
        '<img src="images/presentation/thibault.png" alt="Thibault Deboom" class="img-presentation">'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>');
    $('#infos').modal('toggle');
    $('#modal').animate({ scrollTop: 0 }, 'slow');
});

$('#unico').click(function(){
    $('.modal-content').empty().append('<div class="modal-header">'+
        '<h2>Unico - Dessinatrice</h2>'+
        '</div>'+
        '<div class="modal-body">'+
        '<div class="row">'+
        '<div>'+
        '<p>Hey lecteurs du Kippon Dream! Unico pour vous servir ! Je me présente : jeune apprentie « scientifique fou » ' +
        'de 17 ans qui s’est donné pour défi de changer le monde avec pour arme un crayon de papier et dessinatrice dans ' +
        'le Kippon Dream ! Je dessine depuis toujours et suis une grosse dévoreuse de BD, de manga et d’animé. J’aime '+
        'particulierement dessiner des créatures fantastiques, des poulpes, des poneys arc en ciel et par-dessus ' +
        'tout des GRIFFONS !!!! Bonne lecture à tous ! </p>'+
        '</div>'+
        '</div>'+
        '<div class="row">'+
        '<div class="col-md-12">'+
        '<div class="col-md-6">'+
        '<div class="flex">'+
        '<p>Ses projets : </p>'+
        '<img src="images/pair.png" alt="pair" />'+
        '</div>'+
        '<h3>Skillnaden</h3>'+
        '<p class="liste-serie"> #4 - One Shot </p>'+
        '</div>'+
        '<div class="col-md-6">'+
        '<img src="images/presentation/unico.png" alt="Unico" class="img-presentation">'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>');
    $('#infos').modal('toggle');
    $('#modal').animate({ scrollTop: 0 }, 'slow');
});

$('#yumi').click(function(){
    $('.modal-content').empty().append('<div class="modal-header">'+
        '<h2>Yumi - Dessinatrice</h2>'+
        '</div>'+
        '<div class="modal-body">'+
        '<div class="row">'+
        '<div>'+
        '<p>Salut tout le monde~! Je suis Yumi! Je viens de débarquer dans l’univers du Kippon Dream! Quelle aventure! ' +
        'Pour le moment, j’ai réalisé des illustrations : une avec Kowasu dans le numéro 15, et surtout  la couverture ' +
        'et la quatrième de couverture du numéro papier que vous tenez entre vos mains avec mon amie Twildette à la colo ! ' +
        'On a également participé au projet Japan Expo en faisant des posters ! N’hésitez pas à venir nous rencontrer ' +
        'je serai ravie de partager le plus possible avec vous! Je travaille aussi sur un nouveau projet top secret ' +
        'en dessinant pour un autre auteur du webzine ! Une super série bien prometteuse, du shônen pur et dur comme on ' +
        'les aime! Votre soutien nous motive plus que tout, j’espère que vous prendrez toujours beaucoup de plaisir à nous lire ! À très bientôt  ! </p>'+
        '</div>'+
        '</div>'+
        '<div class="row">'+
        '<div class="col-md-12">'+
        '<div class="col-md-6">'+
        '<div class="flex">'+
        '<p>Ses projets : </p>'+
        '<img src="images/pair.png" alt="pair" />'+
        '</div>'+
        '<p>Projet en développement </p>' +
        '</div>'+
        '<div class="col-md-6">'+
        '<img src="images/presentation/yumi.png" alt="Yumi" class="img-presentation">'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>');
    $('#infos').modal('toggle');
    $('#modal').animate({ scrollTop: 0 }, 'slow');
});

 $('.image-nom').mouseenter(function(){
 var src = $(this).children('img').attr('src');
     console.log(src);
 var parts = src.split("/");
 var result = parts[parts.length - 1];
 $(this).children('img').attr('src', 'assets/membres/hover/'+result);
 });

 $('.image-nom').mouseleave(function(){
 var src = $(this).children('img').attr('src')
 var parts = src.split("/");
 var result = parts[parts.length - 1];
 $(this).children('img').attr('src', 'assets/membres/'+result);
 });


