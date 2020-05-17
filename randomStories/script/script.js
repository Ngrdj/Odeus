//Fonction Random
const randomButton=document.getElementById('random');
const textGenButton = document.getElementsByClassName('textGenButton');

function entierAleatoire(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}

for( const button of textGenButton){
    
    button.addEventListener('click', ()=>{
        
        
        let buttonOutput = document.querySelector(`output[name=${CSS.escape(button.value)}]`);
        
        switch(button.value) {
            case 'startAdvent':
                

                buttonOutput.innerHTML = advBegin[entierAleatoire(0, advBegin.length-1)];
                
                
                break;
                
            case 'contextEvent':
                
                
                buttonOutput.innerHTML = randomContext[entierAleatoire(0, randomContext.length-1)];
                
                
                break;
                
            case 'enemy':
                
                
                buttonOutput.innerHTML = randomEnnemies[entierAleatoire(0, randomEnnemies.length-1)];
                
                
                break;
                
            case 'allie':
                
               
                buttonOutput.innerHTML = randomAllies[entierAleatoire(0, randomAllies.length-1)];
                
                
                break;
                
            case 'bonusQuest':
                
               
                buttonOutput.innerHTML = randomBonus[entierAleatoire(0, randomBonus.length-1)];
                
                
                break;
                
            case 'rebound':
                
                
                buttonOutput.innerHTML = randomRebond[entierAleatoire(0, randomRebond.length-1)];
                
                break;
                
            case 'location':
                
               
                buttonOutput.innerHTML = randomPlace[entierAleatoire(0, randomPlace.length-1)];
                
                break;
                
            case 'details':
                
                
                buttonOutput.innerHTML = randomDesc[entierAleatoire(0, randomDesc.length-1)];
                
                break;
                
            case 'story':
                
                
                buttonOutput.innerHTML = randomPast[entierAleatoire(0, randomPast.length-1)];
                
                break;

        }     
    });
}
//.................................................................
//Tableaux d'élément
const advBegin=["Alors qu'ils traversent une contrée sauvage, les personnages chutent au travers d'une doline qui s'ouvre sous leurs pied et atterrissent sur le site de l'aventure",
				"Pendant la traversée d'une contrée sauvage, les personnages remarquent l'entrée du site de l'aventure",
				"Les personnages sont mandatés par un seigneur pour mater une révolte paysanne, mais ils se rendent vite compte que celui-ci agit en tyran et que la révolte est justifiée.",
				"Les personnages arrivent dans une auberge étrange et délabrée, où les rares clients sont réticents à leur parler. L'aubergiste capture en fait des voyageurs pour les donner à manger à ses clients anthropophages.",
				"Un jeune noble désargenté demande aux personnages de l'aider à récupérer ses terres qu'un de ses cousins lui aurait confisquées, usurpant ainsi son titre. Mais tout cela est pure invention et le cousin est dans son droit.",
				"Loin des terres elfiques, les personnages découvrent une elfe à bout de force qui prétend être pourchassée par un groupe d'orques voulant l'offrir à leur dieu. Par contre, elle ne mentionne pas le crime qui l’a conduit à fuir ses terres natales, ni le fait qu'elle soit également traquée par des elfes de sa tribu.",
				"Une bardesse recrute les personnages pour récupérer sa harpe magique qu'une guilde de voleurs lui a dérobée. La guilde a appris que l’instrument ouvrait un portail dans le sous-sol de la ville et pense y trouver un trésor, mais c’est un démon qui y est emprisonné depuis des siècles.",
				"Les personnages rencontrent les réfugiés d'un village attaqué par une armée de zombis. Le clerc qui les commandait grâce à un médaillon maudit a été tué au combat et est devenu à son tour un zombi, qu’il faudra trouver parmi les autres pour détruire l'artéfact qui maintient la horde debout.",
				"Un marchand engage les personnages pour escorter un convoi dont il a par ailleurs secrètement organisé l’attaque. Le marchand veut des témoins de cette attaque de brigands, qui lui servira à camoufler son réel objectif : l’assassinat d’un associé qui participe au convoi.",
				"Des rêves empêchent les habitants d'un petit village de dormir. Ces rêves semblent survenir quand un étrange brouillard envahit la vallée. Le brouillard n’a rien à voir là-dedans et est simplement le fait de la présence d’un grand lac... dans lequel un jeune aboleth a élu résidence.",
				"Les personnages découvrent un carrosse couché sur leur route. Parmi les morts se trouve par hasard le sosie quasi parfait de l’un d’eux, avec dans ses affaires une lettre d'héritage. L’accident a été orchestré par des cousins éloignés de la victime, autres héritiers potentiels.",
				"Arrivés dans un village, les personnages sont recrutés comme 'juges neutres' pour régler un différend entre deux notables. L’un a attaqué l’autre sans raison, en pleine rue, et prétend ne pas savoir pourquoi. En fait l’homme possède une épée consciente, tueuse de changeforme. L’autre en est un.",
				"De nuit les personnages tombent sur un groupe d’orques en train d'excaver un cercueil entouré de lourdes chaines. Les orques y ont enfermé plusieurs jours durant un elfe pour l’attendrir avant de lui faire révéler le mot de passe de la cité elfe qu’ils envisagent de prendre d’assaut.",
				"Un homme agonisant demande à ce qu'une missive soit portée au maire du prochain village, qui se révèle abandonné depuis longtemps. L’homme est le fantôme d’un messager qui n’a pu prévenir à temps le village d’une attaque. Pour mettre un terme à son errance, les personnages devront retrouver le fantôme du maire, évacuer le village puis repousser les assauts des spectres du passé.",
				"Un des personnages reçoit une lettre indiquant que des membres de sa famille ont été assassinés. Le coupable est aussi un membre de sa famille.",
				"En marchant sur la côte, les personnages découvrent une épave hantée par les fantômes des marins. C’est en fait un illusionniste ayant fui la justice qui se cache ici et qui utilise ses illusions pour tenir les curieux à l’écart de sa planque, qu’il a par ailleurs piégé en de nombreux endroits.",
				"Suite à l'attaque d'un dragon, on a perdu tout contact avec un monastère perdu dans les montagnes. Le dragon y a installé ses œufs sur le point d’éclore avant de quitter la région, et l’attaque étant venue du ciel, les murs sont toujours protégés par une ancienne magie.",
				"Un monstre de métal ravage la région, dévorant et assimilant tout ce qui est en fer. Pour le stopper, les personnages reçoivent l’aide d’un gnome spécialiste des automates, mais qui est aussi le créateur du monstre, dont il a perdu le contrôle et qu’il aimerait bien récupérer.",
				"Un célèbre apothicaire alchimiste paie un bon prix pour la récolte de fleurs de Glauqueglaçe, dans le marais voisin. Mais ces fleurs sont aussi l'ingrédient premier et sacré des habitants du village situé dans ces mêmes marais.",
				"Les membres d'un culte bienfaisant sont régulièrement agressés en pleine rue, et le maire ne dispose pas d’une milice suffisante pour y remédier. En fait, secrètement fidèle d'un dieu mauvais, il fait tout pour créer insidieusement la haine et la suspicion à l’égard de ce culte.",
				"Selon les villageois, si l’accès de la tour est condamné, c’est parce que le mage qui y vivait s’y serait emmuré, provoquant depuis une série de tremblements de terre. En réalité, les villageois ont eux-mêmes emmuré le mage après l’avoir volé, et racontent des histoires pour éloigner les curieux.",
				"Un village a été frappé par des inondations et les messagers envoyés ne sont pas revenus. C'est la carcasse d’un dragon qui s’est écrasé dans la rivière qui en détourne le cours normal, et des voleurs d’écailles ont tué les messagers qui s’apprêtaient à faire leur rapport pour déplacer le cadavre.",
				"Un personnage reçoit en héritage un vieux livre de recettes familiales. Le soir même un individu inquiétant vient le menacer en réclamant le grimoire. Le livre de cuisine est en fait un document crypté contenant la comptabilité d’une guilde de voleurs, impliquant de nombreux notables.",
				"Le gardien du port interdit aux navires de sortir car un dragon tortue aurait été aperçu. En réalité le gardien est payé par des contrebandiers qui ont une affaire à régler sur une île toute proche et ne veulent pas être dérangés.",
				"Des rats sortent en pagaille des égouts. Les rongeurs et leur maître rat-garou fuient un adepte d’un culte de la putréfaction, de la corruption et des vases qui fait, dans les égouts, des expériences de fusion corporelle avec des gelées ocres.",
				"En draguant le port à la recherche d’un bijou égaré, un homme découvre une paire de bottes de soldat avec à l’intérieur des restes de jambes nouées par une chaîne lestée. Si aucun soldat n’a été porté disparu, c’est qu’un membre d’un gang de voleurs a pris sa place pour infiltrer la milice.",
				"Les personnages découvrent la porte d'une antique cité dont la porte ne s'ouvre qu'en y posant la main d'un géant des pierres. Et les géants de la région refusent d’aider, croyant qu’un grand danger a été enterré dans la cité. Des moustiques porteurs d’une maladie oubliée y pullulent, effectivement.",
				"Un étrange nuage de brume va et vient la nuit sur les eaux du port. C'est un camouflage utilisé par un nécromancien pour camoufler sa barge, qui transporte les corps qu'il vient de déterrer, jusqu'à son repaire.",
				"On raconte qu'une princesse est retenue prisonnière dans un donjon isolé. Sauf que la légende ne date pas d'hier, et que la princesse, morte depuis bien longtemps, est devenue une âme en peine qui réclame vengeance.",
				"Des villageois paient une coquette somme pour débarrasser leur village d'un campement de gobelins établis dans les environs. Pourtant, les gobelins vivent de chasse et de cueillette, sans chercher à nuire à personne.",
				"Une succube a perdu toute confiance en elle et supplie l'un des personnages de passer une nuit dans ses bras. Elle se dit prête à payer ce service d'une information digne d’intérêt. Mais si elle obtient ce qu’elle veut, elle tentera de charmer son amant et de fuir avec lui pour l’offrir à sa maîtresse.",
				"Un avis de recherche accuse les personnages du meurtre d'un individu maléfique qu’ils ont effectivement tué. Les agissements maléfiques de cet individu n'étaient pas connus, ou bien la loi n'autorise pas de faire justice soi-même. Il leur faut fuir la région ou se défendre en justice.",
				"Des animaux féroces dévastent les environs et les druides semblent incapables de réagir. Des druides du cercle lunaire, extrémistes hostiles à la civilisation, alimentent en fait un rituel qui force leurs semblables à se transformer en bêtes féroces pour « renouer avec l’essence de la nature sauvage ».",
				"Un contact que les personnages doivent retrouver habite dans un quartier récemment placé en quarantaine à la suite d’un accident à l’académie de magie. Un portail vers Shedaklah, le 222e plan des Abysses, a été ouvert, infestant le quartier de champignons démoniaques.",
				"Un champion de joute est pris dans un triangle amoureux avec une jeune noble et un autre noble qui la convoite. Une indiscrétion révèle aux personnages que le noble cherche un groupe d'assassins pour se débarrasser de son rival, moyennant une importante rétribution.",
				"Une guilde de brasseurs nains vient de s'installer dans une ville où la guilde des voleurs déjà bien établie entend les racketter. Les personnages ont le choix entre aider les nains à s'émanciper de ces bandits ou plus simplement aider les voleurs dans leur sinistre besogne.",
				"Un seigneur mandate les personnages pour enquêter sur une créature qui ravage ses terres en dévorant tout le gibier et en massacrant les habitants. Le seigneur ignore sa lycanthropie, et le fait qu’il soit cette créature. Sa forme monstrueuse, elle, garde tous les souvenirs de sa forme humaine.",
				"Le succès d'une bardesse de renom lui est monté à la tête et elle manipule ses groupies pour qu'ils l'aident à renverser l'autorité locale et à devenir le nouveau gouverneur. Le gouverneur en place requiert l’aide des personnages pour régler le problème sans que cela nuise à son image.",
				"Une créature mystérieuse tue et pétrifie les habitants d’une ville dans une région pourtant civilisée. Un marchand peu scrupuleux a négocié pour un client la capture d’une gorgone, mais celle-ci, bien que droguée, a réussi à s’échapper du convoi et traque son ravisseur.",
				"Au cours d’une bagarre de taverne, les personnages amochent sans le savoir le fils d’un noble local. Ce dernier va le leur faire payer en les mandatant pour une mission suicide dans une caverne supposée occupée par de simples voleurs, mais en réalité habitée par une vouivre.",
				"Les habitants d’une région ne semblent plus en mesure de mourir, à défaut de cesser de souffrir. Ils sollicitent les personnages pour mettre fin à leur souffrance sans fin.",
				"Un deva blessé à la tête en combat a un peu perdu la raison et abuse de ses pouvoirs divins pour faire « le bien ».",
				"un village est devenu le repère d'une bande de malfrats, qui terrorisent la population et y entassent le fruit de leurs larcins. Les personnages doivent faire preuve de psychologie pour savoir sur qui ils vont pouvoir compter s’ils veulent se débarrasser des voyous.",
				"Un ami des personnages requiert leur aide pour fuir la milice et se disculper d’un crime dont on l’accuse. Le matin, il s’est réveillé aux côtés d’un cadavre et avec un sérieux mal de tête. Un changeforme l’a drogué et a usurpé son identité la nuit dernière pour le faire accuser de ses crimes.",
				"Après avoir rêvé plusieurs nuits d’un homme l’enjoignant à fuir, un personnage voit un chevalier spectral s’approcher pour revendiquer son âme suite à un pacte passé par l’un de ses ancêtres. Pour briser le sort, les personnages doivent fuir sans repos trois jours et trois nuits ce spectre infatigable.",
				"En lançant un de ses sorts favoris, un personnage voit une flamme verte apparaitre à la place de l’effet escompté. Un lien s’est établi avec un voyageur planaire et tous les sorts de l’un sont lancés par l’autre, jusqu’à ce que les personnages trouvent le moyen de rejoindre le plan du voyageur.",
				"Les personnages sont payés d'avance pour protéger un convoi marchand, mais ils découvrent à mi-chemin que la marchandise est constituée d'esclaves orques. La traite est sévèrement punie par la loi locale, mais la plupart des autres mercenaires du convoi tiennent à mener à bien leur contrat.",
				"L’un des personnages est la cible d’une série d’attentats. Les assassins semblent tous originaires d’un royaume voisin. Une sorcière vient de prophétiser au tyran de ce royaume que son règne sera renversé par une personne dont la description est trait pour trait celle du personnage.",
				"Les personnages ont eu vent d'un immense trésor détenu par un dragon rouge. Ce n'est qu’après l'avoir tué et pillé son trésor qu'il découvriront qu'il était constitué d'offrandes d'une race 'non-civilisée' vénérant ce dragon comme une divinité, et bien résolue à faire payer 'la civilisation' pour ce déicide.",
				"Un mage demande aux personnages de récupérer sa fille kidnappée par son rival. Il omet de préciser que lui et son rival pratiquent la nécromancie et que la fille que tous deux convoitent est un morbide, un mort-vivant facilitant la pratique de la magie noire dans son entourage immédiat.",
				"Les enfants du village disparaissent un à un. Ils sont enlevés par une vieille gnome psychopathe qui les transforme en poupées, dans son vieux manoir. Elle se bat entourée de 'nuées de poupées'.",
				"Les personnages enquêtent sur une série d’accidents et de morts étranges. Ces événements sont le fait d’objets animés par un sort défectueux créé par un chercheur en transmutation qui pensait avoir créé un sort permettant d'animer en masse des objets.",
				"Un syndicat du crime fomente un soulèvement massif des clochards et sans abris de la ville, pour provoquer une diversion qui leur permettra d'entrer dans la prison et assassiner un ex-criminel qui en sait un peu trop.",
				"Un temple perd ses fidèles depuis qu’une secte s’est établie autour d’un lac sacré dont l’eau soignerait de tous les maux. Le grand prêtre demande aux personnages de percer à jour la supposée supercherie, et enrôle en secret des mercenaires pour empoisonner l’eau du lac.",
				"Le seigneur local a acquis à grand frais des cartes merveilleuses. Pour le bien du royaume, les personnages ne devraient-ils pas les voler avant que le seigneur ne prenne le risque de les utiliser et d’attirer une malédiction sur ses terres ? À moins qu'il ne s'agisse que de cartes d'illusion...",
				"Les personnages partent dans une ancienne mine de diamants chercher s'il n'en trouverait pas d'assez gros pour accomplir un rituel de résurrection. Malheureusement, les mines sont actuellement visitées par les derniers fidèles d'un ancien tyran cherchant à le faire revenir à la vie.",
				"Les personnages se préparent à mourir en affrontant une armée supérieure à la leur, mais l'assaut tarde à venir. Leur général leur demande d'enquêter dans le camp ennemi, où ils découvrent qu'un ver pourpre rôde dans les environs.",
				"Des chevaliers sont de retour au château après avoir débarrassé la région d'un slaad. A leur insu, au moins l'un d'eux a été infecté par le monstre.",
				"Un seigneur démon enlève des mortels pour distraire ses invités à l'occasion d'une grande fête. Les personnages ne seront libérés que s'ils survivent à l'arène dans laquelle ils doivent assurer le spectacle.",
				"Les habitants d’un village s'endorment sans raison pour ne se réveiller qu’après plusieurs jours. En promettant à un esprit de le libérer, ils ont jadis obtenu de vivre des siècles, mais leur temps de veille n’a pas changé. L’esprit, qui n’a jamais été libéré, s’apprête à maudire toute la région.",
				"Après un combat contre des brigands, les personnages découvrent des larves étranges dans plusieurs corps. Un slaad tente d'implanter sa progéniture dans les clients d’une auberge de la région en contaminant de son urine les réserves d'alcool de l’établissement.",
				"Des hurlements de loups réveillent les personnages, déboussolés et désarmés, en pleine nature. Non loin de là, une auberge est tenue par des brigands qui dépouillent les voyageurs après les avoir drogués.",
				"Le seigneur local a été kidnappé et le mystérieux responsable réclame l'amulette de la prêtresse qui vient d'être enterrée dans la crypte, sous le temple. Un mage et une clique de brigands collectent ainsi des artéfacts magiques de la région, prenant les rançons puis disparaissant.",
				"Les personnages sont recrutés pour patrouiller sur une route en civil et sans armes afin de repérer un groupe de voleurs. Les autorités savent que de dangereux esclavagistes opèrent sur cette route, et espèrent que les personnages remonteront malgré eux jusqu'au camp de prisonniers.",
				"Après de simples actes de vandalismes, un groupe se faisant appeler les purificateurs s'en prend à deux gardes qu'on retrouve sans vie et recouverts de peinture blanche. Le fils du maire mène un groupe de fanatiques dont il se sert pour éliminer tout ce qui s’oppose à l'autorité de son père.",
				"Depuis qu'il a détruit une épée maudite, un grand paladin du bien est de plus en plus extrémiste et violent. Un fragment de l'arme est en fait enfoncé de son dos et le corrompt de l'intérieur, se répandant dans sa chair et le changeant peu à peu en fiélon.",
				"Un seigneur confie aux personnages la tâche d’apaiser les tensions avec des elfes des bois qui s’opposent à l’exploitation d’arbres supposés sacrés car leur essence brûle dans des flammes vertes. En fait, les arbres sont gorgés de cuivre car ils poussent sur la carcasse d'un dragon de cuivre.",
				"Un ami a vendu une potion de fertilité au duc. Récompensé lorsque la duchesse tombe enceinte, il est ensuite condamné lorsque l'enfant nait avec des cornes. Les personnages doivent enquêter sur les traces de sang fiélon dans la lignée du duc pour éviter la pendaison à leur camarade.",
				"Vague d'enlèvement dans une auberge prestigieuse : les clients disparaissent un à un et la rumeur dit que l'auberge serait hantée. En réalité une mimique a pris l'apparence d'un lit.",
				"Les personnages sont à la recherche du trésor d’un pilleur de tombes réputé pour avoir trouvé la plus grosse perle de l'histoire avant d’être capturé par des guerriers indigènes. Ces derniers l'ont jeté lui et sa perle dans un puits sacrificiel au fond duquel rôde un cube gélatineux géant.",
				"Un groupe de contrebandiers vend au marché noir des œufs de pégase avec une grosse réduction sur le prix du marché. Il s'agit en fait d’œufs de péryton qu'un groupe anticapitaliste extrémiste veut diffuser auprès des riches pour leur faire la peau.",
				"On a retrouvé, pétrifiés dans le château d'un mage solitaire, un groupe de héros récemment disparus. Le peuple réclame vengeance. Il y a longtemps le mage a donné vie à des statues pour qu’elles protègent le pays : elles prennent vie tous les 200 ans pour une durée de 10 ans.",
				"Un écrivain écrit bestseller sur bestseller, mais d'étranges phénomènes se passent autour de lui, et tous ceux qui pourraient entraver sa réussite disparaissent ou meurent. L'écrivain possède une plume de pégase corrompu qui, lorsqu'il écrit avec, modifie le destin dans une certaine mesure, suivant ce que l'auteur écrit.",
				"Des sables mouvants seraient responsables d’une grande quantité de disparitions sur la route du désert ces derniers temps. En fait de sables mouvants, une grande colonie de gelées ocres se déplacent sous le sable et attaquent les voyageurs, dont elles emmènent les cadavres dans les ruines d'une cité complètement ensevelie par le sable, pour les digérer et se multiplier.",
				"Depuis un certain temps, en ville, un voleur particulièrement doué sévit, dérobant les richesses de personnages de plus en plus prestigieux. Il s'agit en réalité d'un magicien passé maître dans l'utilisation du sort de sommeil, qui s'assure que toutes ses victimes soient endormies lorsqu'il s'infiltre chez elles.",
				"Les personnages sont sollicités pour se débarrasser d'une inquiétante infestation de mephits de vapeur. Ceux-ci se sont enfuit du laboratoire d'un gnome qui se servait d’eux pour alimenter ses dernières inventions.",
				"Alors que les personnages, en voyage, ont dressé leur camp à la belle étoile, ils se réveillent tous dans une chambre d'auberge, sans savoir comment ils sont arrivés là. Une malédiction pèse sur ce village, effaçant, lorsque l'on s'y endort, la mémoire de la journée qui vient de passer.",
				"Les villageois demandent aux personnages qu’ils les défendent contre les raids menés par des centaures. Des chasseurs ont tué le cerf géant qui depuis des générations servait de guide aux pérégrinations des centaures. Ces derniers cesseront les hostilités si les chasseurs sont châtiés.",
				"Des disparitions étranges se produisent en ville, en plus d'accouchements horribles. Le duc offrira titres et richesses à ceux qui libéreront sa cité de cette malédiction. Une bande d'incubes et de succubes, invoqués par un prêtre mauvais, sème le chaos en ville. Le prêtre est un fils bâtard du père du duc et veut faire tomber la famille pour se venger.",
				"A l'approche d’un événement astrologique majeur, les disparitions se multiplient dans une grande ville. Il s'agit d'un culte maléfique qui s'apprête à faire un grand sacrifice dans les catacombes le soir de l’événement.",
				"De nombreuses caravanes passant près d'un pic solitaire ont entendu des explosions, vu des éclairs et de la fumée en sortir. Une cabale de gnomes vindicatifs s'est installée dans les cavernes du pic pour y construire une insurmontable machine de guerre.",
				"Une tribu de kobolds se montre particulièrement agressive aux abords d'une forêt profonde. Un tout jeune dragon vert tente d'asseoir son autorité sur la région en dominant les humanoïdes.",
				"Des animaux étranges et dérangeants ont été aperçus autour de la ville. C'est un sorcier lié aux créatures du grand profond qui fait des expériences avec des choses que l'homme n'est pas censé connaître.",
				"Un petit groupe de villages ne paie plus ses impôts depuis des mois, et les trois derniers percepteurs envoyés n'ont pas donné de nouvelles. Révolté par les conditions de vie des paysans, le premier des percepteurs envoyé s'est rebellé et fomente une révolte contre le seigneur local.",
				"La tour d'un mage disparu, inventeur de la domothurgie (domotique magique), a été retrouvée. Il est dit qu'elle contient moult trésors et secrets. Mais les inventions, censées faciliter la vie du mage, sont toutes hors de contrôle et représentent des pièges bien plus dangereux qu'il n'y paraît.",
				"Un vieillard a retrouvé un cadavre au bout de sa ligne alors qu'il pêchait. Un gang de prostitués appâte les marins, les égorge et les dépouille avant de lester les corps et de les jeter à l'eau.",
				"Le laquais d'un noble arpente le port à la recherche d'un remède contre le mal de mer pour son maître. Parmi les charlatans qui se pressent autour du laquais, les personnages repèrent un groupe de voleurs bien organisés. Ceux-ci projettent de s’introduire chez le noble pour l’enlever.",
				"La communauté des pêcheurs de crabes bouillonne. Ils ne prennent plus rien dans leurs pièges, alors qu’un nouveau venu croule sous les crustacés. Ce simplet a vendu son âme à un diable contre un piège qui attire tous les crabes… ainsi que, bientôt, toutes sortes de monstruosités marines.",
				"La marche aux flambeaux, fête locale, change d'itinéraire par rapport aux dernières années. Une guilde marchande s'est débrouillée pour que la procession passe devant une maison-mère concurrente et qu'un incendie ravage ses locaux.",
				"La sainte patronne protectrice des marins apparaît depuis une semaine au bout de la digue, mais les marins qui vont la voir ne reviennent pas. C'est en réalité le fantôme d'une femme décédée qui attend toujours le retour de son mari.",
				"Des pêcheurs disparaissent et on redoute le réveil d’un kraken endormi par magie il y a des millénaires dans une crique très poissonneuse. Le kraken bouge dans son sommeil mais n’est pas une menace, à la différence des tertres errants d'algues qui rodent à ses abords.",
				"Un dragon rôde dans la région. Le mage qui le contrôlait grâce à un orbe dont lui seul maîtrisait la magie est mort en chutant alors qu’il le chevauchait. Le dragon cherche l’orbe pour le détruire et rependre sa liberté. Les personnages doivent trouver l’orbe et négocier avec le dragon son départ.",
				"Depuis plusieurs semaines, on est sans nouvelles d'un lointain royaume nain. Une puissante tribu d'humanoïdes maléfiques s'est installée sur la route commerciale menant à ce royaume, pillant et massacrant les caravanes de marchands.",
				"Les personnages découvrent une carte avec, à mi-chemin entre deux cités bien connues, dans les étendues sauvages, un gros X. Cette carte a été fabriquée par un groupe mystérieux qui cherche des aventuriers particulièrement compétents pour une quête et n'hésitera pas à les mettre à l’épreuve.",
				"Un prêtre d'une religion importante demande aux personnages de transporter un objet dans un lointain monastère perdu au milieu des montagnes. L'objet est maudit et attire la malchance sur quiconque le possède et ses compagnons, c'est pourquoi il doit être mis à l'abri.",
				"L'un des généraux de l'empire s'apprête à rentrer en ville pour défiler avec son armée, victorieuse contre un nécromancien et sa horde de zombis. Le général a en fait perdu et l'armée entière est composée de morts-vivants, camouflés par une puissante illusion.",
				"Un marchand qui a offert l’hospitalité aux personnages est retrouvé mort peu après. Pirate reconverti, blanchi pour avoir trahi ses compagnons, il trompait sa femme avec une maîtresse à laquelle il lègue sa fortune, et employait sans le savoir un espion à la solde de ses rivaux.",
				"Alors qu’ils voyagent au sein d’une caravane traversant le désert, les personnages découvrent une jeune halfline errante, à moitié brûlée par le soleil. Une horde d'humanoïdes s'est servi d’un de leurs captifs pour détourner l'attention avant de lancer une attaque surprise sur la caravane.",
				"Un prophète parcourt la contrée, accumulant les fidèles qui croient dur comme fer à ses prévisions apocalyptiques. Les prévisions se révéleront vraies s'il arrive à rassembler suffisamment de volontaires pour un suicide collectif qui invoquera un démon majeur.",
				"Des villageois sollicitent les personnages pour les débarrasser d’un dragon blessé, échoué sur une plage, mais encore capable de mordre ce qui passe à proximité. Le dragon sans défense cherchera à négocier et l’aider peut s'avérer profitable à terme, sans parler de la question morale.",
				"Un noble a appris qu'un cadavre de dragon était exposé au marché noir d’une cité en dépit des lois punissant ce type de trafic. Il mandate les personnages pour acquérir cette pièce rare afin de l’exposer dans son musée privé, mais un nécromant aux intentions plus sombres est aussi sur le coup.",
				"En délivrant une femme attachée à flanc de falaise et en tuant le monstre marin venu la dévorer, les personnages ont sans le savoir interrompu un sacrifice et provoqué la colère d’un dieu marin. Ils vont devoir aider les habitants à évacuer leur village avant le raz de marée imminent.",
				"Alors qu’ils se promènent au cœur d’une cité surpeuplée, les personnages voient soudainement tous les habitants qu’ils ne connaissaient pas personnellement prendre la forme de doppelgangers. Des démons illusionnistes se délectent déjà du chaos que leur magie va créer."];
