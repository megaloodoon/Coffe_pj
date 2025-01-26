// import { redirect } from "next/navigation";

// export default async function Singlepost({ params }) {

//     const id = (await params).id
//     const data = await fetch(`/Types.jason/${id}`)
//     let post = await data.json()

//     if (data.ok) {
//         return (
//             <div>
//                 <img src={post.image}>
//                     <h2>{post.name}</h2>
//                     <p>{post.Details}</p>
//             </div>)
//         }
//      else {
//             redirect('/pages/Types')
//         }

//   }

// import { redirect } from "next/navigation";

// export default async function Singlepost({ params }) {
//     const id = params.id;
//     const data = await fetch(`/Types.json/${id}`);

//     if (data.ok) {
//         const post = await data.json();
//         return (
//             <div>
//                 <img src={post.image} alt={post.name} />
//                 <h2>{post.name}</h2>
//                 <p>{post.Details}</p>
//             </div>
//         );
//     } else {
//         redirect('/pages/Types');
//     }
// }


// "use client"; // استفاده از این خط برای اجرای کد فقط در سمت کلاینت

// import { useRouter } from 'next/router';
// import { useEffect, useState } from 'react';

// export default function CoffeeDetails() {
//     const router = useRouter();
//     const [coffee, setCoffee] = useState(null);

//     useEffect(() => {
//         if (!router.isReady) return; // اطمینان از آماده بودن router

//         const { id } = router.query;
//         fetch(`/Types.json`)
//             .then(response => response.json())
//             .then(data => {
//                 const selectedCoffee = data.find(item => item.id.toString() === id);
//                 setCoffee(selectedCoffee);
//             });
//     }, [router.isReady]);

//     if (!coffee) {
//         return <div>Loading...</div>; // نمایش متن بارگذاری تا زمانی که اطلاعات دریافت شود
//     }

//     return (
//         <div>
//             <h1>{coffee.name}</h1>
//             <img src={coffee.image} alt={coffee.name} />
//             <p>{coffee.Details}</p>
//         </div>
//     );
// }

// import { redirect } from 'next/navigation';

// export default async function CoffeeDetails({ params }) {
//     const { id } = params; // استخراج id از params

//     // ابتدا تلاش برای دریافت داده‌ها از فایل JSON
//     let coffeeList = [];

//     try {
//         const response = await fetch('/Types.json');

//         // اگر درخواست موفق باشد، داده‌ها را پارس کنید
//         if (!response.ok) {
//             throw new Error('Failed to fetch');
//         }
//         coffeeList = await response.json();

//         // در صورتی که داده‌ها نتایج دریافت نکردند، آن‌ها را از کش بخوانید (در حالت آفلاین)
//         if (!coffeeList.length) {
//             const cache = await caches.open('my-cache');
//             const cachedResponse = await cache.match('/Types.json');
//             if (cachedResponse) {
//                 coffeeList = await cachedResponse.json();
//             }
//         }
//     } catch (error) {
//         console.error('Error fetching or caching data:', error);

//         // اگر درخواست به‌صورت آنلاین یا آفلاین ناموفق بود، می‌توانیم داده‌ها را از کش بخوانیم
//         const cache = await caches.open('my-cache');
//         const cachedResponse = await cache.match('/Types.json');
//         if (cachedResponse) {
//             coffeeList = await cachedResponse.json();
//         }
//     }

//     // پیدا کردن قهوه مطابق با id
//     const coffee = coffeeList.find(item => item.id.toString() === id);

//     if (!coffee) {
//         // در صورتی که آیتم پیدا نشود به صفحه دیگری منتقل شوید
//         redirect('/pages/NotFound');
//         return null;
//     }

//     return (
//         <div>
//             <h1>{coffee.name}</h1>
//             <img src={coffee.image} alt={coffee.name} />
//             <p>{coffee.Details}</p>
//         </div>
//     );
// }
// این تابع برای بارگذاری داده‌ها استفاده می‌شود

