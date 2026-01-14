"use client"

import { useState, useEffect } from "react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Textarea } from "../ui/textarea"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "../ui/dialog"
import { Switch } from "../ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select"
import { Loader2, Plus, Trash2, X, HelpCircle, Search, Building2, Sparkles, FileText, Tags, Settings } from "lucide-react"

// Types matching backend/apps/seo/models.py
export interface FaqItem {
    question: string
    answer: string
}

export interface BankOffer {
    bank_name: string
    rate?: string
    custom_text?: string
}

export interface SeoPage {
    id: number
    slug: string
    meta_title: string
    meta_description: string
    meta_keywords: string
    h1_title: string
    main_description: string
    page_type: 'landing' | 'product' | 'custom'
    template_name: string
    is_published: boolean
    priority: number
    faq: FaqItem[]
    popular_searches: string[]
    bank_offers: BankOffer[]
}

// Available templates
const TEMPLATES = [
    { value: 'none', label: 'Без шаблона' },
    { value: 'factoring', label: 'Факторинг' },
    { value: 'rko', label: 'РКО и спецсчета' },
    { value: 'leasing', label: 'Лизинг' },
    { value: 'guarantees', label: 'Банковские гарантии' },
    { value: 'credits', label: 'Кредиты для бизнеса' },
    { value: 'deposits', label: 'Депозиты' },
    { value: 'ved', label: 'ВЭД (международные платежи)' },
    { value: 'insurance', label: 'Страхование' },
    { value: 'tender', label: 'Тендерное сопровождение' },
    { value: 'checking', label: 'Проверка контрагентов' },
]

