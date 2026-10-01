// Central place for all site copy and contact details.
// Fill in the contact fields below — empty values are hidden on the site.

type Contact = { phone: string; whatsapp: string; email: string; address: string };

export const site = {
  name: "Divyottam",
  legalName: "Divyottam Clinical Psychology",
  tagline: "Understand Your Mind. Strengthen Your Life.",
  disciplines: "Clinical Psychology | Psychological Assessment | Counselling & Therapy",
  title: "Divyottam — Clinical Psychology & Psychological Wellness",
  description:
    "Divyottam offers confidential, evidence-based clinical psychology services — psychological assessment, counselling and therapy for adults, children, adolescents and caregivers. Online consultation available.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.divyottam.com",
  locale: "en_IN",
  keywords: [
    "clinical psychologist",
    "clinical psychology",
    "psychological assessment",
    "counselling",
    "therapy",
    "online therapy",
    "online counselling",
    "anxiety",
    "stress",
    "depression",
    "relationship counselling",
    "child psychologist",
    "adolescent counselling",
    "cognitive assessment",
    "IQ assessment",
    "developmental assessment",
    "personality assessment",
    "neuropsychological assessment",
    "caregiver support",
    "mental health",
  ],
  contact: {
    // TODO: add real contact details before going live.
    phone: "", // e.g. "+91 98765 43210"
    whatsapp: "", // digits only with country code, e.g. "919876543210"
    email: "", // e.g. "hello@divyottam.com"
    address: "", // optional; leave empty for online-only
  } as Contact,
} as const;

export const nav = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#approach", label: "Our Approach" },
  { href: "#why-divyottam", label: "Why Us" },
  { href: "#contact", label: "Contact" },
] as const;

export type Service = {
  id: string;
  title: string;
  intro?: string;
  note?: string;
  items: string[];
  accent: "coral" | "lavender" | "sun" | "navy" | "sage";
};

export const services: Service[] = [
  {
    id: "emotional-psychological-concerns",
    title: "Emotional & Psychological Concerns",
    accent: "coral",
    items: [
      "Anxiety and excessive worrying",
      "Persistent stress and emotional exhaustion",
      "Low mood and loss of motivation",
      "Overthinking and difficulty managing emotions",
      "Adjustment difficulties",
      "Self-esteem and confidence concerns",
      "Grief and loss",
      "Emotional regulation difficulties",
    ],
  },
  {
    id: "relationship-interpersonal-concerns",
    title: "Relationship & Interpersonal Concerns",
    accent: "lavender",
    items: [
      "Relationship difficulties",
      "Communication problems",
      "Interpersonal conflicts",
      "Boundaries and attachment-related concerns",
      "Difficulties coping with separation or major life changes",
    ],
  },
  {
    id: "child-adolescent-support",
    title: "Child & Adolescent Psychological Support",
    accent: "sun",
    items: [
      "Behavioural concerns",
      "Emotional difficulties",
      "Academic difficulties",
      "Attention and concentration concerns",
      "Developmental concerns",
      "Social and interpersonal difficulties",
      "Parenting guidance and psychoeducation",
    ],
  },
  {
    id: "psychological-assessment",
    title: "Psychological Assessment",
    accent: "navy",
    intro:
      "Psychological assessment can help provide a structured understanding of an individual's cognitive, emotional, behavioural and personality functioning.",
    note: "Services may include, where clinically indicated:",
    items: [
      "Cognitive assessment",
      "Intellectual functioning assessment",
      "Developmental assessment",
      "Personality assessment",
      "Behavioural assessment",
      "Adaptive functioning assessment",
      "Neuropsychological screening/assessment",
      "Other psychological assessments based on clinical requirements",
    ],
  },
  {
    id: "caregiver-support",
    title: "Caregiver Support",
    accent: "sage",
    intro:
      "Caring for someone with psychological, developmental or behavioural difficulties can be challenging.",
    note: "We provide psychoeducation, emotional support and guidance for caregivers to help them better understand the person's difficulties and develop effective ways of responding.",
    items: [],
  },
];

export const approachSteps = [
  { title: "Listen", text: "Hearing your story in your own words, at your own pace." },
  { title: "Understand", text: "Placing concerns within your personal, family and social context." },
  { title: "Assess", text: "Using structured assessment where clinically indicated." },
  { title: "Intervene", text: "Evidence-based psychological intervention, tailored to you." },
  { title: "Review", text: "Revisiting progress and adjusting the plan together." },
] as const;

export const values = [
  "Confidential",
  "Non-judgmental",
  "Professional",
  "Evidence-informed",
  "Individualised",
  "Respectful of each person's experiences",
] as const;

export const feelings = [
  "You may be functioning at work but struggling internally.",
  "You may be constantly thinking, worrying or replaying situations in your mind.",
  "You may feel emotionally exhausted.",
  "You may be struggling with relationships.",
  "You may notice changes in your child's behaviour or development.",
  "You may be caring for someone else and feel overwhelmed yourself.",
] as const;

export const reasons = [
  {
    title: "Professional Psychological Care",
    text: "Services are structured around clinical psychological principles and appropriate assessment and intervention methods.",
  },
  {
    title: "Individualised Understanding",
    text: "Your concerns are considered within the context of your personal, family, social and developmental history.",
  },
  {
    title: "Confidential Space",
    text: "Your concerns can be discussed in a professional environment where privacy and dignity are respected.",
  },
  {
    title: "Assessment When Needed",
    text: "Where appropriate, psychological assessment can provide additional information to understand cognitive, emotional, personality, developmental or behavioural functioning.",
  },
  {
    title: "Psychoeducation",
    text: "Understanding a psychological concern can help individuals and families make informed decisions about coping, treatment and support.",
  },
] as const;

export const disclaimer =
  "Psychological services are provided within the scope of professional training, applicable ethical standards and relevant regulatory requirements. Online services may not be appropriate for emergencies or situations requiring immediate in-person intervention. In an emergency, seek immediate local emergency or medical assistance.";
