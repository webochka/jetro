var post = document.querySelectorAll('.post__description');
var postHidden = document.querySelectorAll('.post__is-hidden');
var form = document.querySelectorAll('.post__form');
var comments =	document.querySelectorAll('.post__comments');
var counter = document.querySelectorAll('.comments__counter');
var textHidden = document.querySelectorAll('.post__text--more');
var error = document.querySelectorAll('.comment__error');

var arr = [];

post[0].addEventListener('click', function(e) {
  var id =  post[0].getAttribute('data-id');
  e.preventDefault();
  
  style(id);

  if(e.target.tagName === 'BUTTON') {
    render(id);
  }

});


post[1].addEventListener('click', function(e) {
  var id =  post[1].getAttribute('data-id');
  e.preventDefault();

  style(id);

  if(e.target.tagName === 'BUTTON') {
  		render(id);
  	}

});


post[2].addEventListener('click', function(e) {
  var id =  post[2].getAttribute('data-id');
  e.preventDefault();
  
  style(id);

  if(e.target.tagName === 'BUTTON') {
  		render(id);
  	}

});

function style(id) {
  postHidden[id].style.display = 'block';
  textHidden[id].style.display = 'none';
}



function render(id) {

  if(!(/^\s*$/).test(form[id].name.value) && !(/^\s*$/).test(form[id].text.value)) {
	    var date = new Date();
	    var year = date.getFullYear()+'-'+ date.getMonth()+'-'+date.getDate();
	    var time = date.getHours() + ':' + date.getMinutes(); 

	    comments[id].innerHTML += `
			 	<div class="comment__inner">
					<div class="comment__info">
						<p class="comment__username">${form[id].name.value}</p>
						<p class="comment__date">${year}</p>
						<p class="comment__date">${time}</p>
					</div>
					<p class="comment__text">${form[id].text.value}</p>
				</div>
			 `;

	    arr.push(id);

	    var count = 0;

	    for(var i = 0; i < arr.length; i++) {
	    	if(arr[i] === id) {
	    		count++;
	    	}
	    }

  
	    counter[id].innerHTML = count;

	    error[id].innerHTML = '';	    
	    form[id].reset();

	  } else { 
	  	error[id].innerHTML = 'Fields should be required!';
  }

};


