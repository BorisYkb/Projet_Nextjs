"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function UpcomingEvents() {
  // Données des événements à venir
  const upcomingEvents = [
    {
      id: 1,
      title: "Heavent Meetings Cannes",
      date: "Du 26 septembre au 28 sept",
      location: "Hotel du Palais Cannes",
      link: "/events/heavent-meetings-cannes"
    }
  ];

  return (
      <div className="bg-gray-200 rounded-lg overflow-hidden dark:bg-gray-800 -mt-25">
          <div className="p-12 md:p-14">
              <h2 className="text-gray-900 text-3xl font-bold dark:text-white mb-6">Événements à venir</h2>

              <div className="space-y-6">
                  {upcomingEvents.map((event) => (
                      <div key={event.id} className="space-y-2">
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{event.title}</h3>
                          <p className="text-gray-900 dark:text-gray-300">{event.date} pour les {event.title} !</p>

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