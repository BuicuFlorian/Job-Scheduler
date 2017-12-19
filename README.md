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

job.scheduleEveryYear(() => {
    console.log('This job will run every year.');
});

job.scheduleEveryMonth(() => {
    console.log('This job will run every month.');
});

job.scheduleEveryWeek(() => {
    console.log('This job will run every week.');
});

job.scheduleEveryDayAt(12, 30, () => {
    console.log('This job will run every day at 12:30 PM.');
});

job.scheduleEveryHour(() => {
    console.log('This job will run every hour.');
});

job.scheduleEveryHourAt(30, () => {
    console.log('This job will run every hour at minute 30.');
});

job.scheduleEvery('monday at 5pm', () => {
    console.log('This job will run every monday at 5 PM.');
});

job.scheduleAt('6:30 pm', () => {
    console.log('This job will run every day at 6:30 PM.');
});
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