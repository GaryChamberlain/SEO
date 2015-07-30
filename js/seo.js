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
	frame: { aspectRatio: 4/3 },
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
					  {scriptType:"step9", action:{anim:2, opacity:75}},
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
					  {scriptType:"step15", action:{anim:2, opacity:75}},
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
				},
				{	text: "Strategic Content per Phrase",
					init: {class: "topTitle", font:8, anchor:[-50,-50]}, wordsInit:{class:"textShadow", opacity:0, pos:[-50,-50]},
					wordScripts: [
						{scriptType:"step18", action: {delay:0.2, anim:{dur:2,stagger:0.1}, opacity:100, pos:[-47,-50]}},
						{scriptType:"step19", action: {anim:0.7, opacity:0, pos:[-50,-50] }}
					]
				},
				{	text: ["Real content! (credibility)", "Page title (exact phrase)", "Matching H1 tag", "Phrases in content (2-4%)", "Descriptive URLs"],
					init: {class: "textLine", font:8}, linesInit:{class:"textShadow", opacity:0, pos:[3,0,-3], bullets:true, scale:90},
					lineScripts: [
						{scriptType:"step18", action: {delay:0.2, anim:{dur:1,stagger:0.1}, opacity:100, pos:false}},
						{scriptType:"step19", action: {anim:{dur:1,stagger:0.1}, opacity:0, pos:[3,0,-3] }}
					]
				},
				{	text: "URLs",
					init: {class: "topTitle", font:8, anchor:[-50,-50]}, wordsInit:{class:"textShadow", opacity:0, pos:[-30,-40],scale:300},
					wordScripts: [
						{scriptType:"step19", action: {delay:0.2, anim:{dur:2,stagger:0.1}, opacity:100, pos:[-47,-50], scale:100}},
						{scriptType:"step20", action: {anim:0.7, opacity:0 }}
					]
				},
				{	text: ["Fancy name for 'web address'", "Use keywords for paths", "Be concise", "Use a canonical link!"],
					init: {class: "textLine", font:8}, linesInit:{class:"textShadow", opacity:0, bullets:true, scale:90},
					lineScripts: [
						{scriptType:"step19", action: {delay:1.2, anim:{dur:1,stagger:0.1}, opacity:100}},
						{scriptType:"step20", action: {anim:{dur:1,stagger:0.1}, opacity:0, pos:[3,0,-3] }}
					]
				},
				{	text: "URLs (these are all different!)",
					init: {class: "topTitle", font:8, anchor:[-50,-50]}, wordsInit:{class:"textShadow", opacity:0, pos:[-47,-50]},
					wordScripts: [
						{scriptType:"step20", action: {anim:2, opacity:100}},
						{scriptType:"step21", action: {anim:0.7, opacity:0, pos:[-50,-50] }}
					]
				},
				{	text: ["http://website.com", "http://www.website.com", "http://www.website.com/", "http://www.website.com?a=b", "https://website.com", "https://www.website.com"],
					init: {class: "textLine", font:8}, linesInit:{class:"textShadow", opacity:0, scale:90},
					lineScripts: [
						{scriptType:"step20", action: {delay:1.2, anim:{dur:1,stagger:0.1}, opacity:100}},
						{scriptType:"step21", action: {anim:{dur:1,stagger:0.1}, opacity:0, pos:[3,0,-3] }}
					]
				},
				{	text: "PageRank",
					init: {class: "topTitle", font:8, anchor:[-50,-50]}, wordsInit:{class:"textShadow", opacity:0, pos:[-50,-50]},
					wordScripts: [
						{scriptType:"step21", action: {delay:0.2, anim:{dur:2,stagger:0.1}, opacity:100, pos:[-47,-50]}},
						{scriptType:"step28", action: {anim:0.7, opacity:0, pos:[-50,-50] }}
					]
				},
				{	text: "?",
					init: {class: "text", font:50}, charInit: {class:"textShadow", opacity:0, scale:250, rot:[-270,30,180]},
					charScripts: [
						{scriptType:"step21", action: {delay:2, anim:{dur:7,ease:"less elastic"}, scale:100, rot:false, opacity:false}},
						{scriptType:"step22", action: {anim:0.7, opacity:0 }}
					]
				},
				{	text: "Popularity",
					init: {class: "title"}, wordsInit:{opacity:0, textShadow:[[0,0,0,"rgba(255,255,255,1)"],[0.5,0.5,1,"rgba(0,0,0,1)"]]},
					wordScripts: [
						{scriptType:"step22", action: {anim:{dur:2,stagger:0.1}, opacity:100}},
						{scriptType:"step23", action: {anim:0.7, opacity:0 }}
					],
					script: { scriptType:"step22", action: {anim:7,scale:110}}
				},
				{	text: "People Like<br>Your Content",
					init: {class: "title"}, wordsInit:{opacity:0, textShadow:[[0,0,0,"rgba(255,255,255,1)"],[0.5,0.5,1,"rgba(0,0,0,1)"]]},
					wordScripts: [
						{scriptType:"step23", action: {anim:{dur:2,stagger:0.1}, opacity:100}},
						{scriptType:"step24", action: {anim:0.7, opacity:0 }}
					]
				},
				{	text: "They Select it in<br>Search Results",
					init: {class: "title"}, wordsInit:{opacity:0, textShadow:[[0,0,0,"rgba(255,255,255,1)"],[0.5,0.5,1,"rgba(0,0,0,1)"]]},
					wordScripts: [
						{scriptType:"step24", action: {anim:{dur:2,stagger:0.1}, opacity:100}},
						{scriptType:"step25", action: {anim:0.7, opacity:0 }}
					]
				},
				{	text: "They Stay On Your<br>Page for Awhile",
					init: {class: "title"}, wordsInit:{opacity:0, textShadow:[[0,0,0,"rgba(255,255,255,1)"],[0.5,0.5,1,"rgba(0,0,0,1)"]]},
					wordScripts: [
						{scriptType:"step25", action: {anim:{dur:2,stagger:0.1}, opacity:100}},
						{scriptType:"step26", action: {anim:0.7, opacity:0 }}
					]
				},
				{	text: "They Link to it",
					init: {class: "title"}, wordsInit:{opacity:0, textShadow:[[0,0,0,"rgba(255,255,255,1)"],[0.5,0.5,1,"rgba(0,0,0,1)"]]},
					wordScripts: [
						{scriptType:"step26", action: {anim:{dur:2,stagger:0.1}, opacity:100}},
						{scriptType:"step27", action: {anim:0.7, opacity:0 }}
					]
				},
				{	text: "They Come Back",
					init: {class: "title"}, wordsInit:{opacity:0, textShadow:[[0,0,0,"rgba(255,255,255,1)"],[0.5,0.5,1,"rgba(0,0,0,1)"]]},
					wordScripts: [
						{scriptType:"step27", action: {anim:{dur:2,stagger:0.1}, opacity:100}},
						{scriptType:"step28", action: {anim:0.7, opacity:0 }}
					]
				},
				{	text: "PageRank is Like Currency",
					init: {class: "topTitle", pos:[-40,-5], font:8}, wordsInit:{opacity:0, class:"textShadow"},
					wordScripts: [
						{scriptType:"step28", action: {anim:{dur:2,stagger:0.1}, opacity:100}},
						{scriptType:"step35", action: {anim:0.7,opacity:0 }}
					],
					scripts: [
						{scriptType:"step28", action: {anim:2,scale:110}},
						{scriptType:"step29", action: {anim:1,scale:90,pos:[-38,-24]}}
					],
					charScript: {scriptType:"step29", action: {anim:{dur:0.5,stagger:0.02,ease:"sine"}, pos:[-14,-30]} }
				},
				{	text: "Pages Have It<br>(not sites)",
					init: {class: "title"}, wordsInit:{opacity:0, textShadow:[[0,0,0,"rgba(255,255,255,1)"],[0.5,0.5,1,"rgba(0,0,0,1)"]]},
					wordScripts: [
						{scriptType:"step29", action: {delay:0.5, anim:{dur:2,stagger:0.1}, opacity:100}},
						{scriptType:"step30", action: {anim:0.7, opacity:0 }}
					]
				},
				{	text: "Pages Give It Away<br>(through links)",
					init: {class: "title"}, wordsInit:{opacity:0, textShadow:[[0,0,0,"rgba(255,255,255,1)"],[0.5,0.5,1,"rgba(0,0,0,1)"]]},
					wordScripts: [
						{scriptType:"step30", action: {anim:{dur:2,stagger:0.1}, opacity:100}},
						{scriptType:"step31", action: {anim:0.7, opacity:0 }}
					]
				},
				{	text: "Links from Blogs<br>Social Media,<br>Customers, etc.,<br>are all Good!",
					init: {class: "title", font:8}, wordsInit:{opacity:0, textShadow:[[0,0,0,"rgba(255,255,255,1)"],[0.5,0.5,1,"rgba(0,0,0,1)"]]},
					wordScripts: [
						{scriptType:"step31", action: {anim:{dur:2,stagger:0.1}, opacity:100}},
						{scriptType:"step32", action: {anim:0.7, opacity:0 }}
					]
				},
				{	text: "Links from<br>High-Credibility Sites<br>are Really Good!",
					init: {class: "title", font:8}, wordsInit:{opacity:0, textShadow:[[0,0,0,"rgba(255,255,255,1)"],[0.5,0.5,1,"rgba(0,0,0,1)"]]},
					wordScripts: [
						{scriptType:"step32", action: {anim:{dur:2,stagger:0.1}, opacity:100}},
						{scriptType:"step33", action: {anim:0.7, opacity:0 }}
					]
				},
				{	text: "Link Farms are BAD!",
					init: {class: "title"}, wordsInit:{opacity:0, textShadow:[[0,0,0,"rgba(255,255,255,1)"],[0.5,0.5,1,"rgba(0,0,0,1)"]]},
					wordScripts: [
						{scriptType:"step33", action: {anim:{dur:2,stagger:0.1}, opacity:100}},
						{scriptType:"step34", action: {anim:0.7, opacity:0 }}
					]
				},
				{	text: "Just Write Good Content and Credibility Comes Naturally",
					init: {class: "title"}, wordsInit:{opacity:0, textShadow:[[0,0,0,"rgba(255,255,255,1)"],[0.5,0.5,1,"rgba(0,0,0,1)"]]},
					wordScripts: [
						{scriptType:"step34", action: {anim:{dur:2,stagger:0.1}, opacity:100}},
						{scriptType:"step35", action: {anim:0.7, opacity:0 }}
					]
				},
				{	text: "Black Hat",
					init: {class: "topTitle", pos:[-17,-5]}, wordsInit:{opacity:0, class:"textShadow"},
					wordScripts: [
						{scriptType:"step35", action: {anim:{dur:2,stagger:0.3}, opacity:100}},
						{scriptType:"step40", action: {anim:0.7,opacity:0 }}
					],
					scripts: [
						{scriptType:"step35", action: {anim:2,scale:110}},
						{scriptType:"step36", action: {anim:1,scale:90,pos:[-38,-24]}}
					],
					charScript: {scriptType:"step36", action: {anim:{dur:0.5,stagger:0.02,ease:"sine"}, pos:[-14,-30]} }
				},
				{	text: ["Keyword stuffing", "Unrelated keywords", "Invisible text", "Doorway/gateway pages", "Bait-and-switch (Page swapping)", "Duplicated content/mirror sites"],
					init: {class: "textLine", font:8, pos:{y:3}}, linesInit:{class:"textShadow", opacity:0, pos:[10,0,-30], bullets:true, scale:90},
					lineScripts: [
						{scriptType:"step36", action: {anim:{dur:1,stagger:0.1}, opacity:100, pos:false}},
						{scriptType:"step37", action: {anim:{dur:1,stagger:0.1}, opacity:0, pos:[10,0,-30] }}
					]
				},
				{	text: "Are You Smarter than Google?",
					init: {class: "title"}, wordsInit:{opacity:0, textShadow:[[0,0,0,"rgba(255,255,255,1)"],[0.5,0.5,1,"rgba(0,0,0,1)"]]},
					wordScripts: [
						{scriptType:"step37", action: {delay:0.5, anim:{dur:2,stagger:0.1}, opacity:100}},
						{scriptType:"step38", action: {anim:0.7, opacity:0 }}
					]
				},
				{	text: "They've Seen it All",
					init: {class: "title"}, wordsInit:{opacity:0, textShadow:[[0,0,0,"rgba(255,255,255,1)"],[0.5,0.5,1,"rgba(0,0,0,1)"]]},
					wordScripts: [
						{scriptType:"step38", action: {anim:{dur:2,stagger:0.1}, opacity:100}},
						{scriptType:"step39", action: {anim:0.7, opacity:0 }}
					]
				},
				{	text: "It will Hurt your Credibility",
					init: {class: "title"}, wordsInit:{opacity:0, textShadow:[[0,0,0,"rgba(255,255,255,1)"],[0.5,0.5,1,"rgba(0,0,0,1)"]]},
					wordScripts: [
						{scriptType:"step39", action: {anim:{dur:2,stagger:0.1}, opacity:100}},
						{scriptType:"step40", action: {anim:0.7, opacity:0 }}
					]
				},
				{	text: "PageRank Mapped to URLs",
					init: {class: "topTitle", pos:-40, font:8}, wordsInit:{opacity:0, class:"textShadow"},
					wordScripts: [
						{scriptType:"step40", action: {anim:{dur:2,stagger:0.3}, opacity:100}},
						{scriptType:"step44", action: {anim:0.7,opacity:0 }}
					],
					scripts: [
						{scriptType:"step40", action: {anim:2,scale:110}},
						{scriptType:"step41", action: {anim:1,scale:90,pos:[-39,-24]}}
					],
					charScript: {scriptType:"step41", action: {anim:{dur:0.5,stagger:0.02,ease:"sine"}, pos:[-14,-30]} }
				},
				{	text: "Use Canonical Links!!!!!",
					init: {class: "title"}, wordsInit:{opacity:0, textShadow:[[0,0,0,"rgba(255,255,255,1)"],[0.5,0.5,1,"rgba(0,0,0,1)"]]},
					wordScripts: [
						{scriptType:"step41", action: {anim:{dur:2,stagger:0.1}, opacity:100}},
						{scriptType:"step42", action: {anim:0.7, opacity:0 }}
					]
				},
				{	text: "Don't Change URLs",
					init: {class: "title"}, wordsInit:{opacity:0, textShadow:[[0,0,0,"rgba(255,255,255,1)"],[0.5,0.5,1,"rgba(0,0,0,1)"]]},
					wordScripts: [
						{scriptType:"step42", action: {anim:{dur:2,stagger:0.1}, opacity:100}},
						{scriptType:"step43", action: {anim:0.7, opacity:0 }}
					]
				},
				{	text: "If You Must,<br>Use Permanent Redirects (301)",
					init: {class: "title"}, wordsInit:{opacity:0, textShadow:[[0,0,0,"rgba(255,255,255,1)"],[0.5,0.5,1,"rgba(0,0,0,1)"]]},
					wordScripts: [
						{scriptType:"step43", action: {anim:{dur:2,stagger:0.1}, opacity:100}},
						{scriptType:"step44", action: {anim:0.7, opacity:0 }}
					]
				},
				{	text: "Distributing Local PageRank",
					init: {class: "topTitle", pos:-42, font:8}, wordsInit:{opacity:0, class:"textShadow"},
					wordScripts: [
						{scriptType:"step44", action: {anim:{dur:2,stagger:0.3}, opacity:100}},
						{scriptType:"step50", action: {anim:0.7,opacity:0 }}
					],
					scripts: [
						{scriptType:"step44", action: {anim:2,scale:105}},
						{scriptType:"step45", action: {anim:1,scale:90,pos:[-39,-24]}}
					],
					charScript: {scriptType:"step45", action: {anim:{dur:0.5,stagger:0.02,ease:"sine"}, pos:[-14,-30]} }
				},
				{	text: "Put Careful Thought into the Hierarchy of Page Content",
					init: {class: "title"}, wordsInit:{opacity:0, textShadow:[[0,0,0,"rgba(255,255,255,1)"],[0.5,0.5,1,"rgba(0,0,0,1)"]]},
					wordScripts: [
						{scriptType:"step45", action: {anim:{dur:2,stagger:0.1}, opacity:100}},
						{scriptType:"step46", action: {anim:0.7, opacity:0 }}
					]
				},
				{	text: "Home Pages<br>Usually have the<br>Most PageRank",
					init: {class: "title"}, wordsInit:{opacity:0, textShadow:[[0,0,0,"rgba(255,255,255,1)"],[0.5,0.5,1,"rgba(0,0,0,1)"]]},
					wordScripts: [
						{scriptType:"step46", action: {anim:{dur:2,stagger:0.1}, opacity:100}},
						{scriptType:"step47", action: {anim:0.7, opacity:0 }}
					]
				},
				{	text: "Consider using<br>Hub Pages<br>(e.g. categories)",
					init: {class: "title"}, wordsInit:{opacity:0, textShadow:[[0,0,0,"rgba(255,255,255,1)"],[0.5,0.5,1,"rgba(0,0,0,1)"]]},
					wordScripts: [
						{scriptType:"step47", action: {anim:{dur:2,stagger:0.1}, opacity:100}},
						{scriptType:"step48", action: {anim:0.7, opacity:0 }}
					]
				},
				{	text: "Limit Home Page Links to Hubs and Content with Most Important Phrases",
					init: {class: "title"}, wordsInit:{opacity:0, textShadow:[[0,0,0,"rgba(255,255,255,1)"],[0.5,0.5,1,"rgba(0,0,0,1)"]]},
					wordScripts: [
						{scriptType:"step48", action: {anim:{dur:2,stagger:0.1}, opacity:100}},
						{scriptType:"step49", action: {anim:0.7, opacity:0 }}
					]
				},
				{	text: "Set Priorities in Sitemap.xml",
					init: {class: "title"}, wordsInit:{opacity:0, textShadow:[[0,0,0,"rgba(255,255,255,1)"],[0.5,0.5,1,"rgba(0,0,0,1)"]]},
					wordScripts: [
						{scriptType:"step49", action: {anim:{dur:2,stagger:0.1}, opacity:100}},
						{scriptType:"step50", action: {anim:0.7, opacity:0 }}
					]
				},
				{	text: "Disclosure",
					init: {class: "topTitle", anchor:[-50,-50]}, wordsInit:{class:"textShadow", opacity:0, pos:[-50,-50]},
					wordScripts: [
						{scriptType:"step50", action: {anim:{dur:2,stagger:0.1}, opacity:100, pos:[-47,-50]}},
						{scriptType:"step51", action: {anim:0.7, opacity:0, pos:[-50,-50] }}
					]
				},
				{	text: ["Sitemaps (HTML and XML)", "Use Google Analytics", "Use Google/Bing webmaster tools", "Embace locality if appropriate"],
					init: {class: "textLine", font:7.7, pos:{y:3}}, linesInit:{class:"textShadow", opacity:0, pos:[10,0,-30], bullets:true, scale:90},
					lineScripts: [
						{scriptType:"step50", action: {anim:{dur:1,stagger:0.1}, opacity:100, pos:false}},
						{scriptType:"step51", action: {anim:{dur:1,stagger:0.1}, opacity:0, pos:[10,0,-30] }}
					]
				},
				{	text: "Embrace Locality",
					init: {class: "topTitle", anchor:[-50,-50]}, wordsInit:{class:"textShadow", opacity:0, pos:[-50,-50]},
					wordScripts: [
						{scriptType:"step51", action: {delay:0.2, anim:{dur:2,stagger:0.1}, opacity:100, pos:[-47,-50]}},
						{scriptType:"step52", action: {anim:0.7, opacity:0, pos:[-50,-50] }}
					]
				},
				{	text: ["Set location in webmaster tools", "Include a map on your site", "Understand country-code domains"],
					init: {class: "textLine", font:7.4, pos:{y:3}}, linesInit:{class:"textShadow", opacity:0, pos:[10,0,-30], bullets:true, scale:90},
					lineScripts: [
						{scriptType:"step51", action: {delay:0.2, anim:{dur:1,stagger:0.1}, opacity:100, pos:false}},
						{scriptType:"step52", action: {anim:{dur:1,stagger:0.1}, opacity:0, pos:[10,0,-30] }}
					]
				},
				{	text: "Professional",
					init: {class: "topTitle", anchor:[-50,-50]}, wordsInit:{class:"textShadow", opacity:0, pos:[-50,-50]},
					wordScripts: [
						{scriptType:"step52", action: {anim:{dur:2,stagger:0.1}, opacity:100, pos:[-47,-50]}},
						{scriptType:"step53", action: {anim:0.7, opacity:0 }}
					]
				},
				{	text: ["Registered domain name", "AOSSL - Use HTTPS on all pages", "Active social media sites", "Fast (avoid user drop-off)", "Mobile friendly! (responsive)"],
					init: {class: "textLine", font:7.4, pos:{y:3}}, linesInit:{class:"textShadow", opacity:0, pos:[10,0,-30], bullets:true, scale:90},
					lineScripts: [
						{scriptType:"step52", action: {anim:{dur:1,stagger:0.1}, opacity:100, pos:false}},
						{scriptType:"step53", action: {anim:{dur:1,stagger:0.1}, opacity:0, pos:[10,0,-30] }}
					]
				},
				{	text: "A Bit about Domains",
					init: {class: "topTitle", anchor:[-50,-50]}, wordsInit:{class:"textShadow", opacity:0, pos:[-47,-50]},
					wordScripts: [
						{scriptType:"step53", action: {delay:0.2, anim:{dur:2,stagger:0.1}, opacity:100}},
						{scriptType:"step54", action: {anim:0.7, opacity:0, pos:[-50,-50] }}
					]
				},
				{	text: ["Domain names with keywords", "Hundreds of new extensions", "Do extra domains help?"],
					init: {class: "textLine", font:7.4, pos:{y:3}}, linesInit:{class:"textShadow", opacity:0, pos:[10,0,-30], bullets:true, scale:90},
					lineScripts: [
						{scriptType:"step53", action: {delay:0.2, anim:{dur:1,stagger:0.1}, opacity:100, pos:false}},
						{scriptType:"step54", action: {anim:{dur:1,stagger:0.1}, opacity:0, pos:[10,0,-30] }}
					]
				},
				{	text: "What should SEO consultants do?",
					init: {class: "topTitle", font:7, anchor:[-50,-50]}, wordsInit:{class:"textShadow", opacity:0, pos:[-47,-50]},
					wordScripts: [
						{scriptType:"step54", action: {delay:0.2, anim:{dur:2,stagger:0.1}, opacity:100}},
						{scriptType:"step56", action: {anim:0.7, opacity:0, pos:[-50,-50] }}
					]
				},
				{	text: ["Site audit & initial optimization", "Link profile analysis", "Cleanup bad links", "'disavow backlinks' if needed", "Google Analytics analysis"],
					init: {class: "textLine", font:7.4, pos:{y:3}}, linesInit:{class:"textShadow", opacity:0, pos:[10,0,-30], bullets:true, scale:90},
					lineScripts: [
						{scriptType:"step54", action: {delay:0.2, anim:{dur:1,stagger:0.1}, opacity:100, pos:false}},
						{scriptType:"step55", action: {anim:{dur:1,stagger:0.1}, opacity:0, pos:[10,0,-30] }}
					]
				},
				{	text: ["Keyword/competitor research", "Outreach & credible link building", "Online public relations", "Create quality content", "Ongoing analysis and reporting"],
					init: {class: "textLine", font:7.4, pos:{y:3}}, linesInit:{class:"textShadow", opacity:0, pos:[10,0,-30], bullets:true, scale:90},
					lineScripts: [
						{scriptType:"step55", action: {delay:0.2, anim:{dur:1,stagger:0.1}, opacity:100, pos:false}},
						{scriptType:"step56", action: {anim:{dur:1,stagger:0.1}, opacity:0, pos:[10,0,-30] }}
					]
				},
				{	text: "WordPress",
					init: {class: "topTitle", anchor:[-50,-50]}, wordsInit:{class:"textShadow", opacity:0, pos:[-47,-50]},
					wordScripts: [
						{scriptType:"step56", action: {delay:0.2, anim:{dur:2,stagger:0.1}, opacity:100}},
						{scriptType:"step57", action: {anim:0.7, opacity:0, pos:[-50,-50] }}
					]
				},
				{	text: ["WordPress simplifies SEO", "Use a responsive, SEO-friendly theme", "Still need quality content and planning!!", "Use an SEO plugin (I recommend Yoast)"],
					init: {class: "textLine", font:7, pos:{y:3}}, linesInit:{class:"textShadow", opacity:0, pos:[10,0,-30], bullets:true, scale:90},
					lineScripts: [
						{scriptType:"step56", action: {delay:0.2, anim:{dur:1,stagger:0.1}, opacity:100, pos:false}},
						{scriptType:"step57", action: {anim:{dur:1,stagger:0.1}, opacity:0, pos:[10,0,-30] }}
					]
				},
				{	text: "Finishing Up",
					init: {class: "topTitle", anchor:[-50,-50]}, wordsInit:{class:"textShadow", opacity:0, pos:[-47,-50]},
					wordScripts: [
						{scriptType:"step57", action: {delay:0.2, anim:{dur:2,stagger:0.1}, opacity:100}},
						{scriptType:"step58", action: {anim:0.7, opacity:0, pos:[-50,-50] }}
					]
				},
				{	text: ["Let's dissect a page", "Links to tools", "Links to read"],
					init: {class: "textLine", font:9, pos:{y:3}}, linesInit:{class:"textShadow", opacity:0, pos:[10,0,-30], bullets:true, scale:90},
					lineScripts: [
						{scriptType:"step57", action: {delay:0.2, anim:{dur:1,stagger:0.1}, opacity:100, pos:false}},
						{scriptType:"step58", action: {anim:{dur:1,stagger:0.1}, opacity:0, pos:[10,0,-30] }}
					]
				}
			]
		}
	]
};

Pro.Motion.Stories.Config.default.auto.advance = false;
Pro.Motion.Stories.Config.default.auto.restart = false;
Pro.Motion.Stories.Config.default.keyboard = true;
