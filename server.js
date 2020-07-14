const express = require('express')
const nunjucks = require('nunjucks')
const courses = require('./data')

const server = express()

server.use(express.static('public'))

server.set ('view engine', 'njk')

nunjucks.configure('views', {
    express:server,
    autoescape: false
})


server.get ('/', function(req, res){
    return res.render('about')
})
server.get ('/about', function(req, res){
    return res.render('about')
})

server.get ('/content', function(req, res){
    return res.render('content', { items: courses} )
})

server.get ('/courses/:id', function(req, res) {
    const id = req.params.id

    const course = courses.find(function(course) {
    
    return course.id == id

    })

    if (!course) {
        return res.send ('Course not-found!')
    }
    return res.render ('courses', {item: course})

    
})


server.use(function(req, res) {
    res.status(404).render("not-found");
  })

server.listen(5000, function(){
    console.log('server is running')
})


