import axios from "axios";
import schedule from "node-schedule";
import { StationService } from "../services";

export const load_heroku_awaker = () => {
  schedule.scheduleJob("*/20 * * * *", () => {
    console.log("$$ awake heroku in every 20 min");
    axios.get(`https://subway-alime.herokuapp.com/api`);
  });
};

export const load_공공데이터_수집기 = async () => {
  const rule = new schedule.RecurrenceRule();
  rule.hour = 5;
  rule.minute = 0;
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
