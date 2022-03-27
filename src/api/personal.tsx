import client from "./client";

const getNetWorth = () => client.get("/investments/623fa747a912718610da39fd");

export default { getNetWorth }