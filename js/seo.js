window.Pro = window.Pro || {};
window.Pro.Motion = window.Pro.Motion || {};
window.Pro.Motion.Stories = window.Pro.Motion.Stories || {};
var seo = Pro.Motion.Stories.seo = Pro.Motion.Stories.seo || {};

seo.story = {
	classes: {
		text: {
			color:"transparent", font:10, style:"bold", opacity:90
		},
		title: {
			class:"text", color:"white", textWidth:80, textAlign:"center"
		},
		topTitle: {
			class:"text", color:"white", anchor:[-50,-50]
		},
		textLine: {
			color:"white", textAlign:"left"
		},
		textShadow: {
			textShadow:[[0,0,0,"rgba(255,255,255,1)"],[0.5,0.5,1,"rgba(0,0,0,1)"]]		
		},
		blurredChars: {
			scale:250, 
			textShadow:[[0,0,20,"rgba(255,255,255,0)"],[0.5,0.5,10,"rgba(0,0,0,0)"]]
		}
  },
	canvas: { padding:3, init: { font: "'Open Sans', sans-serif" }},
	frame: { aspectRatio: 4/3, init: {bg:"rgba(95,127,255,0.1)"} },
	pages: [
		{
			items: [
				{	text: "SEO",
					init: {class: "text", font:50}, charInit: {class: "blurredChars"},
					charScripts: [
						{action: {anim:1.3, scale:100, pos:false, textShadow:[[0,0,0,"rgba(255,255,255,1)"],[0.5,0.5,1,"rgba(0,0,0,1)"]]}},
						{scriptType:"step2", action: {anim:1.7, opacity:0, textShadow:[[0,0,20,"rgba(255,255,255,0)"],[0.5,0.5,10,"rgba(0,0,0,0)"]] }}
					]
				},
				{	text: "What is this SEO thing and how<br>do I get some?",
					init: {class: "title"}, wordsInit:{opacity:0, textShadow:[[0,0,0,"rgba(255,255,255,1)"],[0.5,0.5,1,"rgba(0,0,0,1)"]]},
					wordScripts: [
						{scriptType:"step2", action: {anim:{dur:2,stagger:0.1}, opacity:100}},
						{scriptType:"step3", action: {anim:{dur:0.7}, opacity:0 }}
					],
					script: { scriptType:"step2", action: {anim:7,scale:110}}
				},
				{	text: "Hire an SEO consultant?",
					init: {class: "title"}, wordsInit:{opacity:0, textShadow:[[0,0,0,"rgba(255,255,255,1)"],[0.5,0.5,1,"rgba(0,0,0,1)"]]},
					wordScripts: [
						{scriptType:"step3", action: {anim:{dur:2,stagger:0.1}, opacity:100}},
						{scriptType:"step4", action: {anim:0.7, opacity:0 }}
					],
					script: { scriptType:"step3", action: {anim:7,scale:110}}
				},
				{	text: "What is Google's<br>#1 priority?",
					init: {class: "title"}, wordsInit:{opacity:0, textShadow:[[0,0,0,"rgba(255,255,255,1)"],[0.5,0.5,1,"rgba(0,0,0,1)"]]},
					wordScripts: [
						{scriptType:"step4", action: {anim:{dur:2,stagger:0.1}, opacity:100}},
						{scriptType:"step5", action: {anim:0.7, opacity:0 }}
					],
					script: { scriptType:"step4", action: {anim:7,scale:110}}
				},
				{	text: "The Best Results",
					init: {class: "topTitle", pos:[-31,-5]}, wordsInit:{opacity:0, class:"textShadow"},
					wordScripts: [
						{scriptType:"step5", action: {anim:{dur:2,stagger:0.1}, opacity:100}},
						{scriptType:"step7", action: {anim:0.7,opacity:0 }}
					],
					scripts: [
						{scriptType:"step5", action: {anim:4,scale:110}},
						{scriptType:"step6", action: {anim:2,scale:90,pos:[-36,-24]}}
					],
					charScript: {scriptType:"step6", action: {anim:{dur:3,stagger:0.01,ease:"less elastic"}, pos:[-14,-30]} }
				},
				{	text: ["Content","Credibility"],
					init: {class: "textLine", font:13}, linesInit:{class:"textShadow", opacity:0, pos:[10,0,-30], bullets:true, scale:90},
					lineScripts: [
						{scriptType:"step6", action: {delay:0.5, anim:{dur:1,stagger:1}, opacity:100, pos:false}},
						{scriptType:"step7", action: {anim:0.7, opacity:0 }}
					]
				},
				{	text: "Content",
					init: {class: "topTitle", anchor:[-50,-50]}, wordsInit:{class:"textShadow", opacity:0, pos:[-50,-50]},
					wordScripts: [
						{scriptType:"step7", action: {anim:{dur:2,stagger:0.1}, opacity:100, pos:[-47,-50]}},
						{scriptType:"step8", action: {anim:0.7, opacity:0, pos:[-50,-50] }}
					]
				},
				{	text: ["Page text", "Titles and headers", "Descriptions", "URLs", "Sitemaps", "Robots.txt"],
					init: {class: "textLine", font:9, pos:{y:3}}, linesInit:{class:"textShadow", opacity:0, pos:[10,0,-30], bullets:true, scale:90},
					lineScripts: [
						{scriptType:"step7", action: {anim:{dur:1,stagger:0.1}, opacity:100, pos:false}},
						{scriptType:"step8", action: {anim:{dur:1,stagger:0.1}, opacity:0, pos:[10,0,-30] }}
					]
				},
				{	text: "Credibility",
					init: {class: "topTitle", anchor:[-50,-50]}, wordsInit:{class:"textShadow", opacity:0, pos:[-50,-50]},
					wordScripts: [
						{scriptType:"step8", action: {delay:0.2, anim:{dur:2,stagger:0.1}, opacity:100, pos:[-47,-50]}},
						{scriptType:"step9", action: {anim:0.7, opacity:0, pos:[-50,-50] }}
					]
				},
				{	text: ["PageRank", "Time on page", "Freshness", "Disclosure", "Professionalism", "No Trickery"],
					init: {class: "textLine", font:9, pos:{y:3}}, linesInit:{class:"textShadow", opacity:0, pos:[10,0,-30], bullets:true, scale:90},
					lineScripts: [
						{scriptType:"step8", action: {delay:0.2, anim:{dur:1,stagger:0.1}, opacity:100, pos:false}},
						{scriptType:"step9", action: {anim:{dur:1,stagger:0.1}, opacity:0, pos:[10,0,-30] }}
					]
				},
				{
					itemType:"image",
					src:"images/HTML1.png",
					width:100,
					init: {opacity:0},
					scripts: [
					  {scriptType:"step9", action:{anim:2, opacity:100}},
						{scriptType:"step10", action:{anim:1, opacity:0}}
					]
				},
				{
					itemType:"image",
					src:"images/HTML2.png",
					width:100,
					init: {opacity:0},
					scripts: [
					  {scriptType:"step10", action:{anim:1, opacity:100}},
						{scriptType:"step11", action:{anim:1, opacity:0}}
					]
				},
				{
					itemType:"image",
					src:"images/HTML3.png",
					width:100,
					init: {opacity:0},
					scripts: [
					  {scriptType:"step11", action:{anim:2, opacity:100}},
						{scriptType:"step12", action:{anim:1, opacity:0}}
					]
				},
				{
					itemType:"image",
					src:"images/HTML4.png",
					width:100,
					init: {opacity:0},
					scripts: [
					  {scriptType:"step12", action:{anim:2, opacity:100}},
						{scriptType:"step13", action:{anim:1, opacity:0}}
					]
				},
				{
					itemType:"image",
					src:"images/HTML5.png",
					width:100,
					init: {opacity:0},
					scripts: [
					  {scriptType:"step13", action:{anim:2, opacity:100}},
						{scriptType:"step14", action:{anim:1, opacity:0}}
					]
				},
				{
					itemType:"image",
					src:"images/HTML6.png",
					width:100,
					init: {opacity:0},
					scripts: [
					  {scriptType:"step14", action:{anim:2, opacity:100}},
						{scriptType:"step15", action:{anim:1, opacity:0}}
					]
				},
				{
					itemType:"image",
					src:"images/HTML1.png",
					width:100,
					init: {opacity:0},
					scripts: [
					  {scriptType:"step15", action:{anim:2, opacity:100}},
						{scriptType:"step16", action:{anim:1, opacity:0}}
					]
				},
				{	text: "Exercise:",
					init: {class: "topTitle", anchor:[-50,-50]}, wordsInit:{class:"textShadow", opacity:0, pos:[-50,-50]},
					wordScripts: [
						{scriptType:"step16", action: {delay:0.2, anim:{dur:2,stagger:0.1}, opacity:100, pos:[-47,-50]}},
						{scriptType:"step18", action: {anim:0.7, opacity:0, pos:[-50,-50] }}
					]
				},
				{	text: "Write down your top 5 search phrases",
					init: {class: "title"}, wordsInit:{opacity:0, class:"textShadow"},
					wordScripts: [
						{scriptType:"step16", action: {delay:0.5, anim:{dur:2,stagger:0.1}, opacity:100}},
						{scriptType:"step17", action: {anim:0.7,opacity:0 }}
					],
					scripts: [
						{scriptType:"step16", action: {anim:7,scale:110}},
						{scriptType:"step17", action: {anim:0.3,scale:90}}
					]
				},
				{	text: ["Exact phrases (concise!)", "Does word order matter?", "Future: Think of 15-20 more"],
					init: {class: "textLine", font:8.5}, linesInit:{class:"textShadow", opacity:0, pos:[10,0,-30], bullets:true, scale:90},
					lineScripts: [
						{scriptType:"step17", action: {anim:{dur:1,stagger:0.7}, opacity:100, pos:false}},
						{scriptType:"step18", action: {anim:0.7, opacity:0 }}
					]
				}
			]
		}
	]
};

Pro.Motion.Stories.Config.default.auto.advance = false;
Pro.Motion.Stories.Config.default.auto.restart = false;
Pro.Motion.Stories.Config.default.keyboard = true;
