import moment from "moment";
import db from "./db";

const listTodaySchedules = async (req, res) => {
  try {
    const actualDate = moment(new Date()).format("DD/MM/YYYY");
    const zero = 0;

    const { rows } = await db.query(
      "SELECT * FROM schedule WHERE date = $1 AND wash_type_id = $2",
      [actualDate, zero]
    );

    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  };
};

export default listTodaySchedules;