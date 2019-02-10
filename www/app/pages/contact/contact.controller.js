controllers.controller('ContactController', function($scope, $http, $httpParamSerializer, $ionicPopup) {

	// variaveis
	var url_api = 'http://homepages.dcc.ufmg.br/~maria.luisa/api/helpfestival/index.php';

	$scope.feedback = {
				name	: "",
				email	: "",
				opinion	: ""
			}; 


	// Funcoes 
	$scope.sendMessage = function(email){ 

		console.log(JSON.stringify(email));
		$.ajax({ type: 'POST', url: url_api, data: {json: email}, success : function(data){
			$scope.showAlert();
			$scope.feedback = {
				name	: "",
				email	: "",
				opinion	: ""
			}; 
		}});
	}

	$scope.showAlert = function() {
		var alertPopup = $ionicPopup.alert({
			title: 'Obrigada!',
			template: 'Sua mensagem foi enviada com sucesso!'
		});

		alertPopup.then(function(res) {
			console.log('Ok');
		});
	};
})


