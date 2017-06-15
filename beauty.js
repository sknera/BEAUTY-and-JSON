
var app = angular.
module("myModule", []) 

.controller("myController", function ($scope) 
	    {
	//ustawia limit rekordów na 5
	  var limit=5;
	  var begin=1;
	  $scope.limit=limit;
	  $scope.begin=begin;

	  var currentPage=1;
	 //pokazuje kolejne pięć rekordów 
	 $scope.incrementLimit = function() {
      console.log('eee');
     	 $scope.limit+=5;
     	 $scope.begin+=5;
	 currentPage+=1;
    };
	//zabiera możliwość przejścia do poprzedniej strony
	document.getElementById("decrement").disabled = true; 
	
	//pokazuje poprzednie pięć rekordów
      $scope.decrementLimit = function() {
      $scope.limit-=5;
      $scope.begin+=5;
      currentPage-=1;
		  	  		 


    };
	
	
	$scope.hiddenStatement= function()
	{
		//ukrywa i odkrywa przycisk przejścia do poprzedniej strony
		 	  if(currentPage==1)
	  {
		document.getElementById("decrement").disabled = true; 
	  }
		 	else
	  {
		document.getElementById("decrement").disabled = false; 
	  }
	  		//ukrywa i odkrywa przycisk przejścia do następnej strony
	  if(currentPage==pages)
	  {
		    document.getElementById('increment').disabled = true;
	  }
	else
	  {
		    document.getElementById('increment').disabled = false;
	  }
	  
	}
	
	
	
	
	
	
var employees=[
   {
      "id":1,
      "firstName":"Dobromir",
      "lastName":"Sprytny",
      "dateOfBirth":"1.7.1990 11:35",
      "function":"kamerdyner",
      "experience":4
   },
   {
      "id":4,
      "firstName":"Helga",
      "lastName":"Uczynna",
      "dateOfBirth":"4.02.1976 14:37",
      "function":"pokojówka",
      "experience":12
   },
   {
      "id":2,
      "firstName":"Marianna",
      "lastName":"Prostota",
      "dateOfBirth":"28.10.1976 2:15",
      "function":"pokojówka",
      "experience":12
   },
   {
      "id":3,
      "firstName":"Walerian",
      "lastName":"Szybki",
      "dateOfBirth":"03.01.1986 23:10",
      "function":"kamerdyner",
      "experience":10
   },
   {
      "id":5,
      "firstName":"Krzysztof",
      "lastName":"Klucznik",
      "dateOfBirth":"10.10.1986 18:00",
      "function":"lokaj",
      "experience":3
   },
   {
      "id":6,
      "firstName":"Konstancja",
      "lastName":"Urodziwa",
      "dateOfBirth":"29.02.1936 13:33",
      "function":"kucharka",
      "experience":8
   },
   {
      "id":7,
      "firstName":"Kornelia",
      "lastName":"Wstydliwa",
      "dateOfBirth":"19.02.1973 23:55",
      "function":"pokojówka",
      "experience":8
   },
   {
      "id":8,
      "firstName":"Władysława",
      "lastName":"Dobrotliwa",
      "dateOfBirth":"29.12.1977 18:25",
      "function":"pokojówka",
      "experience":8
   },
   {
      "id":9,
      "firstName":"Mirosław",
      "lastName":"Podstepny",
      "dateOfBirth":"09.12.1972 17:35",
      "function":"kamerdyner",
      "experience":8
   },
   {
      "id":10,
      "firstName":"Walerian",
      "lastName":"Drażliwy",
      "dateOfBirth":"29.03.1980 15:36",
      "function":"lokaj",
      "experience":8
   },
   {
      "id":11,
      "firstName":"Katarzyna",
      "lastName":"Krasna",
      "dateOfBirth":"05.05.1983 01:15",
      "function":"pokojówka",
      "experience":8
   },
   {
      "id":12,
      "firstName":"Urszula",
      "lastName":"Markotna",
      "dateOfBirth":"06.04.1981 12:35",
      "function":"pokojówka",
      "experience":8
   }
];

//zlicza ilość pracowników w tablicy
 var count = Object.keys(employees).length;

  //ilość stron do wyświetlenia
var pages=Math.ceil(count/limit);
	
//zmienia datę urodzenia na wiek dla każdej osoby
    for( var k = 0; k < count; k++ ) {
     employees[k].dateOfBirth =  stringToDate(employees[k].dateOfBirth) ;
    }
	
//sortuje
	$scope.employees = employees; 
	$scope.sortColumn = "id"; })

	//używa daty by zamienić ją na wiek w latach
function stringToDate(s)  {
  s = s.split('.');
  return 2017-parseInt(s[2].substring(0,4));
}


