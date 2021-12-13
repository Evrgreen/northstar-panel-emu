const d = new Date(Date.now());
const time = d.toLocaleTimeString([], {
	hour: '2-digit',
	minute: '2-digit',
});
const date = d.toLocaleDateString('en-us', {
	month: 'long',
	day: 'numeric',
});

export default [time, date];
