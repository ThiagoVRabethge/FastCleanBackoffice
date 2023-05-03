import server from "@/services/server";

const getTodaySchedules = () => {
  return (
    server
      .get("/api/listTodaySchedules")
      .then((response) => response)
      .catch((error) => console.error(error))
  );
};

export default getTodaySchedules;