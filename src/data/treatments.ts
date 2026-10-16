export type Detalhe =
  | string
  | { titulo?: string; paragrafos?: string[]; itens?: string[] };

export interface Servico {
  nome: string;
  duracao?: string;
  /** Preço exatamente como deve aparecer (ex: "£150"). */
  preco?: string;
  /** Mostra "with Helen" ao lado da duração. */
  helen?: boolean;
  /** Texto curto, sempre visível no card. */
  descricao?: string;
  /** Texto completo, aparece em "More info". */
  detalhes?: Detalhe[];
  /** Lista de preços por opção, aparece em "More info". */
  opcoes?: { label: string; preco: string }[];
  /** Foto (arquivo em /public/...). Opcional. */
  imagem?: string;
  imagemPos?: string;
  imagemPosMobile?: string;
  selo?: string;
}

export interface Categoria {
  id: string;
  titulo: string;
  /** Texto da aba, se for diferente do título. */
  rotulo?: string;
  /** Aviso mostrado acima dos cards da categoria. */
  aviso?: string;
  servicos: Servico[];
}

const s = (
  nome: string,
  duracao: string,
  preco: string,
  extra: Partial<Servico> = {}
): Servico => ({ nome, duracao, preco, ...extra });

// Textos repetidos em vários serviços
const lipsDescricao = "Elevate your smile with our expertly crafted lips treatment.";
const lipsDetalhes: Detalhe[] = [
  "Choose between the Russian or classic lip enhancement styles on the day of your appointment.",
  "Our skilled professionals at Beauty Beneath the Needle Aesthetics will ensure your lips achieve the perfect balance of plumpness and natural beauty.",
];
const pacoteNota = "Not including tear trough or non surgical rhinoplasty";

const fatOpcoes = [
  { label: "Chin", preco: "£60" },
  { label: "Chin + jaw", preco: "£80" },
  { label: "Arms", preco: "£80" },
  { label: "Bra strap", preco: "£120" },
  { label: "Thighs", preco: "£150" },
  { label: "Stomach", preco: "£150" },
];

const polyDescricao =
  "Polynucleotides 9% (90mg/ml) are advanced, Italian-made, DNA-derived injectable biostimulators designed to deeply repair skin, boost collagen/elastin production, and enhance hydration.";
const polyDetalhes: Detalhe[] = [
  "Suitable for all skin types, they target aging, loss of elasticity, and fine lines on the face, neck, and under-eye area, with results lasting up to 6 months.",
  {
    titulo: "Key aspects of LUXIA Polynucleotides",
    itens: [
      "Mechanism: Stimulates fibroblast activity at a cellular level to regenerate tissue, improve firmness, and reduce inflammation.",
      "Treatment protocol: An initial course of 3 treatments spaced 3-6 weeks apart is recommended, with maintenance every 3-6 months.",
      "Application areas: Versatile for use on the face, décolletage, and under-eye area to treat sagging and wrinkles.",
      "Benefits: Deeply hydrates, provides a “glow” effect, improves skin texture, and aids in recovery from other aesthetic procedures.",
    ],
  },
];

/** Nomes (exatamente como nos serviços abaixo) que aparecem na aba "Featured". */
export const destaques: string[] = [
  "Free no obligation consultation",
  "2 Areas",
  "3 Areas",
  "0.5ml lips",
  "Microneedling Facial",
  "Hylamass Aqua Exosome",
];

