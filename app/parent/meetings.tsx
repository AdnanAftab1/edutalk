export default function Meetings() {
  return (
    <div className="text-2xl font-['Inter'] relative font-semibold w-xl bg-gradient-to-b from-slate-500/50 m-12 p-5 rounded-lg flex flex-col justify-center items-center ">
      <p className="w-full text-center">Request Meeting</p>

      <div className="overflow-scroll w-full mt-4">
        <form className="flex flex-col gap-4 p-4">

          {/* Time */}
          <div className="flex flex-col text-base">
            <label className="mb-1">Select Time</label>
            <input
              type="time"
              className="p-2 rounded-md bg-white/10 backdrop-blur border border-white/30"
            />
          </div>
          {/* Time */}
          <div className="flex flex-col text-base">
            <label className="mb-1">Select Date</label>
            <input
              type="date"
              className="p-2 rounded-md bg-white/10 backdrop-blur border border-white/30"
            />
          </div>

          {/* Subject */}
          <div className="flex flex-col text-base">
            <label className="mb-1">Subject</label>
            <textarea
              rows="4"
              placeholder="Write the subject..."
              className="p-2 rounded-md bg-white/10 backdrop-blur border border-white/30"
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-2 p-2 bg-gradient-to-r from-amber-600 to-amber-400 hover:to-amber-700 text-white rounded-md"
          >
            Submit Request
          </button>

        </form>
      </div>
    </div>
  );
}
