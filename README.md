#Meteor Wrapper for Kue
----------------------------------------------
##What?
Meteorite wrapper for [Kue](http://learnboost.github.io/kue/), the Node.js job queue package. 
## Usage
Install with the following command:
```bash
mrt add kue
```
The global variable ```Kue``` is available to use anywhere in the code. For example, to create a job queue, use the following command:
```javascript
var jobs = Kue.createQueue();
```
