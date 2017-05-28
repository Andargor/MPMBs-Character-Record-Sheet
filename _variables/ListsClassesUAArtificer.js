/*
	the Artificer Unearthed Arcana of 2017-01-09
	(http://media.wizards.com/2016/dnd/downloads/1_UA_Artificer_20170109.pdf)
	
	WARNING: there are no official multiclassing rules for Artificer; the ones provided here are extrapolated based on other classes.
*/
//adds a class, the Artificer, with two subclasses, Alchemist and Gunsmith
//this code was for a big part contributed by RCanine on ENworld

ClassList.artificer = {
	regExpSearch : /^(?=.*artificer)(?!.*wizard).*$/i,
	name : "Artificer",
	source : ["UA:A", 1],
	primaryAbility : "\n \u2022 Artificer: Intelligence;",
	abilitySave : 4,
	prereqs : "\n \u2022 Artificer: Intelligence 13;",
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 5, 5, 5],
	die : 8,
	saves : ["Con", "Int"],
	skills : ["\n\n" + toUni("Artificer") + ": Choose three from Arcana, Deception, History, Investigation, Medicine, Nature, Religion, and Sleight of Hand.", "\n\n" + toUni("Multiclass Artificer") + ": Choose one from Arcana, Deception, History, Investigation, Medicine, Nature, Religion, and Sleight of Hand."],
	tools : ["Thieves' tools + any two tools", "Any one tool"],
	armor : [
		[true, true, false, false]
	],
	weapons : [
		[true, false]
	],
	equipment : "Artificer starting equipment:\n \u2022 A handaxe and a light hammer -or- any two simple weapons;\n \u2022 Scale mail -or- studded leather armor;\n \u2022 A light crossbow and 20 bolts;\n \u2022 A dungeoneer's pack;\n \u2022 Thieves' tools.\n\nAlternatively, choose 5d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
	subclasses : ["Artificer Specialism", ["artificer-alchemist", "artificer-gunsmith"]],
	attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	spellcastingFactor : 3,
	spellcastingKnown : {
		spells : [0, 0, 3, 4, 4, 4, 5, 6, 6, 7, 8, 8, 9, 10, 10, 11, 11, 11, 12, 13]
	},
	features : {
		"subclassfeature1" : {
			name : "Artificer Specialist",
			source : ["UA:A", 2],
			minlevel : 1,
			description : desc([
				"Choose an Artificer Specialism and put it in the \"Class\" field on the first page",
				"Choose either Alchemist or Gunsmith"
			])
		},
		"magic item analysis" : {
			name : "Magic Item Analysis",
			source : ["UA:A", 2],
			minlevel : 1,
			description : desc(["I can cast Detect Magic and Identify as rituals without requiring material components"]),
			spellcastingBonus : [{
				name : "Magic Item Analysis",
				spells : ["detect magic"],
				selection : ["detect magic"],
				firstCol : "(R)"
			}, {
				name : "Magic Item Analysis",
				spells : ["identify"],
				selection : ["identify"],
				firstCol : "(R)"
			}]
		},
		"tool expertise" : {
			name : "Tool Expertise",
			source : ["UA:A", 3],
			minlevel : 2,
			description : desc(["I have expertise with any tool proficiencies I gain from the Artificer class"]),
			skillstxt : "\n\n" + toUni("Artificer") + ": expertise with with any tool proficiencies gained from the Artificer class.",
			eval : "if ((/thieves.? tools/i).test(What(\"Too Text\"))) { Checkbox(\"Too Exp\", true); };",
			removeeval : "if ((/thieves.? tools/i).test(What(\"Too Text\"))) { Checkbox(\"Too Exp\", false); };"
		},
		"wondrous invention" : {
			name : "Wondrous Invention",
			source : ["UA:A", 3],
			minlevel : 2,
			description : desc(["I gain a magic item that I have crafted; Use the \"Choose Features\" button above"]),
			additional : levels.map(function (n) {
				if (n < 2) return "";
				if (n < 5) return "1 item";
				if (n < 10) return "2 items";
				if (n < 15) return "3 items";
				if (n < 20) return "4 items";
				return "5 items";
			}),
			extraname : "Wondrous Invention",
			extrachoices : ["Bag of Holding (prereq: level 2 artificer)", "Cap of Water Breathing (prereq: level 2 artificer)", "Driftglobe (prereq: level 2 artificer)", "Goggles of Night (prereq: level 2 artificer)", "Sending Stones (prereq: level 2 artificer)", "Alchemy Jug (prereq: level 5 artificer)", "Helm of Comprehending Languages (prereq: level 5 artificer)", "Lantern of Revealing (prereq: level 5 artificer)", "Ring of Swimming (prereq: level 5 artificer)", "Robe of Useful Items (prereq: level 5 artificer)", "Rope of Climbing (prereq: level 5 artificer)", "Wand of Magic Detection (prereq: level 5 artificer)", "Wand of Secrets (prereq: level 5 artificer)", "Bag of Beans (prereq: level 10 artificer)", "Chime of Opening (prereq: level 10 artificer)", "Decanter of Endless Water (prereq: level 10 artificer)", "Eyes of Minute Seeing (prereq: level 10 artificer)", "Folding Boat (prereq: level 10 artificer)", "Heward's Handy Haversack (prereq: level 10 artificer)", "Boots of Striding and Springing (prereq: level 15 artificer)", "Bracers of Archery (prereq: level 15 artificer)", "Brooch of Shielding (prereq: level 15 artificer)", "Broom of Flying (prereq: level 15 artificer)", "Hat of Disguise (prereq: level 15 artificer)", "Slippers of Spider Climbing (prereq: level 15 artificer)", "Eyes of the Eagle (prereq: level 20 artificer)", "Gem of Brightness (prereq: level 20 artificer)", "Gloves of Missile Snaring (prereq: level 20 artificer)", "Gloves of Swimming and Climbing (prereq: level 20 artificer)", "Ring of Jumping (prereq: level 20 artificer)", "Ring of Mind Shielding (prereq: level 20 artificer)", "Wings of Flying (prereq: level 20 artificer)"] //come back to this with the function to make the individual entries
		},
		"spellcasting" : {
			name : "Spellcasting",
			source : ["UA:A", 3],
			minlevel : 3,
			description : desc([
				"I can cast artificer spells that I know, using Intelligence as my spellcasting ability",
				"I can use an arcane focus as a spellcasting focus"
			])
		},
		"infuse magic" : {
			name : "Infuse Magic",
			source : ["UA:A", 4],
			minlevel : 4,
			description : desc([
				"By spending 1 minute, I can infuse one of my artificer spells into a nonmagical item",
				"This expends a spell slot as normal and the spell must have a casting time of 1 action",
				"An item holds max one spell for 8 hours; I can have up to my Int mod of infused items",
				"A creature holding an infused item can use an action to cast the spell, using my ability",
				"The spell's target is the creature activating it or, with area of effect spells, the item"
			])
		},
		"mechanical servant" : {
			name : "Mechanical Servant",
			source : ["UA:A", 4],
			minlevel : 6,
			description : desc([
				"I create a construct that obeys my orders; It acts on its own initiative",
				"I can repair it to 1 HP during a long rest, or build a new one in a week with 1000 gp",
				"As a reaction when I'm attacked in melee, I can have it make a melee attack back"
			])
		},
		"superior attunement" : {
			name : "Superior Attunement",
			source : ["UA:A", 4],
			minlevel : 5,
			description : "",
			additional : levels.map(function (n) {
				if (n < 5) return "";
				if (n < 15) return "attune to 4 magic items instead of 3";
				if (n < 20) return "attune to 5 magic items instead of 3";
				return "attune to 6 magic items instead of 3";
			})
		},
		"soul of artifice" : {
			name : "Soul of Artifice",
			source : ["UA:A", 4],
			minlevel : 20,
			description : desc(["I gain a +1 bonus to all saving throws per magic item I am currently attuned to"]),
			save : "+1 to all saves per attuned magic item"
		}
	}
};

