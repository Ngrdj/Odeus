
INSERT INTO character (id,name,class_name,level,mastery_bonus,portrait,resume,alignment,gender,age,size,race_id,story_id,user_id)
	VALUES
	
	(1,'Sir Galadone','WARRIOR',1,2,'','Chevalier d''experience, ancien commandant d''un bataillon','LG','M',45,'M',26,5,1),
	(2,'Sa''we','RANGER',1,2,'','Ancienne brigande de grand chemin, elle a decidée de se racheter une conduite','CG','F',145,'M',31,6,1),
	(3,'Bartol','WIZARD',1,2,'','Artisant magicien à la recherche de tout se qui brille, toutes actions mérite récompense','NG','M',85,'P',8,2,1);

	
INSERT INTO character_characteristic(value,bonus,character_id,characteristic_id)
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
	
	(14,2,3,1),
	(10,0,3,2),
	(15,2,3,3),
	(15,2,3,4),
	(8,-1,3,5),
	(14,2,3,6);
	
INSERT INTO character_sub_class (value,sub_class_id,character_id)
	VALUES
	(1,13,1),
	
	
	(1,10,2),
	(1,11,2),
	(1,12,2),
	
	(1,1,3),
	(2,2,3),
	(1,3,3),
	(2,4,3),
	(1,5,3);
	
INSERT INTO character_skill (bonus,is_checked,skill_id,character_id)
	VALUES
	(3,false,1,1),
	(0,false,2,1),
	(0,false,3,1),
	(0,false,4,1),
	(1,false,5,1),
	(3,true,6,1),
	(1,false,7,1),
	(1,false,8,1),
	(1,false,9,1),
	(1,false,10,1),
	(0,false,11,1),
	(0,false,12,1),
	(0,false,13,1),
	(0,false,14,1),
	(2,false,15,1),
	(2,false,16,1),
	(2,false,17,1),
	(4,true,18,1),
	
	
	(0,false,1,2),
	(3,false,2,2),
	(3,false,3,2),
	(5,true,4,2),
	(0,false,5,2),
	(0,false,6,2),
	(0,false,7,2),
	(0,false,8,2),
	(0,false,9,2),
	(2,false,10,2),
	(2,false,11,2),
	(2,false,12,2),
	(2,false,13,2),
	(2,false,14,2),
	(1,true,15,2),
	(-1,false,16,2),
	(-1,false,17,2),
	(-1,false,18,2),
	
	
	(2,false,1,3),
	(0,false,2,3),
	(0,false,3,3),
	(0,false,4,3),
	(2,false,5,3),
	(2,false,6,3),
	(2,false,7,3),
	(2,false,8,3),
	(2,false,9,3),
	(-1,false,10,3),
	(1,true,11,3),
	(-1,false,12,3),
	(-1,false,13,3),
	(-1,false,14,3),
	(2,false,15,3),
	(2,false,16,3),
	(2,false,17,3),
	(4,true,18,3);
	
	
