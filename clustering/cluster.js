var cluster = require('cluster')
var http = require('http')
var numCPUs = require('os').cpus().length
var express = require('express')
var stats = {}

if (cluster.isMaster) {
    console.log(' Fork %s worker(s) from master', numCPUs)
    for (var i = 0; i < numCPUs; i++) {
        cluster.fork()
    }
    cluster.on('online', function(worker) {
        console.log('worker is running on %s pid', worker.process.pid)
    })
    cluster.on('exit', function(worker, code, signal) {
        console.log('worker with %s is closed', worker.process.pid)
    })
} else if (cluster.isWorker) {
    "use strict";

    var port = 3000
    stats[cluster.worker.process.pid] = 0
    console.log('worker (%s) is now listening to http://localhost:%s')
        var path = require('path');
        var express = require('express')
        var app = express()
        var messages = [{
            text: 'hey',
            lang: 'english'
        }, {
            text: 'isänme',
            lang: 'tatar'
        }, {
            text: 'hej',
            lang: 'swedish'
        }]
        var publicFolderName = 'public'
        var port = process.env.PORT || 3000
        app.use(express.static(publicFolderName))


        app.use(function(req, res, next) {
            if (!req.is('application/octet-stream')) return next()
            var data = [] // List of Buffer objects
            req.on('data', function(chunk) {
                data.push(chunk) // Append Buffer object
            })
            req.on('end', function() {
                if (data.length <= 0) return next()
                data = Buffer.concat(data) // Make one large Buffer of it
                console.log('Received buffer', data)
                req.raw = data
                next()
            })
        })

        var ProtoBuf = require('protobufjs')
        var builder = ProtoBuf.loadProtoFile(
            path.join(__dirname,
                publicFolderName,
                'message.proto')
        )
        var Message = builder.build('Message')

        app.get('/api/messages', (req, res, next) => {
            var msg = new Message(messages[Math.round(Math.random() * 2)])
            stats[cluster.worker.process.pid] += 1
            console.log('Encode and decode: ',
                Message.decode(msg.encode().toBuffer()))
            console.log('Buffer we are sending: ', msg.encode().toBuffer())
                // res.end(msg.encode().toBuffer(), 'binary') // alternative
            res.send(msg.encode().toBuffer())
                // res.end(Buffer.from(msg.toArrayBuffer()), 'binary') // alternative
        })

        app.post('/api/messages', (req, res, next) => {
            stats[cluster.worker.process.pid] += 1
            if (req.raw) {
                try {
                    // Decode the Message
                    var msg = Message.decode(req.raw)
                    console.log('Received "%s" in %s', msg.text, msg.lang)
                } catch (err) {
                    console.log('Processing failed:', err)
                    next(err)
                }
            } else {
                console.log("Not binary data")
            }
        })

        app.all('*', (req, res) => {
            stats[cluster.worker.process.pid] += 1
            res.status(400).send('Not supported')
        })

        app.listen(port)
    }
    process.on('SIGINT', function() {
        console.log(stats)
        console.log('Execute "$ killall node" to terminate')
        process.exit(0)
    })
