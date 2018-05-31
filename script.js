var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodzieju',
        img: 'http://ocdn.eu/images/newsweek-web/ZTA7MDA_/f69779a00d0377e1bb97c7100ee3cd6a.jpg'
    
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Każdy zna Króla Lwa:)',
        img: 'https://media.teleman.pl/photos/Krol-Lew-1994.jpg'
    },
    {
        id: 3,
        title: 'Władca Pierścieni',
        desc: 'Powieśc której akcja rozgrywa się w mitologicznym świecie Śródziemia',
        img: 'http://1.fwcdn.pl/q/q/77.0.jpg'
    },
    {
        id: 4,
        title: 'Toy Story',
        desc: 'Film opowiadający o zabawkach chłopca imieniem Andy',
        img: 'https://lumiere-a.akamaihd.net/v1/images/c3c2b4a3323c4a71929cd5fc76bcda4df7157175.jpeg?region=0%2C0%2C1024%2C320'
    }
         
];

//MOVIE
var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },
    
    render: function() {
        return (
            var element = 
            React.createElement('div', {},
                React.createElement('h1', {}, 'Lista filmów'),
                React.createElement('ul', {}, moviesElements)
            );
        )   
    }
});

//MOVIES ELEMENTS
var moviesElements = movies.map(function(movie) {
    return (
        React.createElement('li', {key: movie.id},
            React.createElement(MovieTitle, {title: this.props.title}),
            React.createElement(MovieDesc, {desc: this.props.desc}),
            React.createElement(MovieImage, {img: this.props.img}),
        ),
     )
});
    
//TITLE
var MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
    },

    render: function() {
        return React.createElement('h2', {}, this.props.title)
    }
})

//DESCRIPTION
var MovieDesc = React.create.Class({
    propTypes: {
        desc: React.PropType.string.isRequired,
    },
    
    render: function() {
        return React.createElement('p', {}, this.props.desc)
    }
                                   
})

//IMAGE
var MovieImage = React.createClass({
    propType: {
        img: React.PropType.object.isRequired,
    },
    
    render: function() {
        return React.createElement('img', {src: this.props.img})
    }
})

var element = React.createElement(Movie, {Movie: movie});
ReactDOM.render(element, document.getElementById('app'));