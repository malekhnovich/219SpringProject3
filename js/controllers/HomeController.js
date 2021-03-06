app.controller('HomeController', ['$scope', function($scope) {
	
	
	/* THESE ARE YOUR LIST OF MOVIES AND ACCOMPANYING METADATA
	//	
	// 	They are in the following format:
	// 	title (String): the name of the movie
	// 	iscore (Number): the IMDB score
	// 	rating (String): the movie's MPAA rating 
	// 	released (Date): the release date
	// 	country (String): the country of production
	// 	posters (Array): an array of String values with the URL to movie posters
	// 	imdb (String): the URL to the corresponding IMDB website
	// 	website (String): the URL to the corresponding official website
	// 	likes (Number): a fictitious number of user likes
	// 	dislikes (Number): a fictitious number of user dislikes
	// 	posterindex (Number): a counter to use with the "posters" array to keep track of the current displayed poster index
	//
	// FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THIS LIST
	*/
	$scope.movies = [
    { 
      title:	'The Shawshank Redemption', 
      iscore:	9.3,
      rating:	'R',
      runtime:	142,
      released:	new Date('1994', '10', '14'),
      country:	'USA',
      posters:	['img/shawshank.jpg','img/shawshank2.jpg','img/shawshank3.jpg'],
      imdb:		'http://www.imdb.com/title/tt0111161',
      website:	'https://www.facebook.com/ShawshankRedemptionFilm',
      likes:	1021,
      dislikes:	122,
      posterindex: 0
	},
    { 
      title:	'The Godfather', 
      iscore:	9.2,
      rating:	'R',
      runtime:	175,
      released:	new Date('1972', '03', '24'),
      country:	'USA',
      posters:	['img/godfather.jpg','img/godfather_2.jpg','img/godfather_3.jpg'],
      imdb:		'[http://www.imdb.com/title/tt0068646',
      website:	'https://www.facebook.com/thegodfather',
      likes:	928,
      dislikes:	109,
      posterindex: 0
	},
    { 
      title:	'The Godfather: Part II', 
      iscore:	9.0,
      rating:	'R',
      runtime:	202,
      released:	new Date('1974', '12', '20'),
      country:	'USA',
      posters:	['img/godfather2.jpg','img/godfather2_2.jpg'],
      imdb:		'http://www.imdb.com/title/tt0071562',
      website:	'https://www.facebook.com/thegodfather',
      likes:	855,
      dislikes:	99,
      posterindex: 0
	},
    { 
      title:	'The Dark Knight', 
      iscore:	8.9,
      rating:	'PG-13',
      runtime:	152,
      released:	new Date('2008', '07', '18'),
      country:	'USA',
      posters:	['img/darkknight.jpg','img/darkknight2.jpg'],
      imdb:		'http://www.imdb.com/title/tt0468569',
      website:	'http://www.42entertainment.com/work/whysoserious',
      likes:	828,
      dislikes:	127,
      posterindex: 0
	},
    { 
      title:	'Schindler\'s List', 
      iscore:	8.9,
      rating:	'R',
      runtime:	195,
      released:	new Date('1993', '11', '30'),
      country:	'USA',
      posters:	['img/schindlerslist.jpg'],
      imdb:		'http://www.imdb.com/title/tt0108052',
      website:	'https://www.uphe.com/schindlers-list',
      likes:	812,
      dislikes:	101,
      posterindex: 0
	},
    {
        title:'Requiem for a Dream',
        iscore:8.4,
        rating:'R',
        runtime:102,
        released: new Date('2000','12','15'),
        country:'USA',
        posters:['img/RequiemDream1.jpg','img/RequiemDream2.jpg'],
        imdb: 'http://www.imdb.com/title/tt0180093/?ref_=ttmd_md_nm',
        website:"http://hi-res.net/legacy/requiem-for-a-dream",
        likes:213,
        dislikes:112,
        posterindex:0
    },
        {
            title: 'American Beauty ',
            iscore: 8.4,
            rating: 'R',
            runtime: 122,
            released: new Date('1999', '10', '01'),
            country: 'USA',
            posters: ['img/AmericanBeauty1.jpg', 'img/AmericanBeauty2.jpg'],
            imdb: 'http://www.imdb.com/title/tt0169547/?ref_=tt_rec_tt',
            website: "http://www.dreamworks.com/ab/",
            likes: 521,
            dislikes: 132,
            posterindex: 0

        },
        {
            title: 'Eternal Sunshine of the Spotless Mind ',
            iscore: 8.4,
            rating: 'R',
            runtime: 108,
            released: new Date('2004', '03', '19'),
            country: 'USA',
            posters: ['img/ESSmind1.jpg', 'img/ESSmind2.jpg'],
            imdb: 'http://www.imdb.com/title/tt0338013/?ref_=tt_rec_tti',
            website: "http://www.focusfeatures.com/eternal_sunshine_of_the_spotless_mind",
            likes: 773,
            dislikes: 171,
            posterindex: 0

        }
  ];
	
	
$scope.title="IMDB + Max's Top 8 Movies";
//3B
  $scope.owner="Max";
//3C
    $scope.github="https://github.com/malekhnovich/219SpringProject3";

	/* ADD VARIABLES FOR STEP 3 HERE */
	
	
	
	
	
	
	
	
	/* ADD FUNCTIONS FOR STEP 7 HERE */
//7A like function

$scope.like=function(index){
    $scope.movies[index].likes++;
    console.log("The movie has been liked "+$scope.movies[index].likes+"times");

}
//7B dislike function
 $scope.dislike=function(index){
     $scope.movies[index].dislikes++;
     console.log("The movie has been disliked "+$scope.movies[index].dislikes+"times");
 }
 //7C posterClick function
 $scope.posterClick=function(index){
     $scope.movies[index].posterindex++;
     if($scope.movies[index].posterindex==$scope.movies[index].posters.length){
         $scope.movies[index].posterindex=0;

     }
     console.log("The poster index is "+$scope.movies[index].posterindex);
 }
 //7D timeText
 $scope.timeText=function(minutes){
     $scope.hour=Math.floor(minutes/60);
     $scope.min=minutes%60;
     return $scope.hour+"h "+$scope.min+"m";
 }


	
	
	
	
	
	
	
	
}]);
