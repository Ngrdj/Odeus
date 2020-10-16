INSERT INTO pnj (id,name,size,resume,portrait)
	VALUES
		(1,'Loup','M','C''est un loup','https://www.aidedd.org/dnd/images/dire-wolf.jpg'),
		(2,'Gobelin','P','Les gobelins sont de petits humanoïdes malveillants qui vivent dans des donjons abandonnés ou dans des taudis lugubres. Individuellement faibles, ils se rassemblent en grand nombre pour tourmenter les autres créatures.','https://www.aidedd.org/dnd/images/goblin.jpg'),
		(3,'Orque','M','Les orques sont des humanoïdes sauvages qui ont une posture voutée, des visages grossiers et des dents proéminentes qui ressemblent à des défenses. Ils se rassemblent en tribus qui étanchent leur soif de sang en attaquant tous les humanoïdes qu''ils croisent.','https://www.aidedd.org/dnd/images/orc.jpg');
		
INSERT INTO pnj_characteristic (value,bonus,pnj_id,characteristic_id)
	VALUES
		(12,1,1,1),
		(15,2,1,2),
		(12,1,1,3),
		(3,-4,1,4),
		(12,1,1,5),
		(6,-2,1,6),
		
		(8,-1,2,1),
		(14,2,2,2),
		(10,0,2,3),
		(10,0,2,4),
		(8,-1,2,5),
		(8,-1,2,6),
		
		(16,3,3,1),
		(12,1,3,2),
		(16,3,3,3),
		(7,-2,3,4),
		(11,0,3,5),
		(10,0,3,6);
		
INSERT INTO pnj_skill (bonus,is_checked,pnj_id,skill_id)
	VALUES
		(6,true,1,4),
		(4,true,2,4),
		(3,true,2,13),
		(2,true,3,16);
		
		
		
		
		