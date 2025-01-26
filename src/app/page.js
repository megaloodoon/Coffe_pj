import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";


export default function Home() {
  return (
    <div>
      <header className="hero">
        <div>
          <h1>به دنیای قهوه خوش آمدید</h1>
          <p>کشف بهترین قهوه‌ها و داستان‌های جذاب پشت آنها</p>
          <div>
            <button className="btn-primary">محصولات ما</button>
            <button className="btn-secondary">درباره ما</button>
          </div>
        </div>
      </header>

      <section className="introduction">
        <h2>درباره قهوه و سفر ما</h2>
        <p>ما اینجا هستیم تا شما را به دنیای شگفت‌انگیز قهوه ببریم. از تاریخچه آن گرفته تا انواع مختلف و فوایدش.</p>
      </section>

      <section className="highlights">
        <div className="highlight">
          <Link href={"/pages/History"}><h3>تاریخچه قهوه</h3></Link>
          <p>داستان قهوه از زمان‌های قدیم تا امروز.</p>
        </div>
        <div className="highlight">
          <Link href={'/pages/Types'}> <h3>انواع قهوه</h3></Link>
          <p>کشف طعم‌های مختلف قهوه از سراسر جهان.</p>
        </div>
        <div className="highlight">
          <Link href={"/pages/Benefits"}><h3>فواید قهوه</h3></Link>
          <p>بدانید که قهوه چگونه می‌تواند به سلامتی شما کمک کند.</p>
        </div>
      </section>

      <section className="blog">
        <h2>آخرین مقالات</h2>
        <p>مطالعه آخرین مقالات و اخبار مرتبط با قهوه.</p>
      </section>

      <footer className="footer">
        <p>© 2025 قهوه‌خانه. همه حقوق محفوظ است.</p>
      </footer>
    </div>
  );
};
