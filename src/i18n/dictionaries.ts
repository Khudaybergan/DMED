export const dictionaries = {
  uz: {
    header: {
      title: "DMED RAQAMLI KO'RSATKICHLARDA",
      republic: "O'zbekiston Respublikasi",
      ministry: "Sog'liqni saqlash vazirligi",
    },
    keyMetrics: {
      title: "Asosiy ko'rsatkichlar",
      metrics: [
        { label: 'tibbiyot muassasalari' },
        { label: 'kunlik tashriflar' },
        { label: 'elektron tibbiy kartalar' },
        { label: 'tibbiyot xodimlari' },
        { label: 'dorixonalar' },
        { label: 'oylik elektron retseptlar' },
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
            { label: 'AI-yechimlar joriy etilgan'},
            { label: 'patologiyalar qamrab olingan'},
            { label: 'diagnostika holatlari'},
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
                "tor mutaxassislarga o'z vaqtida yo'naltirish",
                "davolash rejasini shakllantirish vaqtini qisqartirish",
                "etalon tashxis bilan mos kelish"
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
                "bitta tadqiqotni qayta ishlash va tahlil qilish",
                "sezgirlikni aniqlashda aniqlik",
                "davolanish boshlangunicha bo'lgan vaqtni qisqartirish"
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
                value: '755 mlrd so‘m',
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
      republic: "Republic of Uzbekistan",
      ministry: "Ministry of Health",
    },
    keyMetrics: {
      title: "Key Metrics",
      metrics: [
        { label: 'medical institutions' },
        { label: 'daily visits' },
        { label: 'electronic medical records' },
        { label: 'medical professionals' },
        { label: 'pharmacies' },
        { label: 'monthly electronic prescriptions' },
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
            { label: 'AI solutions implemented'},
            { label: 'pathologies covered'},
            { label: 'diagnostic cases'},
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
                "timely referral to specialists",
                "reduction in time to form a treatment plan",
                "agreement with the reference diagnosis"
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
                "processing and analysis of one study",
                "accuracy in sensitivity detection",
                "reduction in time to start treatment"
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
      republic: "Республика Узбекистан",
      ministry: "Министерство здравоохранения",
    },
    keyMetrics: {
      title: "Ключевые показатели",
      metrics: [
        { label: 'медицинских учреждений' },
        { label: 'ежедневных посещений' },
        { label: 'электронных медицинских карт' },
        { label: 'медицинских работников' },
        { label: 'аптек' },
        { label: 'ежемесячных электронных рецептов' },
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
            { label: 'внедрено AI-решений'},
            { label: 'охвачено патологий'},
            { label: 'диагностических случаев'},
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
                "своевременное направление к узким специалистам",
                "сокращение времени на формирование плана лечения",
                "совпадение с эталонным диагнозом"
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
                "обработка и анализ одного исследования",
                "точность в определении чувствительности",
                "сокращение времени до начала лечения"
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
