angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

.service('Pessoas', PessoasService)

.service('Produtos', ProdutosService)

.service('Contas', ContasService);

//---------------------> PessoasService <---------------------

PessoasService.$inject = ['$http']; //Lista de dependências

function PessoasService($http) {
  var pessoas = [{
    id: 1,
    nome: 'Mary'
  }, {
    id: 2,
    nome: 'Rose'
  }, {
    id: 3,
    nome: 'Rafa'
  }, {
    id: 4,
    nome: 'Paty'
  }, {
    id: 5,
    nome: 'Jolie'
  }, {
    id: 6,
    nome: 'Margot'
  }, {
    id: 7,
    nome: 'Suzi'
  }];
  
  var vm = this;
 
  vm.all = all;

  //Implementação das funções
  function all() {
    return pessoas;
  }
}

//---------------------> ProdutosService <---------------------

ProdutosService.$inject = ['$http']; //Lista de dependências

function ProdutosService($http) {
  var produtos = [{
    id: 1,
    nome: 'Skol',
    preco: 3.0
  }, {
    id: 2,
    nome: 'Itaipava',
    preco: 3.0
  }, {
    id: 3,
    nome: 'Gatorade',
    preco: 5.0
  }, {
    id: 4,
    nome: 'Agua',
    preco: 2.0
  }, {
    id: 5,
    nome: 'Coca Lata',
    preco: 3.5
  }, {
    id: 6,
    nome: 'Coca 2 litros',
    preco: 8.0
  }, {
    id: 7,
    nome: 'Batata',
    preco: 3.0
  }];
  
  var vm = this;
 
  vm.all = all;

  //Implementação das funções
  function all() {
    return produtos;
  }
}

//---------------------> ContasService <---------------------

ContasService.$inject = ['$http']; //Lista de dependências

function ContasService($http) {
  var contas = [];
  
  var vm = this;
 
  vm.all = all;

  //Implementação das funções
  function all() {
    return contas;
  }
  
  function insert(conta) {
    contas.push(conta);
  }
}