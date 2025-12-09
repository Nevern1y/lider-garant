"use client";
import FadeIn from "@/components/FadeIn";
import BankLogosSlider from "@/components/BankLogosSlider";
import Image from "next/image";
import ManagerCTASection from "@/components/ManagerCTASection";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { useState } from "react";
import Link from "next/link";
import GuaranteeHowItWorksSection from "@/components/guarantee-how-it-works";
import { CheckCheck, Banknote } from "lucide-react";
import {
  ShieldCheck,
  FileCheck,
  Building2,
  BadgeCheck,
  Lock,
  Handshake,
} from "lucide-react";
import TopApplicationForm from "@/components/topApplicationForm";
import GuaranteeCalculator from "@/components/GuaranteeCalculator";
import WhyUs from "@/components/Why-us";

const guarantees = [
  {
    icon: ShieldCheck,
    title: "Банковская гарантия на обеспечение заявки участия в тендере",
    desc: "Вид банковской гарантии, подтверждающий добросовестность поставщика и его намерения подписать контракт,в случае победы в тендере. Выдача БГ день в день.",
    features: ["44-ФЗ", "223-ФЗ", "Коммерческая"],
  },
  {
    icon: FileCheck,
    title: "Банковская гарантия на обеспечение исполнения контракта ",
    desc: "Вид Банковской гарантирующая заказчику исполнения контракта и обеспечивает выполнение обязательств, в случае, если победитель тендера не выполнит условия контракта.БГ предоставляется до или сразу после заключения контракта, до 2 млрд.",
    features: ["44-ФЗ", "223-ФЗ", "Коммерческая"],
  },
  {
    icon: Building2,
    title: "Банковская гарантия на аванс",
    desc: "Это обязательство Гарантия возврата аванса, документ, выданный банком в пользу заказчика, для подтверждения, что исполнитель контракта гарантированно вернёт аванс в случае отказа от исполнения обязательств. Обычно выдается банком на всю сумму авансового платежа и может уменьшаться по мере поставки товара,выполнения работы, оказания услуги, до 2 млрд.",
    features: ["223-ФЗ", "Коммерческая"],
  },
  {
    icon: BadgeCheck,
    title: "Банковская гарантия обеспечения гарантийных обязательств",
    desc: "Этот вид БГ обеспечивает гарантии качества товара, работ или услуг на гарантийный срок.Исполнитель предоставляет её заказчику для подтверждения гарантийных обязательств по качеству,без ограничений по сроку.",
    features: ["44-ФЗ", "223-ФЗ", "Коммерческая"],
  },
  {
    icon: Lock,
    title: "Банковские гарантии налоговые",
    desc: "Это документ, который обеспечивает оплату пошлин налогоплательщиком перед налоговыми органами. Некоторые виды налоговой БГ: банковская гарантия оплаты акцизов; банковская гарантия возврата возмещённого НДС;банковская гарантия гарантия по отсрочке платежей в ФСС и налоговую службу",
    features: ["Коммерческая"],
  },
  {
    icon: Handshake,
    title: "Банковские гарантии таможенные",
    desc: "Вид БГ, обеспечивающий выплату банком в пользу таможенных органов, в случае не выполнения компанией своих обязательств по уплате таможенных пошлин, сборов, и других обязательных платежей при ввозе или вывозе товаров.",
    features: ["Коммерческая"],
  },
];
export default function BankGuaranteePage() {
  const TOTAL_OFFERS = 25;
  const [visibleOffers, setVisibleOffers] = useState(6);
  const [visibleDeals] = useState(12);

  const banks = [
    "Реалист",
    "Банк Казани",
    "Абсолют",
    "МТС",
    "Зенит",
    "Альфа",
    "ПСБ",
    "Газпромбанк",
    "Уралсиб",
    "Металлинвестбанк",
    "Совкомбанк",
    "МКБ",
    "Банк Левобережный",
    "Руснарбанк",
    "СГБ",
    "МСП",
    "ТКБ",
    "Санкт-Петербург",
    "Тиньков",
    "Ингострахбанк",
    "СДМ Банк",
    "ЛокоБанк",
    "Ак Барс",
    "Алеф-Банк",
    "Евразийский Банк",
    "Росбанк",
    "Транстройбанк",
    "Урал ФД",
    "Банк Колуга",
    "Банк Солидарности",
    "Меткомбанк",
    "Солид Банк",
    "Промсоцбанк",
    "БСПБ",
    "Камкомбанк",
    "Озон Банк",
    "Дом РФ",
    "Кубань Кредит",
    "Газстрансбанк",
    "Сбербанк",
  ];

  const related = [
    {
      title: "Кредитирование бизнеса",
      desc: "Кредитование для осуществления текущих операционных и иных расходов.",
      href: "/credits",
      img: "/finance-products/guarantee.png",
    },
    {
      title: "ВЭД",
      desc: "Прямые корреспондентские счета в иностранных банках и гарантийные снижение комиссии на конвертацию.",
      href: "/ved",
      img: "/finance-products/money.png",
    },
    {
      title: "Страхование",
      desc: "Экспресс страхование крупных контрактов свыше 1млрд рублей.",
      href: "/insurance",
      img: "/finance-products/hands.png",
    },
    {
      title: "Лизинг",
      desc: "Финансируем новое и с пробегом с авансом от 0%.",
      href: "/leasing",
      img: "/finance-products/four.png",
    },
    {
      title: "Проверка контрагентов",
      desc: "Все от реквизитов и отчетности,до контактов и кадровых рисков.",
      href: "/checking",
      img: "/finance-products/proverka.png",
    },
    {
      title: "Тендерное сопровождение",
      desc: "Каждый 3‑й тендер — победа! Штат опытных специалистов по цене одного сотрудника.Специальный счет, ЕРУЗ, аккредитация на закрытые секции.",
      href: "/tender-support",
      img: "/finance-products/calculator-hand.png",
    },
  ];

  const deals = Array.from({ length: 24 }).map((_, i) => ({
    title: [
      "Банковские гарантии на исполнение контракта",
      "Банковские гарантии на участие в тендере",
      "Банковские гарантии на гарантийное обеспечение (ГО)",
      "Банковские гарантии на авансовый платёж",
      "Банковские гарантии по закрытой закупке",
      "Банковские гарантии по коммерческой закупке",
      "Банковские гарантии для ИП",
      "Банковские гарантии для ООО",
      "Банковские гарантии 44-ФЗ",
      "Банковские гарантии 223-ФЗ",
      "Экспресс-гарантии",
      "Налоговые банковские гарантии",
    ][i % 4],
    amount: [
      "50 000 000 ₽",
      "26 205 355 ₽",
      "76 932 998 ₽",
      "37 955 980 ₽",
      "221 929 992 ₽",
      "30 000 000 ₽",
      "44 769 067 ₽",
    ][i % 7],
  }));

  const faqs = [
    {
      q: "В чем суть банковской гарантии?",
      a: "Банковская гарантия (БГ) — является финансовым документом, который выдаёт банк и подтверждает, что кредитная организация готова гарантированно выплатить деньги другой стороне (бенефициару), если клиент (принципал) не выполнит взятых на себя обязательств по контракту или в закупках.",
    },
    {
      q: "Для чего нужна банковская гарантия?",
      a: "Банковская гарантия нужна для обеспечения действия перед заказчиком на срок действия БГ. Банковская гарантия предусматривает гарантию на определенную сумму от заключенного договора.",
    },
    {
      q: "Как работает банковская гарантия (БГ)?",
      a: "Процесс работы банковской гарантии включает несколько этапов:\n\n1. Бенефициар направляет требование в банк. Если принципал не исполняет обязательство, бенефициар обращается в банк за компенсацией. Для этого он передаёт в банк требование и документы, указанные в гарантии, например, расчёт задолженности и претензию, направленную принципалу.\n\n2. Банк рассматривает требование бенефициара. После получения требования банк немедленно сообщает о нём принципалу и направляет ему копию. Банк изучает представленные бенефициаром документы в течение 5 дней или больше, если это прописано в договоре, но в пределах 30 дней. Если оснований для отказа у банка нет — он выплачивает компенсацию по гарантии.\n\n3. Принципал возмещает банку сумму гарантии. После того как банк произведёт выплату бенефициару, принципал возмещает банку расходы. Срок устанавливается договором при оформлении гарантии.",
    },
    {
      q: "Где используются банковские гарантии (БГ)?",
      a: "Некоторые сферы, где используют БГ:\n- Тендеры и государственные контракты\n- Строительные проекты\n- Международная торговля\n- Аренда оборудования\n- Авансовые платежи\n- Уплата налогов, сборов и других обязательных платежей\n- Прохождение таможни",
    },
    {
      q: "Какие есть виды банковских гарантий для юридических лиц?",
      a: "- На обеспечение заявки для участия в тендере\n- На обеспечение исполнения контракта (договора)\n- На возврат авансовых средств (авансовая)\n- На обеспечение гарантийных обязательств по контракту\n- Налоговые для ФНС (в налоговый орган)\n- Таможенные\n- Открытые\n- Зарытые\n- Безотзывная\n- Электронная\n- Коммерческая\n- Финансовая\n- Независимая\n- Страховая\n- На обеспечение возврата платежа\n- Для участия и исполнения тендеров по 44-ФЗ, 223-ФЗ, 185-ФЗ (615-ПП)\n- Коммерческая\n- Безусловная\n- Подтвержденная",
    },
    {
      q: "Какие есть основные банковские гарантии?",
      a: "- Экспресс-гарантии\n- Банковские гарантии на участие в тендере\n- Банковские гарантии на обеспечение исполнения контракта\n- Банковские гарантии на возврат авансового платежа\n- Банковские гарантии на гарантийное обеспечение (ГО)\n- Банковские гарантии 44-ФЗ\n- Банковские гарантии 223-ФЗ\n- Банковские гарантии 185-ФЗ (615-ПП)\n- Банковские гарантии по закрытой закупке\n- Банковские гарантии по коммерческой закупке",
    },
    {
      q: "Какие отличия есть у банковских гарантий?",
      a: "Некоторые отличия банковских гарантий (БГ):\n- Формат и способ оформления\n- Процесс оформления\n- Юридическая сила\n- Безопасность и защита от подделок\n- Стоимость и удобство использования\n- Совместимость с современными системами",
    },
    {
      q: "Требования к банковской гарантии (независимой гарантии)?",
      a: "В России требования к банковской гарантии (независимой гарантии) регулируются законодательством и закреплены в следующих документах:\n- Гражданский кодекс РФ (ст. 368–378)\n- Федеральный закон от 05.04.2013 №44-ФЗ (ст. 45)\n- Постановление Правительства РФ от 08.11.2013 №1005",
    },
    {
      q: "Какой порядок получения БГ?",
      a: "- Сначала нужно рассмотреть требования, которые предъявляет к банковской гарантии (БГ) заказчик.\n- Далее, определившись с примерным списком банков, подходящих под требования заказчика, выбираем тот, с которым будем сотрудничать.\n- Выбрав банк, уточняем требования к заказчику и собираем необходимые документы.\n- Согласовываем проект БГ и возможные изменения банковской гарантии. Проект предоставляет банк, а нам нужно проверить, верно ли в нем указаны все данные и правильно ли выдержана стандартная форма гарантии, если она предусмотрена для контракта.\n- Банк рассматривает заявку, проверяет клиента. Сроки разные, некоторые банки выдают гарантию в течение пары часов, другие могут проверять клиента до суток.\n- Подписываем договор с банком. В нем оговорены условия предоставления банковской гарантии и ее стоимость (комиссия банка).\n- Затем оплачиваем комиссию и получаем от банка гарантию. Сведения о ней вносятся в Реестр (по 44-ФЗ).\n- На этом процесс не заканчивается. Исполнителю теперь нужно предоставить полученный документ заказчику. Некоторые банки сами отправляют гарантию бенефициару. Тот должен рассмотреть ее и одобрить.",
    },
    {
      q: "Что банк запрашивает для получения банковской гарантии (независимой гарантии)?",
      a: "Банк сам определяет, что ему требуется для выдачи банковской гарантии (БГ): помимо учредительных документов, наверняка потребуется отчетность и налоговая декларация. Также важно предоставить в банк сведения о заявке и требования к самой гарантии, особенно если они нестандартные (конкурсную документацию, копию самого контракта). Чтобы подтвердить благонадежность клиента, обратившегося за получением гарантии, банк может запросить информацию о наличии имущества, которое может быть использовано в качестве залога. Также может потребоваться подтверждение того, что компания уже успешно участвовала в тендерах, через ее счет за определенный период проводились финансовые операции и т.д.",
    },
    {
      q: "Какой срок действия банковской гарантии (БГ) по 44-ФЗ на обеспечение исполнения контракта?",
      a: "Срок банковской гарантии составляет плюс 30-60 дней к сроку договора БГ.",
    },
    {
      q: "Сколько стоит банковская гарантия (БГ)?",
      a: "Стоимость банковской гарантии зависит от суммы контракта, срока действия, финансового состояния компании и условий конкретного банка. Кроме основной комиссии, банк может взимать разовый платёж за выпуск, комиссию за срочность (при оформлении за 1 день) и сопровождающую комиссию (если банк следит за исполнением контракта).",
    },
    {
      q: "Как рассчитать стоимость банковской гарантии?",
      a: "Расчет стоимости и цены банковской гарантии возможно сделать в калькуляторе онлайн, на сайте lider-garant.ru",
    },
    {
      q: "Какие Российские банки выдают банковские гарантии по 44-ФЗ?",
      a: "Перечень банков выдающих банковские гарантии (БГ) по 44-ФЗ:\n- Альфа-банк\n- Сбер банк\n- ВТБ\n- Совкомбанк\n- Т-банк\n- ПСБ\n- Уралсиб\n- МСП\n- Газпромбанк\n- Связь банк",
    },
    {
      q: "Какие способы обеспечения исполнения есть?",
      a: "Способы обеспечения исполнения обязательств по ГК РФ:\n- Неустойка\n- Залог\n- Удержание вещи\n- Поручительство\n- Независимая гарантия (банковская)\n- Денежные средства\n- Обеспечительный платёж",
    },
    {
      q: "Как получить поручительство при получении банковской гарантии (БГ)?",
      a: "Обеспечение банковской гарантии поручительством – действенный механизм при проведении государственных и коммерческих тендеров, если у вас не хватает залога - учредитель, другая компания или Фонд выступит вашим поручителем, закрыв основные риски перед банком.",
    },
    {
      q: "Как получить банковскую гарантию в сжатые сроки?",
      a: "1. Оформите заявку. - Уточним детали и вынесем решение в течение дня\n2. Подпишите договор. - Онлайн с помощью электронной подписи\n3. Получите гарантию в рамках лимита в течении 1 дня. - Направим документы курьерской службой",
    },
    {
      q: "Какие требования к принципалу для одобрения банковской (независимой) гарантии?",
      a: "- возраст бизнеса от 6 мес.\n- резидент РФ\n- субъект МСП (209-ФЗ)\n- не убыточная деятельность по итогам года\n- не состоит в реестре недобросовестных поставщиков или дисквалифицированных лиц\n- не признан банкротом и не находится в стадии ликвидации\n- отсутствие задолженности по налогам",
    },
    {
      q: "Как проверить банковскую гарантию?",
      a: "Проверка банковской гарантии зависит от законодательства, по которому она выдана.\n\n1. Банковская гарантия по 44-ФЗ:\nНужно убедиться, что гарантия находится в соответствующем реестре. Проверить реестр БГ можно:\n- На официальном сайте Единой информационной системы (ЕИС) — раздел «Реестр выданных банковских гарантий по 44-ФЗ». Отображаются дата, сумма, статус, срок действия.\n- На сайте банка-гаранта — большинство банков публикуют собственные реестры\n\n2. Банковская гарантия по 223-ФЗ или коммерция:\n- Проверка по реестру не осуществляется, так как в законодательстве не закреплено требование о внесении банковской гарантии по 223-ФЗ в реестр банковских гарантий.\n- Проверить банк-гарант  — на законодательном уровне не установлено, какие именно банки имеют право предоставлять гарантийные обязательства в рамках 223-ФЗ.",
    },
    {
      q: "6 ошибок, которые портят выдачу банковской гарантии",
      a: "Риски и ошибки по БГ:\n1. Срок действия короче, чем обязательства по контракту\n2. Ошибки в реквизитах или названии бенефициара\n3. Размытые формулировки обязательств\n4. Несоответствие законодательным нормам\n5. Игнорирование комиссий и скрытых расходов\n6. Подписание без юридической проверки",
    },
    {
      q: "Какая комиссия за выдачу банковской гарантии (БГ)?",
      a: "Размер комиссии за выдачу банковской гарантии может варьироваться от 2 до 10% годовых от суммы обеспечения.\nНа размер комиссии влияют разные факторы, например:\n- Финансовое состояние принципала\n- Кредитная история принципала\n- Срок действия гарантии\n- Сумма гарантии\n- Вид гарантии\n- Наличие залогового обеспечения\n- Отраслевая специфика\n- Условия контракта\n- Конкуренция между банками",
    },
    {
      q: "Как проводить банковские гарантии в бухгалтерском учете?",
      a: "Основанием для отражения банковской гарантии в бухгалтерском (бухучете) учете служат следующие документы:\n- Договор о предоставлении банковской гарантии\n- Платежные документы по банковской гарантии\n- Требование о выплате по гарантии (для бенефициара)\n- Уведомление о выплате по гарантии (для принципала)\n- Выписки из банка\n- Первичные учетные документы\n- Учетная политика организации\n- Бухгалтерская справка",
    },
    {
      q: "Как получить банковскую гарантию после отказа?",
      a: "Порядок и способы получения услуги покупки банковской гарантии, требуется обеспеченной залогом или поручителем.\nУточнить список, условия, перечень и размер БГ, подать заявку запрос на банковскую гарантию.\nСроки исполнения контракта, когда необходима выдача банковской гарантии.\nКогда требуется выдача банковской гарантии - происходит онлайн.\nДля получения банковской гарантии предоставление и получение, предлагаю получить, оформление гарантии и заключение договора, после выдаем банковскую гарантию, делаем все онлайн.\nПодача и рассмотрения банковской гарантии будет по лучшей цене в Лидер-Гарант, даже после отказа!",
    },
  ];

  return (
    <>
      <main className="mx-auto w-full max-w-7xl px-6 py-10 md:py-16">
        <FadeIn>
          <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/10 via-sky-500/10 to-emerald-500/10 p-8 md:p-12">
            <div className="relative grid items-center gap-8 md:grid-cols-2">
              <div className="space-y-5">
                <h1 className="text-3xl font-semibold tracking-tight md:text-5xl text-white">
                  Банковская гарантия
                  <div className="text-primary">с выгодой 45%</div>
                </h1>
                <h2 className="text-2xl font-semibold">
                  Оформите банковскую гарантию <br /> в 20+ банках партнерах:
                </h2>
                <p className="max-w-2xl text-base text-foreground/80 md:text-lg"></p>
                <ul>
                  <li className="list-disc marker:text-primary">
                    Сумма банковской гарантии до 2 млрд
                  </li>
                  <li className="list-disc marker:text-primary">
                    Гарантии до 10 млн рублей за 2 минуты по паспорту
                  </li>
                  <li className="list-disc marker:text-primary">
                    44-ФЗ, 223-ФЗ, 185-ФЗ и коммерция
                  </li>
                  <li className="list-disc marker:text-primary">
                    Все регионы: включая СКФО, Крым и новые территории
                  </li>
                </ul>

                <div className="flex items-center gap-3">
                  <Button asChild className="btn-three h-12">
                    <Link href="#form">Подать заявку!</Link>
                  </Button>
                </div>
              </div>

              <div className="relative hidden h-[360px] w-full overflow-hidden rounded-3xl md:flex items-center justify-center">
                <div className="absolute bottom-2 right-5 space-y-3 z-20">
                  <div className="flex items-center gap-3 rounded-lg bg-background/60 border border-white/10 px-3 py-2 backdrop-blur-md">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                      <CheckCheck className="h-3 w-3" />
                    </div>
                    <span className="text-sm font-medium text-white">
                      Одна заявка — множество предложений
                    </span>
                  </div>

                  <div className="flex items-center gap-3 rounded-lg bg-background/60 border border-white/10 px-3 py-2 backdrop-blur-md">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                      <CheckCheck className="h-3 w-3" />
                    </div>
                    <span className="text-sm font-medium text-white">
                      Одобрение и выдача онлайн
                    </span>
                  </div>

                  <div className="flex items-center gap-3 rounded-lg bg-background/60 border border-white/10 px-3 py-2 backdrop-blur-md">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                      <CheckCheck className="h-3 w-3" />
                    </div>
                    <span className="text-sm font-medium text-white">
                      На все виды: кредиты для бизнеса, лизинг, факторинг и др.
                    </span>
                  </div>
                </div>

                <Image
                  src="/guarantee.jpg"
                  alt=""
                  width={640}
                  height={640}
                  sizes="(min-width: 1024px) 520px, 380px"
                  className="h-72 w-auto md:h-80 lg:h-88 object-contain rounded-2xl"
                  priority
                />
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <BankLogosSlider />
        </FadeIn>

        <FadeIn>
          <WhyUs variant="guarantee" />
        </FadeIn>

        <FadeIn>
          <section className="mx-auto w-full max-w-7xl py-5">
            <h2 className="mb-10 text-center text-3xl font-bold text-primary">
              Доступные виды Банковских гарантий
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {guarantees.map((item, i) => {
                return (
                  <div
                    key={i}
                    className="group hover:border-primary relative rounded-2xl hover:-translate-y-1 border border-foreground/10 bg-white/5 p-4 shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <div className="min-w-0">
                        <h3 className="text-base font-semibold text-foreground ">
                          {item.title}
                        </h3>

                        <div className="mt-2 flex flex-wrap gap-2">
                          {item.features.map((f) => (
                            <span
                              key={f}
                              className="inline-flex items-center text-xs font-semibold text-primary bg-primary/10 border border-primary/20 rounded-full px-2 py-1"
                            >
                              {f}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <p className="mt-3 text-sm text-foreground/70">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <GuaranteeHowItWorksSection />
        </FadeIn>

        <FadeIn>
          <section className="relative mx-auto w-full max-w-7xl py-5">
            <div className="pointer-events-none absolute inset-0 -z-10 flex justify-center">
              <div className="h-112 w-md rounded-full bg-gradient-to-br from-indigo-500/30 via-sky-500/25 to-emerald-500/30 blur-[140px] opacity-70" />
            </div>

            <h2 className="mb-12 text-center text-3xl font-semibold tracking-tight text-primary md:text-4xl">
              Кто и как зарабатывает с нами?
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-[0_0_40px_-10px_rgba(0,0,0,0.15)] transition-all duration-500 hover:shadow-[0_0_55px_-5px_rgba(0,0,0,0.25)] hover:border-white/20">
                <div className="pointer-events-none absolute -left-16 -top-16 h-52 w-52 rounded-full bg-gradient-to-br from-indigo-500/20 to-sky-500/10 blur-3xl transition-opacity duration-700 group-hover:opacity-80" />

                <div className="relative flex items-start gap-5">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 text-base font-bold text-white shadow-md">
                    A
                  </span>
                  <div>
                    <div className="mb-2 text-lg font-semibold text-foreground">
                      ИП и юридические лица
                    </div>
                    <p className="text-sm leading-relaxed text-foreground/80">
                      Агенты по банковским гарантиям, финансовые брокеры,
                      предприниматели, владельцы бизнеса.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-[0_0_40px_-10px_rgba(0,0,0,0.15)] transition-all duration-500 hover:shadow-[0_0_55px_-5px_rgba(0,0,0,0.25)] hover:border-white/20">
                <div className="pointer-events-none absolute -right-16 -bottom-16 h-52 w-52 rounded-full bg-gradient-to-tl from-emerald-500/20 to-sky-500/10 blur-3xl transition-opacity duration-700 group-hover:opacity-80" />

                <div className="relative flex items-start gap-5">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 text-base font-bold text-white shadow-md">
                    B
                  </span>
                  <div>
                    <div className="mb-2 text-lg font-semibold text-foreground">
                      Физические лица и самозанятые
                    </div>
                    <p className="text-sm leading-relaxed text-foreground/80">
                      Тендерные специалисты, бухгалтеры, финансовые
                      консультанты, юристы, агенты, фрилансеры и те, кто ищет
                      дополнительный доход.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-col items-center gap-5 text-center">
              <p className="max-w-xl text-sm text-foreground/70">
                Мы вам поможем. Оставьте заявку и начните зарабатывать.
              </p>
              <Button asChild variant="outline" className="btn-three h-12 px-6">
                <Link href="/#application">Начать зарабатывать</Link>
              </Button>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <GuaranteeCalculator />
        </FadeIn>

        <FadeIn>
          <section className="mx-auto mt-2 w-full max-w-7xl py-8">
            <div className="mb-2 flex items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-primary md:text-3xl">
                  Лента сделок
                </h2>
                <p className="text-sm text-foreground/60">
                  Последние заявки от наших клиентов и агентов
                </p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-foreground md:text-3xl">
                  3 064 379 982 ₽
                </div>
                <div className="text-xs text-foreground/60">
                  Общая сумма последних заявок
                </div>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {deals.slice(0, visibleDeals).map((d, i) => (
                <div
                  key={i}
                  className="w-full rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-foreground/85 backdrop-blur-md flex h-full min-h-[180px] flex-col transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-1 text-xs text-foreground/60">
                    Гарантии
                  </div>
                  <div className="mb-3 text-base font-semibold leading-snug">
                    {d.title}
                  </div>
                  <div className="mb-3 h-px w-full bg-white/10" />
                  <div className="mt-auto">
                    <div className="text-2xl font-bold">{d.amount}</div>
                    <div className="text-xs text-foreground/60">
                      сумма заявки
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section id="form">
            <TopApplicationForm />
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mx-auto w-full max-w-7xl py-6">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-primary">
                Подобрано 25 предложений
              </h3>
              <span className="text-sm text-foreground/60">
                Показываем только самые лучшие предложения
              </span>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {banks.slice(0, visibleOffers).map((bank, i) => (
                <div
                  key={i}
                  className="relative flex items-center gap-4 rounded-2xl border border-foreground/10 bg-white/5 p-5 hover:-translate-y-1 hover:border-primary/70 transition-all"
                >
                  <div className="min-w-0 flex-1">
                    <div className="mb-1 text-2xl font-semibold text-primary">
                      {bank}
                    </div>
                    <div className="text-xs text-foreground/70">
                      Сумма: до 500 млн ₽ · Срок: до 2600 дн · Комиссия: от 1.8%
                    </div>
                  </div>
                  <Button className="shrink-0 rounded-xl px-4 py-2 text-xs font-semibold shadow-sm  hover:-translate-y-0.5 hover:shadow-md bg-none border border-primary hover:bg-primary text-primary hover:text-white transition-all">
                    Подать заявку
                  </Button>
                </div>
              ))}
            </div>

            {visibleOffers < TOTAL_OFFERS && (
              <div className="mt-6 flex justify-center">
                <Button
                  variant="outline"
                  onClick={() =>
                    setVisibleOffers((v) => Math.min(v + 6, TOTAL_OFFERS))
                  }
                  className="rounded-full px-6 py-2 text-sm text-foreground/80 transition-transform hover:-translate-y-0.5 hover:shadow-sm"
                >
                  Показать еще
                </Button>
              </div>
            )}
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mx-auto w-full max-w-7xl px-0 py-10 md:py-14">
            <h2 className="mb-6 text-2xl font-bold text-primary md:text-3xl text-center">
              Вопросы по банковским гарантиям
            </h2>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="overflow-hidden rounded-2xl border border-foreground/10 bg-white/5 px-4 hover:border-primary transition-all"
                >
                  <AccordionTrigger className="flex w-full items-center justify-between gap-4 py-4 text-left text-sm font-semibold text-foreground/90 transition-colors [&[data-state=open]>svg]:rotate-180">
                    {item.q}
                    <svg
                      className="h-4 w-4 shrink-0 transition-transform duration-300"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 9l6 6 6-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </AccordionTrigger>
                  <AccordionContent className="overflow-hidden pb-4 text-sm text-foreground/70 transition-all duration-300 data-[state=closed]:opacity-0 data-[state=closed]:max-h-0 data-[state=open]:opacity-100 data-[state=open]:max-h-40">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mx-auto w-full max-w-7xl py-12">
            <h2 className="mb-6 text-2xl font-bold text-primary md:text-3xl text-center">
              Смотрите также
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {related.map((item) => (
                <div
                  key={item.title}
                  className="relative overflow-hidden flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 px-7 py-7 shadow-[0_0_30px_-15px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-all duration-500 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="pr-24 md:pr-32">
                      <h3 className="mb-3 text-lg font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="mb-6 text-sm leading-relaxed text-foreground/75">
                        {item.desc}
                      </p>
                    </div>
                    {item.img && (
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={240}
                        height={240}
                        sizes="(min-width: 768px) 240px, 192px"
                        className="pointer-events-none absolute bottom-[0px] right-[-20px] md:right-[-80px] h-48 w-48 md:h-60 md:w-60 object-contain transition-transform duration-300 hover:scale-105"
                      />
                    )}
                  </div>

                  <div className="mt-auto flex items-center justify-between gap-3">
                    <button className="inline-flex rounded-xl border border-primary px-6 py-2.5 text-sm hover:bg-primary font-semibold text-primary transition-all duration-300 hover:-translate-y-1 hover:text-white cursor-pointer hover:shadow-md active:translate-y-0">
                      Узнать больше
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <h3 className="text-sm text-foreground/70 text-center mt-6">
              Ответим на ваши вопросы с 7:00 до 23:00 по московскому времени
            </h3>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="mx-auto w-full max-w-7xl py-16">
            <h2 className="mb-12 text-center text-3xl font-bold text-primary md:text-4xl">
              Гарантии для госзаказа
            </h2>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="group rounded-2xl border border-foreground/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white">
                  <ShieldCheck className="h-7 w-7" />
                </div>
                <p className="text-base text-muted-foreground">
                  Получите поручительство банка на выполнение обязательств по
                  44-ФЗ и 223-ФЗ через наш маркетплейс — быстро, выгодно и без
                  лишних шагов.
                </p>
              </div>

              <div className="group rounded-2xl border border-foreground/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white">
                  <Banknote className="h-7 w-7" />
                </div>
                <p className="text-base text-muted-foreground">
                  Одна заявка отправляется сразу в несколько банков — выбирайте
                  наиболее выгодные условия среди полученных предложений.
                </p>
              </div>

              <div className="group rounded-2xl border border-foreground/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white">
                  <FileCheck className="h-7 w-7" />
                </div>

                <p className="mb-4 font-semibold text-foreground">
                  Мы работаем со всеми видами гарантий:
                </p>

                <ul className="flex flex-col gap-2 text-muted-foreground">
                  <li>✔ Гарантия на заявку (участие в торгах)</li>
                  <li>✔ Гарантия исполнения контракта</li>
                  <li>✔ Гарантия обеспечения гарантийных обязательств</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <ManagerCTASection />
        </FadeIn>

        <FadeIn>
          <section className="mx-auto w-full max-w-7xl py-12">
            <h2 className="mb-10 text-2xl font-bold text-primary md:text-3xl">
              Часто ищут
            </h2>

            <div className="rounded-xl border border-foreground/10 bg-white/5 p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-6">
                {[
                  "Банковские гарантии на исполнение контракта",
                  "Банковские гарантии для ИП",
                  "Банковские гарантии на участие в тендере",
                  "Банковские гарантии для ООО",
                  "Банковские гарантии на гарантийное обеспечение (ГО)",
                  "Банковские гарантии 44-ФЗ",
                  "Банковские гарантии на авансовый платеж",
                  "Банковские гарантии 223-ФЗ",
                  "Банковские гарантии по закрытой закупке",
                  "Экспресс-гарантии",
                  "Банковские гарантии по коммерческой закупке",
                  "Налоговые банковские гарантии",
                  "Таможенные банковские гарантии",
                  "Банковская гарантия на обеспечение исполнения",
                  "Банковская гарантия на обеспечение гарантийных обязательств",
                  "Независимая банковская гарантия",
                  "Банковская гарантия на обеспечение исполнения контракт",
                  "Банковская гарантия на обеспечение обязательств",
                ].map((t, i) => (
                  <Link
                    key={i}
                    href="/#application"
                    className="block text-sm text-primary underline underline-offset-2 hover:text-primary/70 transition-colors"
                  >
                    {t}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>
      </main>
    </>
  );
}
