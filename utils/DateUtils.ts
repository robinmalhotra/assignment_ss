import moment from 'moment';

export function getDaysDiff(start: string, end: string): number {
    if (!start || !end || !moment(start).isValid() || !moment(end).isValid()) {
        return -1;
    }
    return moment(end).diff(moment(start), 'days');
}
