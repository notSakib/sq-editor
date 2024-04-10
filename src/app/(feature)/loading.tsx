export default function PageLoading({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="animate-pulse bg-muted grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="flex flex-1">
        <main className="flex h-screen w-full items-center justify-center gap-4 px-4 py-2"></main>
      </div>
    </div>
  );
}
