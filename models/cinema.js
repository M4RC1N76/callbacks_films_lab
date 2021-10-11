const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmsByTitle = function (){
  const result = this.films.map((film) => {
    return film.title; // MAP always return something
  });
  return result;
}

Cinema.prototype.filmsTitle = function (){
  const result = this.films.filter(film.title);
    return film.title;
  };


module.exports = Cinema;
