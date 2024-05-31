const ColorBlock = ({ color, text }: { color: `#${string}`; text: string }) => {
  return (
    <div
      className="h-[400px] text-5xl flex items-center justify-center"
      style={{
        backgroundColor: color,
        textShadow: '2px 2px 3px rgba(100, 50, 50, 1)',
      }}
    >
      {text}
    </div>
  );
};
export default ColorBlock;
