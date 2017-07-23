
	



	$(".intro").click(function(){
		

    $(".intro").fadeOut();
    $(".first_prompt").fadeIn();
   	$(".loading").fadeIn(500);
   	$(".loading").fadeOut(500);

   	$(".period1").fadeIn(500);
   	$(".period1").fadeOut(500);


   	$(".loading").fadeIn(500);
   	$(".loading").fadeOut(500);

   	$(".period1").fadeIn(500);
   	$(".period1").fadeOut(500);

   	$(".loading").fadeIn(500);
   	$(".loading").fadeOut(500);

   	$(".period2").fadeIn(500);
   	$(".period2").fadeOut(500);



   	$(".loading").fadeIn(500);
   	$(".loading").fadeOut(500);

   	$("input[type=range]").delay(4500).fadeIn(900);



var idleTime = 0;
$(document).ready(function () {
//Increment the idle time counter every minute.
var idleInterval = setInterval(timerIncrement, 4000); // 1 minute

//Zero the idle timer on mouse movement.

$(this).keypress(function (e) {
    idleTime = 0;

$(this).hover(function (e) {
    idleTime = 0;
});
});
});

function timerIncrement() {
idleTime = idleTime + 1;
if (idleTime > 2) { 
    $(".notif").fadeIn(500);
    $(".notif").fadeOut(500);
    $(".notif").fadeIn(500);
    $(".notif").fadeOut(500);
    $(".notif").fadeIn(500);
    $(".notif").fadeOut(500);
    $(".notif").fadeIn(500);
}
} 

$("input[type=range]").hover(function(){

		console.log("bitch");
		$(".notif").empty(200);

});












    
});

var global_poem;




$(document).ready(function(){
  var colors = ["#3C485E","#CE7082","#F3BFA9","#EED974","#178E96","#008FD3","#EE8565","#BFB5D7","F3C9DD","#61BFAD"];                
  var rand = Math.floor(Math.random()*colors.length);           
  $('#controls-wrapper').css("background-color", colors[rand]);
  $('body').css("background-color", colors[rand]);
});




var title = ["Kumquat","Chimichanga","Poppycock","Discombobulate","Rambunctious","Canoodle","Crapulence","Hootenanny","Cantankerous","Ballyhoo","Shenanigans","Collywobbles","Gubbins","Brouhaha", ];




var letter1 = ["a", "i"];

var letter2 = ["am", "an", "as", "at", "be", "by", "do", "go", "he", "if", "in", "is", "it", "me", "my", "no", "of", "oh", "on", "or", "so", "to", "up", "us", "we"];

var letter3 = ["it’s", "i’ll", "act", "add", "age", "ago", "air", "all", "and", "any", "are", "art", "ask", "bad", "bed", "big", "bit", "box", "boy", "but", "buy", "can", "car", "cat", "cut", "day", "did", "dog", "dry", "eat", "end", "far", "few", "fig", "fit", "fly", "for", "fun", "gas", "get", "god", "got", "gun", "had", "has", "hat", "her", "him", "his", "hit", "hoe", "hot", "how", "ice", "job", "key", "law", "lay", "led", "let", "lie", "lot", "low", "man", "map", "may", "men", "new", "not", "now", "off", "oil", "old", "one", "our", "out", "own", "pay", "per", "put", "ran", "red", "row", "run", "sat", "saw", "say", "sea", "see", "set", "she", "sir", "sit", "six", "sky", "son", "sum", "sun", "ten", "the", "too", "top", "try", "two", "use", "war", "was", "way", "who", "why", "win", "yes", "yet", "you"];

