
export default function CoffeeTypes() {
    return (
        <div className="coffee-container">
            <h1>انواع سرو قهوه</h1>

            <h3>در اینجا به مدل های مختلف سرو قهوه میپردازیم </h3>
            <div className="coffee-types">
                <div className="coffee-type">
                    <h2>اسپرسو</h2>
                    <p>یک نوع قهوه غلیظ که با فشار آب داغ از مقدار نرده شده از دانه های قهوه برانده می شود.</p>
                    <img src={"/image/Types/espresso.jpg"} alt="" />
                </div>

                <div className="coffee-type">
                    <h2>لاته</h2>
                    <p>اسپرسو با شیر بخار داده و مقدار کمی فوم شیر در روی آن مخلوط می شود.</p>
                    <img src={"/image/Types/latte.jpg"} alt="" />
                </div>

                <div className="coffee-type">
                    <h2>کاپوچینو</h2>
                    <p>اسپرسو با شیر بخار داده و فوم شیر مرده می شود.</p>
                    <img src={"/image/Types/Cappuccino.jpg"} alt="" />
                </div>

                <div className="coffee-type">
                    <h2>آمریکانو</h2>
                    <p>اسپرسو مخلوط با آب می شود و طعم ملایم تری نسبت به اسپرسو دارد.</p>
                    <img src={"/image/Types/Americano2.jpg"} alt="" />
                </div>

                <div className="coffee-type">
                    <h2>قهوه یخی</h2>
                    <p>قهوه سرد که می تواند همراه با شیر یا شکر سرو شود.</p>
                    <img src={"/image/Types/iced-coffee.jpg"} alt="" />
                </div>

                <div className="coffee-type">
                    <h2>قهوه ترک</h2>
                    <p>قهوه ترک با روش متفاوت ای در قوری های خاص و با فشار بسیار کم آماده می شود.</p>
                    <img src={"/image/Types/turkish.jpg"} alt="" />
                </div>

                <div className="coffee-type">
                    <h2>موکا</h2>
                    <p>ترکیب اسپرسو با شکلات و شیر بخار داده شده، مشابه به کاپوچینو ولی با طعم شکلات.</p>
                    <img src={"/image/Types/mocha.jpg"} alt="" />
                </div>

                <div className="coffee-type">
                    <h2>فلت وایت</h2>
                    <p>شبیه به لاتۀ است، اما نسبت اسپرسو به شیر بیشتر است و شیر بخار داده شده نرم‌تر است.</p>
                    <img src={"/image/Types/flatwhite.jpg"} alt="" />
                </div>

                <div className="coffee-type">
                    <h2>آیرش کافی</h2>
                    <p>قهوه اسپرسو با ویسکی ایرلندی و یک لایه خامه روی آن.</p>
                    <img src={"/image/Types/irishcoffee.jpg"} alt="" />
                </div>

                <div className="coffee-type">
                    <h2>کورتادو</h2>
                    <p>ترکیب اسپرسو با شیر به میزان برابر که طعمی متعادل به شما می‌دهد.</p>
                    <img src={"/image/Types/cortado.jpg"} alt="" />
                </div>

                <div className="coffee-type">
                    <h2>آفگادو</h2>
                    <p>یک توپ بستنی با شات اسپرسو داغ روی آن.</p>
                    <img src={"/image/Types/affogato.jpg"} alt="" />
                </div>

                <div className="coffee-type">
                    <h2>کافه بومبون</h2>
                    <p>اسپرسو با شیر تغلیظ‌شده، یک طعم شیرین و غنی دارد.</p>
                    <img src={"/image/Types/cafebonbon.jpg"} alt="" />
                </div>


                <div className="coffee-type">
                    <h2>کافه کلد برو</h2>
                    <p>قهوه‌ای که با آب سرد به مدت طولانی (بین 12 تا 24 ساعت) دم می‌شود، طعم ملایم‌تر و کافئین بالاتری دارد.</p>
                    <img src={"/image/Types/coldbrew.jpg"} alt="" />
                </div>

                <div className="coffee-type">
                    <h2> کارامل ماکیاتو </h2>
                    <p>
                        یکی از محبوب‌ترین نوشیدنی‌های قهوه است که ترکیبی از اسپرسو، شیر گرم، وانیل و سس کارامل است. این نوشیدنی هم طعم شیرینی کارامل رو داره و هم تلخی ملایم اسپرسو که با هم یه تعادل لذت‌بخش ایجاد می‌کنن.
                    </p>
                    <img src={"/image/Types/Caramel-Macchiato1.jpg"} alt="" />
                </div>

                <div className="coffee-type">
                    <h2>ریسترتو</h2>
                    <p>نسخه غلیظ‌تر و کوتاه‌تر اسپرسو با طعم شدیدتر. این نوع سرو برای عاشقان واقعی قهوه، تجربه‌ای خاص و متفاوته.</p>
                    <img src={"/image/Types/Ristretto.jpg"} alt="" />
                </div>

            </div>
        </div>
    );
}
