import db from "./db";

const confirmAttendance = async (req, res) => {
  try {
    let scheduleId = req.body.scheduleId;

    const { rows } = await db.query(
      "DELETE FROM schedule WHERE schedule_id = $1",
      [scheduleId],
    );

    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ "error": error.message });
  };
};

export default confirmAttendance;