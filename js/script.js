var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodzieju',
        img_src: 'http://ocdn.eu/images/newsweek-web/ZTA7MDA_/f69779a00d0377e1bb97c7100ee3cd6a.jpg'
    
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Każdy zna Króla Lwa:)',
        img_src: 'https://media.teleman.pl/photos/Krol-Lew-1994.jpg'
    },
    {
        id: 3,
        title: 'Władca Pierścieni',
        desc: 'Powieśc której akcja rozgrywa się w mitologicznym świecie Śródziemia',
        img_src: 'http://1.fwcdn.pl/q/q/77.0.jpg'
    },
    {
        id: 4,
        title: 'Toy Story',
        desc: 'Film opowiadający o zabawkach chłopca imieniem Andy',
        img_src: 'https://lumiere-a.akamaihd.net/v1/images/c3c2b4a3323c4a71929cd5fc76bcda4df7157175.jpeg?region=0%2C0%2C1024%2C320'
    }
         
];

//TITLE
var MovieTitle = React.createClass({
    propTypes: {
        title_data: React.PropTypes.string.isRequired
    },

    render: function() {
        return React.createElement('h2', {}, this.props.title_data);
    }
});

//DESCRIPTION
var MovieDesc = React.createClass({
    propTypes: {
        desc_data: React.PropTypes.string.isRequired,
    },
    
    render: function() {
        return React.createElement('p', {}, this.props.desc_data);
    }
                                   
});

//IMAGE
var MovieImage = React.createClass({
    propType: {
        img_data: React.PropTypes.object.isRequired,
    },
    
    render: function() {
        return React.createElement('img', {src: this.props.img_data});
    }
});

//MOVIE
var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired
    },

    render: function() {
        return React.createElement('li', {},
            React.createElement(MovieTitle, {title_data: this.props.movie.title}),
            React.createElement(MovieDesc, {desc_data: this.props.movie.desc}),
            React.createElement(MovieImage, {img_data: this.props.movie.img_src})
        );  
    }
});

//MOVIES ELEMENTS
var moviesElements = movies.map(function(movie) {
    return React.createElement(Movie, {key: movie.id, movie: movie});
});
    
var element = 
    React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
    );

ReactDOM.render(element, document.getElementById('app'));