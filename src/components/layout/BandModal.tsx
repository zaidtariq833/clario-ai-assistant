export default function BandModal() {
  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 bg-black/50 flex items-center justify-center"
    >
      <div className="bg-white rounded-xl p-6 w-[400px]">
        <h2 className="text-lg font-semibold">Modal Title</h2>
        <p className="mt-2">Modal content</p>
      </div>
    </div>
  );
}
