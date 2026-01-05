/**
 * SkeletonCard - Loading placeholder with shimmer animation
 * Used for agent, weapon, bangboo, and disc cards
 */

export default function SkeletonCard({ aspectRatio = "4/5" }) {
  return (
    <div
      className="relative w-full mx-auto bg-[#18181b]/50 rounded-lg overflow-hidden animate-pulse"
      style={{ aspectRatio }}
    >
      {/* Shimmer overlay */}
      <div className="absolute inset-0 shimmer"></div>

      {/* Skeleton content */}
      <div className="absolute inset-0 p-2 flex flex-col justify-between">
        {/* Top badges */}
        <div className="flex justify-between">
          <div className="w-6 h-6 bg-[#27272a]/80 rounded"></div>
          <div className="w-6 h-6 bg-[#27272a]/80 rounded"></div>
        </div>

        {/* Bottom text */}
        <div className="space-y-2 p-2">
          <div className="h-3 bg-[#27272a]/80 rounded w-3/4 mx-auto"></div>
        </div>
      </div>

      {/* Shimmer animation styles */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .shimmer::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.05),
            transparent
          );
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
}
