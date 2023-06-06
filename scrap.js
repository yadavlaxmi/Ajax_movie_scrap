let Search_button=document.getElementById("SearchButton");
Search_button.addEventListener("click",function (){
	inputbox=document.getElementById("input_box").value;
	movie_fetch = new XMLHttpRequest();
	movie_fetch.open("GET",`http://www.omdbapi.com/?t=${inputbox}&apikey=52bf9f8a`,true);
	movie_fetch.send();
	movie_fetch.onload = function (){
        if (movie_fetch.status === 200) {
            response = JSON.parse(movie_fetch.responseText);
            document.getElementById("title").innerHTML="Title :- "+response.Title;
            document.getElementById("actors").innerHTML="Actors :- "+response.Actors;
            document.getElementById("director").innerHTML="Director :- "+response.Director;
            document.getElementById("year").innerHTML="Year :- "+response.Year;
            document.getElementById("country").innerHTML="Country :- "+response.Country;
            document.getElementById("language").innerHTML="Language :- "+response.Language;
            document.getElementById("genre").innerHTML="Genre :- "+response.Genre;
        };
    };
});