const randomContext=[" Anniversaire du couronnement d'un monarque",
					"Commémoration d'un événement important",
					"Événement dans une arène",
					" Arrivée d'une caravane ou d'un navire",
					"Arrivée d'un cirque",
					"Arrivée d'un PNJ important",
					"Arrivée d'un déﬁlé de modrons",
					"Représentation artistique",
					"Événement sportif",
					"Naissance d'un enfant",
					"Anniversaire d'un PNJ important",
					"Festival municipal",
					"Apparition d'une comète",
					"Commémoration d'un ancien événement tragique",
					"Consécration d'un nouveau temple",
					"Couronnement",
					"Réunion d'un conseil",
					"Equinoxe ou solstice",
					"Exécution",
					"Festival de fertilité",
					"Pleine lune",
					"Funérailles",
					"Remise de diplôme à des élèves oﬃciers ou des magiciens"];
const randomEnnemies=["Un animal ou une monstruosite sans intention cachée particulière",
					"Une abberation déterminée à corrompre ou à dominer",
					"Un fiélon déterminé à corrompre ou à détruire",
					"Un dragon déterminé à dominer et à piller",
					"Un géant déterminé à piller",
					"Un mort-vivant avec un objectif quelconque",
					"Une fée avec un objectif mystérieux",
					"Un fanatique humanoide",
					"Un conquérant humanoide",
					"Un humanoide en quête de vengeance",
					"Un humanoide comploteur qui cherche à prendre le pouvoir",
					"Le cerveau humanoide d'une organisation criminelle",
					"Un pillard ou un destructeur humanoide",
					"Un humanoide victime d'une malédiction",
					"Un fanatique humanoide malavisé"];
