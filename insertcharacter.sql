INSERT INTO character (id,name,level,mastery_bonus,portrait,resume,alignment,gender,age,race_id,story_id)
	VALUES
	
	(1,'Sir Galadone',1,2,'','Chevalier d''experience, ancien commandant d''un bataillon','LG','M',45,26,5),
	(2,'Sa''we',1,2,'','Ancienne brigande de grand chemin, elle a decidée de se racheter une conduite','CG','F',145,31,6),
	(3,'Bartol',1,2,'','Artisant à la recherche de tout se qui brille, toutes actions mérite récompense','NG','M',85,8,2);
	
INSERT INTO characterClass(value,bonus,character_id,characteristic_id)
	VALUES
	(16,3,1,1),
	(11,0,1,2),
	(15,2,1,3),
	(11,0,1,4),
	(11,0,1,5),
	(14,2,1,6),
	
	(10,0,2,1),
	(17,3,2,2),
	(13,1,2,3),
	(11,0,2,4),
	(15,2,2,5),
	(9,-1,2,6),
	
	(17,3,3,1),
	(10,0,3,2),
	(16,3,3,3),
	(12,1,3,4),
	(8,-1,3,5),
	(13,1,3,6);
	
INSERT INTO characterSubClass (value,sub_class_id,character_id)
	VALUES
	()