import styles from '@/app/page.module.css';
import Link from 'next/link';

async function fetchCoffeeData(id) {
    const coffeeData = [
        { "id": 1, "name": "Arabica", "image": "/image/Arabica.jpg", "Details": "دانه قهوه عربیکا را به وفور می‌توان در نقاط مختلف جهان مانند آمریکای شمالی، برزیل و ویتنام یافت. افرادی که مایل به دم کردن قهوه خود هستند، معمولا عربیکا را انتخاب می‌کنند که طعمی شیرین و ملایم دارد. این نوع از گیاه قهوه نیازمند توجه بیشتری است تا شیرینی‌اش حفظ شود و بنابراین با قیمت بالاتری هم به فروش می‌رسد. عربیکا ضمنا نسبت به دیگر دانه‌ها مقادیری متوسط از کافئین دارد." },


        { "id": 2, "name": "Robusta", "image": "/image/Robusta.jpg", "Details": "دانه‌های قهوه روبوستا ارزان‌قیمت‌تر از عربیکا هستند، زیرا با سهولت بیشتری پرورش می‌یابند. اما نباید گول این برچسب قیمت ارزان‌تر را خورد، زیرا روبوستا مقادیری بالایی از کافئین را در بر می‌گیرد و می‌تواند صبح شما را زیر و رو کند. روبوستا در اروپا، آفریقا و خاورمیانه محبوب است. این دانه طعمی قوی و تلخ دارد و معمولا از آن در قهوه‌های فوری یا نوشیدنی‌های اسپرسو استفاده می‌شود." },


        { "id": 3, "name": "Liberica", "image": "/image/Liberica.jpg", "Details": "دانه لیبریکا که نادرتر از هر دانه دیگری است،‌ به قوی بودن شهرت دارد. این نوع از قهوه که به صورت بومی در مناطق مرکزی و غربی آفریقا کشت می‌شود، طعمی برجسته و دودی را زیر زبان شما می‌آورد. از آن‌جایی که این دانه قهوه برای رشد به آب‌وهوای گرم و شرجی نیاز دارد، در ابعاد آنقدرها کلان تولید نمی‌شود. اگر روزی روزگاری راه‌تان به اندونزی یا فیلیپین افتاد، حتما خودتان را به یک لیوان قهوه لیبریکای دودی و آجیلی مهمان کنید." },


        { "id": 4, "name": "Excelsa", "image": "/image/Excelsa.jpg", "Details": "دانه‌های قهوه اکسلسا در واقع متغیری از همان دانه لیبریکا هستند و عمدتا در آسیای جنوب شرقی پرورش می‌یابند. این گیاه در ارتفاعات به بهترین شکل پرورش پیدا می‌کند و قامت خود آن به ۶ الی ۹ متر می‌رسد. اکسلسا طعمی ترش و میوه‌ای را به لیوان قهوه شما می‌آورد و معمولا با دانه‌های دیگر ترکیب می‌شود تا طعمی غنی‌تر به دست آید." }
    ];

    return coffeeData.find(coffee => coffee.id === parseInt(id));
}

export default async function CoffeeDetail({ params }) {
    const coffee = await fetchCoffeeData(params.id); // بارگذاری اطلاعات قهوه

    if (!coffee) {
        return <div>Page not found</div>; // اگر قهوه‌ای پیدا نشد
    }

    return (
        <div className="coffee-detail">
            <img src={coffee.image} alt={coffee.name} />
            <h1>{coffee.name}</h1>
            <p>{coffee.Details}</p>
            <Link className='button-link' href={'/pages/Types'} > بازگشت به صفحه قبل </Link>
        </div>
    );
}

// این تابع برای تولید صفحات داینامیک استفاده می‌شود
export function generateStaticParams() {
    return [
        { id: '1' },
        { id: '2' },
        { id: '3' },
        { id: '4' }
    ];
}
