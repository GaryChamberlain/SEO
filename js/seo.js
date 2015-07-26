window.Pro = window.Pro || {};
window.Pro.Motion = window.Pro.Motion || {};
window.Pro.Motion.Stories = window.Pro.Motion.Stories || {};
var seo = Pro.Motion.Stories.seo = Pro.Motion.Stories.seo || {};

seo.story = {
	classes: {
		text: {
			color:"transparent", font:10, style:"bold", opacity:90
		},
		text2: {
			color:"white", class:"text"
		},
		textShadow: {
			textShadow:[[0,0,0,"rgba(255,255,255,1)"],[0.5,0.5,1,"rgba(0,0,0,1)"]]		
		},
		blurredChars: {
			scale:250, 
			textShadow:[[0,0,20,"rgba(255,255,255,0)"],[0.5,0.5,10,"rgba(0,0,0,0)"]]
		}
  },
	canvas: { init: { font: "'Open Sans', sans-serif" }},
	frame: { aspectRatio: 4/3 },
	pages: [
		{
			items: [
				{	text: "SEO",
					init: {class: "text", font:50}, charInit: {class: "blurredChars"},
					charScripts: [
						{action: {anim:0.7, scale:100, pos:false, textShadow:[[0,0,0,"rgba(255,255,255,1)"],[0.5,0.5,1,"rgba(0,0,0,1)"]]}},
						{scriptType:"step2", action: {anim:0.7, opacity:0, textShadow:[[0,0,20,"rgba(255,255,255,0)"],[0.5,0.5,10,"rgba(0,0,0,0)"]] }}
					]
				},
				{	text: "What is this SEO thing and how do I get some?",
					init: {class: "text2", textWidth:90}, wordsInit:{opacity:0, textShadow:[[0,0,0,"rgba(255,255,255,1)"],[0.5,0.5,1,"rgba(0,0,0,1)"]]},
					wordScripts: [
						{scriptType:"step2", action: {anim:{dur:2,stagger:0.1}, opacity:100}},
						{scriptType:"step3", action: {anim:{dur:0.7}, opacity:0 }}
					],
					script: { scriptType:"step2", action: {anim:7,scale:110}}
				},
				{	text: "Hire an SEO consultant?",
					init: {class: "text2", textWidth:90}, wordsInit:{opacity:0, textShadow:[[0,0,0,"rgba(255,255,255,1)"],[0.5,0.5,1,"rgba(0,0,0,1)"]]},
					wordScripts: [
						{scriptType:"step3", action: {anim:{dur:2,stagger:0.1}, opacity:100}},
						{scriptType:"step4", action: {anim:0.7, opacity:0 }}
					],
					script: { scriptType:"step3", action: {anim:7,scale:110}}
				},
				{	text: "What is Google's #1 priority?",
					init: {class: "text2", textWidth:90}, wordsInit:{opacity:0, textShadow:[[0,0,0,"rgba(255,255,255,1)"],[0.5,0.5,1,"rgba(0,0,0,1)"]]},
					wordScripts: [
						{scriptType:"step4", action: {anim:{dur:2,stagger:0.1}, opacity:100}},
						{scriptType:"step5", action: {anim:0.7, opacity:0 }}
					],
					script: { scriptType:"step4", action: {anim:7,scale:110}}
				},
				{	text: "How does Google deliver the best results?",
					init: {class: "text2", textWidth:90}, wordsInit:{opacity:0, class:"textShadow"},
					wordScripts: [
						{scriptType:"step5", action: {anim:{dur:2,stagger:0.1}, opacity:100}},
						{scriptType:"step7", action: {anim:0.7, opacity:0 }}
					],
					script: { scriptType:"step5", action: {anim:7,scale:110}},
					charScript: { scriptType:"step6", action: {anim:{dur:3,stagger:0.005,ease:"less elastic"}, pos:{y:-30}} }
				},
				{	text: ["Content","Credibility"],
					init: {class: "text2", font:13, pos:{y:12}}, linesInit:{class:"textShadow", opacity:0, pos:[10,0,-30], bullets:true},
					lineScripts: [
						{scriptType:"step6", action: {delay:1.5, anim:{dur:1,stagger:1}, opacity:100, pos:false}},
						{scriptType:"step7", action: {anim:0.7, opacity:0 }}
					]
				}
			]
		}
	]
};

Pro.Motion.Stories.Config.default.auto.advance = false;
Pro.Motion.Stories.Config.default.auto.restart = false;
Pro.Motion.Stories.Config.default.keyboard = true;