var letter4 = ["able", "also", "area", "arms", "army", "away", "baby", "back", "ball", "bank", "base", "bear", "beat", "been", "bell", "best", "bill", "blow", "blue", "boat", "body", "book", "born", "both", "came", "care", "case", "city", "cold", "come", "cook", "cool", "copy", "corn", "cost", "cows", "dark", "dead", "deal", "deep", "died", "does", "done", "door", "down", "draw", "drop", "each", "ears", "east", "easy", "edge", "eggs", "else", "even", "ever", "eyes", "face", "fact", "fair", "fall", "farm", "fast", "fear", "feel", "feet", "fell", "felt", "find", "fine", "fire", "fish", "five", "flat", "flow", "food", "foot", "form", "four", "free", "from", "full", "game", "gave", "girl", "give", "gold", "gone", "good", "grew", "grow", "hair", "half", "hand", "hard", "have", "head", "hear", "heat", "held", "help", "here", "high", "hill", "hold", "hole", "home", "hope", "huge", "idea", "into", "iron", "just", "keep", "kept", "kind", "king", "knew", "know", "lady", "lake", "land", "last", "late", "lead", "left", "legs", "less", "life", "like", "line", "list", "live", "long", "look", "lost", "loud", "love", "made", "main", "make", "mall", "many", "mark", "meat", "meet", "mile", "milk", "mind", "mine", "miss", "moon", "more", "most", "move", "much", "must", "name", "near", "need", "next", "nose", "note", "noun", "once", "only", "open", "over", "page", "pair", "park", "part", "past", "plan", "play", "poem", "pole", "poor", "race", "rain", "read", "real", "rest", "rich", "ride", "ring", "rise", "road", "rock", "room", "root", "rope", "rose", "rule", "safe", "said", "sail", "same", "sand", "save", "seat", "seem", "seen", "sell", "send", "sent", "ship", "shop", "show", "side", "sign", "sing", "site", "size", "skin", "snow", "soft", "soil", "some", "song", "soon", "spot", "stay", "step", "stop", "such", "sure", "swim", "take", "talk", "tall", "team", "tell", "test", "than", "that", "them", "then", "they", "thin", "this", "thus", "tied", "time", "tiny", "told", "tone", "took", "town", "tree", "trip", "true", "tube", "turn", "type", "unit", "upon", "verb", "very", "view", "wait", "walk", "wall", "want", "warm", "wash", "wear", "week", "well", "went", "were", "west", "what", "when", "wide", "wife", "wild", "will", "wind", "wire", "wish", "with", "wood", "work", "yard", "your"];

var letter5 = ["about", "above", "after", "again", "ahead", "allow", "alone", "along", "among", "angle", "apple", "began", "begin", "being", "below", "birds", "black", "block", "blood", "board", "bones", "break", "bring", "brown", "build", "built", "carry", "catch", "cause", "cells", "cents", "chart", "check", "chief", "child", "class", "clean", "clear", "close", "cloud", "coast", "color", "could", "count", "cried", "crops", "cross", "crowd", "dance", "death", "dress", "drive", "early", "earth", "eight", "enjoy", "equal", "every", "field", "fight", "first", "floor", "force", "found", "fresh", "front", "fruit", "glass", "grass", "great", "greek", "green", "group", "guess", "happy", "heard", "heart", "heavy", "horse", "hours", "house", "human", "known", "large", "learn", "least", "leave", "level", "light", "major", "march", "match", "maybe", "means", "metal", "might", "money", "mouth", "music", "never", "night", "north", "ocean", "often", "order", "other", "paint", "paper", "party", "piece", "place", "plane", "plant", "point", "power", "quiet", "quite", "radio", "ready", "right", "river", "round", "scale", "score", "seeds", "sense", "serve", "seven", "shall", "shape", "sharp", "shoes", "short", "shown", "sight", "since", "sleep", "small", "smell", "solve", "sound", "south", "space", "speak", "speed", "spell", "stand", "stars", "start", "state", "steel", "stick", "still", "stone", "stood", "store", "story", "study", "sugar", "table", "terms", "their", "there", "these", "thick", "think", "third", "those", "three", "today", "tools", "total", "touch", "track", "trade", "train", "truck", "uncle", "under", "until", "value", "visit", "voice", "vowel", "watch", "water", "waves", "where", "which", "while", "white", "whole", "whose", "wings", "woman", "women", "words", "world", "would", "write", "wrong", "wrote", "years", "young"];

