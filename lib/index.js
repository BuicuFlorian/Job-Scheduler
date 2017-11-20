/**
 * Module dependencies.
 */
import schedule from 'node-schedule';
import date from 'date.js';

/** Class representing a Job Scheduler. */
class JobScheduler {
    /**
     * Class constructor.
     */
    constructor() {}

    /**
     * Execute the given function every January 1 at 12:00AM.
     * 
     * @param  {Function} fn
     */
    scheduleEveryYear(fn) {
        schedule.scheduleJob('0 0 1 1 *', fn);
    }

    /**
     * Execute the given function at 12:00AM on the first of every month.
     * 
     * @param  {Function} fn
     */
    scheduleEveryMonth(fn) {
        schedule.scheduleJob('0 0 1 * *', fn);
    }

    /**
     * Execute the given function every Sunday at 12:30.
     * 
     * @param  {Function} fn
     */
    scheduleEveryWeek(fn) {
        schedule.scheduleJob({ hour: 12, minute: 30, dayOfWeek: 0 }, fn);
    }

    /**
     * Execute the given function every day at the given hour and minute.
     * 
     * @param  {Number}   hour
     * @param  {Number}   minute
     * @param  {Function} fn
     */
    scheduleEveryDayAt(hour, minute, fn) {
        const rule = new schedule.RecurrenceRule();
        rule.hour = hour;
        rule.minute = minute;

        schedule.scheduleJob(rule, fn);
    }

    /**
     * Execute the given function every hour.
     * 
     * @param  {Function} fn
     */
    scheduleEveryHour(fn) {
        schedule.scheduleJob('* * 1 * *', fn);
    }

    /**
     * Execute the given function every hour at the given minute.
     * 
     * @param  {Number}   minute
     * @param  {Function} fn
     */
    scheduleEveryHourAt(minute, fn) {
        const rule = new schedule.RecurrenceRule();
        rule.minute = minute;

        schedule.scheduleJob(rule, fn);
    }

    /**
     * Execute the given function at every specified time.
     * 
     * @param  {String}   time
     * @param  {Function} fn
     */
    scheduleEvery(time, fn) {
        let now = new Date;
        let d = date(time);
        const offset = d - now;
        let until = offset;

        if (until <= 0) {
            throw new Error(`Did not recognize "${time}"`);
        }

        setTimeout(schedule, until);

        function schedule() {
            d = date(time);

            if (!fn.length) {
                fn();
                reset();
            } else {
                fn(reset);
            }
        }

        function reset() {
            if (!offset) return;

            now = new Date;
            until = d - now;

            if (until < 0) {
                schedule();
            } else {
                setTimeout(schedule, until);
            }

        }
    }

    /**
     * Execute the given function at a certain time.
     * 
     * @param  {String}   time
     * @param  {Function} fn
     */
    scheduleAt(time, fn) {
        const now = new Date;
        const d = date(time);
        const offset = d - now;

        if (! offset) {
            throw new Error(`Did not recognize "${time}"`);
        }

        return setTimeout(fn, offset)   
    }
}

module.exports = new JobScheduler();