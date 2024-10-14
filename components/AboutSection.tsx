import CustomSection from "./CustomSection";

export default function AboutSection() {
  return (
    <CustomSection>
      <div className="grid grid-cols-2 items-center px-12">
        <h2 className="text-4xl">ABOUT US</h2>
        <p className="text-3xl">
          We are a family-owned arquitecture firm based in México City. Since
          2003, we have been committed to delivering timeless, quality
          developments that epitomize comfort and functionality.
        </p>
      </div>
    </CustomSection>
  );
}