//the Alchemist subclass for the Artificer
ClassSubList["artificer-alchemist"] = {
	regExpSearch : /^(?=.*artificer)(?=.*alchemist)(?!.*wizard).*$/i,
	subname : "Alchemist",
	source : ["UA:A", 5],
	features : {
		"subclassfeature1" : {
			name : "Alchemist's Satchel",
			source : ["UA:A", 5],
			minlevel : 1,
			description : desc([
				"I craft an Alchemist's Satchel, a magic item with which I can create concoctions",
				"Whenever I reach in, it holds the material for the Alchemical Formula I want to use",
				"If lost, I craft another by spending 8 hours a day for 3 days and 100 gp of materials"
			])
		},
		"subclassfeature1.1" : {
			name : "Alchemy Formulae",
			source : ["UA:A", 5],
			minlevel : 1,
			description : desc([
				"I learn Alchemical Formulae that I can use if I have my Alchemist's Satchel within reach",
				"I learn the Alchemical Acid and Fire formulae, and additional depending on my level",
				"Use the \"Choose Features\" button above to select additional Alchemical Formulae"
			]),
			additional : levels.map(function (n) {
				if (n < 3) return "1 additional formula";
				if (n < 9) return "2 additional formula";
				if (n < 14) return "3 additional formula";
				if (n < 17) return "4 additional formula";
				return "5 additional formula";
			}),
			extraname : "Alchemical Formula",
			extrachoices : ["Healing Draught", "Smoke Stick", "Swift Step Draught", "Tanglefoot Bag", "Thunderstone"],
			"healing draught" : {
				name : "Healing Draught",
				source : ["UA:A", 5],
				description : desc([
					"As an action, I can take a vial of healing liquid from my satchel, which lasts for 1 hour",
					"Anyone can drink this as an action, healing in doing so, after which the vial disappears",
					"One vial heals a number of d8 equal to half my artificer level (rounded up) in HP",
					"After being healed this way, a creature can't do so again until it finishes a long rest",
					"While a Healing Draught exists, I can't use this formula to create another one"
				]),
				action : ["action", ""]
			},
			"smoke stick" : {
				name : "Smoke Stick",
				source : ["UA:A", 5],
				description : desc([
					"As an action, I can take a smoke stick from my satchel and throw it up to 30 ft away",
					"The stick produces smoke in a 10-ft radius around it, blocking vision, incl. darkvision",
					"It disappears after 1 minute; After creating one, I can't create a new one for 1 minute"
				]),
				action : ["action", ""]
			},
			"swift step draught" : {
				name : "Swift Step Draught",
				source : ["UA:A", 5],
				description : desc([
					"As a bonus action, I take a vial of brown liquid from my satchel, which lasts for 1 minute",
					"Any creature can drink this vial as an action, gaining +20 ft speed for 1 minute",
					"After use, the vial disappears; After creating one, I can't create a new one for 1 minute"
				]),
				action : ["bonus action", ""]
			},
			"tanglefoot bag" : {
				name : "Tanglefoot Bag",
				source : ["UA:A", 6],
				description : desc([
					"As an action, I can hurl a bag of black tar to a point on the ground within 30 ft",
					"It bursts and covers the ground with sticky goo in a 5-ft radius, which lasts for 1 min",
					"It is difficult terrain and anyone starting its turn in it has its speed halved for that turn",
					"After creating one, I can't create a new one for 1 minute"
				]),
				action : ["action", ""]
			},
			"thunderstone" : {
				name : "Thunderstone",
				source : ["UA:A", 6],
				description : desc([
					"As an action, I can hurl a crystalline shard at a creature/object/surface within 30 ft",
					"It shatters on impact and any creature within 10 ft must make a Constitution save",
					"If failed, a creature is knocked prone and pushed 10 ft away from the point of impact"
				]),
				action : ["action", ""]
			}
		},
		"subclassfeature1.2" : {
			name : "Formula: Alchemical Acid",
			source : ["UA:A", 5],
			minlevel : 1,
			description : desc([
				"As an action, I can hurl a vial of acid at a creature or object within 30 ft",
				"It shatters on impact and the target must succeed on a Dex save or take acid damage",
				"An object automatically fails its saving throw and takes maximum damage"
			]),
			additional : levels.map(function (n) {
				return Math.ceil(n / 2) + "d6 acid damage";
			}),
			action : ["action", ""],
			eval : "AddWeapon('Alchemical Acid');",
			removeeval : "RemoveWeapon('Alchemical Acid');",
			calcChanges : {
				atkAdd : ["if (WeaponName === 'alchemical acid' && classes.known.artificer && classes.known.artificer.level) {fields.Proficiency = true; fields.Damage_Die = function(n){return Math.ceil(n / 2) + 'd6';}(classes.known.artificer.level); }; ", ""]
			}
		},
		"subclassfeature1.3" : {
			name : "Formula: Alchemical Fire",
			source : ["UA:A", 5],
			minlevel : 1,
			description : desc([
				"As an action, I can hurl a vial of volatile liquid at a creature/object/surface within 30 ft",
				"It explodes and all within a 5-ft radius must succeed on a Dex save or take fire damage"
			]),
			additional : levels.map(function (n) {
				return Math.ceil(n / 3) + "d6 fire damage";
			}),
			action : ["action", ""],
			eval : "AddWeapon('Alchemical Fire');",
			removeeval : "RemoveWeapon('Alchemical Fire');",
			calcChanges : {
				atkAdd : ["if (WeaponName === 'alchemical fire' && classes.known.artificer && classes.known.artificer.level) {fields.Proficiency = true; fields.Damage_Die = function(n){return Math.ceil(n / 3) + 'd6';}(classes.known.artificer.level); }; ", ""]
			}
		}
	}
};

