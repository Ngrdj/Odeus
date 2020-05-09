//Fonction Random
const randomButton=document.getElementById('random');
const textGenButton = document.getElementsByClassName('textGenButton');


/*randomButton.addEventListener('click',()=>{
	resultRandom=Math.floor((Math.random()*20)+1);
	console.log(resultRandom);
<<<<<<< HEAD
})*/

resultRandom=Math.floor((Math.random()*20)+1);

for( const button of textGenButton){
    
    button.addEventListener('click', ()=>{
        
        let 
        let RandomNumber = Math.floor((Math.random()*20)+1);
                                  
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
				"Les habitants d’une région ne semblent plus en mesure de mourir, à défaut de cesser de souffrir. Ils sollicitent les personnages pour mettre fin à leur souffrance sans fin. Un deva blessé à la tête en combat a un peu perdu la raison et abuse de ses pouvoirs divins pour faire « le bien ».",
				"un village est devenu le repère d'une bande de malfrats, qui terrorisent la population et y entassent le fruit de leurs larcins. Les personnages doivent faire preuve de psychologie pour savoir sur qui ils vont pouvoir compter s’ils veulent se débarrasser des voyous.",
				"Un ami des personnages requiert leur aide pour fuir la milice et se disculper d’un crime dont on l’accuse. Le matin, il s’est réveillé aux côtés d’un cadavre et avec un sérieux mal de tête. Un changeforme l’a drogué et a usurpé son identité la nuit dernière pour le faire accuser de ses crimes.",
				"Après avoir rêvé plusieurs nuits d’un homme l’enjoignant à fuir, un personnage voit un chevalier spectral s’approcher pour revendiquer son âme suite à un pacte passé par l’un de ses ancêtres. Pour briser le sort, les personnages doivent fuir sans repos trois jours et trois nuits ce spectre infatigable.",
				"En lançant un de ses sorts favoris, un personnage voit une flamme verte apparaitre à la place de l’effet escompté. Un lien s’est établi avec un voyageur planaire et tous les sorts de l’un sont lancés par l’autre, jusqu’à ce que les personnages trouvent le moyen de rejoindre le plan du voyageur.",
				"Les personnages sont payés d'avance pour protéger un convoi marchand, mais ils découvrent à mi-chemin que la marchandise est constituée d'esclaves orques. La traite est sévèrement punie par la loi locale, mais la plupart des autres mercenaires du convoi tiennent à mener à bien leur contrat.",
				"L’un des personnages est la cible d’une série d’attentats. Les assassins semblent tous originaires d’un royaume voisin. Une sorcière vient de prophétiser au tyran de ce royaume que son règne sera renversé par une personne dont la description est trait pour trait celle du personnage."];
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
const randomEnnemies=[];
const randomAllies=[];
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

