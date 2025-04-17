import EventCard from './EventCard';

export default function PastEvents() {
  // Données des événements passés
  const pastEvents = [
    {
      id: 1,
      title: "Heavent Paris 2024",
      date: "27-28 novembre 2024",
      location: "Paris, France",
      imageSrc: "/events/heavent-paris-2024.jpg",
      link: "/events/heavent-paris-2024"
    },
    {
      id: 2,
      title: "Heavent Paris 2023",
      date: "18-19 novembre 2023",
      location: "Paris, France",
      imageSrc: "/events/heavent-paris-2023.jpg",
      link: "/events/heavent-paris-2023"
    },
    {
      id: 3,
      title: "Conférence européenne de l'UX/UI",
      date: "5-6 juin 2023",
      location: "Amsterdam, Pays-Bas",
      imageSrc: "/events/ux-ui-conference.jpg",
      link: "/events/conference-europeenne-ux-ui"
    },
    {
      id: 4,
      title: "IMEX Francfort",
      date: "15-17 mai 2023",
      location: "Francfort, Allemagne",
      imageSrc: "/events/imex-frankfurt.jpg",
      link: "/events/imex-frankfurt"
    },
    {
      id: 5,
      title: "See You There",
      date: "6-7 avril 2023",
      location: "Bruxelles, Belgique",
      imageSrc: "/events/see-you-there.jpg",
      link: "/events/see-you-there"
    },
    {
      id: 6,
      title: "International Confex",
      date: "1-2 mars 2023",
      location: "Londres, Royaume-Uni",
      imageSrc: "/events/international-confex.jpg",
      link: "/events/international-confex"
    }
  ];

  return (
    <div className='mt-40'>
      <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
        Nous y 
        <span className="bg-gradient-to-r from-green-600 via-yellow-500 to-yellow-400 text-transparent bg-clip-text ml-4">
          étions
        </span>
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pastEvents.map((event) => (
          <EventCard
            key={event.id}
            title={event.title}
            date={event.date}
            location={event.location}
            imageSrc={event.imageSrc}
            link={event.link}
          />
        ))}
      </div>
    </div>
  );
}