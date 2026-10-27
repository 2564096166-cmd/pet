import Image from 'next/image';
import Header from './Header';
import BookingForm from './BookingForm';

const services = [
  ['🫧', '舒缓洗护', '精选温和植物配方，细致清洁毛发与皮肤，让敏感宝宝也能放松享受。'],
  ['✂️', '造型美容', '根据品种、毛质和生活习惯设计造型，清爽好看，也方便日常打理。'],
  ['🧸', '贴心护理', '指甲、耳道、脚底毛等细节护理，全程轻柔操作，给它完整的洁净感。'],
] as const;

const plans = [
  { name: '轻盈洗护', price: '128', items: ['基础洗护与吹干', '指甲修剪', '耳道清洁', '香氛喷雾'] },
  { name: '全套焕新', price: '238', featured: true, items: ['轻盈洗护全部内容', '专业造型修剪', '脚底毛修整', '15 分钟舒缓梳毛'] },
  { name: '贵宾定制', price: '368', items: ['全套焕新全部内容', '皮肤状态评估', 'SPA 深层护理', '专属造型设计'] },
];

function Button({ children, primary = false }: { children: React.ReactNode; primary?: boolean }) {
  return <a className={`btn ${primary ? 'btn-primary' : 'btn-soft'}`} href="#booking">{children}</a>;
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="top">
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <div className="eyebrow">A little more love, every visit</div>
              <h1>让每一只毛孩子，都拥有一段<em>蓬松时光</em></h1>
              <p className="hero-copy">温柔洗护、专业美容，和一群真正懂宠物的人。我们把洗澡这件小事，做成它喜欢的日常。</p>
              <div className="button-row"><Button primary>预约一次洗护 <span>↗</span></Button><a className="btn btn-soft" href="#services">看看我们做什么</a></div>
              <div className="trust"><div className="avatar-stack"><span>🐶</span><span>🐱</span><span>🐾</span></div><span>已有 2,000+ 位宠物家长放心选择</span></div>
            </div>
            <div className="hero-photo"><Image src="/assets/reception-area.png" alt="Pawlish 宠物洗护店接待区" fill priority sizes="(max-width: 800px) 90vw, 50vw" /><div className="float-card top"><strong>今日好心情 ✨</strong><small>洗完澡的小可爱</small></div><div className="float-card bottom"><strong>4.9 / 5.0</strong><small>来自真实评价</small></div></div>
          </div>
        </section>

        <section className="section services" id="services"><div className="container"><div className="section-head"><h2 className="section-title">不止是洗澡<br />是一次被好好照顾</h2><p className="section-desc">从入店问候到吹干梳毛，每一个细节都为它的舒适感服务。</p></div><div className="service-grid">{services.map(([icon, title, description]) => <article className="service-card" key={title}><div className="service-icon">{icon}</div><h3>{title}</h3><p>{description}</p><a className="service-link" href="#booking">了解更多　→</a></article>)}</div></div></section>

        <section className="section story" id="story"><div className="container story-grid"><div className="story-image"><Image src="/assets/reception-area.png" alt="Pawlish 宠物洗护店空间" fill sizes="(max-width: 800px) 90vw, 40vw" /></div><div className="story-copy"><div className="eyebrow">Our little story</div><h2>我们相信，温柔是最好的技术。</h2><p>Pawlish 从一间 18 平米的小店开始。我们见过太多害怕洗澡的毛孩子，所以决定做一家不催促、不敷衍的宠物洗护点。</p><p>现在，我们依然坚持预约制、一对一观察和独立护理空间，只为了让它每一次回来，都觉得这里很熟悉。</p><div className="numbers"><div><strong>6 年</strong><span>专注宠物洗护</span></div><div><strong>12,800+</strong><span>次温柔护理</span></div><div><strong>0 差评</strong><span>我们的目标</span></div></div></div></div></section>

        <section className="section pricing" id="pricing"><div className="container"><div className="section-head"><h2 className="section-title">简单透明的价格</h2><p className="section-desc">第一次来？选择基础洗护就好。我们会根据现场毛发状态给出最合适的建议。</p></div><div className="price-grid">{plans.map((plan) => <article className={`price-card${plan.featured ? ' featured' : ''}`} key={plan.name}>{plan.featured && <span className="popular">最受欢迎</span>}<h3>{plan.name}</h3><div className="price">¥ {plan.price} <small>/ 次起</small></div><ul className="features">{plan.items.map((item) => <li key={item}>{item}</li>)}</ul><Button primary={plan.featured}>选择这个</Button></article>)}</div></div></section>

        <section className="section reviews" id="reviews"><div className="container"><div className="section-head"><h2 className="section-title">它们不会说话，<br />但家长会告诉我们。</h2><p className="section-desc">每一条反馈，都是我们继续把小事做好的理由。</p></div><div className="review-grid"><article className="review big"><div><div className="stars">★★★★★</div><p className="quote">“第一次洗完澡没有躲我，回家还一直在门口等着下次来。”</p></div><div className="person"><span className="person-avatar">🐶</span><span><b>Luna 的主人</b><br />金毛 · Luna</span></div></article><article className="review"><div className="stars">★★★★★</div><p className="quote">“店里很干净，小姐姐特别有耐心。”</p><div className="person"><span className="person-avatar">🐱</span><span>Momo 的主人</span></div></article><article className="review"><div className="stars">★★★★★</div><p className="quote">“造型剪得超可爱，回头率变高了！”</p><div className="person"><span className="person-avatar">🐾</span><span>Nori 的主人</span></div></article></div></div></section>

        <section className="section location-section" id="location"><div className="container location-grid"><div className="location-copy"><div className="eyebrow">Find us · 来见面吧</div><h2>在陕西北路，<br />等一只熟悉的小可爱。</h2><p>地图上的小爪印，就是 Pawlish 的位置。到店前可以提前预约，我们会为它留好一段安静、舒服的护理时间。</p><div className="location-address">📍 <span>上海市宜川路街道<br />陕西北路 1620 号</span></div></div><div className="map-card"><div className="map-frame"><Image src="/assets/store-map.png" alt="上海市宜川路街道陕西北路1620号附近地图" fill sizes="(max-width: 800px) 90vw, 60vw" /><div className="map-pin" aria-label="Pawlish 门店位置"><span>🐾</span></div><div className="map-label">Pawlish 宠物洗护<small>陕西北路 1620 号</small></div></div></div></div></section>

        <section className="section booking" id="booking"><div className="container booking-grid"><div className="booking-copy"><div className="eyebrow booking-eyebrow">Come say hi</div><h2>准备好让它焕新了吗？</h2><p>留下信息，我们会在营业时间内尽快联系你确认时间。第一次到店还有一份小礼物。</p><p>营业时间：09:30 — 20:00<br />地址：上海市宜川路街道 · 陕西北路 1620 号</p></div><BookingForm /></div></section>
      </main>
      <footer><div className="container footer-inner"><a className="logo" href="#top"><span className="logo-mark">🐾</span> pawlish</a><span>© 2024 Pawlish Pet Care · Made with love for every good boy.</span><span>小红书　Instagram　微信</span></div></footer>
    </>
  );
}