const randomAllies=["Un aventurier compétent",
					"Un aventurier inexperimenté",
					"Un roturier enthousiaste",
					"Un soldat",
					"Un prêtre",
					"Un sage",
					"Un individu qui cherche à se venger",
					"Un fou furieux",
					"Un allié céleste",
					"Un allié féerique",
					"Un monstre déguisé",
					"Un adversaire qui se fait passer pour un allié"];
const randomBonus=["Trouver un objet spéciﬁque qui, semble-t-il, se trouve dans les environs.",
				"Récupérer un objet volé en possession de l'adversaire principal.",
				"Recevoir une information d'un PNJ de la zone.",
				"Libérer un prisonnier.",
				"Découvrir le sort d'un PNJ disparu.",
				"Tuer un monstre spéciﬁque.",
				"Découvrir la nature et l'origine d'un étrange phénomène dans les environs.",
				"Obtenir l'aide d'un personnage ou d'une créature dans les environs."];
const randomRebond=["Les aventuriers et d'autres créatures se précipitent pour atteindre un objectif identique ou opposé.",
					"Les aventuriers sont chargés de protéger un PNJ noncombattant.",
					"Les aventuriers ne sont pas autorisés à tuer leur adversaire, tandis que rien n'empêche ce dernier de les éliminer.",
					"Les aventuriers sont limités dans le temps.",
					"Les aventuriers ont reçu des informations erronées ou hors-sujet.",
					"L 'accomplissement d'un objectif d'aventure réalise une prophétie ou empêche sa réalisation.",
					"Les aventuriers ont deux objectifs différents mais seul ne peuvent en atteindre qu'un.",
					"L 'accomplissement d'un objectif aide secrètement leur adversaire.",
					"Les aventuriers doivent coopérer avec un ennemi connu pour atteindre leur objectif",
					"Les aventuriers sont victimes d'une coercition magique (telle qu'un sort de quête) qui les pousse à atteindre leur objectif."];
