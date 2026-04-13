export const dictionaries = {
  uz: {
    header: {
      title: "DMED RAQAMLI KO'RSATKICHLARDA",
      ministry: [
        "O'ZBEKISTON RESPUBLIKASI",
        "SOG'LIQNI SAQLASH VAZIRLIGI"
      ],
    },
    keyMetrics: {
      title: "Asosiy ko'rsatkichlar",
      metrics: [
        { value: '> 4 000', label: 'tibbiyot muassasalari', dataPointForAI: 'Over 4,000 medical institutions' },
        { value: '~ 1 mln', label: 'kunlik tashriflar', dataPointForAI: 'About 1 million daily visits' },
        { value: '38 mln', label: 'elektron tibbiy kartalar', dataPointForAI: '38 million electronic medical records' },
        { value: '> 260 000', label: 'tibbiyot xodimlari', dataPointForAI: 'Over 260,000 medical professionals' },
        { value: '> 18 000', label: 'dorixonalar', dataPointForAI: 'Over 18,000 pharmacies' },
        { value: '~ 500 000', label: 'oylik elektron retseptlar', dataPointForAI: 'About 500,000 electronic prescriptions monthly' },
      ],
    },
    patientBenefits: {
        title: "Aholi va shifokorlar uchun qulayliklar",
        subtitle: "Bemorlar uchun",
        benefits: [
            "Shifokor qabuliga onlayn yozilish",
            "Tahlil natijalarini ko'rish",
            "Elektron tibbiy hujjatlar",
            "Davolanish va retseptlarni nazorat qilish",
            "Oila salomatligi monitoringi"
        ]
    },
    doctorBenefits: {
        title: "Aholi va shifokorlar uchun qulayliklar",
        subtitle: "Shifokorlar uchun",
        benefits: [
            "320 dan ortiq shakl va jurnallar raqamlashtirildi",
            "Kutish vaqtini qisqartirish: 40 daqiqadan 10 daqiqagacha",
            "Onlayn maslahatlar",
            "Aholining yagona hisobi",
            "Bemorning shaffof tarixi",
            "Avtomatlashtirilgan hisobotlar"
        ]
    },
    aiOverview: {
        title: "SUN'IY INTELLEKT",
        stats: [
            { value: '> 7', label: 'AI-yechimlar joriy etilgan', dataPointForAI: 'Over 7 AI solutions implemented' },
            { value: '14', label: 'patologiyalar qamrab olingan', dataPointForAI: '14 pathologies covered' },
            { value: '> 20 000', label: 'diagnostika holatlari', dataPointForAI: 'Over 20,000 diagnostic cases processed' },
        ]
    },
    aiSolutions: {
        title: "AI-yechimlar namunalari",
        top3dss: {
            title: "AI TOP3-DSS",
            subtitle: "Tezroq tashxis qo'yish uchun klinik qarorlarni intellektual qo'llab-quvvatlash",
            features: [
                "Ishonch darajalari bilan ehtimoliy tashxisning TOP3 variantini tanlash",
                "Klinik protokollar bo'yicha tayinlovlar",
                "Tahlillar va tekshiruvlar bo'yicha tavsiyalar"
            ],
            results: [
                { value: '+20%', text: "tor mutaxassislarga o'z vaqtida yo'naltirish" },
                { value: '10 dan 3 minutgacha', text: "davolash rejasini shakllantirish vaqtini qisqartirish" },
                { value: '>85%', text: "etalon tashxis bilan mos kelish" }
            ]
        },
        stroke: {
            title: "AI STROKE",
            subtitle: "Insult patologiyasini aniqlash, tasniflash va baholash uchun KT va MRT tahlili uchun sun'iy intellekt",
            features: [
                "KT orqali tez aniqlash va tasniflash",
                "ASPECTS shkalasi va gematoma hajmini avtomatik baholash",
                "Tashxis uchun kamroq vaqt, qarorlar aniqligi yuqori"
            ],
            results: [
                { value: '< 2 min', text: "bitta tadqiqotni qayta ishlash va tahlil qilish" },
                { value: '95-97%', text: "sezgirlikni aniqlashda aniqlik" },
                { value: '15-25 min', text: "davolanish boshlangunicha bo'lgan vaqtni qisqartirish" }
            ]
        }
    },
    keyResults: {
        title: "ASOSIY NATIJALAR",
        subtitle: "Sog'liqni saqlashni raqamlashtirishning asosiy natijalari",
        results: [
            {
                title: 'ИТ тизимлар учун ортиқча бюджет харажатларининг олди олинди',
                value: '265 mlrd so‘m',
                subValue: '($21,2 mln.)',
                description: '2022–2023 йилларда 528 млрд сўм ($42,2 млн.)',
            },
            {
                title: 'Инфратузилма харажатлари қисқартирилди',
                value: '32 mlrd so‘m',
                subValue: '($2,5 mln.)',
            },
            {
                title: 'Қоғоз ҳужжат айланмаси харажатлари бартараф этилди',
                value: '42 mlrd so‘m',
                subValue: '($3,3 mln.)',
            },
            {
                title: '359 минг нафар тиббиёт ходими ўқитилди',
                value: 'Бюджет маблағлари жалб этилмасдан',
                subValue: 'иқтисод: 78,9 mlrd so‘m ($6,3 млн.)',
            },
            {
                title: 'Маблағлардан мақсадли фойдаланиш ва шаффофлик таъминланди',
                value: '755 mlrd so‘м',
                subValue: '($60,4 mln.)',
            }
        ]
    },
    modules: {
        title: "DMED PLATFORMASI MODULLARI",
        core: {
            title: "DMED",
            subtitle: "Modullar",
        },
        modules: [
            'Poliklinika',
            'Statsionar',
            'Laboratoriya',
            'Radiologiya',
            'Dorixona',
            'Ombor',
            "KPI ko'rsatkichlari",
            'Tahlil',
            'Mobil ilova',
        ],
        description: "DMED — sog'liqni saqlash tizimining yagona raqamli platformasi bo'lib, barcha asosiy tibbiy va boshqaruv modullarini yagona ekotizimga birlashtiradi."
    },
    aiExplainer: {
        dialog: {
            title: "Kontekstli tushuntirish",
            description: `"{dataPoint}" uchun sun'iy intellekt yordamida tushuntirish olish uchun auditoriyani tanlang.`,
            audienceLabel: "Auditoriya",
            audiencePlaceholder: "Auditoriyani tanlang",
            audiences: {
                medical: "Tibbiyot xodimi",
                government: "Davlat xizmatchisi",
                public: "Keng jamoatchilik"
            },
            buttonText: "Yaratish",
            errorTitle: "Xatolik"
        },
        buttonTooltip: "AI yordamida tushuntirish"
    },
    fullscreen: {
        enter: "To'liq ekran rejimi",
        exit: "To'liq ekrandan chiqish"
    },
    languageSwitcher: {
        changeLanguage: "Tilni o'zgartirish",
        languages: {
            uz: "O'zbekcha",
            en: "English",
            ru: "Русский"
        }
    }
  },
  en: {
    header: {
      title: "DMED IN DIGITAL INDICATORS",
      ministry: [
        "MINISTRY OF HEALTH OF THE",
        "REPUBLIC OF UZBEKISTAN"
      ],
    },
    keyMetrics: {
      title: "Key Metrics",
      metrics: [
        { value: '> 4,000', label: 'medical institutions', dataPointForAI: 'Over 4,000 medical institutions' },
        { value: '~ 1 million', label: 'daily visits', dataPointForAI: 'About 1 million daily visits' },
        { value: '38 million', label: 'electronic medical records', dataPointForAI: '38 million electronic medical records' },
        { value: '> 260,000', label: 'medical professionals', dataPointForAI: 'Over 260,000 medical professionals' },
        { value: '> 18,000', label: 'pharmacies', dataPointForAI: 'Over 18,000 pharmacies' },
        { value: '~ 500,000', label: 'monthly electronic prescriptions', dataPointForAI: 'About 500,000 electronic prescriptions monthly' },
      ],
    },
    patientBenefits: {
        title: "Conveniences for Public and Doctors",
        subtitle: "For Patients",
        benefits: [
            "Online doctor appointment",
            "Access to test results",
            "Electronic medical records",
            "Control over treatment and prescriptions",
            "Family health monitoring"
        ]
    },
    doctorBenefits: {
        title: "Conveniences for Public and Doctors",
        subtitle: "For Doctors",
        benefits: [
            "Over 320 forms and journals digitized",
            "Waiting time reduced from 40 to 10 minutes",
            "Online consultations",
            "Unified population registry",
            "Transparent patient history",
            "Automated reports"
        ]
    },
    aiOverview: {
        title: "ARTIFICIAL INTELLIGENCE",
        stats: [
            { value: '> 7', label: 'AI solutions implemented', dataPointForAI: 'Over 7 AI solutions implemented' },
            { value: '14', label: 'pathologies covered', dataPointForAI: '14 pathologies covered' },
            { value: '> 20,000', label: 'diagnostic cases', dataPointForAI: 'Over 20,000 diagnostic cases processed' },
        ]
    },
    aiSolutions: {
        title: "Examples of AI Solutions",
        top3dss: {
            title: "AI TOP3-DSS",
            subtitle: "Intelligent clinical decision support for faster diagnosis",
            features: [
                "Selection of TOP3 probable diagnoses with confidence levels",
                "Appointments based on clinical protocols",
                "Recommendations for analyses and examinations"
            ],
            results: [
                { value: '+20%', text: "timely referral to specialists" },
                { value: 'from 10 to 3 min', text: "reduction in time to form a treatment plan" },
                { value: '>85%', text: "agreement with the reference diagnosis" }
            ]
        },
        stroke: {
            title: "AI STROKE",
            subtitle: "AI analysis of CT and MRI for detection, classification, and assessment of stroke pathology",
            features: [
                "Fast detection and classification via CT",
                "Automatic assessment of ASPECTS scale and hematoma volume",
                "Less time for diagnosis, higher decision accuracy"
            ],
            results: [
                { value: '< 2 min', text: "processing and analysis of one study" },
                { value: '95-97%', text: "accuracy in sensitivity detection" },
                { value: '15-25 min', text: "reduction in time to start treatment" }
            ]
        }
    },
    keyResults: {
        title: "KEY RESULTS",
        subtitle: "Key results of healthcare digitalization",
        results: [
            {
                title: 'Prevented excess budget expenditures for IT systems',
                value: '265 bln UZS',
                subValue: '($21.2 mln.)',
                description: 'in 2022–2023: 528 bln UZS ($42.2 mln.)',
            },
            {
                title: 'Reduced infrastructure costs',
                value: '32 bln UZS',
                subValue: '($2.5 mln.)',
            },
            {
                title: 'Eliminated paper document circulation costs',
                value: '42 bln UZS',
                subValue: '($3.3 mln.)',
            },
            {
                title: 'Trained 359,000 medical workers',
                value: 'Without involving budget funds',
                subValue: 'savings: 78.9 bln UZS ($6.3 mln.)',
            },
            {
                title: 'Ensured targeted use of funds and transparency',
                value: '755 bln UZS',
                subValue: '($60.4 mln.)',
            }
        ]
    },
    modules: {
        title: "DMED PLATFORM MODULES",
        core: {
            title: "DMED",
            subtitle: "Modules",
        },
        modules: [
            'Polyclinic',
            'Inpatient',
            'Laboratory',
            'Radiology',
            'Pharmacy',
            'Warehouse',
            'KPI Indicators',
            'Analytics',
            'Mobile App',
        ],
        description: "DMED is a unified digital platform for the healthcare system, integrating all key medical and management modules into a single ecosystem."
    },
    aiExplainer: {
        dialog: {
            title: "Contextual Explanation",
            description: `Select an audience to get an AI-powered explanation for "{dataPoint}".`,
            audienceLabel: "Audience",
            audiencePlaceholder: "Select audience",
            audiences: {
                medical: "Medical Professional",
                government: "Government Official",
                public: "General Public"
            },
            buttonText: "Generate",
            errorTitle: "Error"
        },
        buttonTooltip: "Explain with AI"
    },
    fullscreen: {
        enter: "Fullscreen mode",
        exit: "Exit fullscreen"
    },
    languageSwitcher: {
        changeLanguage: "Change language",
        languages: {
            uz: "O'zbekcha",
            en: "English",
            ru: "Русский"
        }
    }
  },
  ru: {
    header: {
      title: "DMED В ЦИФРОВЫХ ПОКАЗАТЕЛЯХ",
      ministry: [
        "МИНИСТЕРСТВО ЗДРАВООХРАНЕНИЯ",
        "РЕСПУБЛИКИ УЗБЕКИСТАН"
      ],
    },
    keyMetrics: {
      title: "Ключевые показатели",
      metrics: [
        { value: '> 4 000', label: 'медицинских учреждений', dataPointForAI: 'Over 4,000 medical institutions' },
        { value: '~ 1 млн', label: 'ежедневных посещений', dataPointForAI: 'About 1 million daily visits' },
        { value: '38 млн', label: 'электронных медицинских карт', dataPointForAI: '38 million electronic medical records' },
        { value: '> 260 000', label: 'медицинских работников', dataPointForAI: 'Over 260,000 medical professionals' },
        { value: '> 18 000', label: 'аптек', dataPointForAI: 'Over 18,000 pharmacies' },
        { value: '~ 500 000', label: 'ежемесячных электронных рецептов', dataPointForAI: 'About 500,000 electronic prescriptions monthly' },
      ],
    },
    patientBenefits: {
        title: "Удобства для населения и врачей",
        subtitle: "Для пациентов",
        benefits: [
            "Онлайн-запись к врачу",
            "Просмотр результатов анализов",
            "Электронные медицинские документы",
            "Контроль лечения и рецептов",
            "Мониторинг здоровья семьи"
        ]
    },
    doctorBenefits: {
        title: "Удобства для населения и врачей",
        subtitle: "Для врачей",
        benefits: [
            "Оцифровано более 320 форм и журналов",
            "Сокращение времени ожидания: с 40 до 10 минут",
            "Онлайн-консультации",
            "Единый учет населения",
            "Прозрачная история пациента",
            "Автоматизированные отчеты"
        ]
    },
    aiOverview: {
        title: "ИСКУССТВЕННЫЙ ИНТЕЛЛЕКТ",
        stats: [
            { value: '> 7', label: 'внедрено AI-решений', dataPointForAI: 'Over 7 AI solutions implemented' },
            { value: '14', label: 'охвачено патологий', dataPointForAI: '14 pathologies covered' },
            { value: '> 20 000', label: 'диагностических случаев', dataPointForAI: 'Over 20,000 diagnostic cases processed' },
        ]
    },
    aiSolutions: {
        title: "Примеры AI-решений",
        top3dss: {
            title: "AI TOP3-DSS",
            subtitle: "Интеллектуальная поддержка принятия клинических решений для быстрой диагностики",
            features: [
                "Выбор ТОП3 вариантов вероятного диагноза с уровнями уверенности",
                "Назначения по клиническим протоколам",
                "Рекомендации по анализам и обследованиям"
            ],
            results: [
                { value: '+20%', text: "своевременное направление к узким специалистам" },
                { value: 'с 10 до 3 мин', text: "сокращение времени на формирование плана лечения" },
                { value: '>85%', text: "совпадение с эталонным диагнозом" }
            ]
        },
        stroke: {
            title: "AI STROKE",
            subtitle: "ИИ-анализ КТ и МРТ для выявления, классификации и оценки патологии инсульта",
            features: [
                "Быстрое выявление и классификация по КТ",
                "Автоматическая оценка по шкале ASPECTS и объема гематомы",
                "Меньше времени на диагноз, выше точность решений"
            ],
            results: [
                { value: '< 2 мин', text: "обработка и анализ одного исследования" },
                { value: '95-97%', text: "точность в определении чувствительности" },
                { value: '15-25 мин', text: "сокращение времени до начала лечения" }
            ]
        }
    },
    keyResults: {
        title: "ОСНОВНЫЕ РЕЗУЛЬТАТЫ",
        subtitle: "Основные результаты цифровизации здравоохранения",
        results: [
            {
                title: 'Предотвращены излишние бюджетные расходы на ИТ-системы',
                value: '265 млрд сум',
                subValue: '($21,2 млн.)',
                description: 'за 2022–2023 гг.: 528 млрд сум ($42,2 млн.)',
            },
            {
                title: 'Сокращены расходы на инфраструктуру',
                value: '32 млрд сум',
                subValue: '($2,5 млн.)',
            },
            {
                title: 'Устранены расходы на бумажный документооборот',
                value: '42 млрд сум',
                subValue: '($3,3 млн.)',
            },
            {
                title: 'Обучено 359 тысяч медицинских работников',
                value: 'Без привлечения бюджетных средств',
                subValue: 'экономия: 78,9 млрд сум ($6,3 млн.)',
            },
            {
                title: 'Обеспечено целевое использование средств и прозрачность',
                value: '755 млрд сум',
                subValue: '($60,4 млн.)',
            }
        ]
    },
    modules: {
        title: "МОДУЛИ ПЛАТФОРМЫ DMED",
        core: {
            title: "DMED",
            subtitle: "Модули",
        },
        modules: [
            'Поликлиника',
            'Стационар',
            'Лаборатория',
            'Радиология',
            'Аптека',
            'Склад',
            'Показатели KPI',
            'Аналитика',
            'Мобильное приложение',
        ],
        description: "DMED — единая цифровая платформа системы здравоохранения, объединяющая все ключевые медицинские и управленческие модули в единую экосистему."
    },
    aiExplainer: {
        dialog: {
            title: "Контекстное объяснение",
            description: `Выберите аудиторию, чтобы получить объяснение для "{dataPoint}" с помощью искусственного интеллекта.`,
            audienceLabel: "Аудитория",
            audiencePlaceholder: "Выберите аудиторию",
            audiences: {
                medical: "Медицинский работник",
                government: "Государственный служащий",
                public: "Широкая общественность"
            },
            buttonText: "Сгенерировать",
            errorTitle: "Ошибка"
        },
        buttonTooltip: "Объяснить с помощью ИИ"
    },
    fullscreen: {
        enter: "Полноэкранный режим",
        exit: "Выйти из полноэкранного режима"
    },
    languageSwitcher: {
        changeLanguage: "Сменить язык",
        languages: {
            uz: "O'zbekcha",
            en: "English",
            ru: "Русский"
        }
    }
  },
};

export type Dictionary = typeof dictionaries.uz;

    