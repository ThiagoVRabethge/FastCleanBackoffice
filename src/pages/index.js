import Navbar from "@/components/Navbar/Navbar";
import confirmAttendance from "@/requests/todaySchedules/confirmAttendance";
import getTodaySchedules from "@/requests/todaySchedules/getTodaySchedules";
import { useMemo, useState } from "react";

const Home = () => {
  const [todaySchedules, setTodaySchedules] = useState([]);

  const GetTodaySchedules = () => {
    getTodaySchedules()
      .then((response) => setTodaySchedules(response.data));
  };

  useMemo(() => {
    GetTodaySchedules();
  }, []);

  const HandleConfirmAttendance = (todaySchedule) => {
    confirmAttendance(todaySchedule.schedule_id)
      .then(() => {
        GetTodaySchedules();
      });
  };

  return (
    <>
      <div className="container">
        <Navbar />

        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>
                  Data
                </th>
                <th>
                  Horário
                </th>
                <th>
                  Tipo de lavagem
                </th>
                <th>
                </th>
              </tr>
            </thead>
            <tbody>
              {todaySchedules && todaySchedules.map((todaySchedule) => {
                return (
                  <tr>
                    <td>
                      {todaySchedule.date}
                    </td>
                    <td>
                      {todaySchedule.time}
                    </td>
                    <td>
                      {todaySchedule.wash_type_id}
                    </td>
                    <td>
                      <button
                        className="btn btn-success btn-sm"
                        onClick={() => HandleConfirmAttendance(todaySchedule)}
                      >
                        Concluir atendimento
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;