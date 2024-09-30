export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <main className="flex min-h-svh w-full justify-center">
      <div className="flex w-full max-w-[65%] gap-4">
        <div>
          <div className="h-[38.931rem] w-[23.949rem] animate-pulse rounded-2xl bg-gray-300" />
        </div>
        <div className="flex-grow gap-6">
          <div className="h-4 animate-pulse rounded-2xl bg-gray-300" />
          <div className="mt-2 h-4 animate-pulse rounded-2xl bg-gray-300" />
          <div className="mt-2 h-4 max-w-sm animate-pulse rounded-2xl bg-gray-300" />
        </div>
      </div>
    </main>
  );
}
