let i = 1;
let count = 0;
let set = ['Question 1','Question 2','Question 3','Question 4','Question 5'];
$('.button_1').on('click',function(){
	let a = document.getElementById('text').innerHTML;
	if (a == 'Question 1'){
		count += 1;
	} else if (a == 'Question 2'){
		count += 1;
	} else if (a == 'Question 3'){
		count += 0;		
	} else if (a == 'Question 4'){
		count += 1;	
	} else if (a == 'Question 5'){
		count += 0;		
	};
	document.getElementById('text').innerHTML = set[i]
	document.getElementById('count').innerHTML = count
	i += 1
	if (i == 6){
	document.getElementById('text').innerHTML = ''
	$('.block_in').css({'opacity': 1,'z-index': 2});
	document.getElementById('num').innerHTML = `${count} out of 5`;
	}
});
$('.button_2').on('click',function(){
	let a = document.getElementById('text').innerHTML;
	if (a == 'Question 1'){
		count += 0;
	} else if (a == 'Question 2'){
		count += 0;
	} else if (a == 'Question 3'){
		count += 1;		
	} else if (a == 'Question 4'){
		count += 0;	
	} else if (a == 'Question 5'){
		count += 1;		
	};
	document.getElementById('text').innerHTML = set[i]
	document.getElementById('count').innerHTML = count
	i += 1
	if (i == 6){
		if (count < 3){
		document.getElementById('phrase').innerHTML = "You did pretty well on the quiz, but there's always room for improvement";
		} else {
			document.getElementById('phrase').innerHTML = 'Congratulations, you did an excellent job on the quiz!';
		}
	document.getElementById('text').innerHTML = ''
	$('.block_in').css({'opacity': 1,'z-index': 2});
	document.getElementById('num').innerHTML = `${count} out of 5`;
	}
});
$('.once_more').on('click',function(){
	document.getElementById('text').innerHTML = 'Question 1';
	i = 1;
	count = 0;
	document.getElementById('count').innerHTML = 0
	$('.block_in').css({'opacity': 0,'z-index': -1});
});