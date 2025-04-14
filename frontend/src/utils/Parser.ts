export const removeLeadingReply = (msg: string) => {
  if (!msg) return "";
  return msg.replace(/^Mushu:\s*/i, "").trim();
}