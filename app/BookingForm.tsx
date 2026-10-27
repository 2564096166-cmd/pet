'use client';

import { FormEvent, useState } from 'react';

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label>你的称呼<input required type="text" placeholder="例如：小林" /></label>
      <label>联系电话<input required type="tel" placeholder="138 0000 0000" /></label>
      <label>宠物类型<select defaultValue="狗狗"><option>狗狗</option><option>猫咪</option><option>其他小动物</option></select></label>
      <label>希望日期<input required type="date" /></label>
      <label className="full">想预约的服务<select defaultValue="轻盈洗护"><option>轻盈洗护</option><option>全套焕新</option><option>贵宾定制</option><option>还不确定，到店咨询</option></select></label>
      <button className="btn btn-primary" type="submit" disabled={submitted}>
        {submitted ? '已收到，我们会尽快联系你 ✓' : '提交预约申请　↗'}
      </button>
    </form>
  );
}
