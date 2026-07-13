/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceCategory } from '../types';

export const servicesData: ServiceCategory[] = [
  {
    id: 'brow-lip',
    title: 'Brow & Lip Shaping',
    tagline: 'Perfectly defined, effortlessly elegant',
    services: [
      { id: 'brow-1', name: 'Eyebrow Shaping', price: 30 },
      { id: 'brow-2', name: 'Upper Lip Threading', price: 20 },
    ],
  },
  {
    id: 'waxing',
    title: 'Waxing Rituals',
    tagline: 'Silky smooth skin, the way it should feel',
    services: [
      { id: 'wax-1', name: 'Full Arms', price: 100 },
      { id: 'wax-2', name: 'Half Leg', price: 100 },
      { id: 'wax-3', name: 'Underarms', price: 40 },
      { id: 'wax-4', name: 'Full Body Waxing', price: 1500 },
    ],
  },
  {
    id: 'bleach-glow',
    title: 'Bleach & Glow',
    tagline: 'Instant radiance, visible glow',
    services: [
      { id: 'bleach-1', name: 'VLCC Bleach', price: 150 },
      { id: 'bleach-2', name: 'FYC Bleach', price: 120 },
      { id: 'bleach-3', name: 'Oxy Bleach', price: 150 },
      { id: 'bleach-4', name: 'Golden Glow Bleach', price: 80 },
    ],
  },
  {
    id: 'signature-facials',
    title: 'Signature Facials',
    tagline: 'Nourish. Restore. Glow from within.',
    services: [
      { id: 'facial-1', name: 'Fruit Facial', price: 250 },
      { id: 'facial-2', name: 'Gold Facial', price: 300 },
      { id: 'facial-3', name: 'Diamond Facial', price: 400 },
      { id: 'facial-4', name: 'Ozone Therapy Facial', price: 700 },
      { id: 'facial-5', name: 'Corian Facial', price: 400 },
      { id: 'facial-6', name: 'Aroma Therapy Facial', price: 600 },
      { id: 'facial-7', name: 'Bridal Glow Facial', price: 800, isStartingPrice: true },
    ],
  },
  {
    id: 'deep-cleanups',
    title: 'Deep Cleanups',
    tagline: 'Fresh, clear, radiant skin in minutes',
    services: [
      { id: 'cleanup-1', name: 'Dr. Russian Cleanup', price: 150 },
      { id: 'cleanup-2', name: 'Fruit Cleanup', price: 200 },
    ],
  },
  {
    id: 'body-treatments',
    title: 'Body Treatments',
    tagline: 'Complete pampering, head to toe',
    services: [
      { id: 'body-1', name: 'Manicure & Pedicure', price: 600 },
      { id: 'body-2', name: 'Full Body Spa', price: 2000 },
      { id: 'body-3', name: 'Body Polishing', price: 1500 },
    ],
  },
  {
    id: 'hair-cuts',
    title: 'Signature Hair Cuts',
    tagline: 'Style that speaks for you',
    services: [
      { id: 'cut-1', name: 'Straight Cut', price: 50 },
      { id: 'cut-2', name: 'U-Shape Cut', price: 70 },
      { id: 'cut-3', name: 'V-Shape Cut', price: 100 },
      { id: 'cut-4', name: 'Layer Cut', price: 250 },
    ],
  },
  {
    id: 'hair-therapy',
    title: 'Hair Therapy & Care',
    tagline: 'Revive. Repair. Restore your crown.',
    services: [
      { id: 'therapy-1', name: 'Luxury Hair Spa', price: 1000 },
      { id: 'therapy-2', name: 'Hair Oiling Therapy', price: 250 },
      { id: 'therapy-3', name: 'Dandruff Control Spa', price: 700 },
      { id: 'therapy-4', name: 'Hair Straightening', price: 250 },
      { id: 'therapy-5', name: 'Hair Curling', price: 200 },
    ],
  },
  {
    id: 'hair-colour',
    title: 'Hair Colour Studio',
    tagline: 'Bold shades, lasting shine',
    note: 'Washing charges ₹100 extra',
    services: [
      { id: 'colour-1', name: 'Black', price: 100 },
      { id: 'colour-2', name: 'Brown', price: 100 },
      { id: 'colour-3', name: 'Golden', price: 200 },
    ],
  },
  {
    id: 'bridal-makeup',
    title: 'Bridal Makeup Couture',
    tagline: 'Your special day, flawlessly captured',
    services: [
      { id: 'makeup-1', name: 'Bridal Makeup', price: 4000, isStartingPrice: true },
      { id: 'makeup-2', name: 'Reception Look', price: 3500, isStartingPrice: true },
      { id: 'makeup-3', name: 'Engagement Glam', price: 3000, isStartingPrice: true },
      { id: 'makeup-4', name: 'Side Sister Makeup', price: 800 },
    ],
  },
];