//the Gunsmith subclass for the Artificer
ClassSubList["artificer-gunsmith"] = {
	regExpSearch : /^(?=.*artificer)(?=.*gunsmith)(?!.*wizard).*$/i,
	subname : "Gunsmith",
	source : ["UA:A", 6],
	features : {
		"subclassfeature1.1" : {
			name : "Master Smith",
			source : ["UA:A", 6],
			minlevel : 1,
			description : desc(["I gain proficiency with smith's tools and I learn the mending cantrip"]),
			spellcastingBonus : {
				name : "Master Smith",
				spells : ["mending"],
				selection : ["mending"]
			},
			eval : "AddTool(\"Smith's tools\", \"Gunsmith (Master Smith)\");",
			removeeval : "RemoveTool(\"Smith's tools\", \"Gunsmith (Master Smith)\");"
		},
		"subclassfeature1.2" : {
			name : "Thunder Cannon",
			source : ["UA:A", 6],
			minlevel : 1,
			description : desc([
				"I craft a magical firearm, my thunder cannon, with which I am proficient",
				"If lost, I craft another by spending 8 hours a day for 3 days and 100 gp of materials"
			]),
			weapons : [false, false, ["thunder cannon"]],
			action : ["bonus action", " (reload)"],
			eval : "AddWeapon('Thunder Cannon');",
			removeeval : "RemoveWeapon('Thunder Cannon');"
		},
		"subclassfeature1.3" : {
			name : "Arcane Magazine",
			source : ["UA:A", 6],
			minlevel : 1,
			description : desc([
				"I craft a leather bag that holds my tools, ammunition, and materials for the weapon",
				"I can use it to produce 40 rounds of ammo after a long rest or 10 after a short rest",
				"If lost, I can create a new one as part of a long rest with 25 gp of materials"
			])
		},
		"subclassfeature3" : {
			name : "Thunder Monger",
			source : ["UA:A", 6],
			minlevel : 3,
			description : desc(["As an action, I can make an attack with my thunder cannon that does extra damage"]),
			additional : levels.map(function (n) {
				if (n < 3) return "";
				return "+" + Math.floor((n - 1) / 2) + "d6 thunder damage";
			}),
			action : ["action", ""],
			eval : "AddWeapon('Thunder Cannon (Monger)');",
			removeeval : "RemoveWeapon('Thunder Cannon (Monger)');",
			calcChanges : {
				atkAdd : ["if (WeaponName === 'thunder cannon-thunder monger' && classes.known.artificer && classes.known.artificer.level > 2) {fields.Description += '; +' + function(n){return Math.floor((n - 1) / 2) + 'd6 thunder damage';}(classes.known.artificer.level); }; ", ""]
			}
		},
		"subclassfeature9" : {
			name : "Blast Wave",
			source : ["UA:A", 6],
			minlevel : 9,
			description : desc([
				"As an action, I can make a special attack with my thunder cannon in a 15-ft cone",
				"Creatures in the area must make a Str save or take damage and pushed back 10 ft"
			]),
			additional : levels.map(function (n) {
				return n < 9 ? "" :
				n < 13 ? "2d6 force damage" :
				n < 17 ? "3d6 force damage" :
				"4d6 force damage";
			}),
			action : ["action", ""],
			eval : "AddWeapon('Thunder Cannon (Blast Wave)');",
			removeeval : "RemoveWeapon('Thunder Cannon (Blast Wave)');",
			calcChanges : {
				atkAdd : ["if (WeaponName === 'thunder cannon-blast wave' && classes.known.artificer && classes.known.artificer.level >= 13) {fields.Damage_Die = function(n){return (n < 17 ? 3 : 4) + 'd6';}(classes.known.artificer.level); }; ", ""]
			}
		},
		"subclassfeature14" : {
			name : "Piercing Round",
			source : ["UA:A", 6],
			minlevel : 14,
			description : desc([
				"As an action, I can make a special attack with my thunder cannon in a 30-ft line",
				"Creatures in the 5-ft wide line must make a Dex save or take damage"
			]),
			additional : levels.map(function (n) {
				return n < 14 ? "" :
				n < 19 ? "4d6 lightning damage" :
				"6d6 lightning damage";
			}),
			action : ["action", ""],
			eval : "AddWeapon('Thunder Cannon (Piercing Round)');",
			removeeval : "RemoveWeapon('Thunder Cannon (Piercing Round)');",
			calcChanges : {
				atkAdd : ["if (WeaponName === 'thunder cannon-piercing round' && classes.known.artificer && classes.known.artificer.level >= 19) {fields.Damage_Die = '6d6'; }; ", ""]
			}
		},
		"subclassfeature17" : {
			name : "Explosive Round",
			source : ["UA:A", 7],
			minlevel : 17,
			description : desc([
				"As an action, I can make a special exploding attack with my thunder cannon",
				"A 30-ft radius sphere somewhere within range of the thunder cannon is affected",
				"Creatures in the area must make a Dexterity saving throw or take 4d8 fire damage"
			]),
			additional : "4d8 fire damage",
			action : ["action", ""],
			eval : "AddWeapon('Thunder Cannon (Explosive Round)');",
			removeeval : "RemoveWeapon('Thunder Cannon (Explosive Round)');"
		}
	}
};