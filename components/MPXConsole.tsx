"use client";

export default function MPXConsole() {
  return (
    <div className="bg-mpx-black/60 border border-mpx-blue/40 rounded-2xl p-6 font-mono text-mpx-white space-y-2 shadow-[0_0_18px_#3A7AFE22]">
      <h2 className="text-3xl font-bold mb-6">MPX Console</h2>

      <p>
        {" > "}System Status:{" "}
        <span className="text-mpx-blue">Stable</span>
      </p>

      <p>
        {" > "}AI Core:{" "}
        <span className="text-mpx-blue">Online</span>
      </p>

      <p>
        {" > "}Uptime: 4172 cycles
      </p>

      <p>
        {" > "}Neural Mesh Connectivity:{" "}
        <span className="text-mpx-aqua">99.7%</span>
      </p>

      <p>
        {" > "}Thermal Load: <span className="text-mpx-yellow">Low</span>
      </p>

      <p>
        {" > "}Last anomaly detected: None
      </p>

      <p className="opacity-50 mt-4">
        {" > "}End of diagnostic stream.
      </p>
    </div>
  );
}