// Template data for auto-fill
const TEMPLATE_DATA: Record<string, { faqs: FaqItem[], searches: string[], meta_title: string, meta_description: string, h1_title: string, main_description: string }> = {
    factoring: {
        meta_title: 'Факторинг для бизнеса — лучшие условия финансирования',
        meta_description: 'Факторинг для юридических лиц и ИП. Финансирование до 100 млн ₽ под уступку права требования.',
        h1_title: 'Факторинг для бизнеса',
        main_description: 'Факторинг — это покупка права требования денежного долга. Мы предлагаем лучшие условия с минимальными ставками.',
        faqs: [
            { question: "Что такое факторинг?", answer: "Факторинг — это финансовая операция, при которой фактор покупает у поставщика право требования к дебитору." },
            { question: "Какой процент по факторингу?", answer: "Ставки от 0,1% до 3% в день (от 3% до 90% годовых)." },
            { question: "Какой максимальный лимит?", answer: "Максимальный лимит может достигать 100 млн ₽." },
            { question: "Какие документы нужны?", answer: "Уставные документы, бухгалтерская отчётность, договоры с покупателями." },
        ],
        searches: ["факторинг для бизнеса", "факторинг для юридических лиц", "условия факторинга", "факторинг без регресса", "банковский факторинг"]
    },
    rko: {
        meta_title: 'РКО и спецсчета — лучшие банки для бизнеса',
        meta_description: 'Открытие РКО и спецсчёта для участия в госзакупках. Минимальные тарифы, удобный сервис.',
        h1_title: 'РКО и спецсчета',
        main_description: 'Расчётно-кассовое обслуживание — основа работы любой компании.',
        faqs: [
            { question: "Для чего нужен спецсчёт?", answer: "Для обеспечения заявок и исполнения контрактов по 44-ФЗ и 223-ФЗ." },
            { question: "В какой банк лучше открыть?", answer: "Учитывайте тарифы, наличие отделений, скорость обработки документов." },
            { question: "Как быстро можно открыть?", answer: "Стандартный срок — 1-3 рабочих дня." },
        ],
        searches: ["открытие спецсчета", "банки для открытия спецсчетов", "рко", "рко для ип", "рко для юридических лиц"]
    },
    leasing: {
        meta_title: 'Лизинг для бизнеса — выгодное финансирование',
        meta_description: 'Лизинг оборудования, спецтехники, транспорта. До 90% от стоимости.',
        h1_title: 'Лизинг для бизнеса',
        main_description: 'Лизинг — это финансовая аренда имущества с правом выкупа.',
        faqs: [
            { question: "Что такое лизинг?", answer: "Долгосрочная аренда имущества с возможностью выкупа." },
            { question: "Какой авансовый платёж?", answer: "От 10% до 30% стоимости объекта." },
        ],
        searches: ["лизинг для бизнеса", "лизинг оборудования", "лизинг авто", "лизинг для ип"]
    },
    guarantees: {
        meta_title: 'Банковские гарантии 44-ФЗ и 223-ФЗ',
        meta_description: 'Банковские гарантии для обеспечения заявок и исполнения контрактов.',
        h1_title: 'Банковские гарантии',
        main_description: 'Банковская гарантия — письменное обязательство банка.',
        faqs: [
            { question: "Какие виды гарантий?", answer: "Обеспечение заявок, исполнение контрактов, возврат аванса." },
            { question: "Сколько стоит?", answer: "От 0,5% до 5% от суммы гарантии в год." },
        ],
        searches: ["банковская гарантия 44 фз", "обеспечение заявки", "исполнение контракта"]
    },
    credits: {
        meta_title: 'Кредиты для бизнеса — лучшие условия',
        meta_description: 'Бизнес-кредиты для юридических лиц и ИП.',
        h1_title: 'Кредиты для бизнеса',
        main_description: 'Бизнес-кредиты — финансирование текущей деятельности.',
        faqs: [
            { question: "Какие виды кредитов?", answer: "На оборотные средства, инвестиционные, овердрафты." },
            { question: "Какой процент?", answer: "От 12% до 25% годовых." },
        ],
        searches: ["кредит для бизнеса", "кредит для ип", "кредит под залог"]
    },
    deposits: {
        meta_title: 'Депозиты для юридических лиц',
        meta_description: 'Депозитные счета для бизнеса. Выгодные ставки.',
        h1_title: 'Депозиты для бизнеса',
        main_description: 'Депозиты — способ размещения свободных средств под процент.',
        faqs: [
            { question: "Какие виды депозитов?", answer: "Срочные, до востребования, накопительные." },
        ],
        searches: ["депозит для бизнеса", "депозит для юридических лиц", "вклад для ип"]
    },
    ved: {
        meta_title: 'Международные платежи — услуги для ВЭД',
        meta_description: 'Международные переводы для бизнеса. Валютные переводы, SWIFT.',
        h1_title: 'Внешнеэкономическая деятельность',
        main_description: 'Международные платежи — переводы в иностранной валюте.',
        faqs: [
            { question: "Какие виды платежей?", answer: "SWIFT-переводы, SEPA, переводы в страны СНГ." },
        ],
        searches: ["международные переводы", "валютные счета", "вэд банки"]
    },
    insurance: {
        meta_title: 'Страхование для бизнеса',
        meta_description: 'Страхование имущества, ответственности для бизнеса.',
        h1_title: 'Страхование',
        main_description: 'Страхование бизнеса — защита от рисков и убытков.',
        faqs: [
            { question: "Что можно застраховать?", answer: "Недвижимость, оборудование, транспорт." },
        ],
        searches: ["страхование бизнеса", "страхование имущества", "каско для бизнеса"]
    },
    tender: {
        meta_title: 'Тендерное сопровождение — помощь в госзакупках',
        meta_description: 'Сопровождение участия в госзакупках 44-ФЗ и 223-ФЗ.',
        h1_title: 'Тендерное сопровождение',
        main_description: 'Тендерное сопровождение — помощь в закупках.',
        faqs: [
            { question: "Что входит в сопровождение?", answer: "Поиск тендеров, подготовка документов, участие в торгах." },
        ],
        searches: ["тендерное сопровождение", "госзакупки", "участие в торгах"]
    },
    checking: {
        meta_title: 'Проверка контрагентов — анализ юридических лиц',
        meta_description: 'Проверка контрагентов перед сотрудничеством.',
        h1_title: 'Проверка контрагентов',
        main_description: 'Проверка контрагентов — анализ благонадёжности партнёров.',
        faqs: [
            { question: "Что проверяется?", answer: "Статус регистрации, учредители, финансы, суды." },
        ],
        searches: ["проверка контрагента", "проверка юридического лица", "проверка инн"]
    },
}

