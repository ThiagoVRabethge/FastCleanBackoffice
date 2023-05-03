import server from "@/services/server";

const confirmAttendance = (scheduleId) => {
  return (
    server
      .post("/api/confirmAttendance", {
        scheduleId: scheduleId,
      })
      .then((response) => response)
      .catch((error) => console.error(error))
  );
};

export default confirmAttendance;