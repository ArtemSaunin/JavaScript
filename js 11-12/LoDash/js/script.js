(function() {
	
  document.addEventListener('DOMContentLoaded', contentResume);
 
	function contentResume() {
		
		var  data =	{
			myName: 'Артём Саунин',
			image: 'img/pic.jpg',
			status: 'Студент GoIT',
			aboutMe: 'Я с вами, потому что:',
			about: ['FrontEnd - это микс творчества и программирования',
							'FrontEnd даёт возможность удалённой работы',
							'FrontEnd - это потрясающий шанс вплести свою ниточку во всемирную паутину'
			],
			phoneTitle: 'Мой контактный телефон',
			phoneNumber: '+380952551723',
			contactFacebook: 'Мой профиль в Facebook',
			facebookUrl: 'https://www.facebook.com/artem.saunin',
			facebookLink: 'facebook.com/artem.saunin',
			feedback: 'Feedback',
			email: 'saunin86@gmail.com'
		};

		var addResume = document.getElementById('addResume');
		var tmpl = _.template(document.getElementById('resume').innerHTML);
		
		addResume.innerHTML = tmpl(data);
	};
})();
