import app from "./src/app.js";
import { pool } from "./src/db/pool.js";

const PORT = Number(process.env.PORT ?? 3000);

if (!Number.isInteger(PORT) || PORT < 1 || PORT > 65535) {
  throw new Error("PORT wajib integer 1-65535.");
}

const HOST = process.env.HOST ?? (process.env.NODE_ENV === "production" ? "0.0.0.0" : "127.0.0.1");
const server = app.listen(PORT, HOST, () => {
  console.log(`SisaBaik API: http://${HOST}:${PORT}`);
});

server.on("error", (error) => {
  console.error("Server gagal:", error.code);
  process.exitCode = 1;
  void pool.end();
});

let menutup = false;

function tutupServer() {
  if (menutup) return;
  menutup = true;

  server.close(async () => {
    await pool.end();
    process.exit(0);
  });
}

process.on("SIGINT", tutupServer);
process.on("SIGTERM", tutupServer);