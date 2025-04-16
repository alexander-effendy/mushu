export function formatBotMarkdown(raw: string): string {
  return raw
    // Step 1: Add newlines around lines starting with ** and ending with :
    .replace(/\*\*(.+?):\*\*/g, '### $1')
    // Step 2: Ensure there's always a newline before each ### section heading
    .replace(/(^|\n)(#{1,6}\s.*)/g, '\n$2')
    // Step 3: Convert single line breaks into double spaces + newline for inline breaks
    .replace(/([^\n])\n(?!\n)/g, '$1  \n') // only applies to lines that aren’t already paragraph-separated
    .trim();
}
