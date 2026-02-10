export default function Background() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="bg-grid" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_10%,rgba(110,99,255,0.12),transparent_55%)] dark:bg-[radial-gradient(circle_at_25%_10%,rgba(86,77,195,0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(255,120,210,0.12),transparent_55%)] dark:bg-[radial-gradient(circle_at_80%_15%,rgba(190,80,160,0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.35),transparent_40%,rgba(255,255,255,0.2))] opacity-25 dark:opacity-10" />
      <div className="orb orb-a" />
      <div className="orb orb-b" />
      <div className="orb orb-c" />
    </div>
  );
}