interface SeoPageEditorProps {
    page: SeoPage | null
    open: boolean
    onClose: () => void
    onSave: (data: Partial<SeoPage>) => Promise<boolean>
    isLoading: boolean
}

export function SeoPageEditor({
    page,
    open,
    onClose,
    onSave,
    isLoading,
}: SeoPageEditorProps) {
    const getInitialFormData = (): Partial<SeoPage> => ({
        slug: "",
        meta_title: "",
        meta_description: "",
        meta_keywords: "",
        h1_title: "",
        main_description: "",
        page_type: "product",
        template_name: "",
        is_published: true,
        priority: 0,
        faq: [],
        popular_searches: [],
        bank_offers: [],
    })

    const [formData, setFormData] = useState<Partial<SeoPage>>(getInitialFormData())
    const [newSearchTerm, setNewSearchTerm] = useState("")
    const [activeTab, setActiveTab] = useState("main")

    useEffect(() => {
        if (open) {
            if (page) {
                setFormData({
                    ...page,
                    faq: page.faq || [],
                    popular_searches: page.popular_searches || [],
                    bank_offers: page.bank_offers || [],
                })
            } else {
                setFormData(getInitialFormData())
            }
            setActiveTab("main")
        }
    }, [page, open])

    const handleSubmit = async () => {
        if (!formData.slug?.trim()) return
        const success = await onSave(formData)
        if (success) {
            onClose()
        }
    }

    // FAQ Management
    const addFaq = () => {
        setFormData({
            ...formData,
            faq: [...(formData.faq || []), { question: "", answer: "" }]
        })
    }

    const updateFaq = (index: number, field: 'question' | 'answer', value: string) => {
        const newFaq = [...(formData.faq || [])]
        newFaq[index] = { ...newFaq[index], [field]: value }
        setFormData({ ...formData, faq: newFaq })
    }

    const removeFaq = (index: number) => {
        const newFaq = [...(formData.faq || [])]
        newFaq.splice(index, 1)
        setFormData({ ...formData, faq: newFaq })
    }

    // Popular Searches Management
    const addSearchTerm = () => {
        if (newSearchTerm.trim()) {
            setFormData({
                ...formData,
                popular_searches: [...(formData.popular_searches || []), newSearchTerm.trim()]
            })
            setNewSearchTerm("")
        }
    }

    const removeSearchTerm = (index: number) => {
        const newSearches = [...(formData.popular_searches || [])]
        newSearches.splice(index, 1)
        setFormData({ ...formData, popular_searches: newSearches })
    }

    // Bank Offers Management
    const addBankOffer = () => {
        if ((formData.bank_offers || []).length < 9) {
            setFormData({
                ...formData,
                bank_offers: [...(formData.bank_offers || []), { bank_name: "", rate: "", custom_text: "" }]
            })
        }
    }

    const updateBankOffer = (index: number, field: keyof BankOffer, value: string) => {
        const newOffers = [...(formData.bank_offers || [])]
        newOffers[index] = { ...newOffers[index], [field]: value }
        setFormData({ ...formData, bank_offers: newOffers })
    }

    const removeBankOffer = (index: number) => {
        const newOffers = [...(formData.bank_offers || [])]
        newOffers.splice(index, 1)
        setFormData({ ...formData, bank_offers: newOffers })
    }

    // Apply Template - заполняет ВСЕ поля из шаблона
    const applyTemplate = () => {
        const templateName = formData.template_name
        if (!templateName || templateName === 'none' || !TEMPLATE_DATA[templateName]) return

        const template = TEMPLATE_DATA[templateName]
        setFormData({
            ...formData,
            meta_title: template.meta_title,
            meta_description: template.meta_description,
            h1_title: template.h1_title,
            main_description: template.main_description,
            faq: template.faqs,
            popular_searches: template.searches,
        })
    }

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="max-w-6xl max-h-[90vh] overflow-hidden flex flex-col bg-[#0f0f1a] border-[#3ce8d1]/30 text-white sm:rounded-2xl shadow-2xl">
                <DialogHeader className="flex-shrink-0 pb-4 border-b border-slate-700/50">
                    <DialogTitle className="text-xl font-bold text-white">
                        {page ? "Редактировать SEO страницу" : "Создать SEO страницу"}
                    </DialogTitle>
                </DialogHeader>

                <div className="flex-1 overflow-hidden flex flex-col">
                    <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col overflow-hidden">
                        <TabsList className="flex-shrink-0 flex w-full bg-[#1a1a2e] border border-slate-700/50 h-12 p-1 gap-1 rounded-xl mb-4">
                            <TabsTrigger
                                value="main"
                                className="flex-1 rounded-lg data-[state=active]:bg-[#3ce8d1] data-[state=active]:text-[#0f0f1a] data-[state=active]:font-semibold text-slate-400 text-sm transition-all flex items-center justify-center gap-1.5 px-3"
                            >
                                <Settings className="w-4 h-4 shrink-0" />
                                <span>Основное</span>
                            </TabsTrigger>
                            <TabsTrigger
                                value="meta"
                                className="flex-1 rounded-lg data-[state=active]:bg-[#3ce8d1] data-[state=active]:text-[#0f0f1a] data-[state=active]:font-semibold text-slate-400 text-sm transition-all flex items-center justify-center gap-1.5 px-3"
                            >
                                <Tags className="w-4 h-4 shrink-0" />
                                <span>Мета-теги</span>
                            </TabsTrigger>
                            <TabsTrigger
                                value="content"
                                className="flex-1 rounded-lg data-[state=active]:bg-[#3ce8d1] data-[state=active]:text-[#0f0f1a] data-[state=active]:font-semibold text-slate-400 text-sm transition-all flex items-center justify-center gap-1.5 px-3"
                            >
                                <FileText className="w-4 h-4 shrink-0" />
                                <span>Контент</span>
                            </TabsTrigger>
                            <TabsTrigger
                                value="faq"
                                className="flex-1 rounded-lg data-[state=active]:bg-[#3ce8d1] data-[state=active]:text-[#0f0f1a] data-[state=active]:font-semibold text-slate-400 text-sm transition-all flex items-center justify-center gap-1.5 px-3"
                            >
                                <HelpCircle className="w-4 h-4 shrink-0" />
                                <span>FAQ</span>
                            </TabsTrigger>
                            <TabsTrigger
                                value="offers"
                                className="flex-1 rounded-lg data-[state=active]:bg-[#3ce8d1] data-[state=active]:text-[#0f0f1a] data-[state=active]:font-semibold text-slate-400 text-sm transition-all flex items-center justify-center gap-1.5 px-3"
                            >
                                <Building2 className="w-4 h-4 shrink-0" />
                                <span>Предложения</span>
                            </TabsTrigger>
                        </TabsList>

                        <div className="flex-1 overflow-y-auto pr-2">
                            {/* MAIN TAB */}
                            <TabsContent value="main" className="space-y-5 mt-0 h-full">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label className="text-slate-300 text-sm font-medium">URL Path (Slug) *</Label>
                                        <Input
                                            value={formData.slug}
                                            onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                                            placeholder="credit-for-business"
                                            className="bg-[#1a1a2e] border-slate-600 text-white placeholder:text-slate-500 focus:border-[#3ce8d1] focus-visible:ring-[#3ce8d1]/20 rounded-lg h-10"
                                        />
                                        <p className="text-xs text-slate-500">Без / в начале</p>
                                    </div>

                                    <div className="space-y-2">
                                        <Label className="text-slate-300 text-sm font-medium">Тип страницы</Label>
                                        <Select
                                            value={formData.page_type}
                                            onValueChange={(val: 'landing' | 'product' | 'custom') => setFormData({ ...formData, page_type: val })}
                                        >
                                            <SelectTrigger className="bg-[#1a1a2e] border-slate-600 text-white focus:ring-[#3ce8d1]/20 rounded-lg h-10">
                                                <SelectValue placeholder="Выберите тип" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-[#1a1a2e] border-slate-600 text-slate-200">
                                                <SelectItem value="landing" className="focus:bg-slate-700 focus:text-white">Landing Page</SelectItem>
                                                <SelectItem value="product" className="focus:bg-slate-700 focus:text-white">Product Page</SelectItem>
                                                <SelectItem value="custom" className="focus:bg-slate-700 focus:text-white">Custom Page</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                <div className="p-4 rounded-xl bg-gradient-to-r from-purple-900/20 to-[#3ce8d1]/10 border border-purple-500/30">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Sparkles className="w-5 h-5 text-purple-400" />
                                        <Label className="text-white font-medium">Шаблон автозаполнения</Label>
                                    </div>
                                    <div className="flex gap-3">
                                        <Select
                                            value={formData.template_name || ""}
                                            onValueChange={(val) => setFormData({ ...formData, template_name: val })}
                                        >
                                            <SelectTrigger className="bg-[#1a1a2e] border-slate-600 text-white focus:ring-[#3ce8d1]/20 rounded-lg h-10 flex-1">
                                                <SelectValue placeholder="Выберите шаблон" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-[#1a1a2e] border-slate-600 text-slate-200">
                                                {TEMPLATES.map(t => (
                                                    <SelectItem key={t.value} value={t.value} className="focus:bg-slate-700 focus:text-white">
                                                        {t.label}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <Button
                                            type="button"
                                            onClick={applyTemplate}
                                            disabled={!formData.template_name || formData.template_name === 'none'}
                                            className="bg-purple-600 hover:bg-purple-700 text-white h-10 px-5 rounded-lg font-medium disabled:opacity-40"
                                        >
                                            <Sparkles className="w-4 h-4 mr-2" />
                                            Применить
                                        </Button>
                                    </div>
                                    <p className="text-xs text-slate-400 mt-2">Заполнит все поля: мета-теги, контент, FAQ и поисковые запросы</p>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label className="text-slate-300 text-sm font-medium">Приоритет</Label>
                                        <Input
                                            type="number"
                                            value={formData.priority || 0}
                                            onChange={(e) => setFormData({ ...formData, priority: parseInt(e.target.value) || 0 })}
                                            className="bg-[#1a1a2e] border-slate-600 text-white focus:border-[#3ce8d1] focus-visible:ring-[#3ce8d1]/20 rounded-lg h-10"
                                        />
                                    </div>

                                    <div className="flex items-end">
                                        <div className="flex items-center gap-3 h-10 px-4 rounded-lg bg-[#1a1a2e] border border-slate-600 w-full">
                                            <Switch
                                                checked={formData.is_published}
                                                onCheckedChange={(checked) => setFormData({ ...formData, is_published: checked })}
                                                className="data-[state=checked]:bg-[#3ce8d1]"
                                            />
                                            <Label className="text-slate-200 font-medium cursor-pointer" onClick={() => setFormData({ ...formData, is_published: !formData.is_published })}>
                                                Опубликовано
                                            </Label>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>

                            {/* META TAB */}
                            <TabsContent value="meta" className="space-y-5 mt-0">
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <Label className="text-slate-300 text-sm font-medium">Meta Title</Label>
                                        <span className={`text-xs ${(formData.meta_title || "").length > 60 ? 'text-red-400' : 'text-slate-500'}`}>
                                            {(formData.meta_title || "").length}/60
                                        </span>
                                    </div>
                                    <Input
                                        value={formData.meta_title || ""}
                                        onChange={(e) => setFormData({ ...formData, meta_title: e.target.value })}
                                        placeholder="Заголовок для поисковых систем"
                                        className="bg-[#1a1a2e] border-slate-600 text-white placeholder:text-slate-500 focus:border-[#3ce8d1] focus-visible:ring-[#3ce8d1]/20 rounded-lg h-10"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <Label className="text-slate-300 text-sm font-medium">Meta Description</Label>
                                        <span className={`text-xs ${(formData.meta_description || "").length > 160 ? 'text-red-400' : 'text-slate-500'}`}>
                                            {(formData.meta_description || "").length}/160
                                        </span>
                                    </div>
                                    <Textarea
                                        value={formData.meta_description || ""}
                                        onChange={(e) => setFormData({ ...formData, meta_description: e.target.value })}
                                        rows={3}
                                        placeholder="Описание для поисковых систем"
                                        className="bg-[#1a1a2e] border-slate-600 text-white placeholder:text-slate-500 focus:border-[#3ce8d1] focus-visible:ring-[#3ce8d1]/20 rounded-lg resize-none"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label className="text-slate-300 text-sm font-medium">Meta Keywords</Label>
                                    <Textarea
                                        value={formData.meta_keywords || ""}
                                        onChange={(e) => setFormData({ ...formData, meta_keywords: e.target.value })}
                                        rows={2}
                                        placeholder="ключевое слово 1, ключевое слово 2, ..."
                                        className="bg-[#1a1a2e] border-slate-600 text-white placeholder:text-slate-500 focus:border-[#3ce8d1] focus-visible:ring-[#3ce8d1]/20 rounded-lg resize-none"
                                    />
                                </div>
                            </TabsContent>

                            {/* CONTENT TAB */}
                            <TabsContent value="content" className="space-y-5 mt-0">
                                <div className="space-y-2">
                                    <Label className="text-slate-300 text-sm font-medium">H1 Заголовок</Label>
                                    <Input
                                        value={formData.h1_title || ""}
                                        onChange={(e) => setFormData({ ...formData, h1_title: e.target.value })}
                                        placeholder="Главный заголовок страницы"
                                        className="bg-[#1a1a2e] border-slate-600 text-white placeholder:text-slate-500 focus:border-[#3ce8d1] focus-visible:ring-[#3ce8d1]/20 rounded-lg h-10"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label className="text-slate-300 text-sm font-medium">Основное описание</Label>
                                    <Textarea
                                        value={formData.main_description || ""}
                                        onChange={(e) => setFormData({ ...formData, main_description: e.target.value })}
                                        rows={5}
                                        placeholder="Текст для основного блока страницы..."
                                        className="bg-[#1a1a2e] border-slate-600 text-white placeholder:text-slate-500 focus:border-[#3ce8d1] focus-visible:ring-[#3ce8d1]/20 rounded-lg resize-y min-h-[120px]"
                                    />
                                </div>

                                {/* Popular Searches Section */}
                                <div className="space-y-3 p-4 rounded-xl bg-[#1a1a2e]/50 border border-slate-700/50">
                                    <div className="flex items-center justify-between">
                                        <Label className="text-white font-medium flex items-center gap-2">
                                            <Search className="w-4 h-4 text-[#3ce8d1]" />
                                            Часто ищут ({(formData.popular_searches || []).length})
                                        </Label>
                                    </div>

                                    <div className="flex gap-2">
                                        <Input
                                            value={newSearchTerm}
                                            onChange={(e) => setNewSearchTerm(e.target.value)}
                                            onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addSearchTerm())}
                                            placeholder="Добавить поисковый запрос..."
                                            className="bg-[#0f0f1a] border-slate-600 text-white placeholder:text-slate-500 focus:border-[#3ce8d1] focus-visible:ring-[#3ce8d1]/20 rounded-lg h-9"
                                        />
                                        <Button type="button" onClick={addSearchTerm} size="sm" className="bg-[#3ce8d1] text-[#0f0f1a] hover:bg-[#3ce8d1]/90 h-9 px-3 rounded-lg">
                                            <Plus className="w-4 h-4" />
                                        </Button>
                                    </div>

                                    <div className="flex flex-wrap gap-2 min-h-[32px]">
                                        {(formData.popular_searches || []).length === 0 ? (
                                            <span className="text-slate-500 text-sm">Нет поисковых запросов</span>
                                        ) : (
                                            (formData.popular_searches || []).map((term, idx) => (
                                                <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#3ce8d1]/10 text-[#3ce8d1] text-sm border border-[#3ce8d1]/30">
                                                    {term}
                                                    <button
                                                        type="button"
                                                        onClick={() => removeSearchTerm(idx)}
                                                        className="hover:text-red-400 transition-colors"
                                                    >
                                                        <X className="w-3 h-3" />
                                                    </button>
                                                </span>
                                            ))
                                        )}
                                    </div>
                                </div>
                            </TabsContent>

                            {/* FAQ TAB */}
                            <TabsContent value="faq" className="space-y-4 mt-0">
                                <div className="flex items-center justify-between">
                                    <Label className="text-white font-medium flex items-center gap-2">
                                        <HelpCircle className="w-5 h-5 text-[#3ce8d1]" />
                                        Вопросы и ответы ({(formData.faq || []).length})
                                    </Label>
                                    <Button
                                        type="button"
                                        onClick={addFaq}
                                        size="sm"
                                        className="bg-[#3ce8d1] text-[#0f0f1a] hover:bg-[#3ce8d1]/90 rounded-lg font-medium"
                                    >
                                        <Plus className="w-4 h-4 mr-1" />
                                        Добавить
                                    </Button>
                                </div>

                                <div className="space-y-3">
                                    {(formData.faq || []).length === 0 ? (
                                        <div className="text-center py-8 text-slate-500 bg-[#1a1a2e]/50 rounded-xl border border-dashed border-slate-700">
                                            <HelpCircle className="w-10 h-10 mx-auto mb-2 opacity-40" />
                                            <p className="text-sm">Нет вопросов. Нажмите "Добавить" или примените шаблон.</p>
                                        </div>
                                    ) : (
                                        (formData.faq || []).map((item, idx) => (
                                            <div key={idx} className="p-4 rounded-xl bg-[#1a1a2e] border border-slate-700/50 space-y-3">
                                                <div className="flex items-start justify-between gap-3">
                                                    <div className="flex-1 space-y-2">
                                                        <div className="flex items-center gap-2">
                                                            <span className="w-6 h-6 rounded-full bg-[#3ce8d1]/20 text-[#3ce8d1] text-xs font-bold flex items-center justify-center">{idx + 1}</span>
                                                            <Label className="text-slate-400 text-xs">Вопрос</Label>
                                                        </div>
                                                        <Input
                                                            value={item.question}
                                                            onChange={(e) => updateFaq(idx, 'question', e.target.value)}
                                                            placeholder="Введите вопрос..."
                                                            className="bg-[#0f0f1a] border-slate-600 text-white placeholder:text-slate-500 focus:border-[#3ce8d1] rounded-lg h-9"
                                                        />
                                                    </div>
                                                    <Button
                                                        type="button"
                                                        variant="ghost"
                                                        size="icon"
                                                        onClick={() => removeFaq(idx)}
                                                        className="text-red-400 hover:text-red-300 hover:bg-red-900/20 h-8 w-8 mt-5"
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </Button>
                                                </div>
                                                <div className="space-y-1 pl-8">
                                                    <Label className="text-slate-400 text-xs">Ответ</Label>
                                                    <Textarea
                                                        value={item.answer}
                                                        onChange={(e) => updateFaq(idx, 'answer', e.target.value)}
                                                        placeholder="Введите ответ..."
                                                        rows={2}
                                                        className="bg-[#0f0f1a] border-slate-600 text-white placeholder:text-slate-500 focus:border-[#3ce8d1] rounded-lg resize-none"
                                                    />
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </TabsContent>

                            {/* BANK OFFERS TAB */}
                            <TabsContent value="offers" className="space-y-4 mt-0">
                                <div className="flex items-center justify-between">
                                    <Label className="text-white font-medium flex items-center gap-2">
                                        <Building2 className="w-5 h-5 text-[#3ce8d1]" />
                                        Предложения банков ({(formData.bank_offers || []).length}/9)
                                    </Label>
                                    <Button
                                        type="button"
                                        onClick={addBankOffer}
                                        disabled={(formData.bank_offers || []).length >= 9}
                                        size="sm"
                                        className="bg-[#3ce8d1] text-[#0f0f1a] hover:bg-[#3ce8d1]/90 rounded-lg font-medium disabled:opacity-40"
                                    >
                                        <Plus className="w-4 h-4 mr-1" />
                                        Добавить
                                    </Button>
                                </div>

                                <div className="grid grid-cols-3 gap-3">
                                    {(formData.bank_offers || []).length === 0 ? (
                                        <div className="col-span-3 text-center py-8 text-slate-500 bg-[#1a1a2e]/50 rounded-xl border border-dashed border-slate-700">
                                            <Building2 className="w-10 h-10 mx-auto mb-2 opacity-40" />
                                            <p className="text-sm">Нет предложений. Добавьте до 9 банковских предложений.</p>
                                        </div>
                                    ) : (
                                        (formData.bank_offers || []).map((offer, idx) => (
                                            <div key={idx} className="p-3 rounded-xl bg-[#1a1a2e] border border-slate-700/50 space-y-2 relative group">
                                                <Button
                                                    type="button"
                                                    variant="ghost"
                                                    size="icon"
                                                    onClick={() => removeBankOffer(idx)}
                                                    className="absolute -top-2 -right-2 text-red-400 hover:text-red-300 hover:bg-red-900/30 h-6 w-6 rounded-full bg-[#0f0f1a] border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity"
                                                >
                                                    <X className="w-3 h-3" />
                                                </Button>

                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className="w-5 h-5 rounded bg-[#3ce8d1]/20 text-[#3ce8d1] text-xs font-bold flex items-center justify-center">{idx + 1}</span>
                                                    <span className="text-slate-400 text-xs">Банк</span>
                                                </div>

                                                <Input
                                                    value={offer.bank_name}
                                                    onChange={(e) => updateBankOffer(idx, 'bank_name', e.target.value)}
                                                    placeholder="Название банка"
                                                    className="bg-[#0f0f1a] border-slate-600 text-white placeholder:text-slate-500 focus:border-[#3ce8d1] rounded-lg h-8 text-sm"
                                                />
                                                <Input
                                                    value={offer.rate || ""}
                                                    onChange={(e) => updateBankOffer(idx, 'rate', e.target.value)}
                                                    placeholder="от 5% годовых"
                                                    className="bg-[#0f0f1a] border-slate-600 text-white placeholder:text-slate-500 focus:border-[#3ce8d1] rounded-lg h-8 text-sm"
                                                />
                                                <Input
                                                    value={offer.custom_text || ""}
                                                    onChange={(e) => updateBankOffer(idx, 'custom_text', e.target.value)}
                                                    placeholder="Доп. информация"
                                                    className="bg-[#0f0f1a] border-slate-600 text-white placeholder:text-slate-500 focus:border-[#3ce8d1] rounded-lg h-8 text-sm"
                                                />
                                            </div>
                                        ))
                                    )}
                                </div>
                            </TabsContent>
                        </div>
                    </Tabs>
                </div>

                <DialogFooter className="flex-shrink-0 gap-3 sm:justify-end pt-4 border-t border-slate-700/50">
                    <Button
                        variant="outline"
                        onClick={onClose}
                        className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white h-10 px-5 rounded-xl hover:border-slate-500"
                    >
                        Отмена
                    </Button>
                    <Button
                        onClick={handleSubmit}
                        disabled={!formData.slug?.trim() || isLoading}
                        className="bg-[#3ce8d1] text-[#0f0f1a] font-bold hover:bg-[#3ce8d1]/90 shadow-[0_0_15px_rgba(60,232,209,0.3)] h-10 px-6 rounded-xl border-none"
                    >
                        {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                        Сохранить
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
