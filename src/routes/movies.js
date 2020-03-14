const { Router } = require('express');
const router = Router();
const _ = require('underscore');
const movies = require('../sample.json');

router.get('/', function(require, response, next) {
    // response.send('Esto es /movies');
    response.json(movies);
});

router.post('/', function(request, response, next) {
    console.log(request.body);
    const { title, director, year, rating } = request.body;

    if (title && director && year && rating) {
        const id = movies.length + 1;
        const newMovie = { id, title, director, year, rating};
        
        movies.push(newMovie);
        response.json(movies);
    }
    else {
        response.status(400).send(response.statusCode);
    }
});

router.delete('/:id', function(request, response, next) {
    const { id } = request.params;

    _.each(movies, (movie, i) => {
        if (movie.id == id) {
            movies.splice(i, 1);
            response.json(movies);
        }
    });
    response.send(response.statusCode);
});

router.put('/:id', function(request, response, next) {
    const { id } = request.params;
    const { title, director, year, rating } = request.body;

    if (title && director && year && rating) {
        _.each(movies, (movie, i) => {
            if (movie.id == id) {
                movie.title = title;
                movie.director = director;
                movie.year = year;
                movie.rating = rating;
            }
        });

        response.json(movies);
    }
    else {
        response.status(400).send(response.statusCode);
    }
});

module.exports = router;