const randomPlace=["Une cité",
				   "Catacombes",
				   "Egouts",
				   "Ferme",
				   "Cimetière",
				   "Chateaux en ruine",
				   "Cité en ruine",
				   "Temple",
				   "Gouffre",
				   "Les parois d'une falaise",
				   "Un désert",
				   "Une forêt",
				   "Un glacier",
				   "Une jungle",
				   "Un col de montagne",
				   "Un marais",
				   "Des grottes sous-marines",
				   "Un pic montagneux",
				   "Un promontoire",
				   "Sur une île",
				   "Sous l'eau"];
const randomDesc=["Climat instable et dangereux",
				  "Abandonné",
				  "Infecté par le mal",
				  "Habité par des créatures",
				  "Envellopé dans un epais brouillard",
				  "Remplit de piège",
				  "Sombre",
				  "Envahit par la végétation",
				  "Entouré par une aura anti-magie",
				  "Bercé d'une aura bienfaitrice",
				  "Hantée",
				  "Inondée",
				  "Partiellement ensevelit"];
const randomPast=["Abondonné par ses créateurs",
				  "Abondonné à cause de la peste",
				  "Conquis par des envahisseurs",
				  "Créateurs tués par des assaillants",
				  "Créateurs tués par une decouverte faite à l'intérieur du site",
				  "Créateurs tués par un conflit interne",
				  "Créateurs tués par une catastrophe magique",
				  "Créateurs tués par un désastre naturel",
				  "Site maudit par les dieux puis évité",
				  "Les créateurs d'origine contrôlent toujours le site",
				  "Envahit par des créatures",
				  "Site créé par un fabuleux miracle"];