var letter6 = ["across", "action", "afraid", "africa", "agreed", "almost", "always", "amount", "animal", "answer", "appear", "around", "became", "become", "before", "behind", "belong", "beside", "better", "bottom", "bought", "bright", "broken", "called", "cannot", "cattle", "caught", "center", "chance", "change", "choose", "church", "circle", "column", "common", "corner", "cotton", "course", "create", "desert", "design", "direct", "doctor", "during", "effect", "either", "energy", "engine", "enough", "entire", "europe", "except", "expect", "family", "famous", "father", "figure", "filled", "follow", "forest", "france", "french", "garden", "ground", "inches", "indian", "inside", "island", "itself", "join", "ed", "jumped", "killed", "length", "letter", "lifted", "listen", "little", "matter", "melody", "method", "middle", "modern", "moment", "months", "mother", "nation", "notice", "number", "object", "office", "oxygen", "passed", "people", "period", "person", "phrase", "picked", "plains", "please", "plural", "pounds", "pretty", "pulled", "pushed", "raised", "rather", "reason", "record", "region", "remain", "report", "result", "return", "rhythm", "rolled", "school", "second", "should", "silent", "simple", "single", "sister", "slowly", "smiled", "spread", "spring", "square", "stream", "street", "string", "strong", "suffix", "summer", "supply", "system", "things", "though", "toward", "travel", "valley", "weight", "wheels", "window", "winter", "within", "wonder", "yellow",];

var letter7 = ["against", "already", "america", "another", "arrived", "because", "believe", "between", "british", "brother", "brought", "burning", "capital", "captain", "century", "certain", "climbed", "clothes", "company", "compare", "contain", "control", "correct", "country", "covered", "current", "decided", "decimal", "details", "divided", "dollars", "drawing", "england", "english", "entered", "evening", "exactly", "example", "explain", "express", "factors", "farmers", "feeling", "finally", "fingers", "flowers", "forward", "friends", "general", "himself", "history", "however", "hundred", "hunting", "include", "insects", "instead", "laughed", "located", "machine", "measure", "members", "million", "minutes", "morning", "natural", "nothing", "numeral", "observe", "outside", "pattern", "perhaps", "picture", "planets", "present", "printed", "problem", "process", "produce", "provide", "quickly", "reached", "science", "section", "settled", "several", "shouted", "similar", "someone", "special", "strange", "subject", "suppose", "surface", "symbols", "teacher", "thought", "through", "trouble", "usually", "various", "village", "weather", "western", "whether", "without", "workers", "written"];

var letter8 = ["actually", "addition", "although", "anything", "branches", "building", "business", "children", "complete", "compound", "consider", "describe", "distance", "division", "electric", "elements", "equation", "everyone", "exciting", "exercise", "finished", "fraction", "happened", "increase", "indicate", "industry", "interest", "japanese", "language", "material", "movement", "northern", "opposite", "position", "possible", "practice", "prepared", "probably", "products", "property", "received", "remember", "repeated", "sentence", "separate", "shoulder", "soldiers", "solution", "southern", "straight", "students", "suddenly", "surprise", "together", "triangle", "yourself"];

var letter9 = ["adjective", "beautiful", "carefully", "consonant", "continued", "determine", "developed", "different", "difficult", "direction", "factories", "important", "molecules", "mountains", "necessary", "paragraph", "president", "questions", "represent", "something", "sometimes", "statement", "stretched", "suggested", "syllables", "thousands", "underline"];

var letter10= ["conditions","dictionary","difference","discovered","especially","everything","experience","experiment","government","particular","scientists","substances","themselves","understand","washington"];





