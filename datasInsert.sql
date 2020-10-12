INSERT INTO race (name,str_bonus,dex_bonus,const_bonus,int_bonus,wis_bonus,cha_bonus)
	VALUES
		('AARAKOCRA',0,2,0,0,1,0),
		('PROTECTORAASIMAR',0,0,0,0,1,2),
		('SCOURGEAASIMAR',0,0,1,0,0,2),
		('FALLENAASIMAR',1,0,0,0,0,2),
		('CHANGELING',0,0,0,0,0,2),
		('DRAGONBORN',2,0,0,0,0,1),
		('DROW',0,2,0,0,0,1),
		('MOUNTAINDWARF',2,0,2,0,0,0),
		('HILLDWARF',0,0,2,0,1,0),
		('FIRBOLG',1,0,0,0,2,0),
		('AIRGENASI',0,1,2,0,0,0),
		('WATERGENASI',0,0,2,0,1,0),
		('FIREGENASI',0,0,2,1,0,0),
		('EARTHGENASI',1,0,2,0,0,0),	
		('FORESTGNOME',0,1,0,2,0,0),	
		('ROCKGNOME',0,0,1,2,0,0),
		('GOLIATH',2,0,1,0,0,0),
		('HALF-ELF',0,0,0,0,0,2),
		('HALF-ORC',2,0,1,0,0,0),
		('LIGHTFOOTHALFLING',0,2,0,0,0,1),
		('STOUTHALFLING',0,2,1,0,0,0),
		('GHOSTWISEHALFLING',0,2,0,0,1,0),
		('HIGH-ELF',0,2,0,1,0,0),
		('HOBGOBLIN',2,0,0,0,0,2),
		('HUMAN',2,0,0,0,0,2),
		('KENKU',2,0,0,0,0,2),
		('KOBOLD',2,0,0,0,0,2),
		('KOR',2,0,0,0,0,2),
		('LIZARDFOLK',2,0,0,0,0,2),
		('LOXODON',2,0,0,0,0,2),
		('MERFOLK',2,0,0,0,0,2),
		('MINOTAUR',2,0,0,0,0,2),
		('ORC',2,0,0,0,0,2),
		('SHIFTER',2,0,0,0,0,2),
		('SIMIC HYBRID',2,0,0,0,0,2),
		('TABAXI',2,0,0,0,0,2),
		('TIEFLING',2,0,0,0,0,2),
		('TRITON',2,0,0,0,0,2),
		('VAMPIRE',2,0,0,0,0,2),
		('VEDALKEN',2,0,0,0,0,2),
		('WARFORGED',2,0,0,0,0,2),
		('WOOD-ELF',2,0,0,0,0,2),
		('YUAN-TI',2,0,0,0,0,2);
		

INSERT INTO class (id,name)
	VALUES
		(1,'ARTIFICER'),
		(2,'BARBARIAN'),
		(3,'BARD'),
		(4,'CLERIC'),
		(5,'DRUID'),
		(6,'FIGHTER'),
		(7,'MONK'),
		(8,'PALADIN'),
		(9,'RANGER'),
		(10,'ROGUE'),
		(11,'SORCERER'),	
		(12,'WARLOCK'),	
		(13,'WARRIOR'),	
		(14,'WIZARD');

INSERT INTO sub_class (id,name,class_id)
	VALUES
		(1,'FIRE',14),
		(2,'WATER',14),
		(3,'EARTH',14),
		(4,'AIR',14),
		(5,'ARCANA',14),
		(6,'WEATHER',5),
		(7,'BESTIALITY',5),
		(8,'HERBALIST',5),
		(9,'SPIRIT',5),
		(10,'DISTANCE',9),
		(11,'SURVIVAL',9),	
		(12,'FAMILIAR',9),	
		(13,'CHAMPION',13);

INSERT INTO skill (id,name,type)
	VALUES
		(1,'ATHLETICS','STRENGTH'),
		(2,'ACROBATICS','DEXTERITY'),
		(3,'SLEIGHTOFHAND','DEXTERITY'),
		(4,'STEALTH','DEXTERITY'),
		(5,'ARCANA','INTELLIGENCE'),
		(6,'HISTORY','INTELLIGENCE'),
		(7,'INVESTIGATION','INTELLIGENCE'),
		(8,'NATURE','INTELLIGENCE'),
		(9,'RELIGION','INTELLIGENCE'),
		(10,'ANIMALHANDLING','WISDOM'),
		(11,'INSIGHT','WISDOM'),
		(12,'MEDECINE','WISDOM'),
		(13,'PERCEPTION','WISDOM'),
		(14,'SURVIVAL','WISDOM'),
		(15,'DECEPTION','CHARISMA'),
		(16,'INTIMIDATION','CHARISMA'),
		(17,'PERFORMANCE','CHARISMA'),
		(18,'PERSUASION','CHARISMA');
		
INSERT INTO capacity (name,level,description,sub_class_id)
	VALUES
		('FIREBALL',1,'A ball of fire',1);

INSERT INTO story (name,description)
	VALUES
		('ACOLYTE','storie'),
		('CRAFTSMAN','storie'),
		('ARTIST','storie'),
		('CHARLATAN','storie'),
		('KNIGHT','storie'),
		('CRIMINAL','storie'),
		('STREETCHILD','storie'),
		('ERMIT','storie'),
		('HERO','storie'),
		('SAILOR','storie'),
		('NOBLE','storie'),
		('SAGE','storie'),
		('SAVAGE','storie'),
		('SOLDIER','storie'),
		('MANHUNTER','storie'),
		('MERCENARY','storie'),
		('CAPTIVE','storie'),
		('IDIOT','storie'),
		('TRAVELE','storie');

		
INSERT INTO characteristic (name)
	VALUES
		('STRENGTH'),
		('DEXTERITY'),
		('CONSTITUTION'),
		('INTELLIGENCE'),
		('WISDOM'),
		('CHARISMA');
		


