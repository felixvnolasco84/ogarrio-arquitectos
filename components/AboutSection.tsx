
export default function AboutSection() {
  return (
    <div className="grid items-center justify-start gap-4 px-4 lg:grid-cols-2 lg:items-start lg:justify-between lg:gap-0 lg:px-12 2xl:py-24"> 
      <h2 className="text-4xl lg:text-5xl">ABOUT US</h2> 

      <div className="flex lg:justify-end">
        <p className="max-w-3xl text-2xl lg:text-right lg:text-3xl">
          We are a family-owned arquitecture firm based in México City. Since
          2003, we have been committed to delivering timeless, quality
          developments that epitomize comfort and functionality.
        </p>
      </div>
    </div>
  );
}
