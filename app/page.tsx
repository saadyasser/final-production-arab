import "./page.module.css";
import Banner from "@/components/Banner";

export default function Home() {
  const startAt = "2022-10-22T12:26:49.668Z";
  const endAt = "2022-10-28T12:26:49.668Z";

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
