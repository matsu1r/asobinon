import * as admin from 'firebase-admin';
admin.initializeApp();

exports.contact = require('./contact');
exports.feedback = require('./feedback');
