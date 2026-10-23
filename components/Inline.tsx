const TOKEN = /(\*\*[^*]+\*\*|\*[^*]+\*)/g;

/** Renders paragraph markup: **bold** and *italic*. */
export function Inline({ text }: { text: string }) {
  return (
    <>
      {text.split(TOKEN).map((part, i) => {
        if (part.length > 4 && part.startsWith("**") && part.endsWith("**")) return <strong key={i}>{part.slice(2, -2)}</strong>;
        if (part.length > 2 && part.startsWith("*") && part.endsWith("*")) return <em key={i}>{part.slice(1, -1)}</em>;
        return part;
      })}
    </>
  );
}
