import {formatDistanceToNowStrict} from 'date-fns';

export const timeConvert = (date: Date) => {
	const timeAgo = formatDistanceToNowStrict(date, {addSuffix: false});

	//* Custom plural handling for "min", "hour", and "day"
	if (timeAgo.includes('minute')) {
		return timeAgo === '1 minute' ? '1 min ago' : `${timeAgo.replace('minutes', 'mins')} ago`;
	}

	if (timeAgo.includes('hour')) {
		return timeAgo === '1 hour' ? '1 hour ago' : `${timeAgo.replace('hours', 'hours')} ago`;
	}

	if (timeAgo.includes('day')) {
		return timeAgo === '1 day' ? '1 day ago' : `${timeAgo.replace('days', 'days')} ago`;
	}

	return `${timeAgo} ago`;
};
