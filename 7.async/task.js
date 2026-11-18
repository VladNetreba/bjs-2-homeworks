class AlarmClock {
	constructor() {
		this.alarmCollection = [];

		this.intervalId = null;
	}

	addClock(time, callback) {
		if (!time || !callback) {
			throw new Error('Отсутствуют обязательные аргументы');
		}

		const isDuplicate = this.alarmCollection.some(alarm => alarm.time === time);
		if (isDuplicate) {
			console.warn('Уже присутствует звонок на это же время');
		}

		this.alarmCollection.push({
			time: time,
			callback: callback,
			canCall: true
		});
	}

	removeClock(time) {
		const initialLength = this.alarmCollection.length;

		this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);

		return initialLength !== this.alarmCollection.length;
	}

	getCurrentFormattedTime() {
		const now = new Date();

		const hours = String(now.getHours()).padStart(2, '0');
		const minutes = String(now.getMinutes()).padStart(2, '0');

		return `${hours}:${minutes}`;
	}

	start() {
		if (this.intervalId) {
			return;
		}

		this.intervalId = setInterval(() => {
			const currentTime = this.getCurrentFormattedTime();

			this.alarmCollection.forEach(alarm => {
				if (alarm.time === currentTime && alarm.canCall) {
					alarm.canCall = false;
					alarm.callback();
				}
			});
		}, 1000);
	}

	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	resetAllCalls() {
		this.alarmCollection.forEach(alarm => {
			alarm.canCall = true;
		});
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}