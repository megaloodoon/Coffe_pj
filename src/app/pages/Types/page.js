// import Link from 'next/link';

// export default function CoffeeList() {

//     const data =  fetch('/Types.json')
//     const post =  data.json()




//     return (
//         <div className="coffee-list">
//             {post.map(coffee => (
//                 <div key={coffee.id} className="coffee-item">
//                     <img src={coffee.image} alt={coffee.name} />
//                     <h3>{coffee.name}</h3>
//                     <Link href={`/coffee/${coffee.id}`}>View Details</Link>
//                 </div>
//             ))}
//         </div>
//     );
// }


// -------------------------------------------------------


// "use client";

// import { useState, useEffect } from 'react';
// import Link from 'next/link';

// export default function CoffeeList() {
//     const [post, setPost] = useState([]);

//     useEffect(() => {
//         async function fetchData() {
//             const data = await fetch('/Types.json');
//             const json = await data.json();
//             setPost(json);
//         }
//         fetchData();
//     }, []);

//     return (
//         <div className="coffee-list">
//             {post.map(coffee => (
//                 <div key={coffee.id} className="coffee-item">
//                     <img src={coffee.image} alt={coffee.name} />
//                     <h3>{coffee.name}</h3>
//                     <p>{coffee.Details}</p>
//                     <Link href={`/pages/Types/${coffee.id}`}>View Details</Link>
//                 </div>
//             ))}
//         </div>
//     );
// }


// "use client";

// import { useState, useEffect } from 'react';
// import Link from 'next/link';

// export default function CoffeeList() {
//     const [post, setPost] = useState([
//         {
//             "id": 1,
//             "name": "Arabica",
//             "image": "/image/Arabica.jpg",
//             "Details": "دانه قهوه عربیکا را به وفور می‌توان در نقاط مختلف جهان مانند آمریکای شمالی، برزیل و ویتنام یافت. افرادی که مایل به دم کردن قهوه خود هستند، معمولا عربیکا را انتخاب می‌کنند که طعمی شیرین و ملایم دارد. این نوع از گیاه قهوه نیازمند توجه بیشتری است تا شیرینی‌اش حفظ شود و بنابراین با قیمت بالاتری هم به فروش می‌رسد. عربیکا ضمنا نسبت به دیگر دانه‌ها مقادیری متوسط از کافئین دارد."
//         },
//         {
//             "id": 2,
//             "name": "Robusta",
//             "image": "/image/Robusta.jpg",
//             "Details": "دانه‌های قهوه روبوستا ارزان‌قیمت‌تر از عربیکا هستند، زیرا با سهولت بیشتری پرورش می‌یابند. اما نباید گول این برچسب قیمت ارزان‌تر را خورد، زیرا روبوستا مقادیری بالایی از کافئین را در بر می‌گیرد و می‌تواند صبح شما را زیر و رو کند. روبوستا در اروپا، آفریقا و خاورمیانه محبوب است. این دانه طعمی قوی و تلخ دارد و معمولا از آن در قهوه‌های فوری یا نوشیدنی‌های اسپرسو استفاده می‌شود."
//         },
//         {
//             "id": 3,
//             "name": "Liberica",
//             "image": "/image/Liberica.jpg",
//             "Details": "دانه لیبریکا که نادرتر از هر دانه دیگری است،‌ به قوی بودن شهرت دارد. این نوع از قهوه که به صورت بومی در مناطق مرکزی و غربی آفریقا کشت می‌شود، طعمی برجسته و دودی را زیر زبان شما می‌آورد. از آن‌جایی که این دانه قهوه برای رشد به آب‌وهوای گرم و شرجی نیاز دارد، در ابعاد آنقدرها کلان تولید نمی‌شود. اگر روزی روزگاری راه‌تان به اندونزی یا فیلیپین افتاد، حتما خودتان را به یک لیوان قهوه لیبریکای دودی و آجیلی مهمان کنید."
//         },
//         {
//             "id": 4,
//             "name": "Excelsa",
//             "image": "/image/Excelsa.jpg",
//             "Details": "دانه‌های قهوه اکسلسا در واقع متغیری از همان دانه لیبریکا هستند و عمدتا در آسیای جنوب شرقی پرورش می‌یابند. این گیاه در ارتفاعات به بهترین شکل پرورش پیدا می‌کند و قامت خود آن به ۶ الی ۹ متر می‌رسد. اکسلسا طعمی ترش و میوه‌ای را به لیوان قهوه شما می‌آورد و معمولا با دانه‌های دیگر ترکیب می‌شود تا طعمی غنی‌تر به دست آید."
//         }
//     ]);

//     return (
//         <div className="coffee-list">
//             {post.map(coffee => (
//                 <div key={coffee.id} className="coffee-item">
//                     <img src={coffee.image} alt={coffee.name} />
//                     <h3>{coffee.name}</h3>
//                     <p>{coffee.Details}</p>
//                     <Link href={`/pages/Types/${coffee.id}`}>View Details</Link>
//                 </div>
//             ))}
//         </div>
//     );
// }


"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from '@/app/page.module.css'; // Import the CSS module

export default function CoffeeList() {
    const [post, setPost] = useState([
        {
            "id": 1,
            "name": "Arabica",
            "image": "/image/Arabica.jpg",
            "Details": "دانه قهوه عربیکا را به وفور می‌توان در نقاط مختلف جهان ..."
        },
        {
            "id": 2,
            "name": "Robusta",
            "image": "/image/Robusta.jpg",
            "Details": "دانه‌های قهوه روبوستا ارزان‌ قیمت‌ تر از عربیکا هستند ..."
        },
        {
            "id": 3,
            "name": "Liberica",
            "image": "/image/Liberica.jpg",
            "Details": "دانه لیبریکا که نادرتر از هر دانه دیگری است ..."
        },
        {
            "id": 4,
            "name": "Excelsa",
            "image": "/image/Excelsa.jpg",
            "Details": "دانه‌های قهوه اکسلسا در واقع متغیری از همان دانه لیبریکا هستند ..."
        }
    ]);

    return (
        <div className={styles.coffeeList}>

            {post.map(coffee => (
                <div key={coffee.id} className={styles.coffeeItem}>
                    <img className={styles.coffeeImage} src={coffee.image} alt={coffee.name} />
                    <div className={styles.textContent}>
                        <h3 className={styles.coffeeName}>{coffee.name}</h3>
                        <p className={styles.coffeeDetails}>{coffee.Details}</p>
                        <Link className={styles.link} href={`/pages/Types/${coffee.id}`}> ادامه جزئیات</Link>
                    </div>
                </div>
            ))}
        </div>
    );
}