$(".slider").on("input change", function(){
	var poemLength = Math.floor(Math.random()*20) + 10;
	 poemLength = 20;
	var title1 = Math.floor(Math.random()*10) +10;
	var myPoem = "";
	title1 = " ";
	console.log($(this).val());


	if ($(this).val() < 10) {
		for (i =0; i < poemLength; i++) {
			myPoem = myPoem + letter1[Math.floor(Math.random()*letter1.length)] + " ";
			title1 = title[Math.floor(Math.random()*title.length)] + " ";


		}
	}


	if ($(this).val() >= 10 && $(this).val() < 20) {
		for (i =0; i < poemLength; i++) {
			myPoem = myPoem + letter2[Math.floor(Math.random()*letter2.length)] + " ";
			title1 = title[Math.floor(Math.random()*title.length)] + " ";
		}
	}

	if ($(this).val() >= 20 && $(this).val() < 30) {
		for (i =0; i < poemLength; i++) {
			myPoem = myPoem + letter3[Math.floor(Math.random()*letter3.length)] + " ";
			title1 = title[Math.floor(Math.random()*title.length)] + " ";
		}
	}

	if ($(this).val() >= 30 && $(this).val() < 40) {
		for (i =0; i < poemLength; i++) {
			myPoem = myPoem + letter4[Math.floor(Math.random()*letter4.length)] + " ";
			title1 = title[Math.floor(Math.random()*title.length)] + " ";
		}
	}

	if ($(this).val() >= 40 && $(this).val() < 50) {
		for (i =0; i < poemLength; i++) {
			myPoem = myPoem + letter5[Math.floor(Math.random()*letter5.length)] + " ";
			title1 = title[Math.floor(Math.random()*title.length)] + " ";
		}
	}

	if ($(this).val() >= 50 && $(this).val() < 60) {
		for (i =0; i < poemLength; i++) {
			myPoem = myPoem + letter6[Math.floor(Math.random()*letter6.length)] + " ";
			title1 = title[Math.floor(Math.random()*title.length)] + " ";
		}
	}

	if ($(this).val() >= 60 && $(this).val() < 70) {
		for (i =0; i < poemLength; i++) {
			myPoem = myPoem + letter7[Math.floor(Math.random()*letter7.length)] + " ";
			title1 = title[Math.floor(Math.random()*title.length)] + " ";
		}
	}

	if ($(this).val() >= 70 && $(this).val() < 80) {
		for (i =0; i < poemLength; i++) {
			myPoem = myPoem + letter8[Math.floor(Math.random()*letter8.length)] + " ";
			title1 = title[Math.floor(Math.random()*title.length)] + " ";
		}
	}

	if ($(this).val() >= 80 && $(this).val() < 90) {
		for (i =0; i < poemLength; i++) {
			myPoem = myPoem + letter9[Math.floor(Math.random()*letter9.length)] + " ";
			title1 = title[Math.floor(Math.random()*title.length)] + " ";
		}
	}


	if ($(this).val() >= 90 && $(this).val() <= 100) {
		for (i =0; i < poemLength; i++) {
			myPoem = myPoem + letter10[Math.floor(Math.random()*letter10.length)] + " ";
			title1 = title[Math.floor(Math.random()*title.length)] + " ";
		}
	}



	$(".titlebox").html(title1);
	$(".first_prompt").html(myPoem);
	$(".refresh").fadeIn(1500);
	$(".submit").fadeIn(1500);


	console.log(myPoem);
	global_poem = myPoem;
	global_slider = (this);
});


$(".refresh").click(function() {

	
	console.log(this);	
	var poemLength = Math.floor(Math.random()*20) + 10;
	poemLength = 20;
	var myPoem = "";
	title1 = " ";


	if ($(this).val() < 10) {
		for (i =0; i < poemLength; i++) {
			myPoem = myPoem + letter1[Math.floor(Math.random()*letter1.length)] + " ";
			title1 = title[Math.floor(Math.random()*title.length)] + " ";


		}
	}


	if ($(this).val() >= 10 && $(this).val() < 20) {
		for (i =0; i < poemLength; i++) {
			myPoem = myPoem + letter2[Math.floor(Math.random()*letter2.length)] + " ";
		}
	}

	if ($(this).val() >= 20 && $(this).val() < 30) {
		for (i =0; i < poemLength; i++) {
			myPoem = myPoem + letter3[Math.floor(Math.random()*letter3.length)] + " ";
		}
	}

	if ($(this).val() >= 30 && $(this).val() < 40) {
		for (i =0; i < poemLength; i++) {
			myPoem = myPoem + letter4[Math.floor(Math.random()*letter4.length)] + " ";
		}
	}

	if ($(this).val() >= 40 && $(this).val() < 50) {
		for (i =0; i < poemLength; i++) {
			myPoem = myPoem + letter5[Math.floor(Math.random()*letter5.length)] + " ";
		}
	}


$(".titlebox").html(title1);
	$(".first_prompt").html(myPoem);
	console.log(myPoem);











});


$(".submit").click(function() {

	window.location = "https://twitter.com/home?status=" + "Here is the poem Vincent wrote for me : " + global_poem;
});




