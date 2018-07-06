'use strict'
const color = require('chalk')
const debug = require('debug')('front-end:demo')
let msg = 'hola mundo'
debug(`el mensaje es ${color.yellow(msg)}`)
