
import React from 'react';
import type { Article } from './types';
import CTAButton from './components/ui/CTAButton';

export const COUPANG_LINK = 'https://link.coupang.com/a/cRMwO2';

export const NAV_LINKS = [
    { name: '홈', href: '#/' },
    { name: '전체 가이드', href: '#/articles' },
];

export const ARTICLES: Article[] = [
  {
    slug: 'guardplus-real-review',
    title: '가드플러스 호신용 스프레이 실사용 후기 및 장단점 분석',
    description: '가드플러스 호신용 스프레이를 직접 사용해본 솔직한 후기. 강력한 분사력부터 휴대성까지, 장점과 단점을 가감없이 분석합니다.',
    keywords: '가드플러스 후기, 호신용 스프레이 리뷰, self defense spray review',
    image: 'https://picsum.photos/1200/800?random=1',
    publishedDate: '2024-07-28',
    content: () => (
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h2>서론: 왜 가드플러스인가?</h2>
        <p>최근 흉흉한 소식이 많아지면서 스스로를 지킬 수단에 대한 관심이 높아지고 있습니다. 수많은 호신용품 중에서도 호신용 스프레이는 비살상적이면서도 즉각적인 효과를 볼 수 있어 가장 현실적인 대안으로 꼽힙니다. 오늘은 그중에서도 가장 주목받는 제품, '가드플러스'를 직접 사용해본 경험을 바탕으로 솔직한 후기를 공유하고자 합니다.</p>
        <img src="https://picsum.photos/1200/800?random=10" alt="가드플러스 제품 패키지" className="rounded-lg shadow-lg my-8" />
        
        <h2>장점 1: 압도적인 분사력과 사거리</h2>
        <p>가드플러스의 가장 큰 장점은 단연코 강력한 분사력입니다. 버튼을 누르는 순간, 마치 소화기처럼 직선으로 강력하게 뻗어 나가는 액체를 보고 놀랐습니다. 공식 스펙상 유효 사거리는 3~5m인데, 실제 테스트 결과 바람이 없는 환경에서는 4m 이상 무리 없이 도달했습니다. 이는 위협 상황에서 상대와 안전거리를 확보하며 대응할 수 있다는 점에서 엄청난 심리적 안정감을 줍니다.</p>
        
        <h2>장점 2: 컴팩트한 디자인과 뛰어난 휴대성</h2>
        <p>아무리 성능이 좋아도 휴대하기 불편하면 무용지물입니다. 가드플러스는 립스틱보다 약간 큰 크기로, 가방이나 주머니, 심지어 파우치에도 쏙 들어갑니다. 무게도 가벼워 일상적인 소지에 전혀 부담이 없습니다. 특히 손에 쥐었을 때의 그립감이 좋아 긴급 상황에서도 미끄러뜨릴 염려가 적어 보입니다.</p>

        <h2>단점: 오작동 방지 캡의 딜레마</h2>
        <p>안전을 위한 오작동 방지 캡이 있지만, 처음 사용하는 사람에게는 다소 빡빡하게 느껴질 수 있습니다. 긴급 상황에서 당황하면 캡을 제때 열지 못할 수도 있겠다는 생각이 들었습니다. 평소에 몇 번 연습해서 손에 익혀두는 과정이 반드시 필요합니다.</p>
        
        <h2>총평: '안심'을 구매하는 최고의 방법</h2>
        <p>가드플러스 호신용 스프레이는 단순한 호신용품을 넘어 '심리적 안정감'을 제공하는 훌륭한 도구입니다. 강력한 성능과 뛰어난 휴대성은 위협 상황에 대한 막연한 불안감을 상당 부분 해소해 줍니다. 몇 가지 아쉬운 점이 있지만, 이는 충분한 연습으로 극복 가능합니다. 나와 소중한 사람의 안전을 위해 투자할 수 있는 최고의 선택 중 하나라고 확신합니다.</p>
        <div className="my-10 text-center">
            <CTAButton link={COUPANG_LINK} text="가드플러스 최저가로 구매하기" isPrimary={true}/>
        </div>
      </div>
    ),
  },
  {
    slug: 'korea-legal-guide',
    title: '국내 호신용 스프레이 법적 규제 및 안전 사용 가이드',
    description: '호신용 스프레이 구매 및 소지, 사용은 합법일까요? 대한민국 법규를 기준으로 호신용 스프레이의 법적 지위와 안전한 사용법을 명확하게 알려드립니다.',
    keywords: '호신용 스프레이 법규, 가스총 소지허가, 정당방위',
    image: 'https://picsum.photos/1200/800?random=2',
    publishedDate: '2024-07-27',
    content: () => (
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h2>호신용 스프레이, 소지만 해도 불법일까?</h2>
        <p>결론부터 말하면, 가드플러스와 같은 대부분의 호신용 스프레이는 '총포·도검·화약류 등의 안전관리에 관한 법률'에 따른 '분사기'에 해당하며, 경찰서장의 허가 없이 구매하고 소지할 수 있습니다. 단, 모든 제품이 해당하는 것은 아니며, '압축가스'를 사용하는 일부 제품은 허가가 필요할 수 있습니다. 가드플러스는 허가 없이 소지 가능한 안전한 제품입니다.</p>
        
        <h2>사용의 조건: 정당방위</h2>
        <p>호신용 스프레이를 소지하는 것은 합법이지만, 사용하는 것에는 법적 책임이 따를 수 있습니다. 사용이 허용되는 유일한 경우는 '정당방위'가 성립될 때입니다. 형법 제21조에 따르면 정당방위는 '자기 또는 타인의 법익에 대한 현재의 부당한 침해를 방위하기 위한 행위'로 규정됩니다. 즉, 급박하고 부당한 위협이 있을 때 방어 목적으로만 사용해야 합니다.</p>
        <ul>
            <li><strong>현재성:</strong> 위협이 지금 당장 눈앞에서 일어나고 있어야 합니다.</li>
            <li><strong>부당성:</strong> 상대방의 공격이 법적으로 보호받을 수 없는 불법적인 침해여야 합니다.</li>
            <li><strong>상당성:</strong> 방어 행위가 침해의 정도를 초과해서는 안 됩니다. (과잉방위 주의)</li>
        </ul>
        
        <h2>안전 사용 수칙</h2>
        <p>법적인 문제를 떠나 안전한 사용을 위해 다음 사항을 반드시 숙지해야 합니다.</p>
        <ol>
            <li><strong>바람의 방향을 확인하세요:</strong> 역풍일 때 사용하면 내용물이 자신에게 향할 수 있습니다.</li>
            <li><strong>사람의 얼굴, 특히 눈을 조준하세요:</strong> 가장 효과적이고 즉각적인 제압이 가능합니다.</li>
            <li><strong>사용 후 즉시 현장을 벗어나세요:</strong> 상대가 일시적으로 무력화된 틈을 타 안전한 곳으로 대피하고 즉시 112에 신고해야 합니다.</li>
            <li><strong>절대 장난으로 사용하지 마세요:</strong> 장난으로 사용 시 특수폭행죄 등으로 처벌받을 수 있습니다.</li>
        </ol>
        <div className="my-10 text-center">
            <CTAButton link={COUPANG_LINK} text="안전 인증! 가드플러스 구매하기" isPrimary={true}/>
        </div>
      </div>
    ),
  },
  {
    slug: 'urban-defense-tips',
    title: '여성/야간 귀가자를 위한 도시 방어 팁 5가지',
    description: '어두운 밤길, 혼자 귀가할 때 불안하신가요? 가드플러스 호신용 스프레이와 함께 당신의 안전을 지켜줄 5가지 필수 도시 방어 팁을 소개합니다.',
    keywords: '여성 안전, 야간 귀가, 범죄 예방, 도시 방어',
    image: 'https://picsum.photos/1200/800?random=3',
    publishedDate: '2024-07-26',
    content: () => (
        <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2>도시의 밤, 더 이상 두려워하지 마세요.</h2>
            <p>통계에 따르면 대부분의 강력 범죄는 인적이 드문 야간에 발생합니다. 특히 여성이나 혼자 귀가하는 사람들은 범죄의 표적이 되기 쉽습니다. 하지만 몇 가지 수칙만 지킨다면 위험을 크게 줄일 수 있습니다. 가드플러스와 함께 당신의 안전한 귀갓길을 위한 팁을 알아보세요.</p>
            <img src="https://picsum.photos/1200/800?random=11" alt="밤 거리를 걷는 여성" className="rounded-lg shadow-lg my-8" />
            
            <h3>1. '스마트폰은 잠시 주머니에' - 주변 경계</h3>
            <p>귀가길에 이어폰을 끼고 있거나 스마트폰에 집중하는 것은 주변 상황에 대한 인지 능력을 크게 떨어뜨립니다. 잠재적 위협을 미리 감지할 수 없게 되므로, 인적이 드문 곳에서는 전방과 후방을 수시로 살피며 걷는 습관을 들이는 것이 중요합니다.</p>
            
            <h3>2. '가드플러스는 손에' - 즉각 대응 태세</h3>
            <p>호신용 스프레이는 가방 깊숙이 있을 때가 아니라, 손에 쥐고 있을 때 비로소 제 역할을 합니다. 위험이 감지되는 구간에 들어서면 자연스럽게 가드플러스를 손에 쥐고 언제든 사용할 수 있도록 준비하세요. 이것만으로도 심리적 안정감을 얻고, 범죄자에게는 '쉽지 않은 상대'라는 인식을 줄 수 있습니다.</p>

            <h3>3. '밝고 넓은 길로' - 경로 선택</h3>
            <p>조금 돌아가더라도 CCTV가 많고, 가로등이 밝으며, 유동인구가 있는 넓은 길을 선택하는 것이 기본입니다. 평소에 자신의 주 귀가 경로 중 여러 대안을 파악해두고, 시간대나 상황에 따라 가장 안전한 길을 선택하는 지혜가 필요합니다.</p>
            
            <h3>4. '가족/지인과 통화' - 존재감 알리기</h3>
            <p>혼자 걷는 것이 불안하다면, 가족이나 지인과 통화를 하며 걷는 것이 좋습니다. 자신의 위치와 상황을 계속해서 외부에 알리고 있다는 인상을 주어 범죄자의 접근을 심리적으로 차단하는 효과가 있습니다.</p>
            
            <h3>5. '위협을 느끼면 즉시' - 뛰고, 소리치고, 사용하라</h3>
            <p>누군가 따라온다는 느낌이 들거나 직감적으로 위험을 감지했다면 망설이지 마세요. 즉시 사람이 많은 곳으로 뛰고, "불이야!"라고 크게 외치세요. ("살려주세요"보다 효과적입니다.) 그리고 최후의 상황에서는 망설임 없이 가드플러스를 사용한 후 안전을 확보해야 합니다.</p>
            
            <div className="my-10 text-center">
                <CTAButton link={COUPANG_LINK} text="나의 안전을 위한 필수품 구매하기" isPrimary={true}/>
            </div>
        </div>
    ),
  },
  {
    slug: 'faq',
    title: '초보자를 위한 호신용 스프레이 Q&A: 모든 궁금증 해결',
    description: '호신용 스프레이, 처음이라 궁금한 게 많으시죠? 구매부터 사용, 보관까지 가장 자주 묻는 질문들을 모아 명쾌하게 답변해 드립니다.',
    keywords: '호신용 스프레이 Q&A, 가드플러스 질문, pepper spray faq',
    image: 'https://picsum.photos/1200/800?random=4',
    publishedDate: '2024-07-25',
    content: () => (
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h2>자주 묻는 질문 (FAQ)</h2>
        <div className="space-y-6">
            <div>
                <h3 className="font-semibold">Q: 호신용 스프레이를 사용하면 상대방이 얼마나 고통스러운가요? 실명될 수도 있나요?</h3>
                <p>A: 가드플러스에 사용되는 OC(올레오레진 캡사이신) 성분은 눈, 코, 피부에 극심한 통증과 일시적인 시력 상실, 호흡 곤란을 유발합니다. 이는 상대방을 즉각적으로 무력화시키기에 충분한 고통입니다. 하지만 이는 일시적인 효과이며, 적절한 조치를 취하면 영구적인 손상(실명 등)을 유발하지 않는 안전한 성분입니다. 효과는 보통 30분에서 1시간 정도 지속됩니다.</p>
            </div>
            <div>
                <h3 className="font-semibold">Q: 유효기간은 얼마나 되고, 어떻게 보관해야 하나요?</h3>
                <p>A: 가드플러스의 유효기간은 제조일로부터 3년입니다. 제품 하단 또는 패키지에 명시된 유효기간을 꼭 확인하세요. 보관 시에는 직사광선과 고온을 피해야 합니다. 특히 여름철 차량 내부에 보관하는 것은 제품 변질 및 폭발의 위험이 있으므로 절대 금물입니다.</p>
            </div>
            <div>
                <h3 className="font-semibold">Q: 비행기에 가지고 탈 수 있나요? 해외여행 시 소지는요?</h3>
                <p>A: 항공보안법상 호신용 스프레이는 기내 반입이 금지된 물품입니다. 위탁 수하물로 부치는 것 또한 항공사 및 국가별 규정이 달라 사전에 반드시 확인이 필요합니다. 대부분의 국가에서 불가능하다고 생각하는 것이 안전합니다. 해외 여행 시에는 현지 법규를 반드시 확인해야 하며, 많은 국가에서 소지 자체가 불법일 수 있으니 주의가 필요합니다.</p>
            </div>
            <div>
                <h3 className="font-semibold">Q: 바람이 많이 부는 날에도 효과가 있나요?</h3>
                <p>A: 가드플러스는 액체 분사(스트림) 방식이라 바람의 영향을 비교적 덜 받습니다. 하지만 강한 역풍이 부는 상황에서는 분사액이 사용자에게 날아올 수 있으므로, 항상 바람의 방향을 등지고 사용하는 것이 중요합니다.</p>
            </div>
        </div>
        <div className="my-10 text-center">
            <CTAButton link={COUPANG_LINK} text="더 궁금한 점은? 구매 후 직접 확인!" isPrimary={true}/>
        </div>
      </div>
    ),
  },
  {
    slug: 'compare-models',
    title: '타사 제품 vs 가드플러스: 무엇이 다른가? 성능 비교 분석',
    description: '시중에 판매되는 다양한 호신용 스프레이와 가드플러스를 분사 방식, 성분, 휴대성 등 주요 항목별로 비교하여 최고의 제품을 선택할 수 있도록 돕습니다.',
    keywords: '호신용 스프레이 비교, 가드플러스 성능, pepper spray comparison',
    image: 'https://picsum.photos/1200/800?random=5',
    publishedDate: '2024-07-24',
    content: () => (
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h2>최고의 선택을 위한 비교 가이드</h2>
        <p>호신용 스프레이 구매를 고려할 때, 다양한 제품들 사이에서 어떤 것을 선택해야 할지 막막할 수 있습니다. 가드플러스가 다른 제품들과 비교하여 어떤 강점을 가지고 있는지 객관적인 지표로 비교 분석해 드립니다.</p>
        
        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr>
                        <th className="border-b-2 p-4">항목</th>
                        <th className="border-b-2 p-4 text-blue-500 font-bold">가드플러스</th>
                        <th className="border-b-2 p-4">일반 저가형 제품</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border-b p-4 font-semibold">분사 방식</td>
                        <td className="border-b p-4">액체 스트림 (직선)</td>
                        <td className="border-b p-4">안개/분무형 (원뿔)</td>
                    </tr>
                    <tr>
                        <td className="border-b p-4 font-semibold">장점</td>
                        <td className="border-b p-4">정확도 높음, 바람 영향 적음, 실내 사용 가능</td>
                        <td className="border-b p-4">조준 쉬움</td>
                    </tr>
                    <tr>
                        <td className="border-b p-4 font-semibold">단점</td>
                        <td className="border-b p-4">정확한 조준 필요</td>
                        <td className="border-b p-4">바람에 취약, 주변 오염 가능성</td>
                    </tr>
                    <tr>
                        <td className="border-b p-4 font-semibold">유효 사거리</td>
                        <td className="border-b p-4">3 ~ 5m</td>
                        <td className="border-b p-4">1 ~ 2m</td>
                    </tr>
                    <tr>
                        <td className="border-b p-4 font-semibold">주요 성분</td>
                        <td className="border-b p-4">고농축 OC 가스 + 식별용 UV 염료</td>
                        <td className="border-b p-4">저농축 OC 가스 또는 겨자추출물</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h2>결론: 왜 가드플러스가 우월한가?</h2>
        <p>표에서 볼 수 있듯이, 가드플러스는 가장 중요한 '유효 사거리'와 '바람 저항성'에서 압도적인 우위를 보입니다. 실제 위협 상황은 예측 불가능한 야외에서 발생할 확률이 높다는 점을 고려할 때, 이는 생존과 직결되는 중요한 차이입니다. 또한 식별용 UV 염료는 범인 검거에 결정적인 단서를 제공할 수 있습니다. 당신의 안전을 위한 단 하나의 선택을 해야 한다면, 고민할 이유가 없습니다.</p>
        <div className="my-10 text-center">
            <CTAButton link={COUPANG_LINK} text="성능으로 증명된 가드플러스 선택하기" isPrimary={true}/>
        </div>
      </div>
    )
  }
];
