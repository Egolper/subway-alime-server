import axios from "axios";
import schedule from "node-schedule";
import { StationService } from "../services";

const runSchedule = process.env.INSTANCE_ID === "0";

export const load_heroku_awaker = () => {
  if (!runSchedule) return;

  schedule.scheduleJob("*/20 * * * *", () => {
    console.log("$$ awake heroku in every 20 min");
    axios.get(`https://subway-alime.herokuapp.com/api`);
  });
};

export const load_공공데이터_수집기 = async () => {
  // if (!runSchedule) return;

  const rule = new schedule.RecurrenceRule();
  rule.hour = 15;
  rule.minute = 26;
  rule.dayOfWeek = [0, new schedule.Range(0, 6)];
  rule.tz = "Asia/Seoul";

  schedule.scheduleJob(rule, async () => {
    try {
      await StationService.collect지하철공공데이터();
    } catch (e) {
      console.log(e);
    }
  });
};
