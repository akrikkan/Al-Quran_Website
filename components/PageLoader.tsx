"use client";

export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-green-700">
      <div className="loader" />
    </div>
  );
}
