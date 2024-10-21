import "./page.module.css";
import Banner from "@/components/Banner";

export default function Home() {
  const startAt = "2025-10-27";
  const endAt = "2025-10-29";

  return (
    <div>
      <Banner
        startAt={startAt}
        endAt={endAt}
        title="خصومات بنسبة 20% على الكورسات"
      />
    </div>
  );
}
