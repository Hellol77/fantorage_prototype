export default function PostSkeletonCard() {
  return (
    <div className="flex h-full flex-col gap-3 rounded-lg p-4 dark:bg-[#18181b]">
      <div className="h-full w-full animate-pulse rounded-lg dark:bg-[#27272a]"></div>
      <div className="h-4 w-20 animate-pulse rounded-lg dark:bg-[#27272a]"></div>
      <div className="h-4 w-48 animate-pulse rounded-lg dark:bg-[#27272a]"></div>
    </div>
  );
}
