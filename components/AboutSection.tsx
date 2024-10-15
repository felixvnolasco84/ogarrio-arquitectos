import CustomSection from "./CustomSection";

export default function AboutSection() {
  return (
    <div className="grid items-center justify-center space-y-12 lg:grid-cols-2 lg:items-start lg:justify-between lg:px-12 lg:py-24">
      <h2 className="text-center text-5xl lg:text-left">ABOUT US</h2>

      <div className="flex lg:justify-end">
        <p className="max-w-3xl text-center text-3xl lg:text-right">
          We are a family-owned arquitecture firm based in México City. Since
          2003, we have been committed to delivering timeless, quality
          developments that epitomize comfort and functionality.
        </p>
      </div>
    </div>
  );
}
