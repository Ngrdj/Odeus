INSERT INTO pnj (id,name,size,resume,portrait,type)
	VALUES
		(1,'Loup','M','C''est un loup','https://www.aidedd.org/dnd/images/dire-wolf.jpg','BEAST'),
		(2,'Gobelin','P','Les gobelins sont de petits humanoïdes malveillants qui vivent dans des donjons abandonnés ou dans des taudis lugubres. Individuellement faibles, ils se rassemblent en grand nombre pour tourmenter les autres créatures.','https://www.aidedd.org/dnd/images/goblin.jpg','HUMANOID'),
		(3,'Orque','M','Les orques sont des humanoïdes sauvages qui ont une posture voutée, des visages grossiers et des dents proéminentes qui ressemblent à des défenses. Ils se rassemblent en tribus qui étanchent leur soif de sang en attaquant tous les humanoïdes qu''ils croisent.','https://www.aidedd.org/dnd/images/orc.jpg','HUMANOID');
		
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
		(4,true,1,13),
		(3,true,2,4),
		(2,true,3,16);
		
INSERT INTO pnj_pnj_capacities_capacity(pnj_id,capacity_id)
	VALUES
		(1,95),
		(1,96),
		(2,97),
		(2,98),
		(3,97),
		(3,98);
		

	/*	"https://www.worldanvil.com/media/cache/cover/uploads/images/2912e925202551b2f4a09253fd74aea5.jpg",
    "https://www.tomosygrapas.com/wp-content/uploads/2018/10/neverwinter_seascape.jpg",
    "https://i.pinimg.com/736x/78/49/a3/7849a3614feb701224b4a4d4888d9f39.jpg",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0052d15d-4c44-4d0f-aade-45074bff0633/dcasduj-6dec765f-3c38-4b58-9a56-5ba5922f7e38.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMDA1MmQxNWQtNGM0NC00ZDBmLWFhZGUtNDUwNzRiZmYwNjMzXC9kY2FzZHVqLTZkZWM3NjVmLTNjMzgtNGI1OC05YTU2LTViYTU5MjJmN2UzOC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.v2o4E_VJCsCH7XFpgHtgjkEl7NQizoMOhyeoctCgteM",
    "https://i.pinimg.com/originals/83/a9/09/83a9099d1240539a0ae208268dc12b2a.jpg",
    "https://i0.wp.com/nerdarchy.com/wp-content/uploads/2018/03/JeffBrown_GMINFLUENCE.jpg?fit=1200%2C776&ssl=1",*/
		
		
		
		