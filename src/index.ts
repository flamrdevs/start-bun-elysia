import env from "~/env.ts";
import app from "~/app.ts";

console.log(`PORT : ${env.PORT}`);

app.listen(env.PORT);
