const fromtime = '11:20'
const totime = '12:30'

const ft = dayjs(`2000-01-01 ${fromtime}`);
const tt = dayjs(`2000-01-01 ${totime}`);
const mins = tt.diff(ft, "minutes", true);
const totalHours = parseInt(mins / 60);
const totalMins = dayjs().minute(mins).$m