export const categorias: Categoria[] = [
  {
    id: "consultation",
    titulo: "Consultation",
    servicos: [
      s("Free no obligation consultation", "15 mins", "£10", {
        descricao: "£10 refunded upon arrival to consultation",
      }),
    ],
  },

  {
    id: "dermal-filler",
    titulo: "Dermal Filler",
    servicos: [
      s("Premium filler 1ml any area", "45 mins", "£200", {
        descricao:
          "Experience the versatility of our premium 1ml dermal filler, designed to enhance and rejuvenate your appearance in any area of your choice.",
        detalhes: [
          "Whether you're looking to add volume, smooth fine lines, or create contour, our expert team is here to help you achieve your desired look. Just specify the area you wish to treat in the notes section when booking.",
          "Elevate your beauty with tailored, professional care at Beauty Beneath the Needle Aesthetics.",
        ],
      }),
      s("0.5ml lips", "45 mins", "£85", { descricao: lipsDescricao, detalhes: lipsDetalhes }),
      s("0.7ml lips", "45 mins", "£95", { descricao: lipsDescricao, detalhes: lipsDetalhes }),
      s("1 ml lips", "45 mins", "£120", { descricao: lipsDescricao, detalhes: lipsDetalhes }),
      s("Signature lips", "45 mins", "£150", {
        descricao: "Signature lips are best for lips with little to no filler where possible.",
        detalhes: [
          "They provide maximum height and up to 1.5ml may be used depending on your desired look.",
        ],
      }),
      s("1.1ml lips with dental block", "30 mins", "£200", {
        detalhes: [
          "What is a dental block? A few small injections underneath the top and bottom lip to numb your lips, similarly to when you're at the dentist, enabling us to inject filler without you feeling any discomfort at all.",
          "It takes less than 2 minutes to do and will allow you to sit back and relax whilst we do the hard work.",
        ],
      }),
      s("Chin augmentation", "45 mins", "£120", { helen: true }),
      s("Tear trough (under eyes)", "30 mins", "£150", { helen: true }),
      s("Non surgical rhinoplasty (Nose)", "45 mins", "£200", {
        descricao: "Including a 2 week top up",
      }),
      s("Non surgical rhinoplasty top up for previous clients only", "30 mins", "£120", {
        descricao:
          "One session top up for clients who have previously had their nose done by myself only",
      }),
      s("1.1ml cheeks", "45 mins", "£120", { helen: true }),
      s("1.1ml Jaw enhancement", "45 mins", "£150", { helen: true }),
      s("1.1ml nasolabial fold (nose to mouth)", "45 mins", "£120", { helen: true }),
      s("1.1ml marionette lines (mouth to chin)", "45 mins", "£120", { helen: true }),
      s("Temple filler", "1 hour", "£200", { helen: true }),
      s("Dissolve and refill", "45 mins", "£200", { descricao: "Refill 2 weeks later" }),
      s("2ml package", "1 hour", "£180", { descricao: pacoteNota }),
      s("3ml package", "1 hour", "£260", { descricao: pacoteNota }),
      s("4ml package", "1 hour 30 mins", "£350", { descricao: pacoteNota }),
      s("5ml package", "2 hours", "£430", { descricao: pacoteNota }),
    ],
  },

  {
    id: "filler-dissolving",
    titulo: "Dermal Filler Dissolving",
    rotulo: "Filler Dissolving",
    servicos: [s("Dermal filler dissolving", "1 hour", "£120", { helen: true })],
  },

  {
    id: "antiwrinkle",
    titulo: "Antiwrinkle Injections",
    rotulo: "Antiwrinkle",
    aviso:
      "All antiwrinkle appointments must have a consultation first with my prescriber. Please message to arrange your consultation prior to booking in your antiwrinkle appointment. Thank you.",
    servicos: [
      s("2 week review", "15 mins", "Free", { helen: true }),
      s("1 Area", "30 mins", "£120", {
        descricao:
          "Choose from: Forehead, Frownline, Crowsfeet, Browlift, Bunny lines, DAO, nasal flare",
      }),
      s("2 Areas", "30 mins", "£150", {
        descricao: "Choose from: Forehead, Frownline, Crowsfeet, Browlift, Bunny lines",
      }),
      s("3 Areas", "30 mins", "£180", {
        descricao:
          "Choose from: Forehead, Frownline, Crowsfeet, Browlift, Bunny lines, nose slimming, DAO",
      }),
      s("4 Areas", "30 mins", "£210", { helen: true }),
      s("Brow lift", "30 mins", "£120", { helen: true }),
      s("Lip flip", "30 mins", "£120", { helen: true }),
      s("Masseter / jaw slimming", "30 mins", "£140", { helen: true }),
      s("Hyperhidrosis", "30 mins", "£275", { helen: true }),
    ],
  },

  {
    id: "skin-boosters",
    titulo: "Skin Boosters",
    servicos: [
      s("Baby glow", "30 mins", "£150", {
        descricao:
          "Teosyal Puresense Redensity I is an advanced non-cross-linked hyaluronic acid skin booster designed to deeply hydrate, improve skin elasticity, and restore radiance.",
        detalhes: [
          "Enriched with amino acids, antioxidants, minerals, and vitamin B6, it supports collagen production, cellular regeneration, and overall skin quality for a smoother, firmer, and more youthful complexion.",
        ],
      }),
      s("Hylamass Aqua Exosome", "1 hour", "£80", {
        descricao:
          "Hyalmass Aqua Exosome is an advanced, hybrid skin-booster designed for deep hydration, cellular repair, and long-term skin regeneration.",
        detalhes: [
          "It combines the instant plumping effects of hyaluronic acid with the regenerative, anti-aging properties of plant-derived exosomes and PDRN.",
        ],
      }),
      s("Restylane skin booster", "30 mins", "£150", {
        descricao:
          "Restylane® SKINBOOSTERS™ VITAL with Lidocaine is designed to improve the skin's quality by boosting skin hydration and increasing its smoothness, elasticity and firmness.",
        detalhes: [
          "It contains lidocaine, a powerful anaesthetic, for a more comfortable injection.",
          {
            titulo: "Key features",
            itens: [
              "Clinically proven to enhance 6 key aspects of skin quality for refreshed, healthy, glowing skin.",
              "Immediate, deep, long-lasting hydration.",
              "Based on high-molecular-weight SB-NASHA technology, improving both natural skin structure and hydro-balance.",
              "Hydrates the skin and improves texture and tone.",
            ],
          },
          { titulo: "Treatment areas", itens: ["Face", "Neck", "Décolleté", "Hands", "Arms"] },
        ],
      }),
      s("Profhilo Structura", "30 mins", "£200", {
        descricao:
          "Profhilo Structura is an advanced, injectable hyaluronic acid treatment designed to rejuvenate the face by targeting and lifting the superficial fat layers, rather than just hydrating the skin like traditional Profhilo.",
        detalhes: [
          "It restores lost volume and improves firmness in areas with sagging, such as the cheeks and jawline, offering a “lipolifting” effect without adding artificial volume.",
        ],
      }),
      s("Lumi pro", "30 mins", "£100", {
        descricao:
          "Lumi-Pro is a high-concentration (40mg/2ml) injectable hyaluronic acid skin booster designed to provide intense hydration, stimulate collagen, and improve skin firmness and radiance.",
        detalhes: [
          "It works by injecting, often via the BAP technique (5 points per side), to treat the face, neck, and hands for a glowing, plumped, and firmer appearance.",
          {
            titulo: "Key features and benefits",
            itens: [
              "High hydration: Contains one of the highest concentrations of non-cross-linked hyaluronic acid, aiming for deep, long-lasting moisture.",
              "Rapid results: Visible, radiant, and smoother skin can be seen in as little as 48 hours to 4 weeks.",
              "Versatile application: Suitable for the face, neck, and hands to smooth, plump, and tighten.",
              "Collagen boost: Stimulates elastin and collagen production for improved skin firmness.",
            ],
          },
          {
            titulo: "Treatment details",
            itens: [
              "Protocol: For best results, a course of 2 treatments is recommended, spaced 4 weeks apart.",
              "Maintenance: A top-up session is recommended every 6 months to maintain results.",
            ],
          },
        ],
      }),
      s("Seventy Hyal", "30 mins", "£100", {
        descricao:
          "Seventy Hyal 2000 is a next-generation, bio-stimulating injectable skin booster designed to deliver intense hydration and stimulate collagen/elastin production.",
        detalhes: [
          "Featuring a high molecular weight hyaluronic acid (>2000kDa), it improves skin texture, adds radiance, and reduces fine lines on the face, neck, and hands. A course of 2-3 sessions (4 weeks apart) provides results lasting up to 12 months.",
          {
            titulo: "Key details and benefits",
            itens: [
              "Intense hydration: Replenishes lost hyaluronic acid (HA) for a dewy, glowing complexion.",
              "Biostimulation: Encourages the production of new collagen and elastin, improving skin laxity.",
              "Versatility: Ideal for the face, neck, décolleté, and hands, treating dehydration, fine lines, and uneven texture.",
              "Immediate & long-lasting results: Visible hydration occurs quickly, with optimal results appearing within 2-3 weeks, lasting 6–12 months.",
            ],
          },
        ],
      }),
      s("Profhilo", "30 mins", "£150", {
        descricao:
          "Profhilo is an innovative treatment that boosts the skin by creating a prolonged stimulation of collagen and elastin production with hyaluronic acid.",
        detalhes: [
          "Using the BAP technique encourages the hyaluronic acid to disperse over a larger skin area. The Profhilo treatment properties are rejuvenating and are vital towards anti-ageing.",
          "They have various benefits, such as tightening thin, sagging skin making your skin’s surface luminous and firm. It helps to lift and rejuvenate the cheeks by hydrating and plumping out the skin. As well as, tightening jowls and aiding in collagen and elastin production.",
        ],
      }),
    ],
  },

  {
    id: "chemical-peel",
    titulo: "Chemical Peel",
    servicos: [
      s("The perfect peel booster", "5 mins", "£50", { helen: true }),
      s("The Perfect Peel", "30 mins", "£150", {
        descricao:
          "The Perfect Peel® is a revolutionary medium-depth peel that will transform the skin into looking younger, healthier and clearer in just one week.",
        detalhes: [
          "It works from the inside to repair and nourish the skin, refine pores, improve skin hyperpigmentation, lift melasma, diminish fine lines and wrinkles, improving acne and acne marks.",
          "The Perfect Peel® blends Glutathione, Kojic Acid, TCA, Retinoic Acid, Salicylic Acid, Phenol, L-Ascorbic Acid with minerals and vitamins, resulting in skin that is brighter and tighter.",
          "To follow The Perfect Peel, you are given an individual home kit. This pack contains Retinol wipes and a Vitamin C moisturiser to assist the peeling process and enhance your results.",
        ],
      }),
      s("BioRePeelCI3", "30 mins", "£45", {
        descricao:
          "TCA 35% chemical peel BioRePeel is a two-phase medical peel designed for bio-stimulation, revitalization, and exfoliation.",
        detalhes: [
          "It utilizes a patented technology to address various skin concerns like aging, acne, and scarring. The peel promotes cell turnover, stimulates collagen production, and improves skin texture and appearance. It's suitable for all skin types and can be used on the face, neck, and décolleté.",
          "Recommended weekly for 6 sessions.",
        ],
      }),
    ],
  },

  {
    id: "polynucleotides",
    titulo: "Polynucleotides",
    servicos: [
      s("Neck", "1 hour", "£150", { descricao: polyDescricao, detalhes: polyDetalhes }),
      s("Hands", "1 hour", "£150", { descricao: polyDescricao, detalhes: polyDetalhes }),
      s("Face", "1 hour", "£150", { descricao: polyDescricao, detalhes: polyDetalhes }),
      s("Under eyes", "30 mins", "£100", { descricao: polyDescricao, detalhes: polyDetalhes }),
    ],
  },

  {
    id: "sculptra",
    titulo: "Sculptra",
    servicos: [
      s("Sculptra one vial", "45 mins", "£250", {
        descricao:
          "Experience the art of rejuvenation with our Sculptra service, designed to enhance your natural beauty.",
        detalhes: [
          "Each vial of Sculptra works to stimulate collagen production, helping restore volume and improve skin texture over time. This treatment is ideal for those looking to achieve a fresher, more youthful appearance. It is perfect to provide lift smooth fine lines and wrinkles and form the skin.",
          "A minimum of two sessions are required 6 weeks apart however 3 sessions has optimal results.",
        ],
      }),
    ],
  },

  {
    id: "fat-dissolving",
    titulo: "Fat Dissolving",
    servicos: [
      s("Slim nose procedure", "30 mins", "£150", { descricao: "To slim the nose tip" }),
      s("Lipo lab", "30 mins", "From £45", { opcoes: fatOpcoes }),
      s("Aqualyx", "30 mins", "From £45", { opcoes: fatOpcoes }),
      s("Lemon Bottle", "30 mins", "From £45", { opcoes: fatOpcoes }),
    ],
  },

  {
    id: "prp",
    titulo: "Platelet-Rich Plasma (PRP)",
    rotulo: "PRP",
    servicos: [
      s("Under Eyes", "1 hour", "£120", { helen: true }),
      s("Vampire facial (Microneedling using PRP)", "1 hour", "£120", {
        descricao: "A vampire facial is a combination of microneedling and platelet-rich plasma (PRP).",
        detalhes: [
          "Microneedling uses short, fine needles to puncture the skin. These needles range in size from .5 to 2.5 millimeters. Rest assured, the needles feel like tiny pinpricks and only go skin-deep. The pricks are used to “injure” the skin, prompting your skin to heal itself by producing elastin and collagen, and allowing the PRP to penetrate deeper.",
          "There are many benefits to the vampire facial, including boosting the turnover of skin cells, improving skin tone and texture. Microneedling with PRP will also reduce fine lines and signs of aging. This treatment can be especially helpful for those who suffered from acne and have visible acne scars or skin damage from prolonged exposure to the sun.",
        ],
      }),
      s("PRP hair rejuvenation", "1 hour", "£120", {
        descricao:
          "Platelet-rich plasma (PRP) is a non-surgical procedure for hair regrowth, best used for treating thinning hair and slowing or stopping the progression of hair loss.",
        detalhes: [
          "PRP treatment can tackle both male/female pattern baldness and alopecia as it encourages the growth of existing hair follicles, making your hair appear fuller and healthier without resorting to surgery. It is therefore the most natural way to stimulate hair growth.",
          {
            titulo: "Why choose PRP?",
            paragrafos: [
              "Hair loss is generally caused by a lack of cell renewal in the scalp – which makes PRP the perfect treatment as it stimulates the production of new healthy cells. It is a simple and totally natural. PRP provides safe and reliable results and has a very quick recovery period.",
              "Only a small amount of blood is taken as though you are having your routine blood testing and local anesthesia is used, so you experience very minimal discomfort. PRP Hair treatments provides effective results with high success rate.",
            ],
          },
        ],
      }),
    ],
  },

  {
    id: "microneedling",
    titulo: "Microneedling Facial",
    servicos: [
      s("Microneedling Facial", "30 mins", "£50", { helen: true }),
      s("Stretch marks and scarring", "30 mins", "£80", { helen: true }),
      s("LED light therapy", "10 mins", "£10", {
        descricao:
          "Improved skin texture and tone: The combination of red, infrared, and blue light wavelengths helps to stimulate collagen production, reduce the appearance of fine lines and wrinkles, and promote smoother, more even skin.",
        detalhes: [
          {
            itens: [
              "Acne reduction: Blue light targets acne-causing bacteria on the skin's surface, helping to reduce inflammation and prevent breakouts. This can lead to clearer, healthier-looking skin over time.",
              "Enhanced skin healing: Infrared light penetrates deeper into the skin, promoting blood circulation and accelerating the body's natural healing processes. This can help to speed up the recovery of wounds, scars, and other skin imperfections.",
              "Anti-aging effects: Red light therapy stimulates collagen production, which can help to firm and tighten the skin, reduce the appearance of sagging, and improve overall skin elasticity. This can result in a more youthful, rejuvenated complexion.",
            ],
          },
        ],
      }),
      s("Add exosome mask", "5 mins", "£10", { helen: true }),
      s("Add jelly mask", "5 mins", "£10", { helen: true }),
      s("Add Lumi Glow", "5 mins", "£20", { helen: true }),
      s("Add Lumi Tox", "5 mins", "£20", { helen: true }),
      s("Add Stayve peptide", "5 mins", "£20", {
        descricao:
          "Stayve Peptide Gold is a premium serum designed to reduce wrinkles, improve skin elasticity, and promote skin regeneration.",
        detalhes: [
          "Formulated with natural peptides and adenosine, known as the “botox peptide,” this product deeply penetrates the skin to deliver transformative results.",
        ],
      }),
      s("Add Stayve Salmon DNA", "5 mins", "£20", {
        descricao:
          "Stayve Salmon DNA Gold Ampoule is a specialised serum formulated with Polynucleotides derived from Salmon DNA.",
        detalhes: [
          "This advanced treatment helps reverse the visible signs of ageing and improves the appearance of scars. It rejuvenates dead skin cells, brightens the skin, and promotes an even complexion.",
        ],
      }),
      s("Add exosomes", "5 mins", "£30", {
        descricao:
          "Dermaren Elixom is an advanced skin revitalisation product designed to improve skin hydration, elasticity, and texture.",
        detalhes: [
          "Its innovative formula promotes skin regeneration, making it ideal for addressing signs of ageing, including wrinkles, fine lines, and dullness.",
          "The unique composition of Dermaren Elixom combines high-quality ingredients to deeply hydrate and revitalise the skin. Suitable for a range of aesthetic treatments, it ensures a safe and effective solution for improving skin health and appearance.",
          {
            titulo: "Key features",
            itens: [
              "Deeply hydrates and revitalises the skin",
              "Improves skin elasticity and texture",
              "Reduces the appearance of wrinkles and fine lines",
              "Promotes skin regeneration for a youthful glow",
            ],
          },
        ],
      }),
    ],
  },

  {
    id: "facial",
    titulo: "Facial",
    servicos: [
      s("Dermaplaning", "30 mins", "£30", { helen: true }),
      s("Hydrafacial", "1 hour", "£50", { helen: true }),
    ],
  },

  {
    id: "vitamin-injections",
    titulo: "Vitamin Injections",
    servicos: [
      s("NAD+", "15 mins", "£40", {
        descricao: "Nicotinamide Adenine Dinucleotide (NAD) is a coenzyme central to metabolism.",
        detalhes: [
          "It is found in every cell in your body and is essential for creating cellular energy and maintaining cellular health. NAD levels decline with age, resulting in, and affecting the health status in aging.",
          "One injection a week for 4 weeks then one monthly is the recommended dose.",
        ],
      }),
      s("Vitamin D3", "15 mins", "£30", { helen: true }),
      s("Vitamin C", "15 mins", "£25", {
        descricao:
          "Vitamin C, also known as ascorbic acid, is an essential nutrient that contributes to the body functioning properly.",
        detalhes: [
          "Vitamin C has a positive impact on fatigue, tiredness, skin pigmentation, allergy resistance and can help to lower hypertension, and even help to prevent against heart disease. Vitamin C is also an antioxidant, meaning that it can neutralise free radicals that can damage cells on a genetic level. This vitamin is widely considered as a natural defence against the common cold and an immune booster.",
        ],
      }),
      s("Biotin", "15 mins", "£25", { helen: true }),
      s("Vitamin B Complex", "15 mins", "£25", {
        detalhes: [
          "The Lipotropic B-Complex Formula contains 8 B-Vitamins to help boost the metabolism, assist in weight loss, help to improve skin, hair and nails, help to support the normal function of the nervous system and gastrointestinal tract. Lipotropic injections include a combination of the following important amino acids and vitamins.",
          "B1 Thiamine: Thiamine, also known as vitamin B1 is a water-soluble vitamin that is required for the proper metabolism of starch and sugar in order to provide energy to the body. Thiamine also plays an integral role in nerve function. Thiamine plays an essential role in metabolism, by converting nutrients into energy.",
          "B2 Riboflavin: Riboflavin is mainly involved in energy metabolism and helps the thyroid function properly. Vitamin B2 aids in weight loss by releasing the unused energy in the body and preventing unused energy from turning into fat. Vitamin B2 is crucial for the metabolism of fats, proteins, and carbohydrates. Riboflavin helps convert food into energy.",
        ],
      }),
      s("B12 Injection", "15 mins", "£25", { helen: true }),
    ],
  },

  {
    id: "radio-frequency",
    titulo: "Radio Frequency",
    servicos: [
      s("Face", "30 mins", "£50", { helen: true }),
      s("Body", "30 mins", "£50", { helen: true }),
    ],
  },
];