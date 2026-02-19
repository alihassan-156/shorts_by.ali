
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  // Details are used for listing specific feature points of a service in cards
  details: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Commercial' | 'Social' | 'Short Film';
  thumbnail: string;
  youtubeId: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface WorkflowStep {
  title: string;
  desc: string;
}