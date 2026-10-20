/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PainTriageTool } from './components/PainTriageTool';
import { ServicesBento } from './components/ServicesBento';
import { DoctorBio } from './components/DoctorBio';
import { TouristCare } from './components/TouristCare';
import { Reviews } from './components/Reviews';
import { FaqSection } from './components/FaqSection';
import { LocationContact } from './components/LocationContact';
import { AppointmentModal } from './components/AppointmentModal';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCondition, setSelectedCondition] = useState<string>('');

  const handleOpenBooking = (condition?: string) => {
    setSelectedCondition(condition || 'Severe Toothache / Abscess');
    setIsModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA] text-slate-800 selection:bg-teal-700 selection:text-white">
      {/* 3-Zone Top Navigation Contract */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Page Flow */}
      <main className="flex-1 pb-16 md:pb-0">
        {/* 1. High-Impact Hero with 4-Column KPI Trust Strip */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 2. Interactive Three.js 3D Tooth & Clinical Pain Triage */}
        <PainTriageTool onOpenBooking={(symptom) => handleOpenBooking(symptom)} />

        {/* 3. Comprehensive Services Bento Grid with Protocol Modals */}
        <ServicesBento onOpenBooking={(serviceTitle) => handleOpenBooking(serviceTitle)} />

        {/* 4. Verified Doctor Bios: Dr. Anthony Oswick & Dr. Maria Kashlak */}
        <DoctorBio />

        {/* 5. Theme Park & Tourist Care (Disney, Universal, SeaWorld) */}
        <TouristCare onOpenBooking={() => handleOpenBooking('Theme Park / Tourist Accident')} />

        {/* 6. Verified Patient Reviews & Attributions */}
        <Reviews />

        {/* 7. Patient First-Aid & FAQ Accordion */}
        <FaqSection />

        {/* 8. Location & Office Hours with Direct Maps Link */}
        <LocationContact onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Professional Footer */}
      <Footer />

      {/* Mobile Sticky CTA Bar (<15% viewport height) */}
      <MobileStickyBar onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Appointment & Triage Modal */}
      <AppointmentModal
        isOpen={isModalOpen}
        onClose={handleCloseBooking}
        preselectedCondition={selectedCondition}
      />
    </div>
  );
}
