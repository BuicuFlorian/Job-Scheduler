# Job Scheduler

Execute function at a certain time. Merely a human-readable [Node Schedule](https://github.com/node-schedule/node-schedule) wrapper. Uses [date](http://github.com/matthewmueller/date) for human-friendly date parsing.


## Requirements

* [Node and npm](https://nodejs.org/)


## Installation

* Download the [repository](https://github.com/BuicuFlorian/Job-Scheduler/archive/master.zip)
* Install node modules: `npm install`
* Compile the file: `npm run compile`


## Examples

```js
const job = require('./dist/index.js');

job.scheduleEveryYear(fn);
job.scheduleEveryMonth(fn);
job.scheduleEveryWeek(fn);
job.scheduleEveryDayAt(12, 30, fn);
job.scheduleEveryHour(fn);
job.scheduleEveryHourAt(30, fn);
job.scheduleEvery('monday at 5pm');
job.scheduleAt('6:30 pm');
```


## API

```js
scheduleEveryYear(fn);
scheduleEveryMonth(fn);
scheduleEveryWeek(fn);
scheduleEveryDayAt(hour, minute, fn);
scheduleEveryHour(fn);
scheduleEveryHourAt(minute, fn);
scheduleEvery(time);
scheduleAt(time);
```


## License

MIT