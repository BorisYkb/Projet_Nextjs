"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function UpcomingEvents() {
  // Données des événements à venir
  const upcomingEvents = [
    {
      id: 1,
      title: "Assemblée Générale de la Société Générale de Côte d'Ivoire",
      date: "Du 20 Mai 2025",
      location: "Hotel du Palais Cannes",
      link: "/events/heavent-meetings-cannes"
    }
  ];

  return (
      <div className="bg-gray-200 rounded-lg overflow-hidden dark:bg-gray-800 -mt-25 ml-15 mr-15">
          <div className="p-12 ml-20 mr-20 md:p-14">
              <h2 className="text-gray-900 text-3xl font-bold dark:text-white mb-6">Événements à venir</h2>

              <div className="space-y-6">
                  {upcomingEvents.map((event) => (
                      <div key={event.id} className="space-y-2">
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{event.title}</h3>
                          <p className="text-gray-900 dark:text-gray-300">{event.date} pour l' {event.title} !</p>

                          <Link href={event.link}>
                              <span className="inline-block mt-2 px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-md transition-colors">
                                  Inscrivez-vous ici
                              </span>
                          </Link>
                      </div>
                  ))}
              </div>
          </div>
      </div>
  );
}