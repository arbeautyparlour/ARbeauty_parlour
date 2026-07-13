/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceItem {
  id: string;
  name: string;
  price: number;
  isStartingPrice?: boolean;
}

export interface ServiceCategory {
  id: string;
  title: string;
  tagline: string;
  services: ServiceItem[];
  note?: string;
}

export interface BookingFormData {
  name: string;
  phone: string;
  services: string[];
  date: string;
  time: string;
  notes: string;
}
